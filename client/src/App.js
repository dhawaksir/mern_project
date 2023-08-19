import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';

import Login from './components/log/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={Register} />
        {/* Other routes */}
        </Routes>
    </Router>
  );
}

export default App;
