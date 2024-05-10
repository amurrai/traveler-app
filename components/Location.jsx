import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";

const Location = ({ location }) => {
  return (
    <Grid item xs={20} sm={40} md={60} lg={80} sx={{ margin: '10px', padding: '20px' }}>
    <Card sx={{ height: 500, width: 400 }}>
      <CardMedia
        component="img"
        height="200"
        image={location.image}
        alt={location.name}
      />
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
          City: {location.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Country: {location.country}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  );
};

export default Location;