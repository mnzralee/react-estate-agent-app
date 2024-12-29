import React from "react";
import { useParams } from 'react-router-dom';
import properties from '../../assets/properties.json';


const PropertyPage = () => {

    const { id } = useParams();

    const property = properties.properties.find((property) => property.id === id);


    return (
        <div className="carousel-container">
            <h1>{property ? property.location : 'Property not found'}</h1>    
        </div>

    );
};

export default PropertyPage;
