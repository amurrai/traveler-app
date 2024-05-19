'use client'
import React, { useState } from "react";
import { 
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  IconButton,
  Modal,
} from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

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
        height: 230,
        }}>
      <CardMedia
        sx={{ minHeight: 140 }}
        image={location.image}
        title={location.name}
      />
      <CardContent sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        py: '10px !important' 
        }}>
        <FormControlLabel control={
          <Checkbox
            value={location.id}
            onChange={(e) => {handleCheckBoxChange(e)}}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        } label={location.name}>
        </FormControlLabel>
        <IconButton>
          <InfoOutlinedIcon sx={{ color: "grey" }} onClick={handleOpen} />  
        </IconButton>
      </CardContent>
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