// src/Login.js
import React, { useState } from "react";
import "./css/login.css"; // Ensure your styles are in place
import { useNavigate } from "react-router-dom";

function Login({ closeModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let isLogin=false;
  const Navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (username=='admin' && password=='admin') {
        isLogin=true;
      Navigate('/admin',{state:{username:username,isLogin:isLogin}});
    }

    setError("");
    alert("Logged in successfully!");

    // Here, you would typically send login data to your backend API
  };

  return (
    <div className="modal-overlay">
      <div className="login-container modal-content">
        <button onClick={closeModal} className="close-modal">
          &times;
        </button>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
