import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login";
import {Profile} from "../pages/Profile";
import Register from "../pages/Register";
import ShopPage from '../pages/Shop';

export const AppRouter = () => {

    const isAuthenticated = sessionStorage.getItem('tokenSession')

    return ( 
        <BrowserRouter>
            <Routes>
                {
                    // Privates routes
                    isAuthenticated && (
                        <>
                            <Route path="/profile" element={<Profile />}></Route> 
                        </>
                    )
                }
                {/* Public routes */}
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>    
                <Route path='/shop' element={<ShopPage />} />

                {/* If not authentificated redirect to login */}
                <Route path='*' element={<Navigate to='/login' replace />} />
            </Routes>
        </BrowserRouter>
    )

}
