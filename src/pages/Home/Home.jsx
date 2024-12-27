import React, { useState } from 'react';
import propertiesData from '../../assets/properties.json';
import PropertyList from '../../components/PropertiesList/PropertiesList'; // Component to display filtered properties
import Header from '../../components/Header/Header';

const Home = () => {
  const { properties } = propertiesData;
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleSearch = (criteria) => {
    const filtered = properties.filter((property) => {
      return (
        (criteria.type === "Any" || property.type === criteria.type) &&
        property.price >= criteria.minPrice &&
        property.price <= criteria.maxPrice &&
        property.bedrooms >= criteria.minBedrooms &&
        property.bedrooms <= criteria.maxBedrooms &&
        new Date(
          property.added.year,
          new Date(criteria.dateAdded).getMonth(),
          new Date(criteria.dateAdded).getDate()
        ) >= new Date(criteria.dateAdded) &&
        property.location.includes(criteria.postcode)
      );
    });
    setFilteredProperties(filtered);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default Home;
