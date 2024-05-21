"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSession } from 'next-auth/react';


const Location = ({ location, isFavorite }) => {
  const averageRating = location.locationRatings?.length
    ? location.locationRatings.reduce((sum, rating) => sum + rating.rating, 0) / location.locationRatings.length
    : "No ratings";

  const { data: session } = useSession();
  const user_id = session?.user?.id;

  const [isFav, setIsFav] = useState(isFavorite);

  useEffect(() => {
    setIsFav(isFavorite);
  }, [isFavorite]);


  const handleFavoriteClick = async (event) => {
    event.preventDefault();
    if (!user_id) return;

    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id,
          location_id: location.id,
        }),
      });

      const data = await response.json();

      if (data.message === 'Location favorited') {
        setIsFav(true);
      } else if (data.message === 'Location unfavorited') {
        setIsFav(false);
      }
    } catch (error) {
      console.error('Error toggling favorite status:', error);
    }
  };


  return (
    <Card sx={{ width: 250, height: 495, margin: 'auto', marginTop: 3, display: 'flex', flexDirection: 'column' }}>
      {location.image && (
        <CardMedia
          component="img"
          height="100"
          image={location.image}  
          alt={location.name}
          sx={{ width: '100%', height: 200, objectFit: 'cover'  }}

        />

      )}
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography gutterBottom variant="h5" component="div">
          {location.name}

          <IconButton onClick={handleFavoriteClick} sx={{ float: 'right' }}>
            {isFav ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>

        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {location.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {location.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Days of Operation: {location.days_of_operation}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          City: {location.city?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Country: {location.country?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {averageRating}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Location;