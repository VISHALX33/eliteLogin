import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/login" element={<AuthForm type="login" />} />
        <Route path="/register" element={<AuthForm type="register" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<AuthForm type="login" />} />
      </Routes>
    </Router>
  );
}

export default App;