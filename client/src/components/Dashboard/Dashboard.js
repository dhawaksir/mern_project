import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <img src="logo.png" alt="Company Logo" />
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#tasks">Tasks</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#notifications">Notifications</a></li>
            <li><a href="#chat">Chat</a></li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <header className="dashboard-header">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="profile">
            <img src="profile.jpg" alt="Profile" />
            <span>Welcome, John Doe</span>
          </div>
        </header>
        <section className="dashboard-section">
          {/* Content for the Dashboard section */}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
