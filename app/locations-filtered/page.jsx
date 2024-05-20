'use client'
import React, {useState, useEffect} from 'react';
import { Grid, Card, Typography, CardContent } from '@mui/material';
import FilteredLocations from '@/components/FilteredLocations';
import { useSearchParams } from 'next/navigation';




//Filtered Locations Results NOT WORKING
const LocationsFiltered = (props) => {

  const [filteredLocations, setFilteredLocations] = useState([]);

  const serch = useSearchParams();
  const minRating = serch.get("minRating")
  console.log("MinRaiting is", minRating);

  const category = serch.get("category");
  console.log("Category is", category);

  useEffect(() => {
    const fetchFilteredLocations = async () => {
      try {
        const response = await fetch(`/api/filtered-locations?selectedCategory=${category}&minRating=${minRating}`);
        const filteredLocations = await response.json();
        setFilteredLocations(filteredLocations); //Setting filtered locations and ratings
        console.log("Our filtered locations are from pageJsx filtered locations:", filteredLocations);//works [{},...]
      } catch (error) {
        console.error('Error fetching filtered locations:', error);
      }
    };
    fetchFilteredLocations();
  }, [category, minRating]);

console.log("Serch is:", serch);

  console.log("Props from filtered page", props);
  return (
    <Grid item xs={20} sm={40} md={60} lg={80} sx={{ margin: '10px', padding: '20px' }}>
      <Card sx={{ height: 500, width: 400 }}>

       
        {/* {Array.isArray(filteredLocations) && filteredLocations.length > 0 ? (
          filteredLocations.map((filteredLocation) => (
            <CardContent key={filteredLocation.id}>
              <Typography gutterBottom variant="h5" component="div">
                {filteredLocation.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: {filteredLocation.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {filteredLocation.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Days of Operation: {filteredLocation.days_of_operation}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                City: {filteredLocation.city}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Country: {filteredLocation.country}
              </Typography>
            </CardContent>
          ))
        ) : (
          <CardContent>
            <Typography variant="body1">No locations available</Typography>
          </CardContent>
        )} */}

        <FilteredLocations filteredLocations={filteredLocations}/>
      </Card>
    </Grid>
  );
};

export default LocationsFiltered;
