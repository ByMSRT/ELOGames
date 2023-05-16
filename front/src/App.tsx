import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

function App() {
    return (
        <CookiesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    );
}

export default App;
