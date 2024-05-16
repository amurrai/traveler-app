'use client'

import React from 'react';
import { Button } from '@mui/material';

const FavoriteButton = ({ userId, locationId, isFavorite, onToggleFavorite }) => {
  const handleToggleFavorite = async () => {
    try {
      const url = isFavorite ? '/api/favorites/remove' : '/api/favorites/add';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, locationId })
      });
      if (response.ok) {
        onToggleFavorite(locationId);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  return (
    <Button 
      variant={isFavorite ? 'contained' : 'outlined'} 
      color={isFavorite ? 'secondary' : 'primary'} 
      onClick={handleToggleFavorite}
    >
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </Button>
  );
};

export default FavoriteButton;
