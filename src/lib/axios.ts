import axios from 'axios'

export const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true, // needed for refresh tokens (cookies)
})

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

let isRefreshing = false
let failedQueue: any[] = []

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) prom.reject(error)
        else prom.resolve(token)
    })
    failedQueue = []
}

instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({
                        resolve: (token: string) => {
                            originalRequest.headers.Authorization = `Bearer ${token}`
                            resolve(instance(originalRequest))
                        },
                        reject,
                    })
                })
            }

            originalRequest._retry = true
            isRefreshing = true

            try {
                const res = await instance.post('/auth/refresh')
                const newAccessToken = res.data.access_token

                localStorage.setItem('access_token', newAccessToken)
                instance.defaults.headers.Authorization = `Bearer ${newAccessToken}`
                processQueue(null, newAccessToken)

                return instance(originalRequest)
            } catch (err) {
                processQueue(err, null)
                localStorage.removeItem('access_token')
                window.location.href = '/login'
                return Promise.reject(err)
            } finally {
                isRefreshing = false
            }
        }

        return Promise.reject(error)
    }
)
