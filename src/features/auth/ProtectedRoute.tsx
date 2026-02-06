import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "./useAuth.ts";
import {BottomNavigation} from "../../components/layouts/bottom-nav.tsx";

export function ProtectedRoute() {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) return null; // or spinner

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="min-h-screen pb-16">
            {/* Page content */}
            <Outlet />

            {/* Bottom nav only for protected routes */}
            <BottomNavigation />
        </div>
    );
}
