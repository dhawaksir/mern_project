import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Replace these with actual data from registration
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    profileImage: 'profile.jpg',
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <h1>Bress</h1>
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
            <i className="fas fa-search"></i>
          </div>
          <div className="profile">
            <div className="profile-info">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
            <img src={user.profileImage} alt="Profile" />
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
