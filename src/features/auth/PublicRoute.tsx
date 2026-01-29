import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './useAuth.ts';

export function PublicRoute() {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) return null;

    if (isAuthenticated) {
        return <Navigate to="/profile" replace />;
    }

    return <Outlet />;
}
