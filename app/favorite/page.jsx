
import Location from "@/components/Location";
import { fetchFilteredLocations, fetchLocation } from "@/lib/data";
import Link from "next/link";
import React from "react";
import FavoriteButton from "@/components/FavoriteButton";
import { Grid } from "@mui/material";



const FavoritePage = async(props) =>  {

  console.log(props);

  // const favorite = props.searchParams.category || '';
  // const minRating = props.searchParams.minRating || '';
  //  const locations = await fetchFilteredLocations(category, minRating );

 
 
  return (
    <ul>
      <Grid container spacing={3} sx={{ paddingTop: 10 }}>
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

export default FavoritePage;




