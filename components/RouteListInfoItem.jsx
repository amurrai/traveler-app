import { Box, Grid, Typography } from "@mui/material";

const RouteListInfoItem = ({ route }) => {
  console.log(route);
  return (
    <Grid display='flex' item xs={12} sm={6} md={4} justifyContent={'center'}>
      <Box display='flex' flexDirection='row' height='200px' width='400px'>
        <Box 
          component="img"
          display='flex' 
          justifyContent={'center'} 
          alignItems={'center'} 
          height='180px' 
          width='180px' 
          margin={1} 
          backgroundColor='#666666'
          overflow='hidden' 
          src={route.location[0].location.image || ''}
          />
        <Box height='180px' width='180px' margin={1}>
          <Box height='20%'>
            <Typography variant='h6'>
              {route.route_name || ''}
            </Typography>            
          </Box>
          <Box height='80%'>
            <Typography variant='body'>
              {route.description || ''}
            </Typography>            
          </Box>
        </Box>
      </Box>
    </Grid>
  )
};

export default RouteListInfoItem;