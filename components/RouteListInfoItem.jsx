import { Box, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";

const RouteListInfoItem = ({ route }) => {
  return (
    <Grid display='flex' item xs={12} sm={6} md={4} justifyContent={'center'}>
      {route && <Paper sx={{ height: '95%', width: '95%', position: 'relative', overflow: 'hidden', padding: 1 }}>
        <Box display='flex' flexDirection='row' height='100%' width='100%' component={Link} href={`/route-details/${route.id}`}>
          <Box 
            sx={{ left: 0, top: 0, width: '35%', height: '100%', objectFit: 'cover' }}
            component="img"
            backgroundColor='#666666'
            src={route.location[0].location.image}
          />
          <Box height='180px' width='100%' margin={1}>
            <Box height='20%'>
              <Typography variant='h6' textOverflow= 'ellipsis'>
                {route.route_name}
              </Typography>
            </Box>
            <Box height='80%'>
              <Typography variant='body1' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical' }}>
                {route.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>}
    </Grid>
  )
};

export default RouteListInfoItem;