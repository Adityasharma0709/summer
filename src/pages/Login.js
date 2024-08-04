import React, { useState } from "react";
import { useAuth } from "../components/Authcontext";
import { useNavigate } from "react-router-dom";
import Heading from "../components/heading";
import Contact from "../components/contact";
import "../css/Login.css";
import Logo from "../assests/Login in page image.png"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login();
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
        <div style={{display:"flex", border:"solid", width:"50%", height:"70%"}}>
        <div style={{backgroundColor:"rgb(201, 192, 177) ", display:"flex", alignItems:"flex-end", width:"50%", justifyContent:"center" }}><img src={Logo} alt="logo"/></div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
