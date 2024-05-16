'use client'
import React, { useState, useEffect } from 'react';
import FavoriteButton from './FavoriteButton';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardMediaStyled = styled(CardMedia)({
  height: 140,
});

const CardContentStyled = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const LocationList = ({ userId }) => {
  const [locations, setLocations] = useState([]);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch('/api/locations');
      const data = await response.json();
      setLocations(data.locations);
    };

    const fetchFavorites = async () => {
      const response = await fetch(`/api/favorites?userId=${userId}`);
      const data = await response.json();
      if (Array.isArray(data)) {
        const favoriteSet = new Set(data.map(fav => fav.location_id));
        setFavorites(favoriteSet);
      } else {
        console.error('Expected data to be an array:', data);
      }
    };

    fetchLocations();
    if (userId) {
      fetchFavorites();
    }
  }, [userId]);

  const toggleFavorite = (locationId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(locationId)) {
        newFavorites.delete(locationId);
      } else {
        newFavorites.add(locationId);
      }
      return newFavorites;
    });
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Locations
      </Typography>
      <Grid container spacing={3}>
        {locations.map(location => (
          <Grid item xs={12} sm={6} md={4} key={location.id}>
            <Card>
              <CardMediaStyled
                image={location.imageUrl} // Assuming each location has an imageUrl property
                title={location.name}
              />
              <CardContentStyled>
                <Typography variant="h5" component="h2">
                  {location.name}
                </Typography>
                <FavoriteButton 
                  userId={userId} 
                  locationId={location.id} 
                  isFavorite={favorites.has(location.id)}
                  onToggleFavorite={toggleFavorite} 
                />
              </CardContentStyled>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LocationList;
