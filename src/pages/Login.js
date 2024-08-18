// import React, { useState } from "react";
// import { useAuth } from "../components/Authcontext";
// import { useNavigate } from "react-router-dom";
// import Heading from "../components/heading";
// import Contact from "../components/contact";
// import "../css/Login.css";
// import Logo from "../assests/Login in page image.png";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email && password) {
//       login();
//       navigate("/home");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="top1">
//         <div className="topP">
//           <Heading />
//         </div>
//         <div className="topP">
//           <Contact />
//         </div>
//       </div>
//       <div className="format">
//         <div
//           style={{
//             display: "flex",
//             border: "solid rgb(217, 195, 191)",
//             width: "50%",
//             height: "70%",
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "rgb(201, 192, 177) ",
//               display: "flex",
//               alignItems: "flex-end",
//               width: "50%",
//               justifyContent: "center",
//             }}
//           >
//             <img src={Logo} alt="logo" />
//           </div>
//           <div className="form-content">
//             <div className="form-group" ><h2>Login</h2>
//             <h5>Welcome back !!</h5></div>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Email:</label>
//                 <br />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Password:</label>
//                 <br />
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//             <div style={{width:"100%", display:"flex", alignItems:"center"}}>
//               <button className="form-group"
//                 style={{
//                   padding: "5px 20px",
//                   border: "none",
//                   fontSize: "18px",
//                   borderRadius: "20px",
//                   backgroundColor: "rgb(201, 192, 177) ",
//                   fontWeight:"lighter"
//                 }}
//                 type="submit"
//               >
//                 Login
//               </button>
//             </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useAuth } from "../components/Authcontext";
import { useNavigate } from "react-router-dom";
import Heading from "../components/heading";
import Contact from "../components/contact";
import "../css/Login.css";
import Logo from "../assests/Login in page image.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <div className="top1">
        <div className="topP">
          <Heading />
        </div>
        <div className="topP">
          <Contact />
        </div>
      </div>
      <div className="format">
        <div
          style={{
            display: "flex",
            border: "solid rgb(217, 195, 191)",
            width: "50%",
            height: "70%",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(201, 192, 177) ",
              display: "flex",
              alignItems: "flex-end",
              width: "50%",
              justifyContent: "center",
            }}
          >
            <img src={Logo} alt="logo" />
          </div>
          <div className="form-content">
            <div className="form-group">
              <h2>Login</h2>
              <h5>Welcome back !!</h5>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <br />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <br />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                <button
                  className="form-group"
                  style={{
                    padding: "5px 20px",
                    border: "none",
                    fontSize: "18px",
                    borderRadius: "20px",
                    backgroundColor: "rgb(201, 192, 177) ",
                    fontWeight: "lighter",
                  }}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
