import React from 'react';
import { useNavigate } from 'react-router-dom';
import './lp.css'; 

const LandingPage = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };

    return (
        <div id="landingContainer">
            <h1 className='landingItem'>Welcome to TAEEP</h1>
            <div id="loginSection" className='landingItem'>
                <h2>Login</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </div>
            <button className='landingItem' onClick={goToHome}>Go to Home</button>
        </div>
    );

}

export default LandingPage;