

import { Image } from 'react-bootstrap';
import logo from '../assets/Images/logo.png';
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    
    <div className="container">
      {/* Login Card */}
      <div className="Login-form">
      <div className="login-card">
        {/* Left Section - Form */}
        <div className="left-section">
          <div className="logo-container">
            <Image src={logo} alt="Logo" className="form-logo" />
          </div>
          <h1 className="title">Thrive360</h1>
          <h2 className="subtitle">Sign in</h2>

          <form className="form">
            <label>Email</label>
            <input type="email" placeholder="Enter Email" className="input" />

            <label>Password</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="input"
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

            <a href="#" className="forgot-password">Forgot Password?</a>
            <button className="sign-in-btn" onClick={() => navigate("/Profile")}>
      Sign in
    </button>
          </form>

          <p className="signup-text">
           {" Don't have an account?"} <a href="/SignUp" className="signup-link">Sign up</a>
          </p>
        </div>

       
          
         
         
         
        
        
      </div>
      </div>

  

  </div>
  
  
);
};

export default SignIn;