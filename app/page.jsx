import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Box, Grid, Typography } from "@mui/material";
import RouteListInfoItem from "../components/RouteListInfoItem";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <Box display='flex' flexDirection='column' alignItems='center' marginTop={8}>
      <Box display='flex' width='100%' height='200px' alignItems='center' backgroundColor='#DDDDDD'>
        <Typography variant="h5" paddingLeft={5}>
          Travel Companion is an app that will transform your city ventures into self guided exploration adventures!
        </Typography>
      </Box>
      <Box>
        <Grid container columnSpacing={1} rowSpacing={5}>
          <RouteListInfoItem />
          <RouteListInfoItem />
          <RouteListInfoItem />
          <RouteListInfoItem />
          <RouteListInfoItem />
          <RouteListInfoItem />
        </Grid>
      </Box>      
    </Box>  
  );
}
