"use client"

import { Box, Stack, Button, Typography } from "@mui/material";
import RouteListItem from "@/components/RouteListItem";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useSession } from 'next-auth/react';

const DashboardPage = () => {

  const { data: session } = useSession();

  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  

  const fetchRoutes = async () => {        
    try {
      const routesResponse = await axios.get(`/api/route?userId=${session.user.id}&type=all`);
      setRoutes(routesResponse.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {    
    if (session) {            
      fetchRoutes();      
    }
  }, [session]); // has to be session here so this use effect will trigger after the session has been loaded with the fetch session useEffect

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

  const handleSetActiveRoute = async (routeId) => {
    try {
      const response = await fetch(`/api/route?userId=${session.user.id}&routeId=${routeId}`, {
        method: "PUT",
      });

      if (!response.ok) {
        throw new Error("Failed to set active route");
      }

      fetchRoutes();
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    if(session === null) {
      console.log("not logged in")
      return (
        <Box display='flex' width='100%' marginTop={50} justifyContent={'center'}>
        <Typography variant='h5'>
          Please Log In
        </Typography>
      </Box>   
      );
    }
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

  const activeRoute = routes.find(route => route.is_active);
  const otherRoutes = routes.filter(route => !route.is_active);

  return (
    <>
    <Box display='flex' flexDirection='row' width='100%' justifyContent='space-between' marginTop={10}>
      <Box display='flex' minWidth='200px' maxWidth='200px' flexDirection='column'>
        <Stack position='fixed' direction="column" spacing={2} component="div" padding={2}>
          <Button variant='contained'>Your Routes</Button>
          <Button variant='outlined' href="/favorites">Your Locations</Button>
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
        {activeRoute && (
            <RouteListItem key={activeRoute.id} route={activeRoute} onDelete={handleDeleteRoute} onSetActive={handleSetActiveRoute} publish={false} />
          )}
        {otherRoutes.map(route => (
          <RouteListItem key={route.id} route={route} onDelete={handleDeleteRoute} onSetActive={handleSetActiveRoute} publish={false} />
        ))}
      </Box>
    </Box>
  </>
  );
};

export default DashboardPage;