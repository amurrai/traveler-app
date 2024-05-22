import { fetchFilteredLocations } from "@/lib/data";
import React from "react";
import { getSession } from "next-auth/react";
import Filter from "@/components/Filter";
import LocationPageClient from '@/components/LocationPageClient';
import { Box, Grid, Paper, Typography } from "@mui/material";



const LocationsPage = async (props) => {

  console.log(props);

  const session = await getSession();

  const category = props.searchParams.category || '';
  const minRating = props.searchParams.minRating || '';
  const city = props.searchParams.city || '';
  const locations = await fetchFilteredLocations(category, minRating, city);


  // Fetch user's favorite locations if logged in
  const favoriteLocations = session?.user?.id
    ? await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/favorite-locations?user_id=${session.user.id}`).then((res) =>
      res.ok ? res.json() : []
    )
    : [];


  return (
    <Paper sx={{ mt: 10, mb: 2, mx: 'auto', p: 4, width: '95vw'}}>
      <Typography variant='h4' >
        POPULAR LOCATIONS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <Filter minRating={minRating} selectedCategory={category} selectedCity={city}/>
        </Grid>
        <Grid item xs={12} md={10}>
          <LocationPageClient
            locations={locations}
            initialFavoriteLocations={favoriteLocations}
          />
        </Grid>

      </Grid>
    </Paper>
  );
};

export default LocationsPage;