"use client";

import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import Location from "@/components/Location";
import { useSession } from "next-auth/react";

const LocationPageClient = ({ locations, initialFavoriteLocations }) => {
  const { data: session } = useSession();
  const [favoriteLocations, setFavoriteLocations] = useState(initialFavoriteLocations);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (session?.user?.id) {
        const response = await fetch(`/api/favorite-locations?user_id=${session.user.id}`);
        const data = await response.json();
        setFavoriteLocations(data);
      }
    };
    fetchFavorites();
  }, [session]);

  return (
    <Box>
      <Grid container spacing={3}>
        {locations.map((location) => (
          <Grid item key={location.id}>
            <Location
              location={location}
              isFavorite={favoriteLocations.some(favLoc => favLoc.id === location.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LocationPageClient;
