import { Navigate, Outlet } from 'react-router-dom';
import { BottomNavigation } from '../components/layouts/bottom-nav';
import { useAuth } from '../features/auth/useAuth.ts';

export function ProtectedLayout() {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) return null; // or a loader

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
