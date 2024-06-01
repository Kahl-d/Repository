import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import LandingPage from './Components/LandingPage'; // Import LandingPage if it's part of App's structure
import Home from './Components/Home'; // Import Home if it's part of App's structure

const App = () => {
    return (
        <div id="appContainer">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
