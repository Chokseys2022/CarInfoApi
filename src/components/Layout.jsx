// Layout.jsx
import React from 'react';
import NavBar from '../components/NavBar'; // Fix import path

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
};

export default Layout;
