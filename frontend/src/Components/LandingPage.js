import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './lp.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };

    const onLoginClick = () => {
        fetch('http://127.0.0.1:5000/test') // Replace with your Flask backend endpoint
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data here
                console.log(data);
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching data:', error);
            });
    }


    return (
        <div id="landingContainer">
            <h1 className='landingItem'>Welcome to TAEEP</h1>
            <div className='landingItem'>
                <h2>Login</h2>
                <form id="loginSection">
                    <input type="text" placeholder="Username" autoComplete='email' />
                    <input type="password" placeholder="Password" autoComplete='current-password' />
                    <button 
                    onClick={onLoginClick}
                    type="button">
                        Login
                    </button>
                </form>
            </div>
            <button className='landingItem' onClick={goToHome}>Go to Home</button>
        </div>
    );
}

export default LandingPage;
