import React from 'react';
import { BrowserRouter as Router, Routes  } from 'react-router-dom';

import Login from './components/log/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
     <Routes>
        <Route path="/login" component={<Login />} />
        <Route path="/register" component={Register} />
        {/* Other routes */}
        </Routes>
    </Router>
  );
}

export default App;
