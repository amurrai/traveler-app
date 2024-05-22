import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Box, Grid, Paper, Typography } from "@mui/material";
import RouteListInfoItem from "../components/RouteListInfoItem";
import { fetchPublicRoutes } from "@/lib/data";

export default async function Home() {
  const session = await getServerSession(authOptions)

  const publicRoutes = await fetchPublicRoutes();

  const routeListInfoItem = publicRoutes.map(route => {
    return (
      <RouteListInfoItem key={route.id} route={route} />
    );
  });

  console.log(publicRoutes);
  return (
    <Paper sx={{ mt: 10, mb: 2, mx: 'auto', p: 2, width: '95vw'}}>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Box display='flex' flexDirection='column' width='100%' height='150px' justifyContent='center'>
          <Typography variant="h3" paddingLeft={5}>
            WanderQuest
          </Typography>
          <Typography variant="h5" paddingLeft={5}>
            Enhance Your City Exploration with Custom Self-Guided Adventures!  
          </Typography>        
        </Box>
        <Box>
          <Typography variant="h5" sx={{ m: 2 }}>
            Popular routes  
          </Typography>
          <Grid container columnSpacing={1} rowSpacing={5}>
            {routeListInfoItem}
          </Grid>
        </Box>      
      </Box>  
    </Paper>
  );
}


