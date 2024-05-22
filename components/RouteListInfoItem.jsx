import { Box, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";

const RouteListInfoItem = ({ route }) => {
  return (
    <Grid display='flex' item xs={12} sm={6} md={4} justifyContent={'center'}>
      {route && <Paper sx={{ height: 250, width: 500, position: 'relative', overflow: 'hidden'}}>
        <Box display='flex' flexDirection='row' height='100%' width='100%' component={Link} href={`/route-details/${route.id}`}>
          <Box 
            sx={{ left: 0, top: 0, minWidth: 250, height: 250, objectFit: 'cover' }}
            component="img"
            src={route.location[0].location.image}
          />
          <Box margin={2}>
            <Box>
              <Typography variant='h5'>
                {route.route_name}
              </Typography>
            </Box>
            <Box sx={{ pt: 2}}>
              <Typography variant='body2' color='text.secondary' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical' }}>
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