'use client'

import { useRouter } from 'next/navigation';
import FavoriteLocations from '@/components/FavoriteLocations';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Box, Typography, Grid } from '@mui/material';

const FavoritesPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [favoriteLocations, setFavoriteLocations] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchFavorites = async () => {
    try {
      if (session?.user?.id) {
        const favoriteResponse = await fetch(`/api/favorite-locations?user_id=${session.user.id}`);
        if (!favoriteResponse.ok) {
          throw new Error('Failed to fetch favorite locations');
        }
        const favoriteData = await favoriteResponse.json();
        setFavoriteLocations(favoriteData);
      }
    } catch (error) {
      console.error('Error fetching favorite locations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [session]);

  const handleFavoriteToggle = (locationId) => {
    setFavoriteLocations((prevLocations) =>
      prevLocations.filter((location) => location.id !== locationId)
    );
  };

  return (
    <Box sx={{ padding: 8 }}>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <FavoriteLocations locations={favoriteLocations} onFavoriteToggle={handleFavoriteToggle} />
      )}
    </Box>
  );
};

export default FavoritesPage;
