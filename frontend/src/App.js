import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './Components/LoginPage';

// Define the Home component inside App to ensure useNavigate is used correctly
const App = () => {
  const Home = () => {
    const navigate = useNavigate();

    const takeToLogin = () => {
      navigate('/login');
    };

    return (
      <div>
        <h1>Home</h1>
        <button onClick={takeToLogin}>Go to Login</button>
      </div>
    );
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Add additional Routes here as needed */}
      </Routes>
    </div>
  );
};

export default App;
