'use client'
import { Box } from "@mui/material";


const LocationDetail = ( { location } ) => {

  return (
    <>
      <Box display='flex' justifyContent='center' width='100%'>
        <Box sx={{
          backgroundColor: '#222222',
          color: 'white',
          height: '500px',
          width: '100%',
          margin: 2.5,
          marginTop: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          MAP TILE
        </Box>
      </Box>  
      <Box display='flex' justifyContent='center' width='100%'>
        <Box sx={{
          backgroundColor: '#444444',
          color: 'white',
          height: '300px',
          width: '100%',
          margin: 2.5,
          marginTop: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          Picture: {location.image && <img src={location.image} alt={location.name} />}
        </Box>
      </Box>
      <Box display='flex' flexDirection='row' width='100%' height='150px' marginBottom={2.5}>
        <Box display='flex' flexDirection='column' width='30%' justifyContent='space-between' backgroundColor='#666666' marginLeft={2.5}>
          <Box backgroundColor='#665566'>
            Name: {location.name}
          </Box>
          <Box backgroundColor='#664466'>
            Rating
          </Box>
          <Box backgroundColor='#663366'>
            Category: {location.category}
          </Box>
          <Box backgroundColor='#662266'>
            Add to favorite
          </Box>          
        </Box>
        <Box display ='flex' width='70%' justifyContent='center' alignItems='center' backgroundColor='#888888' marginRight={2.5}>
          Description: {location.description}
        </Box>
      </Box>
    </>
  )
};

export default LocationDetail;