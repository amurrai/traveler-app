'use client'
import React, { useState } from 'react';
import { MenuItem, TextField, Button, Paper } from '@mui/material';

import { useRouter } from 'next/navigation';

const Filter = ({ selectedCategory, minRating, selectedCity }) => {
  
  const [filterSelectedCategory, setFilterSelectedCategory] = useState(selectedCategory);
  const [filterMinRating, setFilterMinRating] = useState(minRating);
  const [filterSelectedCity, setFilterSelectedCity] = useState(selectedCity);
  const router = useRouter();

  const applyFilter = async () => {

      router.push(`/locations?minRating=${filterMinRating}&category=${filterSelectedCategory}&city=${filterSelectedCity}`);
      
  };

  const handleChangeCategory = (event) => {
    const { value } = event.target;
    setFilterSelectedCategory(value);
  };

  const handleChangeRating = (event) => {
    const { value } = event.target;
    setFilterMinRating(value);
  };

  const handleChangeCity = (event) => {
    const { value } = event.target;
    setFilterSelectedCity(value);
  };


  return (
    <Paper sx={{ mt:3, p: 2}}>
      <TextField
        label="Select City"
        select
        value={filterSelectedCity}
        onChange={handleChangeCity}
        fullWidth
        margin='normal'
      >
        <MenuItem value="All">All Cities</MenuItem>
        <MenuItem value="1">Calgary</MenuItem>
        <MenuItem value="2">Toronto</MenuItem>
        <MenuItem value="3">Vancouver</MenuItem>
      </TextField>
      <TextField
        label="Select Category"
        select
        value={filterSelectedCategory}
        onChange={handleChangeCategory}
        fullWidth
        margin='normal'
      >
        <MenuItem value="All">All Categories</MenuItem>
        <MenuItem value="Park">Parks</MenuItem>
        <MenuItem value="Tourist Attraction">Tourist Attractions</MenuItem>
        <MenuItem value="Zoo">Zoos</MenuItem>
        <MenuItem value="Historical Landmark">Historical Landmarks</MenuItem>
        <MenuItem value="Museum">Museums</MenuItem>
        <MenuItem value="Art Gallery">Galleries</MenuItem>
        <MenuItem value="Shopping Mall">Shopping Malls</MenuItem>
      </TextField>
      <TextField
        label='Minimum Rating'
        type="number"
        value={filterMinRating || ''}
        onChange={handleChangeRating}
        InputProps={{ inputProps: { min: 0, max: 5 } }}
        fullWidth
        margin='normal'
      />      
      <Button onClick={applyFilter} variant="contained" sx={{ mt: 2 }}>Apply Filters</Button>
    </Paper>
  );
};

export default Filter;