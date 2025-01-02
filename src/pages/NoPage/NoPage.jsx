import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegFrownOpen } from 'react-icons/fa';  // 404 icon

import './NoPage.css'; // Assuming you will add styles here

const NoPage = () => {
    return (
        <div className="no-page">
            <div className="no-page-content">
                <FaRegFrownOpen className="no-page-icon" />
                <h1 className="no-page-title">404</h1>
                <p className="no-page-message">Oops! The page you are looking for does not exist.</p>
                <Link to="/" className="no-page-link">
                    <button className="no-page-btn">Go back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NoPage;
