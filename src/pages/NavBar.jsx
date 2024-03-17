// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';


//links on navbar
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/car-info">Car Information</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
