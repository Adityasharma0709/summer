import React from 'react';
import { useAuth } from '../components/Authcontext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
