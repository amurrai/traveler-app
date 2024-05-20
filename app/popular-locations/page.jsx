import Route from "@/components/Route";
import { fetchPublicRoutes } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { Box, Grid, Button, TextField, Typography } from "@mui/material";
import RouteListInfoItem from "@/components/RouteListInfoItem";

const PopularLocationsPage = async () => {
  const routes = await fetchPublicRoutes();
  return (
    <>
    <Box display='flex' flexDirection='row' width='100%' justifyContent='space-between' marginTop={10}>
      <Box display='flex' minWidth='200px' maxWidth='200px' flexDirection='column' padding='16px'>
        <Typography variant="h5" gutterBottom>
          Filter Options
        </Typography>
        <TextField label="City" fullWidth margin="normal"/>
        <TextField label="Category" fullWidth margin="normal"/>        
        <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Apply Filters
        </Button>    
      </Box>
      <Box display='flex' flexGrow='1' flexDirection='column' alignItems={'center'} margin={2}>
        <Box display='flex' direction='row' width='100%' justifyContent={"center"}>
          <Typography variant='h5' gutterBottom>
            MOST POPULAR LOCATIONS
          </Typography>
        </Box>
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
    </>
  );
}

export default PopularLocationsPage;
