import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsEnvelope, BsTelephone, BsGeoAlt } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer mt-5 py-5 text-sm">
            <Container>
                <Row className="my-4">
                    <Col md={5} className="mb-3 mb-md-0">
                        <h5 className="mb-3">Dream Home Realty</h5>
                        <p className="mb-0 text-muted text-sm">
                            Finding your perfect home since 1990. We're committed to exceptional service and your real estate success.
                        </p>
                    </Col>
                    <Col md={2} className="mb-3 mb-md-0">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted">Home</a></li>
                            <li><a href="#" className="text-muted">Properties</a></li>
                            <li><a href="#" className="text-muted">About Us</a></li>
                            <li><a href="#" className="text-muted">Our Agents</a></li>
                            <li><a href="#" className="text-muted">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={2} className="mb-3 mb-md-0">
                        <h5 className="mb-3">Services</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted">Buy a Home</a></li>
                            <li><a href="#" className="text-muted">Sell a Home</a></li>
                            <li><a href="#" className="text-muted">Rent a Home</a></li>
                            <li><a href="#" className="text-muted">Market Analysis</a></li>
                            <li><a href="#" className="text-muted">Property Management</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 className="mb-3">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <BsGeoAlt className="me-2 text-muted" />
                                <span className="text-muted">123 Real Estate St, City, 12345</span>
                            </li>
                            <li className="mb-2">
                                <BsTelephone className="me-2 text-muted" />
                                <a href="tel:+11234567890" className="text-muted">(123) 456-7890</a>
                            </li>
                            <li className="mb-2">
                                <BsEnvelope className="me-2 text-muted" />
                                <a href="mailto:info@dreamhome.com" className="text-muted">info@dreamhome.com</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0 text-muted text-sm">&copy; 2024 Dream Home Realty. All rights reserved.</p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="#" className="text-muted" aria-label="Facebook">
                                    <BsFacebook className="social-icon" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-muted" aria-label="Instagram">
                                    <BsInstagram className="social-icon" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-muted" aria-label="Twitter">
                                    <BsTwitter className="social-icon" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-muted" aria-label="LinkedIn">
                                    <BsLinkedin className="social-icon" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
