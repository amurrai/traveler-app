'use client'
import React, { useState } from "react";
import { 
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Modal,
} from "@mui/material";

import LocationDetail from "./LocationDetail";

const LocationListItem = ( {location} ) => {
  // Modal state
  const [open, setOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({});
  const handleOpen = () => {
    setSelectedLocation(location);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card key={location.id} 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        width: 250, 
        height: 250 }}>
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
      <Button 
        sx={{ display: 'flex', alignSelf: 'center' }}
        variant="outlined" 
        onClick={handleOpen}>
        Location Info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <LocationDetail location={selectedLocation} />
      </Modal>
    </Card>
  )
};

export default LocationListItem