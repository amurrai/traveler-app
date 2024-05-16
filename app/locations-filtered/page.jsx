'use client'
import React from 'react';
import { Grid, Card, Typography, CardContent } from '@mui/material';
import FilteredLocations from '@/components/FilteredLocations';


//Filtered Locations Results NOT WORKING
const LocationsFiltered = ({ filteredLocations }) => {
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

        <FilteredLocations/>
      </Card>
    </Grid>
  );
};

export default LocationsFiltered;
