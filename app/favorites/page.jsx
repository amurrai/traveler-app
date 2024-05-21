'use client'

import { useRouter } from 'next/navigation';
import FavoriteLocations from '@/components/FavoriteLocations';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Box, Button, Stack, Typography } from '@mui/material';

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
    <Box display='flex' flexDirection='row' width='100%' justifyContent='space-between' marginTop={10}>
      <Box display='flex' minWidth='200px' maxWidth='200px' flexDirection='column'>
        <Stack position='fixed' direction="column" spacing={2} component="div" padding={2}>
          <Button variant='outlined' href="/dashboard">My Routes</Button>
          <Button variant='contained'>My Locations</Button>
          <Button variant='outlined' href="/published">Published Routes</Button>
        </Stack>
      </Box>
      <Box display='flex' flexGrow='1' flexDirection='column' alignItems={'center'} margin={2}>
        <Box display='flex' direction='row' width='100%' justifyContent={"space-between"}>
        <Typography variant='h5'>
             MY FAVOIRTE LOCATIONS
          </Typography>         
        </Box>
        <FavoriteLocations locations={favoriteLocations} onFavoriteToggle={handleFavoriteToggle}/>
      </Box>
    </Box>
  );
};

export default FavoritesPage;