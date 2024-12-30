import React from "react";
import { useParams, Link } from "react-router-dom";
import properties from "../../assets/properties.json";
import "./PropertyPage.css"; // Custom styles
import { Carousel, Container, Image, Col, Row } from "react-bootstrap";

const PropertyPage = () => {
  const { id } = useParams();
  const property = properties.properties.find((property) => property.id === id);

  if (!property) {
    return (
      <div className="text-center mt-4 d-flex justify-content-center align-items-center flex-column error-page">
        <h2>Property Not Found</h2>
        <p>We couldn't find the property you're looking for.</p>
        <Link to="/" className="btn btn-dark mt-4 rounded-5 p-2 px-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Carousel Section */}
      <div className="carousel-container position-relative">
        {/* Floating Home Button */}
        <Link
          to="/"
          className="floating-home-btn btn rounded-5 position-fixed top-0 start-0 m-4 text-light d-flex justify-content-center align-items-center"
          style={{ fontSize: "0.8rem", padding: "9.5px 13px 10px 14px" }}
        >
          <i className="bi bi-house me-2 fs-6"></i> Home
        </Link>

        {/* Carousel */}
        <Carousel fade className="carousel text-dark bg-light py-5" data-bs-theme="dark">
          {property.images && property.images.length > 0 ? (
            property.images.map((image, index) => (
              <Carousel.Item key={index} className="text-dark bg-light">
                <Image
                  className="d-block w-75 m-auto bg-light object-fit-cover rounded-5"
                  src={image}
                  alt={`Property image ${index + 1}`}
                  style={{ maxHeight: "600px" }}
                />
                <Carousel.Caption>
                  <p className="text-light">{property.location}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          ) : (
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=No+Image+Available"
                alt="Placeholder"
              />
              <Carousel.Caption>
                <h3>No Images Available</h3>
                <p>Details about this property are limited.</p>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      </div>

      {/* Property Details Section */}
      <Container className="mt-4 text-sm">
        <section>
          <Row>
            <Col xs={6}>
              <h2>{property.location}</h2>
              <p className="text-muted">{property.description}</p>
              <div className="d-flex justify-content-between text-muted">
                <span>{property.bedrooms} Beds</span>
                <span>{property.tenure}</span>
                <span>
                  Added on{" "}
                  {new Date(
                    `${property.added.month} ${property.added.day}, ${property.added.year}`
                  ).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default PropertyPage;
