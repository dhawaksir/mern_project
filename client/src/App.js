import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './components/log/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard'; // Import your Dashboard component

function App() {
  const [authenticated, setAuthenticated] = useState(false); // Use state to manage authentication status

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        {/* Protected dashboard route */}
        <Route path="/dashboard" element={authenticated ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
