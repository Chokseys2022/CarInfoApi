// App.jsx
//necessary imports and routes set up
import React from 'react';
import { BrowserRouter as Router, Route, Routes,NavLink } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CarInfo from './components/CarInfo';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css'


//main app component-defining routes for differnt pages 
function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/car-info" element={<CarInfo />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

//----------------------------------------END CODE-------------------------------------//