// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to our Car Business</h1>
            <p>Explore the latest car models and information about the car industry.</p>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/car-info">Car Information</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;
