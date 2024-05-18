'use client'
import React, { useEffect, useState } from "react";
import { 
  Box,
  Card,
  CardContent,
  CardMedia
} from "@mui/material";

import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
} from "@react-google-maps/api";
import CreateRouteForm from "./CreateRouteForm";


const LocationList = ({locations, routeValues }) => {
  const center = { lat: locations[0].latitude, lng: locations[0].longitude };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  // Google Maps and Routes states
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  
  const locationIds = locations.map(location => location.id);

  // useEffect hook for autoSubmit 
  useEffect(() => {
    if (isLoaded) {
      handleSubmit({ preventDefault: () => {} });
    }
  }, [isLoaded]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Variables for generating the route
    const origin = { placeId: locations.find(x => x.id == routeValues.origin_id)?.place_id };
    const destination = { placeId: locations.find(x => x.id == routeValues.destination_id)?.place_id };
    let waypoints = [];

    // Adds all locations except the origin and destination to the waypoints array
    locationIds.map((place) => {
      if(place !== routeValues.origin_id && place !== routeValues.destination_id)
      waypoints.push({location: {placeId: locations.find(x => x.id == place)?.place_id}})
    });  

    // API request for route
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: origin,
      destination: destination,
      waypoints: waypoints,
      travelMode: window.google.maps.TravelMode.WALKING,
      optimizeWaypoints: true
    });

    setDirectionsResponse(results);
    };

  return (
    <Box width="100%">
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', mb: 2, flexWrap: 'wrap', justifyContent: 'flex-start', rowGap: '15px' }}>
          {locations.map(location => {
            return (
              <Card key={location.id} sx={{ width: 200, height: 200 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={location.image}
                  title={location.name}
                />
                <CardContent sx={{ p: 1, textAlign: "center" }}>
                  {location.name}
                </CardContent>
              </Card>
            )
          })}
        </Box>
      </form>
      {directionsResponse && (
        <Box>
          <GoogleMap
            center={center}
            zoom={5}
            mapContainerStyle={{ width: '100%', height: '60vh'}}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <DirectionsRenderer directions={directionsResponse} panel={ document.getElementById('panel')} />
          </GoogleMap>
            <Card id="panel" sx={{ p: 2, mt: 2 }}/>
        </Box>
      )}
    </Box>
  )
};

export default LocationList