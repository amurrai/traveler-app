import { fetchFilteredLocations } from "@/lib/data";
import React from "react";
import { getSession } from "next-auth/react";
import Filter from "@/components/Filter";
import LocationPageClient from '@/components/LocationPageClient';
import { Grid, Box } from "@mui/material";


const LocationsPage = async (props) => {

  console.log(props);

  const session = await getSession();

  const category = props.searchParams.category || '';
  const minRating = props.searchParams.minRating || '';
  const locations = await fetchFilteredLocations(category, minRating);


  // Fetch user's favorite locations if logged in
  const favoriteLocations = session?.user?.id
    ? await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/favorite-locations?user_id=${session.user.id}`).then((res) =>
      res.ok ? res.json() : []
    )
    : [];


  return (

    <Box sx={{ paddingTop: 10 }}>
      <Grid container spacing={3}>

        <Grid item xs={12} md={3}>
          <Filter minRating={minRating} selectedCategory={category} />
        </Grid>
        <Grid item xs={12} md={9}>
          <LocationPageClient
            locations={locations}
            initialFavoriteLocations={favoriteLocations}
          />
        </Grid>

      </Grid>
    </Box>
  );
};

export default LocationsPage;