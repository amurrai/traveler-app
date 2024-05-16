'use client'
import Location from "@/components/Location";
import { fetchFilteredLocations, fetchLocation } from "@/lib/data";
import Link from "next/link";
import React from "react";
import Filter from "@/components/Filter";
import { Grid } from "@mui/material";



const LocationsPage = async() =>  {
  //fetching data from db
   const locations = await fetchLocation();
 
 //THIS FILTER HAS TO BE RAPLACED --------------------------------------------------------------------

  return (
    <ul>
      <Grid container spacing={3} sx={{ paddingTop: 10 }}>
      <Grid item xs={12} md={3}>
      <Filter />
      </Grid>
      <ul>
      {locations.map(location => {
        return (
          <li key={location.id} >
            <Link href={`/locations`}>
              <Location location={location}  />
            </Link>
          </li>
        );
      })}
    </ul>


        </Grid>
        
    </ul>
    
  );
};

export default LocationsPage;





