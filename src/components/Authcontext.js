// // import React, { createContext, useState, useContext, useEffect } from 'react';

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //     const [isLoggedIn, setIsLoggedIn] = useState(false);

// //     useEffect(() => {
// //         const storedLoginState = localStorage.getItem('isLoggedIn');
// //         if (storedLoginState === 'true') {
// //             setIsLoggedIn(true);
// //         }
// //     }, []);

// //     const login = () => {
// //         localStorage.setItem('isLoggedIn', 'true');
// //         setIsLoggedIn(true);
// //     };

// //     const logout = () => {
// //         localStorage.removeItem('isLoggedIn');
// //         setIsLoggedIn(false);
// //     };

// //     return (
// //         <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // };

// // export const useAuth = () => useContext(AuthContext);
// import React, { createContext, useState, useContext, useEffect } from 'react';
// import users from "../assests/users.json"; // Adjust the path as needed
// import fs from 'fs';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         const storedLoginState = localStorage.getItem('isLoggedIn');
//         const storedUser = localStorage.getItem('currentUser');
//         if (storedLoginState === 'true' && storedUser) {
//             setIsLoggedIn(true);
//             setCurrentUser(JSON.parse(storedUser));
//         }
//     }, []);

//     const login = (email, password) => {
//         const user = users.find(user => user.email === email && user.password === password);
//         if (user) {
//             localStorage.setItem('isLoggedIn', 'true');
//             localStorage.setItem('currentUser', JSON.stringify(user));
//             setIsLoggedIn(true);
//             setCurrentUser(user);
//         } else {
//             alert('Invalid email or password');
//         }
//     };

//     const logout = () => {
//         localStorage.removeItem('isLoggedIn');
//         localStorage.removeItem('currentUser');
//         setIsLoggedIn(false);
//         setCurrentUser(null);
//     };

//     const updateUser = (updatedUser) => {
//         const userIndex = users.findIndex(user => user.email === updatedUser.email);
//         if (userIndex !== -1) {
//             users[userIndex] = updatedUser;
//             fs.writeFileSync('../path/to/userData.json', JSON.stringify(users, null, 2));
//             localStorage.setItem('currentUser', JSON.stringify(updatedUser));
//             setCurrentUser(updatedUser);
//         }
//     };

//     return (
//         <AuthContext.Provider value={{ isLoggedIn, currentUser, login, logout, updateUser }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const storedLoginState = localStorage.getItem('isLoggedIn');
        const storedUser = localStorage.getItem('currentUser');
        if (storedLoginState === 'true' && storedUser) {
            setIsLoggedIn(true);
            setCurrentUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify(user));
            setIsLoggedIn(true);
            setCurrentUser(user);
        } else {
            alert('Invalid email or password');
        }
    };

    const logout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        setIsLoggedIn(false);
        setCurrentUser(null);
    };

    const updateUser = (updatedUser) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(user => user.email === updatedUser.email);
        if (userIndex !== -1) {
            users[userIndex] = updatedUser;
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(updatedUser));
            setCurrentUser(updatedUser);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, currentUser, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
