import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import properties from "../../assets/properties.json";
import "./PropertyPage.css"; // Custom styles
import { Carousel, Container, Image, Col, Row, Tabs, Tab } from "react-bootstrap";
import Map from "../../components/Map/Map";
import { FaBed } from "react-icons/fa6";
import ContactAgentTab from "../../components/ContactAgent/ContactAgent";
import FloatBtn from "../../components/FloatBtn/FloatBtn";
import Footer from "../../components/Footer/Footer";


const PropertyPage = () => {
  const { id } = useParams();
  const property = properties.properties.find((property) => property.id === id);

  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <FloatBtn value="To Search" toLink="/properties" />

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
      <Container className="text-sm container" style={{ marginTop: "2rem" }}>
        <Row>
          <Tabs defaultActiveKey="desc" id="property-tabs" className="mb-3" fill>
            {/* Description Tab */}
            <Tab eventKey="desc" title="Description">
              <Row>
                <Col xs={12} md={6} className="mt-4 px-4">
                  <h2 className="header-1 my-4">{property.location}</h2>
                  <p className="text-muted ps-md-3">{property.description}</p>
                  <div className="d-flex flex-column text-muted gap-3 mt-5 ps-md-3">
                    <span>
                      <i className="bi bi-geo-alt me-2"></i> {property.location}
                    </span>
                    <span>
                      <i className="bi bi-house me-2"></i> {property.type}
                    </span>
                    <span>
                      <FaBed className="me-2" /> {property.bedrooms} Beds
                    </span>
                    <span>
                      <i className="bi bi-key me-2"></i> {property.tenure}
                    </span>
                    <span className="fst-italic">
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
                <Col xs={12} md={6} className="mt-4 px-3 d-flex justify-content-center align-items-center">
                  <ContactAgentTab />
                </Col>
              </Row>
            </Tab>

            {/* Floor Plan Tab */}
            <Tab eventKey="plan" title="Floor Plan">
              <h2 className="header-1 my-4 mt-4 px-4">{property.location}</h2>
              <div className="w-100 d-flex justify-content-center align-items-center flex-column">
                <Image
                  src="/prop-gallery/prop_flat1_plan.jpg"
                  className="img-fluid rounded-5 object-fit-cover w-100"
                  alt="Floor Plan"
                />
              </div>
            </Tab>

            {/* Map Tab */}
            <Tab eventKey="map" title="Open Map" >
              <div className="map-container mt-4 px-4">
                <h2 className="header-1">{property.location}</h2>
                <Map latitude={property.map.latitude} longitude={property.map.longitude}/>
              </div>
            </Tab>
          </Tabs>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PropertyPage;
