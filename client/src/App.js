import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './components/log/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Purchase from './components/Dashboard/Purchase/Purchase'; // Correct path


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/purchase" element={<Purchase />} /> {/* Use the Purchase component */}
      </Routes>
    </Router>
  );
}

export default App;
