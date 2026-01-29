import { createBrowserRouter } from 'react-router-dom';
import { PublicRoute } from '../features/auth/PublicRoute.tsx';
import { ProtectedRoute } from '../features/auth/ProtectedRoute.tsx';

import Landing from '../pages/landing/LandingPage.tsx';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Profile from '../pages/profile/page';
import Dashboard from '../pages/dashboard/page';
import CollectionsPage from "../pages/collections/page.tsx";
import Work from "../pages/works/page.tsx";

export const router = createBrowserRouter([
    {
        element: <PublicRoute />,
        children: [
            { path: '/', element: <Landing /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
        ],
    },
    {
        element: <ProtectedRoute />,
        children: [
            { path: '/profile', element: <Profile /> },
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/collections', element: <CollectionsPage /> },
            {path: '/works', element: <Work/>}
        ],
    },
]);
