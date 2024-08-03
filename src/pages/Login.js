// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, logout } from '../redux/action';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.isAuthenticated);
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     dispatch(login(username, password));
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/'); // Redirect to homepage after login
//     }
//   }, [isAuthenticated, navigate]);

//   return (
//     <div>
//       {isAuthenticated ? (
//         <div>
//           <h2>Welcome, {username}</h2>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h2>Login</h2>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;
