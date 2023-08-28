import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import profileImage from '../../assets/profile.png';

const Dashboard = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    profileImage: profileImage,
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <h1>Bress</h1>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/dashboard">
                <i className="fas fa-chart-line"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <i className="fas fa-tasks"></i> Projects
              </Link>
            </li>
            <li>
              <Link to="/purchase">
                <i className="fas fa-clipboard-list"></i> Purchase
              </Link>
            </li>
            <li>
              <Link to="/services">
                <i className="fas fa-cogs"></i> Services
              </Link>
            </li>
            <li>
              <Link to="/notifications">
                <i className="fas fa-bell"></i> Notifications
              </Link>
            </li>
            <li>
              <Link to="/chat">
                <i className="fas fa-comments"></i> Chat
              </Link>
            </li>
            <li>
              <Link to="/logout">
                <i className="fas fa-sign-out-alt"></i> Logout
              </Link>
            </li>
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
            <div className="profile-image">
              <img src={user.profileImage} alt="Profile" />
            </div>
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
