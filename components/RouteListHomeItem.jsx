import { Box, Grid, IconButton, Typography } from "@mui/material";
import { EditOutlined, HighlightOffOutlined, PushPinOutlined } from "@mui/icons-material"

const RouteListHomeItem = () => {
  return (
    <Grid display='flex' item xs={12} sm={6} md={4} justifyContent={'center'}>
      <Box display='flex' flexDirection='row' height='200px' width='400px'>
        <Box display='flex' justifyContent={'center'} alignItems={'center'} height='180px' width='180px' margin={1} backgroundColor='#666666'>
          Photo
        </Box>
        <Box height='180px' width='180px' margin={1}>
          <Box height='20%'>
            <Typography variant='h6'>
              Name
            </Typography>            
          </Box>
          <Box height='80%'>
            <Typography variant='body'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Typography>            
          </Box>
        </Box>
      </Box>
    </Grid>
  )
};

export default RouteListHomeItem;