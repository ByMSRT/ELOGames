import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";


export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
}