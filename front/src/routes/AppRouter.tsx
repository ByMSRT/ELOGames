import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login";
import {Profile} from "../pages/Profile";
import Register from "../pages/Register";
import ShopPage from '../pages/Shop';
import BasketShop from '../pages/BasketShop'
import { useState, useEffect } from "react"
import { getUser } from "../CRUD/user"
import { IProfile } from "../utils/types"


export const AppRouter = () => {

    const isAuthenticated = sessionStorage.getItem('tokenSession')

    const [profile, setProfile] = useState<IProfile>();

    const isAdmin = async () => {
        const profile = await getUser();
        setProfile(profile);
        return profile?.isAdmin
    }
    
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
                {
                    //TODO : add admin routes
                    // isAuthenticated && isAdmin && (
                    //     <>
                    //         <Route path="/admin" element={<Profile />}></Route> 
                    //     </>
                    // )
                }
                {/* Public routes */}
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>    
                <Route path='/shop' element={<ShopPage />} />
                <Route path="/basket_shop" element={<BasketShop />}></Route> 
                <Route path='/' element={<Navigate to='/shop' replace />} />

                {/* If not authentificated redirect to login */}
                <Route path='*' element={<Navigate to='/login' replace />} />
            </Routes>
        </BrowserRouter>
    )

}
