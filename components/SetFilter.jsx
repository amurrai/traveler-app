'use client'
import React, { useState, useEffect } from 'react';
import Filter from '/Filter';
import FilteredLocations from '@component/FilteredLocations';

const SetFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minRating, setMinRating] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);


  const handleFilterChange = (category, rating) => {
    setSelectedCategory(category);
    setMinRating(rating);
  };

  useEffect(() => {
    const fetchFilteredLocations = async () => {
      try {
        const response = await fetch(`/api/filtered-locations?selectedCategory=${selectedCategory}&minRating=${minRating}`);
        const filteredLocations = await response.json();
        setFilteredLocations(filteredLocations); //Setting filtered locations and ratings
        console.log("Our filtered locations are from pageJsx filtered locations:", filteredLocations);//works [{},...]
      } catch (error) {
        console.error('Error fetching filtered locations:', error);
      }
    };
    fetchFilteredLocations();
  }, [selectedCategory, minRating]);



  return (
    <div>
      <Filter setFilteredLocations={setFilteredLocations} 
              onChange={handleFilterChange} 
              selectedCategory={selectedCategory}  
              setSelectedCategory={setSelectedCategory}
              minRating={minRating}
              setMinRating={setMinRating}
              />
      <FilteredLocations filteredLocations={filteredLocations} />
    </div>
  );
}

export default SetFilter;
