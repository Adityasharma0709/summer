import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/Authcontext';
import PrivateRoute from './components/PrivatetRouter';
import PublicRoute from './components/PublicRouter';
import Login from './pages/Login';
import Home from './pages/home';
import Contact from './pages/contact';
import Profile from './pages/profile';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/login" element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        } />
                        <Route path="/home" element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        } />
                        <Route path="/contact" element={
                            <PrivateRoute>
                                <Contact />
                            </PrivateRoute>
                        } />
                        <Route path="/account" element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        } />
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="*" element={<Navigate to="/home" />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
