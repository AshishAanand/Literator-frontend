import React, { useEffect, useMemo, useState } from 'react';
import {AuthContext, type LoginPayload, type SignupPayload} from './auth.context';
import type { User } from './auth.context';
import { instance as axios } from '../../lib/axios';

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // ✅ AUTH RULE: token = authenticated
    const isAuthenticated = !!accessToken;

    /* ----------------------------- */
    /* Axios interceptor (token) */
    /* ----------------------------- */
    useEffect(() => {
        const interceptor = axios.interceptors.request.use((config) => {
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        });

        return () => axios.interceptors.request.eject(interceptor);
    }, [accessToken]);

    /* ----------------------------- */
    /* App initialization (refresh) */
    /* ----------------------------- */
    useEffect(() => {
        async function initAuth() {
            try {
                const res = await axios.post('auth/refresh', {}, { withCredentials: true });
                const { access_token } = res.data;

                setAccessToken(access_token);

                const userRes = await axios.get('user/me', {
                    headers: { Authorization: `Bearer ${access_token}` },
                });

                setUser(userRes.data);
            } catch {
                setAccessToken(null);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        }

        initAuth();
    }, []);

    /* ----------------------------- */
    /* Auth actions */
    /* ----------------------------- */

    const login = async ({email, password}: LoginPayload) => {
        const res = await axios.post('auth/login', { email, password });
        const { access_token } = res.data;

        setAccessToken(access_token);

        const userRes = await axios.get('user/me', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        setUser(userRes.data);
    };

    const signup = async (data: SignupPayload) => {
        // 1️⃣ Register
        await axios.post('auth/register', data);

        // 2️⃣ Auto-login
        const loginRes = await axios.post('auth/login', {
            email: data.email,
            password: data.password,
        });

        const { access_token } = loginRes.data;

        setAccessToken(access_token);

        // 3️⃣ Fetch user
        const userRes = await axios.get('user/me', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        setUser(userRes.data);
    };

    const logout = async () => {
        try {
            await axios.post('auth/logout');
        } finally {
            setAccessToken(null);
            setUser(null);
        }
    };

    /* ----------------------------- */
    /* Context value */
    /* ----------------------------- */
    const contextValue = useMemo(
        () => ({
            user,
            accessToken,
            isAuthenticated,
            isLoading,
            setUser,
            login,
            signup,
            logout,
        }),
        [user, accessToken, isAuthenticated, isLoading]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
