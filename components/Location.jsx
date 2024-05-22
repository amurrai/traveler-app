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
    <Card sx={{ width: 275, height: 550, display: 'flex', flexDirection: 'column' }}>
      {location.image && (
        <CardMedia
          component="img"
          image={location.image}  
          alt={location.name}
          sx={{ width: 1, maxHeight: 275, minHeight: 275, objectFit: 'cover'  }}

        />

      )}
      <CardContent sx={{}}>
          <IconButton onClick={handleFavoriteClick} sx={{ float: 'inline-end' }}>
            {isFav ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>
        <Typography gutterBottom variant="h6" component="div">
          {location.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {location.category}
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
        <br />
        <Typography variant="body2" color="text.secondary">
          {location.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Location;