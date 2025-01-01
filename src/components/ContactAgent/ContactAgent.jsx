import React, { useState } from "react";
import { Container, Form, Button, Toast } from "react-bootstrap";

const ContactAgent = () => {
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowToast(true);
    };

    return (
        <Container className="rounded-4 bg-light shadow-sm py-4 px-5 m-2 text-sm">
            <h2 className="mb-4 text-center header-2">Contact Our Agent</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                    <Form.Label className="text-muted text-sm">Full Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your full name" 
                        className="rounded-3" 
                        style={{fontSize: '0.8rem'}}
                        required 
                    />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label className="text-muted">Email Address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="rounded-3" 
                        style={{fontSize: '0.8rem'}}
                        required 
                    />
                </Form.Group>

                <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Label className="text-muted">Phone Number</Form.Label>
                    <Form.Control 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        className="rounded-3" 
                        style={{fontSize: '0.8rem'}}
                        required 
                    />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-4">
                    <Form.Label className="text-muted">Your Message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={4} 
                        placeholder="Enter your message" 
                        className="rounded-3" 
                        style={{fontSize: '0.8rem'}}
                        required 
                    />
                </Form.Group>

                <div className="text-center">
                    <Button variant="dark" type="submit" className="rounded-5 px-4 py-2" style={{fontSize: '0.8rem'}}>
                        Send Message
                    </Button>
                </div>
            </Form>

            <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide style={{position: 'fixed', top: 30, right: 15, zIndex: 9999, fontSize: "0.8rem"}}>
                <Toast.Header>
                    <strong className="me-auto">Message Sent!</strong>
                    <small>Just now</small>
                </Toast.Header>
                <Toast.Body>Thank you for reaching out. Our agent will contact you soon.</Toast.Body>
            </Toast>
        </Container>
    );
};

export default ContactAgent;
