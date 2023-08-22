import React from 'react';
import './Dashboard.css'; // Import your CSS for the dashboard

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* <div className="sidebar">
        <h2>Dashboard</h2>
        <ul className="menu">
          <li className="menu-item">Home</li>
          <li className="menu-item">Analytics</li>
          <li className="menu-item">Reports</li>
          <li className="menu-item">Settings</li>
        </ul>
      </div> */}
      <div className="content">
        <h1>Welcome to the Dashboard</h1>
        <p>Your data at a glance</p>
      </div>
    </div>
  );
};

export default Dashboard;
