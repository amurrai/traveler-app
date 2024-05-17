
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Location = ({ location }) => {
  const averageRating = location.locationRatings?.length
    ? location.locationRatings.reduce((sum, rating) => sum + rating.rating, 0) / location.locationRatings.length
    : "No ratings";

  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', marginTop: 3 }}>
      {location.image && (
        <CardMedia
          component="img"
          height="140"
          image={location.image}
          alt={location.name}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {location.name}
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


