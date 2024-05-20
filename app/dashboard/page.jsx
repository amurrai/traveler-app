"use client"

import { Box, Stack, Button, Typography } from "@mui/material";
import RouteListItem from "@/components/RouteListItem";
import { useEffect, useState } from "react";

const DashboardPage = () => {

  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  const fetchRoutes = async () => {        
    try {
      const routesResponse = await fetch(`/api/route?userId=${userId}`);
      if (!routesResponse.ok) {
        throw new Error("Failed to fetch routes");
      }
      const routesData = await routesResponse.json();
      setRoutes(routesData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const sessionResponse = await fetch("/api/session");
        if (!sessionResponse.ok) {
          throw new Error("Failed to fetch session");
        }
        const session = await sessionResponse.json();
        setUserId(session.user.id);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  useEffect(() => {    
    if (userId) {            
      fetchRoutes();      
    }
  }, [userId]); // has to be userId here so this use effect will trigger after the userId has been loaded with the fetch session useEffect

  const handleDeleteRoute = async (routeId) => {
    try {
      const response = await fetch(`/api/route?routeId=${routeId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete route");
      }

      // Refresh routes
      fetchRoutes();
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <Box display='flex' width='100%' marginTop={50} justifyContent={'center'}>
        {/* <Typography variant='h5'>Loading...</Typography> */}
      </Box>
    );
  }

  if (error) {
    return (
      <Box display='flex' width='100%' marginTop={50} justifyContent={'center'}>
        <Typography variant='h5'>Error: {error}</Typography>
      </Box>
    );
  }

  if(!userId) {
    return (
      <Box display='flex' width='100%' marginTop={50} justifyContent={'center'}>
      <Typography variant='h5'>
        Please log in
      </Typography>
    </Box>   
    );
  }

  return (
    <>
    <Box display='flex' flexDirection='row' width='100%' justifyContent='space-between' marginTop={10}>
      <Box display='flex' minWidth='200px' maxWidth='200px' flexDirection='column'>
        <Stack position='fixed' direction="column" spacing={2} component="div" padding={2}>
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
          <Button variant='contained' href="/routes/create">
            Add New Route
          </Button>          
        </Box>
        {routes.map(route => (
          <RouteListItem key={route.id} route={route} onDelete={handleDeleteRoute} />
        ))}
      </Box>
    </Box>
  </>
  );
};

export default DashboardPage;