import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Box, Stack, Button, Typography } from "@mui/material";
import RouteListItem from "@/components/RouteListItem";
import { fetchUserRoutes } from "@/lib/data"
import React from "react";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if(!userId) {
    return (
      <Box display='flex' width='100%' marginTop={50} justifyContent={'center'}>
      <Typography variant='h5'>
        Please log in
      </Typography>
    </Box>   
    );
  }


  console.log(session);

  const routes = await fetchUserRoutes(userId);

  return (
    <>
    <Box display='flex' flexDirection='row' width='100%' justifyContent='space-between' marginTop={10}>
      <Box display='flex' minWidth='200px' maxWidth='200px' flexDirection='column'>
        <Stack position='fixed' direction="column" spacing={2} component="div" margin={2}>
          <Button variant='contained'>Your Routes</Button>
          <Button variant='outlined'>Your Locations</Button>
          <Button variant='outlined' href="/published">Published Routes</Button>
        </Stack>
      </Box>
      <Box display='flex' flexGrow='1' flexDirection='column' alignItems={'center'} margin={2}>
        <Box display='flex' direction='row' width='100%' justifyContent={"space-between"}>
        <Typography variant='h5'>
            YOUR SAVED ROUTES
          </Typography>
          <Button variant='contained'>
            Add New Route
          </Button>          
        </Box>
        {routes.map(route => (
          <RouteListItem key={route.id} route={route} />
        ))}
      </Box>
    </Box>
  </>
  );
};

export default DashboardPage;