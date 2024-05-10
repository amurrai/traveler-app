"use client"

import { useState } from 'react';

const Filter = () => {
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minRating, setMinRating] = useState(0);


  const categoryHandler = (event) => {
    setSelectedCategory(event.target.value);
    filterLocations(event.target.value, minRating);
  };

  // const categoryHandler = (event) => {
  //   filterSearch({category: event.target.value});
  // };

  // const pageHandler = (page) => {
  //   filterSearch({ page });
  // }

   // const ratingHandler = (event) => {
  //   filterSearch({rating:  event.target.value});
  // };


  const ratingHandler = (event) => {
    setMinRating(parseInt(event.target.value));
    filterLocations(selectedCategory, parseInt(event.target.value));
  };

  const filterLocations = (category, rating) => {
    let filtered = locations;

    // Filter by category
    if (category !== 'All') {
      filtered = filtered.filter((location) => location.category === category);
    }

    // Filter by minimum rating
    filtered = filtered.filter((location) => location.rating_id >= rating);

    setFilteredLocations(filtered);
  };

  return (
    <div>
      <div>
        <label htmlFor="category">Filter by category:</label>
        <select id="category" value={selectedCategory} onChange={categoryHandler}>
          <option value="All">Categories</option>
          <option value="Park">Parks</option>
          <option value="Attraction">Tourist Attraction</option>
          <option value="Zoo">Zoo</option>
          <option value="Historical Landmark">Historical Landmark</option>
          <option value="Museum">Museum</option>
          <option value="Gallery">Gallery</option>
          <option value="Shopping Mall">Shopping Mall</option>
        </select>
      </div>
      <div>
        <label htmlFor="rating">Minimum rating:</label>
        <input
          type="number"
          id="rating"
          min="0"
          max="5"
          value={minRating}
          onChange={ratingHandler}
        />
      </div>
      <ul>
        {filteredLocations.map((location) => (
          <li key={location.place_id}>
            <div>Name: {location.name}</div>
            <div>City: {location.city_id}</div>
            <div>Description: {location.description}</div>
            <div>Category: {location.category}</div>
            <div>Rating: {location.rating_id}</div>
            
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Filter;
