'use client'
import { 
  Box,
  Card,
  Paper,
  Typography,
 } from "@mui/material";


const LocationDetail = ( {location} ) => {
  const mapUrl = "https://www.google.com/maps/embed/v1/place?key=" + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY + "&q=place_id:" + location.place_id;

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
            Rating: {location.rating} <br/> <br/>
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
    </Card>
  )
};

export default LocationDetail;

    // <>
    //   <Box display='flex' justifyContent='center' width='100%'>
    //     <Box sx={{
    //       backgroundColor: '#222222',
    //       color: 'white',
    //       height: '500px',
    //       width: '100%',
    //       margin: 2.5,
    //       marginTop: 10,
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}>
    //       <iframe
    //         height='500px'
    //         width= '100%'
    //         frameborder='0'
    //         referrerpolicy='no-referrer-when-downgrade'
    //         src={mapUrl}
    //         allowfullscreen>
    //       </iframe>
    //     </Box>
    //   </Box>  
    //   <Box display='flex' justifyContent='center' width='100%'>
    //     <Box component="img" src={location.image} alt={location.name} 
    //       sx={{
    //         backgroundColor: '#444444',
    //         color: 'white',
    //         height: '300px',
    //         width: '100%',
    //         margin: 2.5,
    //         marginTop: '0',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         objectFit: 'cover'
    //       }}>
    //     </Box>
    //   </Box>
    //   <Box display='flex' flexDirection='row' width='100%' height='150px' marginBottom={2.5}>
    //     <Box display='flex' flexDirection='column' width='30%' justifyContent='space-between' backgroundColor='#666666' marginLeft={2.5}>
    //       <Box backgroundColor='#665566'>
    //         Name: {location.name}
    //       </Box>
    //       <Box backgroundColor='#664466'>
    //         Rating
    //       </Box>
    //       <Box backgroundColor='#663366'>
    //         Category: {location.category}
    //       </Box>
    //       <Box backgroundColor='#662266'>
    //         Add to favorite
    //       </Box>          
    //     </Box>
    //     <Box display ='flex' width='70%' justifyContent='center' alignItems='center' backgroundColor='#888888' marginRight={2.5}>
    //       Description: {location.description}
    //     </Box>
    //   </Box>
    // </>