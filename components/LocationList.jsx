'use client'
import React, { useState } from "react";
import { 
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
} from "@react-google-maps/api";
import CreateRouteForm from "./CreateRouteForm";


const LocationList = ({locations}) => {
  const center = { lat: locations[0].latitude, lng: locations[0].longitude };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  // Google Maps and Routes states
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  // State to monitor selected locations
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [locationData, setLocationData] = useState({});
  
  const handleCheckBoxChange = (check) => {
    // Reset DirectionsResponse if selection changes
    setDirectionsResponse(null);
    const checkedPlaces = check.target.value;
    if(check.target.checked){
      setSelectedPlaces([...selectedPlaces,checkedPlaces])
    }
    else{
      setSelectedPlaces(selectedPlaces.filter(id=>id !== checkedPlaces))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formJson = Object.fromEntries(form.entries());

    // Variables for generating the route
    const origin = { placeId: locations.find(x => x.id == formJson.origin)?.place_id };
    const destination = { placeId: locations.find(x => x.id == formJson.destination)?.place_id };
    let waypoints = [];

    // Adds all locations except the origin and destination to the waypoints array
    selectedPlaces.map((place) => {
      if(place !== formJson.origin && place !== formJson.destination)
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

    setLocationData({
      origin_id: formJson.origin,
      destination_id: formJson.destination,
      locations: selectedPlaces
    });
    
    setDirectionsResponse(results);
    };


  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: '15px'}}>
          {locations.map(location => {
            return (
              <Card key={location.id} sx={{ width: 200, height: 200 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={location.image}
                  title={location.name}
                />
                <CardContent sx={{ p: 1}}>
                  <FormControlLabel control={
                    <Checkbox
                      value={location.id}
                      onChange={(e) => {handleCheckBoxChange(e)}}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  } label={location.name}>
                  </FormControlLabel>
                  
                </CardContent>
              </Card>
            )
          })}
        </Box>
        <Box sx={{ display: 'flex', gap: '10px', mt: 4, mb: 4 }}>
            <FormControl sx={{width: '300px'}}>
              <InputLabel> Select starting location
              </InputLabel>
              <Select autoWidth name='origin'>
                {!selectedPlaces && <MenuItem>' '</MenuItem>}
                {selectedPlaces && selectedPlaces.map((id) => (
                  <MenuItem 
                    key={id} 
                    value={id}>{locations.find(x => x.id == id)?.name}

                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{width: '300px'}}>
              <InputLabel> Select ending location
              </InputLabel>
              <Select autoWidth name='destination'>
                {selectedPlaces.map((id) => (
                  <MenuItem key={id} value={id}>{locations.find(x => x.id == id)?.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" label='Submit' type='submit'>Submit</Button>

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
            <DirectionsRenderer directions={directionsResponse} />
          </GoogleMap>
          <CreateRouteForm locationData={locationData}/>          
        </Box>
      )}
    </Box>
  )
};

export default LocationList