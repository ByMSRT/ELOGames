import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Shop from "../pages/Shop"
import Login from "../pages/Login"
import { Profile } from "../pages/Profile"
import Register from "../pages/Register"

export const AppRouter = () => {

    

    const isAuthenticated = sessionStorage.getItem('tokenSession')

    // if (!isAuthenticated) {
    //     return <Navigate to="/login" />
    // }

    console.log(isAuthenticated);
    

    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/shop" element={<Shop />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
    )

}
