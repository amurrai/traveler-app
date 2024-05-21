
import Location from "@/components/Location";
import { fetchFilteredLocations, fetchLocation } from "@/lib/data";
import Link from "next/link";
import React from "react";
import Filter from "@/components/Filter";
import { Box, Grid, Typography } from "@mui/material";



const LocationsPage = async(props) =>  {

  const category = props.searchParams.category || '';
  const minRating = props.searchParams.minRating || '';
  const locations = await fetchFilteredLocations(category, minRating );
 
  return (
    <Box display='flex' flexDirection='row' width='100%' justifyContent='space-between' marginTop={10}>
      <Box display='flex' minWidth='200px' maxWidth='200px' flexDirection='column' padding='16px'>
        <Typography variant="h5" gutterBottom>
          Filter Options
        </Typography>
        <Filter minRating={minRating} selectedCategory={category}/>
      </Box>
      <Box display='flex' flexGrow='1' flexDirection='column' alignItems={'center'} margin={2}>
        <Box display='flex' width='100%' justifyContent={"center"}>
          <Typography variant='h5'>
            OUR MOST POPULAR ROUTES
          </Typography>
        </Box>
        <Grid container columnSpacing={1} rowSpacing={5}>
          {locations.map(location => (              
            <Location key={location.id} location={location} />            
          ))}
        </Grid> 
      </Box>
    </Box>
  );
};

export default LocationsPage;
