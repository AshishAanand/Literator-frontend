import { createContext } from 'react';

export type User = {
    name: string;
    email: string;
    username: string;
    password: string;
    bio: string;
};

export type LoginPayload = {
    email: string;
    password: string;
};

export type SignupPayload = {
    name: string;
    username: string;
    email: string;
    password: string;
    bio?: string | null;
};


export type AuthContextType = {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    setUser: (user: User) => void;

    login: (data: LoginPayload) => Promise<void>;
    signup: (data: SignupPayload) => Promise<void>;
    logout: () => Promise<void>;
};


export const AuthContext = createContext<AuthContextType | null>(null);