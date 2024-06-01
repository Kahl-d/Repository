import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };

    return (
        <div>
            <h1>Landing Page</h1>
            <button onClick={goToHome}>Go to Home</button>
        </div>
    );
}

export default LandingPage;
