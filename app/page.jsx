import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Box, Grid, Typography } from "@mui/material";
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
    <Box display='flex' flexDirection='column' alignItems='center' marginTop={8}>
      <Box display='flex' flexDirection='column' width='100%' height='200px' justifyContent='center' backgroundColor='#DDDDDD'>
        <Typography variant="h3" paddingLeft={5}>
          WanderQuest
        </Typography>
        <Typography variant="h5" paddingLeft={5}>
          Enhance Your City Exploration with Custom Self-Guided Adventures!  
        </Typography>        
      </Box>
      <Box>
        <Grid container columnSpacing={1} rowSpacing={5}>
          {routeListInfoItem}
        </Grid>
      </Box>      
    </Box>  
  );
}


