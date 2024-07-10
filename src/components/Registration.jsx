import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
  };

  return (
    <div className="registration">
      <span className="registrationTitle">Register</span>
      <form className="registrationForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registrationInput"
          type="text"
          placeholder="Enter your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registrationInput"
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registrationInput"
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password</label>
        <input
          className="registrationInput"
          type="password"
          placeholder="Confirm your password..."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="registrationButton">
          Register
        </button>
      </form>
      <div className="registrationLinks">
        <Link to="/login" className="loginLink">
          Already have an account? Login here
        </Link>
      </div>
    </div>
  );
}
