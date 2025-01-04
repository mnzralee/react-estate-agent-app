import React, { useState } from 'react';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import { RiResetLeftLine } from "react-icons/ri";
import './SearchBar.css';
import { useSearchParams } from 'react-router-dom';
import { FaArrowsAltH } from "react-icons/fa";


const SearchBar = ({ onSearch }) => {
    const [searchParams] = useSearchParams();
    const location = searchParams.get('location');

    const [type, setType] = useState("Any");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000000);
    const [minBedrooms, setMinBedrooms] = useState(0);
    const [maxBedrooms, setMaxBedrooms] = useState(8);
    const [dateAdded, setDateAdded] = useState(new Date('2003-10-20'));
    const [postcode, setPostcode] = useState('');

    const handleSearch = () => {
        onSearch({
            type,
            minPrice,
            maxPrice,
            minBedrooms,
            maxBedrooms,
            dateAdded,
            postcode,
        });
    };

    const handleReset = () => {
        // Reset all state values to their initial state
        setType("Any");
        setMinPrice(0);
        setMaxPrice(10000000);
        setMinBedrooms(0);
        setMaxBedrooms(8);
        setDateAdded(new Date('2003-10-20'));
        setPostcode('');
    
        // Trigger search with reset values immediately after state changes
        onSearch({
            type: "Any",
            minPrice: 0,
            maxPrice: 10000000,
            minBedrooms: 0,
            maxBedrooms: 8,
            dateAdded: new Date('2003-10-20'),
            postcode: '',
        });
    };
    

    return (
        <Container className='search-bar-con container-md p-3 px-4 text-sm w-75 shadow-sm d-flex flex-column justify-content-center align-items-center'>
            <Row className='w-100 gx-4 gy-2 d-flex justify-content-center mt-2'>
                <Col className='col-12 col-sm-6 col-md-4'>
                    <p className='m-0 text-nowrap'>Type:</p>
                    <Form.Control
                        as="select"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option>Any</option>
                        <option>House</option>
                        <option>Flat</option>
                    </Form.Control>
                </Col>
                <Col className='col-12 col-sm-6 col-md-4 d-flex align-items-center justify-content-center'>
                    <div>
                        <p className='m-0 text-nowrap'>Min Price:</p>
                        <Form.Control
                            type="number"
                            value={minPrice}
                            min={0}
                            max={maxPrice}
                            step={50000}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                        />
                    </div>
                    <FaArrowsAltH className='mx-1 opacity-75' style={{marginTop: '1rem'}} />
                    <div>
                        <p className='m-0 text-nowrap'>Max Price:</p>
                        <Form.Control
                            type="number"
                            value={maxPrice}
                            min={minPrice}
                            step={50000}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                        />
                    </div>
                </Col>
                <Col className='col-12 col-sm-6 col-md-4 d-flex align-items-center justify-content-center'>
                    <div>
                        <p className='m-0 text-nowrap'>Min Rooms:</p>
                        <Form.Control
                            type="number"
                            value={minBedrooms}
                            min={0}
                            max={maxBedrooms}
                            onChange={(e) => setMinBedrooms(Number(e.target.value))}
                        />
                    </div>
                    <FaArrowsAltH className='mx-1 opacity-75' style={{marginTop: '1rem'}} />
                    <div>
                        <p className='m-0 text-nowrap'>Max Rooms:</p>
                        <Form.Control
                            type="number"
                            value={maxBedrooms}
                            min={minBedrooms}
                            onChange={(e) => setMaxBedrooms(Number(e.target.value))}
                        />
                    </div>
                </Col>
                <Col className='col-12 col-sm-6 col-md-4'>
                    <p className='m-0 text-nowrap'>Added after:</p>
                    <Form.Control
                        type="date"
                        value={dateAdded ? dateAdded.toISOString().split('T')[0] : ''} // Handle null case
                        onChange={(e) => {
                            const newDate = new Date(e.target.value);
                            if (!isNaN(newDate)) {
                                setDateAdded(newDate); // Only update if valid
                            } else {
                                console.error('Invalid date entered');
                            }
                        }}
                    />
                </Col>

                <Col className='col-12 col-sm-6 col-md-4'>
                    <p className='m-0 text-nowrap'>Postcode:</p>
                    <Form.Control
                        type="text"
                        placeholder="e.g. BR1, NW1"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center text-nowrap">
                    <Button className='btn btn-dark mt-4 search-btn rounded-5' onClick={handleSearch}>Search</Button>
                    <Button className='btn btn-light mt-4 ms-3 reset-btn rounded-5' onClick={handleReset}>
                        <RiResetLeftLine />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchBar;
