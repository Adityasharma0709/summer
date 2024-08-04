import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/Authcontext';

const PublicRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
