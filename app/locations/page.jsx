
import Location from "@/components/Location";
import { fetchFilteredLocations, fetchLocation } from "@/lib/data";
import Link from "next/link";
import React from "react";
import Filter from "@/components/Filter";
import { Grid } from "@mui/material";



const LocationsPage = async(props) =>  {

  console.log(props);

  const category = props.searchParams.category || '';
  const minRating = props.searchParams.minRating || '';
   const locations = await fetchFilteredLocations(category, minRating );
  // const userId = props.session.user.id; 
  // const locations = await fetchFilteredLocations(category, minRating, userId);


 
 
  return (
    <ul>

      <Grid container spacing={3} sx={{ paddingTop: 15 }}>

      <Grid item xs={12} md={3}>
      <Filter minRating={minRating} selectedCategory={category}/>
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
