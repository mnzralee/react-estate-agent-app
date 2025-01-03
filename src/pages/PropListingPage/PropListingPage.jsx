import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import propertiesData from '../../assets/properties.json';
import PropertyList from '../../components/PropertiesList/PropertiesList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PropListingPage = () => {
  const { properties } = propertiesData;
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchLocation = searchParams.get('location');
    if (searchLocation) {
      const filtered = properties.filter((property) =>
        property.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
      setFilteredProperties(filtered);
    } else {
      setFilteredProperties(properties);
    }
  }, [searchParams, properties]);

  const handleSearch = (criteria) => {
    const filtered = properties.filter((property) => {
      return (
        (criteria.type === 'Any' || property.type === criteria.type) &&
        property.price >= criteria.minPrice &&
        property.price <= criteria.maxPrice &&
        property.bedrooms >= criteria.minBedrooms &&
        property.bedrooms <= criteria.maxBedrooms &&
        new Date(
          property.added.year,
          new Date(criteria.dateAdded).getMonth(),
          new Date(criteria.dateAdded).getDate()
        ) >= new Date(criteria.dateAdded) &&
        property.location.toLowerCase().includes(criteria.postcode.toLowerCase()) &&
        property.location.toLowerCase().includes(searchParams.get('location') ? searchParams.get('location').toLowerCase() : '')
      );
    });
    setFilteredProperties(filtered);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <PropertyList properties={filteredProperties} location={searchParams.get('location')}/>
      <Footer />
    </>
  );
};

export default PropListingPage;
