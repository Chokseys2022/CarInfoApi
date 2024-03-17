// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import correct components
import HomePage from './pages/HomePage';
import CarInfo from './components/CarInfo';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Router>
            <Routes> {/* Use Routes instead of Switch */}
                <Route path="/" element={<HomePage />} />
                <Route path="/car-info" element={<CarInfo />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
