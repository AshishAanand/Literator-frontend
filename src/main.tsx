// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './styles/index.css'
// import App from './app/App.tsx'
// import { BrowserRouter } from "react-router-dom"
//
// createRoot(document.getElementById('root')!).render(
//     <BrowserRouter>
//       <StrictMode>
//         <App />
//       </StrictMode>
//     </BrowserRouter>
// )

import React from 'react';
import './styles/index.css'
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';
import { AuthProvider } from './features/auth/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
