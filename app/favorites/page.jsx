"use client"; 

import { useRouter } from 'next/navigation';
import FavoriteLocations from '@/components/FavoriteLocations';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { Box, Typography, Grid } from '@mui/material';

const FavoritesPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
 
  const [favoriteLocations, setFavoriteLocations] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        if (session?.user?.id) {
          const response = await axios.get(`/api/favorite-locations?user_id=${session.user.id}`);
          setFavoriteLocations(response.data);
        }
      } catch (error) {
        console.error('Error fetching favorite locations:', error);
      }
    };

    fetchFavorites();
  }, [session]);

  const handleFavoriteToggle = (locationId) => {
    // Filter out the location with the given ID from favoriteLocations
    setFavoriteLocations((prevLocations) =>
      prevLocations.filter((location) => location.id !== locationId)
    );
  };

  return (
    <Box sx={{ padding: 8 }}>
    <Typography variant="h4" gutterBottom>
      My Favorite Locations
    </Typography>
    <FavoriteLocations locations={favoriteLocations} onFavoriteToggle={handleFavoriteToggle}/>
  </Box>
  );
};

export default FavoritesPage;
