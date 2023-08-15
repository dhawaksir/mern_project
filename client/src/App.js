import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/log/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
