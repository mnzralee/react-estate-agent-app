import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { DatePicker, DropdownList, NumberPicker } from 'react-widgets';

const SearchBar = ({ onSearch }) => {
    const [type, setType] = useState("Any");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);
    const [minBedrooms, setMinBedrooms] = useState(0);
    const [maxBedrooms, setMaxBedrooms] = useState(8);
    const [dateAdded, setDateAdded] = useState(new Date('2003-10-20'));
    const [postcode, setPostcode] = useState('');
    const [showFav, setShowFav] = useState(false);

    const handleSearch = () => {
        onSearch({
          type,
          minPrice,
          maxPrice,
          minBedrooms,
          maxBedrooms,
          dateAdded,
          postcode,
          showFav,
        });
      };

    return (
        <Container className='container-md p-3 text-sm w-75 bg-light border rounded-4 shadow-sm d-flex flex-column justify-content-center align-items-center'>
            <Row className='w-100 gx-4 gy-2 d-flex justify-content-center mt-2'>
                <Col className='col-12 col-sm-6 col-md-4'>
                    <p className='m-0 text-nowrap'>Type:</p>
                    <DropdownList
                        defaultValue="Any"
                        data={["Any", "House", "Flat"]}
                        onChange={(value) => setType(value)}
                    />
                </Col>
                <Col className='col-12 col-sm-6 col-md-4 d-flex '>
                    <div>
                        <p className='m-0 text-nowrap'>Min Price:</p>
                        <NumberPicker
                            defaultValue={0}
                            min={0}
                            max={maxPrice}
                            format={{ style: "currency", currency: "LKR" }}
                            onChange={(value) => setMinPrice(value)}
                        />
                    </div>
                    <div>
                        <p className='m-0 text-nowrap'>Max Price:</p>
                        <NumberPicker
                            defaultValue={5000000}
                            min={minPrice}
                            format={{ style: "currency", currency: "LKR" }}
                            onChange={(value) => setMaxPrice(value)}
                        />
                    </div>
                </Col>
                <Col className='col-12 col-sm-6 col-md-4 d-flex align-items-center justify-content-center'>
                    <div>
                        <p className='m-0 text-nowrap'>Min Rooms:</p>
                        <NumberPicker
                            defaultValue={0}
                            min={0}
                            max={maxBedrooms}
                            onChange={(value) => setMinBedrooms(value)}
                        />
                    </div>
                    <div>
                        <p className='m-0 text-nowrap'>Max Rooms:</p>
                        <NumberPicker
                            defaultValue={8}
                            min={minBedrooms}
                            onChange={(value) => setMaxBedrooms(value)}
                        />
                    </div>
                </Col>
                <Col className='col-12 col-sm-6 col-md-4'>
                    <p className='m-0 text-nowrap'>Added after:</p>
                    <DatePicker
                        defaultValue={dateAdded}
                        max={new Date()}
                        valueFormat={{ dateStyle: "medium" }}
                        onChange={(value) => setDateAdded(value)}
                    />
                </Col>
                <Col className='col-12 col-sm-6 col-md-4'>
                    <p className='m-0 text-nowrap'>Postcode:</p>
                    <input 
                        type="text" 
                        placeholder="e.g. BR1, NW1" 
                        onChange={(e) => setPostcode(e.target.value)}
                        className='w-100 px-2'
                        style={{height: '38px', border: '1px solid #ced4da', borderRadius: '0.25rem'}}
                    />
                </Col>
            </Row>
            <Row>
                {/* <Col className='d-flex justify-content-center align-items-center'>
                    <div className="form-check mt-4">
                        <input 
                        className="form-check-input" 
                        type="checkbox" id="fav" 
                        onChange={(e) => setShowFav(e.target.checked)}/>
                        <label className="form-check-label text-nowrap">Favourites</label>
                    </div>
                </Col> */}
                <Col className="d-flex justify-content-center text-nowrap">
                    <Button className='btn btn-dark mt-4' onClick={handleSearch}>Search</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchBar;