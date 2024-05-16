import React, {useState, useEffect} from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import Link from "next/link";

const Location = ({location}) => {
  // const [locations, setLocations] = useState([]);

  // useEffect(() => {
  //   const fetchLocations = async () => {
  //     const res = await fetch('/api/locations');
  //     const data = await res.json();
  //     setLocations(data);
  //   };

  //   fetchLocations();
  // }, []);

// Displaying ALL locations (not sorted)
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
    <Link href={`/locations/${location.id}`} legacyBehavior> 
  
    <a style={{ textDecoration: 'none', color: 'inherit' }}> 
          View Details
        </a>
        
      </Link>
    </Grid>
  );
};

export default Location;