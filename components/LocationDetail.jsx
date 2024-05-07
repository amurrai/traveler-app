import { Box } from "@mui/material";


const LocationDetail = () => {
  return (
    <>
      <Box display='flex' justifyContent='center' width='100%'>
        <Box sx={{
          backgroundColor: '#222222',
          color: 'white',
          height: '500px',
          width: '100%',
          margin: '20px',
          marginTop: '80px',
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
          margin: '20px',
          marginTop: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          Picture
        </Box>
      </Box>
      <Box display='flex' flexDirection='row' width='100%' height='150px'>
        <Box display='flex' flexDirection='column' width='30%' justifyContent='space-between' backgroundColor='#666666' marginLeft='20px'>
          <Box backgroundColor='#665566'>
            Name
          </Box>
          <Box backgroundColor='#664466'>
            Rating
          </Box>
          <Box backgroundColor='#663366'>
            Category
          </Box>
          <Box backgroundColor='#662266'>
            Add to favorite
          </Box>          
        </Box>
        <Box display ='flex' width='70%' justifyContent='center' alignItems='center' backgroundColor='#888888' marginRight='20px'>
          Popular Times
        </Box>
      </Box>
      <Box display='flex' width='100%' height='150px'>
        <Box display='flex' flexDirection='row' width='100%' justifyContent='center' alignItems='center' backgroundColor='#AAAAAA' margin="20px">
          Description
        </Box>        
      </Box>
    </>
  )
};

export default LocationDetail;