import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import './PropertiesList.css'; // We'll create this file for custom styles

const PropertiesList = ({ properties }) => {
  if (properties.length === 0) {
    return <p className="text-center mt-4">No properties match your search criteria.</p>;
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (added) => {
    return new Date(`${added.month} ${added.day}, ${added.year}`).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="row g-5 p-4 m-0">
      {properties.map((property) => (
        <div className="col-12 col-md-6 col-lg-4" key={property.id}>
          <Card className="h-100 property-card">
            <div className="card-img-top position-relative">
            <Card.Img
            variant="top"
            src={property.picture || "https://via.placeholder.com/300x200?text=No+Image+Available"}
            alt={`${property.type} in ${property.location}`}
            className="img-fluid"
            />

              <Badge bg="secondary" className="position-absolute top-0 end-0 m-2">
                {property.type}
              </Badge>
            </div>
            <Card.Body>
              <Card.Title className="mb-2">{property.location}</Card.Title>
              <Card.Subtitle className="mb-2 text-success fw-bold">
                {formatPrice(property.price)}
              </Card.Subtitle>
              <div className="d-flex justify-content-between mb-2 text-sm text-muted">
                <span><i className="bi bi-house-door"></i> {property.bedrooms} beds</span>
                <span><i className="bi bi-key"></i> {property.tenure}</span>
              </div>
              <Card.Text className="small text-truncate-3 ">
                {property.description}
              </Card.Text>
              <Card.Text className="text-muted text-sm">
                Added on {formatDate(property.added)}
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer className="bg-white border-top-0">
              <a href={property.url} className="btn btn-dark w-100">View Details</a>
            </Card.Footer> */}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PropertiesList;