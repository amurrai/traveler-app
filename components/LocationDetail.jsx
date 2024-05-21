'use client'
import { 
  Box,
  Card,
  Paper,
  Rating,
  Typography,
 } from "@mui/material";


const LocationDetail = ( {location} ) => {
  const mapUrl = "https://www.google.com/maps/embed/v1/place?key=" + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY + "&q=place_id:" + location.place_id;
  // Location ratings
  const averageRating = location.locationRatings?.length
  ? location.locationRatings.reduce((sum, rating) => sum + rating.rating, 0) / location.locationRatings.length
  : "No ratings";

  const ratings = location.locationRatings.map((rating) => {
    return (
      <Paper sx={{ autoHeight: true, width: 'auto', p: 2, m: 2 }}>
        <Rating
          key={rating.id}
          name="read-only"
          value={rating.rating}
          size="large"
          readOnly
        />
        <Box>
          <Typography variant="caption" fontWeight="bold">Reviewed by: {rating.user.username}</Typography>
        </Box>

        <Typography variant="body">{rating.comment}</Typography>
      </Paper>
    )
  });
  return (
    <Card sx={{ 
      display: 'flex',
      flexDirection: 'column',
      m: 2,
      mt: 10
    }}>
      <Box sx={{ mt: 3, ml: 3 }}>
        <Typography variant="h3">{location.name}</Typography>
      </Box>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        }}>
        <Paper elevation={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', m: 2, p: 4, height: '400px', width: '30%'}}>
          <Typography variant="h6">
            Country: {location.country.name} <br/>
            City: {location.city.name} <br/> <br/> 
            Category: {location.category} <br/>
            Rating: {averageRating} <br/> <br/>
            {location.description}</Typography>
        </Paper>
        <Card component='img' src={location.image} alt={location.name}
          sx={{
            m: 2,
            height: '400px',
            width: '70%',
            objectFit: 'cover'
          }}>
        </Card>
      </Box>
      <Card sx={{
              height: '500',
              width: '100%',
            }}>
        <iframe
          height='500px'
          width= '100%'
          frameborder='0'
          referrerpolicy='no-referrer-when-downgrade'
          src={mapUrl}>
        </iframe>
      </Card>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        }}>
        {location.locationRatings && ratings}
      </Box>
    </Card>
  )
};

export default LocationDetail;