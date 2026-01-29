import Home from "../pages/landing/LandingPage.tsx"
import { Routes, Route } from "react-router-dom"
import RegisterPage from "../pages/auth/Register.tsx";
import LoginPage from "../pages/auth/Login.tsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </>
    );
};

export default App;