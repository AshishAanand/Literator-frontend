import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "./useAuth.ts";

export function ProtectedRoute() {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) return null; // or spinner

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
