import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import prop1 from '/prop-gallery/prop1.jpg';
import prop2 from '/prop-gallery/prop2.jpg';
import prop3 from '/prop-gallery/prop3.jpg';

const PropertyPage = () => {
    return (
        <div className="carousel-container">
            <Carousel className="h-100">
                <Carousel.Item>
                    <img
                        className="d-block w-100 object-fit-cover"
                        src={prop1}
                        alt="First slide"
                        height={'600px'}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 object-fit-cover"
                        src={prop2}
                        alt="Second slide"
                        height={'600px'}

                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 object-fit-cover"
                        src={prop3}
                        alt="Third slide"
                        height={'600px'}

                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default PropertyPage;
