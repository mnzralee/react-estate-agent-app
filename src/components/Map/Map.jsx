import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ latitude, longitude }) => {
    // Define map container style
    const containerStyle = {
        width: '100%',
        height: '70vh',
    };

    // Define the center of the map (Orpington, UK)
    const center = {
        lat: latitude, // Latitude for Orpington
        lng: longitude,  // Longitude for Orpington
    };

    return (
        
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13} // Adjust zoom level as needed
            >
                {/* Marker positioned at Orpington */}
                <Marker position={center} />
            </GoogleMap>
    );
};

export default Map;
