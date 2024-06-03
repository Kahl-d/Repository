import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './lp.css';

const LandingPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };

    const onLoginClick = (e) => {
        e.preventDefault();  // Prevent default form submission behavior
        console.log('Username:', username);
        console.log('Password:', password);

        fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle successful login (e.g., navigate to another page)
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error (e.g., show error message)
        });
    };

    return (
        <div id="landingContainer">
            <h1 className='landingItem'>Welcome to TAEEP</h1>
            <div className='landingItem'>
                <h2>Login</h2>
                <form id="loginSection">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        autoComplete='email'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        autoComplete='current-password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
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
