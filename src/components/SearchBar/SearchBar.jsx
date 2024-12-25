import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { DropdownList, NumberPicker } from 'react-widgets';

const SearchBar = () => {
    const [type, setType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('1000000');
    const [minBedrooms, setMinBedrooms] = useState('');
    const [maxBedrooms, setMaxBedrooms] = useState('8');
    const [dateAdded, setDateAdded] = useState('');
    const [postcode, setPostcode] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        const searchParams = {
            type,
            minPrice,
            maxPrice,
            minBedrooms,
            maxBedrooms,
            dateAdded,
            postcode
        };
        console.log('Search parameters:', searchParams);
        // Implement search logic here, e.g., make an API call with searchParams
    };

    return (
            <Container className='container-md p-3 text-sm w-75'>
                <Row className='w-100 gx-4 gy-2'>
                    <Col className='col-12 col-sm-6 col-md-4'>
                        <p className='m-0'>Type:</p>
                        <DropdownList
                            defaultValue="Any"
                            data={["Any", "House", "Flat"]}
                            onChange={(value) => setType(value)}
                        />
                    </Col>
                    <Col className='col-12 col-sm-6 col-md-4 d-flex align-items-center justify-content-center'>
                        <div >
                            <p className='m-0'>Min Price:</p>
                            <NumberPicker
                                defaultValue={0}
                                min={0}
                                max={maxPrice}
                                format={{ style: "currency", currency: "LKR" }}
                                onChange={(value) => setMinPrice(value)}
                            />
                        </div>
                        <div>
                            <p className='m-0'>Max Price:</p>
                            <NumberPicker
                                defaultValue={1000000}
                                min={minPrice}
                                format={{ style: "currency", currency: "LKR" }}
                                onChange={(value) => setMaxPrice(value)}
                            />
                        </div>
                    </Col>
                    <Col className='col-12 col-sm-6 col-md-4 d-flex align-items-center justify-content-center'>
                        <div >
                            <p className='m-0'>Min Rooms:</p>
                            <NumberPicker
                                defaultValue={0}
                                min={0}
                                max={maxBedrooms}
                                onChange={(value) => setMinBedrooms(value)}
                            />
                        </div>
                        <div>
                            <p className='m-0'>Max Rooms:</p>
                            <NumberPicker
                                defaultValue={8}
                                min={minBedrooms}
                                onChange={(value) => setMaxBedrooms(value)}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
    );
};

export default SearchBar;