import React from 'react';
import './Dashboard.css'; // You can create your own stylesheet

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      
      <div className="widget">
        <h2>Widget 1</h2>
        <p>Widget content goes here.</p>
      </div>

      <div className="widget">
        <h2>Widget 2</h2>
        <p>Widget content goes here.</p>
      </div>

      <div className="widget">
        <h2>Widget 3</h2>
        <p>Widget content goes here.</p>
      </div>
    </div>
  );
};

export default Dashboard;
