import React, { useEffect, useState } from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './PropertiesList.css'; // Custom styles

const PropertiesList = ({ properties }) => {
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

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

  // Format price to LKR currency
  const formatPrice = (price) =>
    new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);

  // Format date to a readable string
  const formatDate = (added) =>
    new Date(`${added.month} ${added.day}, ${added.year}`).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  // Filter properties based on favorites
  const displayedProperties = showFavorites
    ? properties.filter((property) => favorites.includes(property.id))
    : properties;

  // Render properties list
  const renderProperties = () => {
    if (displayedProperties.length === 0) {
      return <p className="text-center mt-4">No properties match your search criteria.</p>;
    }

    return displayedProperties.map((property) => (
      <div className="col-12 col-md-6 col-lg-4" key={property.id}>
        <Card className="h-100 property-card">
          <div className="card-img-top position-relative">
            <Card.Img
              variant="top"
              src={property.picture || 'https://via.placeholder.com/300x200?text=No+Image+Available'}
              alt={`${property.type} in ${property.location}`}
              className="img-fluid"
            />
            <Badge bg="secondary" className="position-absolute top-0 end-0 m-2">
              {property.type}
            </Badge>
            <button
              className="btn btn-sm position-absolute bottom-0 end-0 m-2 favorite-btn"
              onClick={() => toggleFavorite(property.id)}
              aria-label={favorites.includes(property.id) ? 'Remove from favorites' : 'Add to favorites'}
            >
              <i className={`bi ${favorites.includes(property.id) ? 'bi-heart-fill text-danger' : 'bi-heart'}`}></i>
            </button>
          </div>

          <Card.Body>
            <Card.Title className="mb-2">{property.location}</Card.Title>
            <Card.Subtitle className="mb-2 text-success fw-bold">{formatPrice(property.price)}</Card.Subtitle>
            <div className="d-flex justify-content-between mb-2 text-sm text-muted">
              <span>
                <i className="bi bi-house-door"></i> {property.bedrooms || 0} beds
              </span>
              <span>
                <i className="bi bi-key"></i> {property.tenure || 'N/A'}
              </span>
            </div>
            <Card.Text className="small text-truncate-3">{property.description || 'No description available.'}</Card.Text>
            <Card.Text className="text-muted text-sm">Added on {formatDate(property.added)}</Card.Text>
          </Card.Body>

          {/* <Card.Footer className="bg-white border-top-0">
            <a href={property.url} className="btn btn-dark w-100">
              View Details
            </a>
          </Card.Footer> */}
        </Card>
      </div>
    ));
  };

  return (
    <>
      <h2 className="text-center mt-4 header-2">Properties</h2>
      <div className="d-flex justify-content-end align-items-center m-4 mb-0">
        <Button className="btn btn-sm show-favorites-btn d-flex flex-nowrap gap-1" variant={showFavorites ? "dark" : "outline-dark"} onClick={() => setShowFavorites(!showFavorites)}>
          <i className={`bi ${showFavorites ? 'bi-star-fill' : 'bi-star'}`} />
          <span className='d-none d-sm-block'>{showFavorites ? 'Hide Favorites' : 'Show Favorites'}</span>
        </Button>
      </div>
      <div className="row g-5 p-4 pt-0 m-0">{renderProperties()}</div>
    </>
  );
};

export default PropertiesList;
