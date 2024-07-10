import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import coachingImage from '../images/KSVS.jpg';
import './login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="loginContainer">
      <div className="loginFormContainer">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password?
          </Link>
          <button type="submit" className="loginButton">
            Login
          </button>
        </form>
        <div className="loginLinks">
          <Link to="/register" className="registerLink">
            New User? Register Here
          </Link>
        </div>
      </div>
      <div className="loginImageContainer">
      <img src={coachingImage} alt="coaching" />
      </div>
    </div>
  );
}
