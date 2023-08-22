import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'; // Make sure the path to your CSS file is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password') {
      navigate('/dashboard');
    } else {
      console.log('Incorrect login credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-header">Login Page</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <p className="register-toggle">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
