import { useEffect, useState, useMemo } from 'react';
import { AuthContext } from "./auth.context.ts";
import type { User } from "./auth.context.ts";
import axios from 'axios';
import React from 'react';

// Configure axios defaults for credentials (to send/receive cookies)
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8080'; // Adjust to your API URL

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const isAuthenticated = !!accessToken && !!user;

    // 1. AXIOS INTERCEPTOR
    // Automatically injects the memory-stored accessToken into every request
    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use((config) => {
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        });

        // Cleanup interceptor on unmount
        return () => axios.interceptors.request.eject(requestInterceptor);
    }, [accessToken]);

    // 2. SILENT REFRESH (Initialization)
    // Runs once when the app loads to check if a valid Refresh Cookie exists
    useEffect(() => {
        async function initializeAuth() {
            try {
                // Call refresh endpoint to exchange the HttpOnly cookie for a new Access Token
                const res = await axios.post('/api/v1/auth/refresh');

                const { access_token } = res.data;
                setAccessToken(access_token);

                // Fetch user data using the new token
                // (Note: the interceptor above will handle the header for this call)
                const userRes = await axios.get('/api/v1/user/me', {
                    headers: { Authorization: `Bearer ${access_token}` }
                });
                setUser(userRes.data);
            } catch (err) {
                console.warn("Session expired or no refresh token found.");
                console.error(err);
                setAccessToken(null);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        }

        initializeAuth();
    }, []);

    // 3. AUTH ACTIONS
    // Memoize the context value to prevent unnecessary re-renders
    const contextValue = useMemo(() => ({
        user,
        accessToken,
        isAuthenticated,
        isLoading,
        setUser,
        setAccessToken,
        logout: async () => {
            try {
                await axios.post('/api/v1/auth/logout');
            } finally {
                setAccessToken(null);
                setUser(null);
            }
        }
    }), [user, accessToken, isAuthenticated, isLoading]);

    return (
        <AuthContext.Provider value={contextValue}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
}
