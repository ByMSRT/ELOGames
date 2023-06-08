import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import { Profile } from '../pages/Profile';
import Register from '../pages/Register';
import ShopPage from '../pages/Shop';
import BasketShop from '../pages/BasketShop';
import { useState, useEffect } from 'react';
import { getUser } from '../CRUD/user';
import { IProfile } from '../utils/types';

import SidebarDashboard from '../components/shared/SidebarDashboard';
import Dashboard from '../pages/Dashboard';
import AdaptativeTab from '../components/pages/AdaptativeTab';

export const AppRouter = () => {
  const isAuthenticated = sessionStorage.getItem('tokenSession');

  const [profile, setProfile] = useState<IProfile>();

  const isAdmin = async () => {
    const profile = await getUser();
    setProfile(profile);
    return profile?.isAdmin;
  };

  return (
    <BrowserRouter>
      <Routes>
        {
          // Privates routes
          isAuthenticated && (
            <>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/admin" element={<SidebarDashboard />}>
                <Route path="" element={<Dashboard />}></Route>
                <Route
                  path="clients"
                  element={<AdaptativeTab type="clients" />}
                ></Route>
                <Route
                  path="bills"
                  element={<AdaptativeTab type="bills" />}
                ></Route>
                <Route
                  path="games"
                  element={<AdaptativeTab type="games" />}
                ></Route>
              </Route>
            </>
          )
        }
        {/* Public routes */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/basket_shop" element={<BasketShop />}></Route>
        <Route path="/" element={<Navigate to="/shop" replace />} />

        {/* If not authentificated redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
