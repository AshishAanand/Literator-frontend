import { useState } from 'react'
import {Link} from 'react-router-dom'
import { AuthInput } from '../../components/ui/auth-input'
import { AuthButton } from '../../components/ui/auth-button'
import { useNavigate } from 'react-router-dom'
import {instance as axios} from '../../lib/axios' // your configured axios instance
import { useAuth } from '../../features/auth/useAuth'


export default function LoginPage() {

    const navigate = useNavigate()
    const { setUser } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

    const handleSubmit = async () => {
        setErrors({})

        if (!email) {
            setErrors({ email: 'Email is required' })
            return
        }

        if (!password) {
            setErrors({ password: 'Password is required' })
            return
        }

        try {
            setIsLoading(true)

            const res = await axios.post('/auth/login', {
                email,
                password,
            })

            const { access_token } = res.data

            // Store token
            localStorage.setItem('access_token', access_token)

            // Fetch user
            const userRes = await axios.get('/user/me', {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            })

            // Update auth state
            setUser(userRes.data)

            // Redirect
            navigate('/profile', { replace: true })

        } catch (err: any) {
            if (err.status === 401) {
                setErrors({ email: 'Email is required' })
                setErrors({ password: 'Password is required' })
            }
        } finally {
            setIsLoading(false)
        }
    }



    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center space-y-3 mb-12">
                    <Link to="/" className="inline-block">
                        <h1 className="font-serif text-3xl font-light tracking-tight hover:text-primary transition-colors">
                            Literator
                        </h1>
                    </Link>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Welcome back. Your words are waiting.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-card rounded-xl border border-border/30 p-8 shadow-sm">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }} className="space-y-6">
                        <AuthInput
                            name="email"
                            id="email"
                            type="email"
                            label="Email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setErrors({})
                            }}
                            error={errors.email}
                            autoComplete="email"
                        />

                        <AuthInput
                            name="password"
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setErrors({})
                            }}
                            error={errors.password}
                            autoComplete="current-password"
                        />

                        <AuthButton type="submit" isLoading={isLoading} disabled={isLoading}>
                            Sign In
                        </AuthButton>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border/30"></div>
                        </div>
                    </div>

                    {/* Register Link */}
                    <p className="text-center text-sm text-muted-foreground">
                        Don't have an account?{' '}
                        <Link
                            to="/register"
                            className="text-primary hover:underline font-medium transition-colors"
                        >
                            Register
                        </Link>
                    </p>
                </div>

                {/* Footer Note */}
                <p className="text-center text-xs text-muted-foreground mt-8">
                    This is a demo. No data is collected or stored.
                </p>
            </div>
        </div>
    )
}
