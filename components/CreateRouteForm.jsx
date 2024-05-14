'use client';

import {
  Box, 
  Button,
  Checkbox,
  FormControlLabel,
  TextField
} from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CreateRouteForm = ( {locationData} ) => {
console.log(locationData);

  const { origin_id, destination_id, locations } = locationData;

  console.log(origin_id, destination_id, locations);
  
  const router = useRouter();

  // session for client side to get user id 
  const { data } = useSession();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const formJson = Object.fromEntries(form.entries());

    const response = await fetch('/api/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formJson.name,
        description: formJson.description,
        user_id: data.user.id,
        is_public: Boolean(formJson.is_public),
        origin_id,
        destination_id,
        locations
      })
    });

    if (response.ok) {
      router.refresh();
    } else {
      console.log('Error');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', mt: 4, mb: 4, width: '50vw' }} component='form' onSubmit={handleSubmit}>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <TextField name='name' label='Name' variant='outlined' sx={{width: '75%'}} />
          <FormControlLabel name='is_public' control={
            <Checkbox  />
          } label='Public Route'/>
        </Box>
      <TextField name='description' label='Description' variant='outlined' multiline rows={4} sx={{ width: '50vw'}} />
      <Button variant='contained' type='submit' sx={{ width: 150, alignSelf: 'center'}}>Save Route</Button>
    </Box>
  )
}

export default CreateRouteForm;