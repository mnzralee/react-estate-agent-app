import React, { useEffect, useState } from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './PropertiesList.css'; // Custom styles
import { Link } from 'react-router-dom';
import noresult from '/noresult.svg';
import PropertyCard from '../PropertyCard/PropertyCard';
import FloatBtn from '../FloatBtn/FloatBtn';
import propertiesData from '../../assets/properties.json';
import { use } from 'react';

const PropertiesList = ({ properties, location }) => {
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const allProperties = propertiesData.properties;

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  // Toggle favorite status of a property
  const toggleFavorite = (propertyId) => {
    const newFavorites = favorites.includes(propertyId)
      ? favorites.filter((id) => id !== propertyId)
      : [...favorites, propertyId];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  // Clear all favorites
  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favorites');
  };


  // Filter properties based on favorites
  const displayedProperties = showFavorites
    ? allProperties.filter((property) => favorites.includes(property.id))
    : properties;

  // Render properties list
  const renderProperties = () => {
    if (displayedProperties.length === 0) {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img src={noresult} alt="No results found" className="img-fluid" width={'100px'}/>
          <p className="text-center mt-4 mb-5">No properties match your search criteria.</p>
        </div>
      
      );
    }
    
    

    return displayedProperties.map((property) => (
      
      <PropertyCard property={property} key={property.id} toggleFavorite={toggleFavorite} favorites={favorites} />
    ));
  };

  return (
    <>
      <FloatBtn value="Go Home" toLink="/" />
      <h2 className={`text-center mt-4 header-2 fs-5 ${showFavorites ? 'opacity-0' : 'opacity-100'}`} >Search results for <br /> <span className='text-md fst-italic opacity-75'>"{location ? location: 'All Locations'}"</span></h2>
      <div className="d-flex justify-content-end align-items-center m-4 mb-0">
        <Button className="btn btn-sm show-favorites-btn d-flex flex-nowrap rounded-5" variant={showFavorites ? "dark" : "outline-dark"} onClick={() => setShowFavorites(!showFavorites)}>
          <i className={`bi ${showFavorites ? 'bi-star-fill' : 'bi-star'}`} />
          <span className='d-none d-sm-block'>{showFavorites ? 'Hide Favorites' : 'Show Favorites'}</span>
        </Button>
        {showFavorites && (
          <div className="clear-favorites-btn ms-2 position-absolute d-flex" onClick={clearFavorites}>
            <i className="bi bi-trash"></i>
            <span className='d-none d-sm-block'>Clear Favorites</span>
          </div>
        )}
      </div>
      <div className="row g-5 p-4 pt-0 m-0">{renderProperties()}</div>
    </>
  );
};

export default PropertiesList;
