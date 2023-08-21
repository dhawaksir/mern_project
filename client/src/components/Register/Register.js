import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleRegister = async () => {
    try {
      // Basic form validation
      if (!name || !email || !password) {
        setRegistrationStatus('Please fill in all fields');
        return;
      }

      // Simulate a registration process (replace with actual API call)
      const response = await fetch('your_registration_api_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        setRegistrationStatus('Registration successful');
      } else {
        setRegistrationStatus('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setRegistrationStatus('An error occurred');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-header">Join Us!</h2>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="register-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="register-input"
          placeholder="Choose a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-button" onClick={handleRegister}>Register</button>
        <p className="registration-status">{registrationStatus}</p>
        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link> {/* Use Link component */}
        </p>
      </div>
    </div>
  );
};

export default Register;
