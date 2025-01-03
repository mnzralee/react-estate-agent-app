import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './HomePage.css';
import propertiesData from '../../assets/properties.json';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [location, setLocation] = useState('');
    const [error, showError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('error');
    const navigate = useNavigate();
    const { properties } = propertiesData;

    const handleSearch = (e) => {
        e.preventDefault();
        if (location) {
            if (!properties.some((property) => property.location.toLowerCase().includes(location.toLowerCase()))) {
                showError(true);
                setErrorMessage('No properties found in the specified location');
                return;
            }
            navigate(`/properties?location=${location}`);
        }
        showError(true);
        setErrorMessage('Please enter a location to search');
    };

    useEffect(() => {
        if (error) {
          const timer = setTimeout(() => showError(false), 3000);
          return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
        }
      }, [error, showError]);

    return (
        <>
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section d-flex justify-content-center align-items-center">
                <div className="position-absolute top-0 m-5 start-0 hero-title-container">
                    <h1>Dream Home</h1>
                </div>
                <Container>
                <h1 className="hero-title header-2 pb-4">
                    Find 
                    <Link 
                        to="/properties" 
                        className="text-decoration-none text-light mx-2 border-bottom border-1 border-light" 
                        title="Browse all properties"
                    >
                        Properties
                    </Link> 
                    in Your Desired Location
                </h1>

                    <Form className="search-form" onSubmit={handleSearch}>
                        <div className="search-bar d-flex">
                            <Form.Control
                                type="text"
                                placeholder="Enter location (e.g., Orpington)"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="me-2 location-input"
                            />
                            <Button type="submit" className="btn search-btn">
                                <FaSearch />
                            </Button>
                        </div>
                        <div className={`text-center  ${error ? 'opacity-100' : 'opacity-0'} error-message` }>
                            <p className="text-danger  mt-2 text-sm">{errorMessage}</p>
                        </div>
                        
                    </Form>
                </Container>
            </section>
        </div>
        </>
    );
};

export default HomePage;
