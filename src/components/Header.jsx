// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../10.png';
import '../App.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/car-info">Car Information</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
