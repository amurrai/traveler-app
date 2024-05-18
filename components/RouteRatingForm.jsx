"use client";

import { Box, Button, Rating, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RouteRatingForm = ({ route_id }) => {
  
  const router = useRouter();

  // session for client side to get user id 
  const { data } = useSession();

  const [formData, setFormData] = useState({
      rating: 1,
      comment: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    const response = await fetch("/api/route-rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        rating: formData.rating,
        comment: formData.comment,
        user_id: data.user.id,
        route_id: route_id
      })
    });

    if (response.ok) {
      router.refresh();
    } else {
      console.log("Error");
    }
  };

  return (
    <Box display="flex" flexDirection="column" component="form" paddingTop={1} onSubmit={onSubmit}>
      <Rating
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        size="large"
      />
      <TextField name='comment' label='Comment' onChange={handleChange} value={formData.value} variant='outlined' multiline rows={4} sx={{ my: 1, width: "50%" }}/>
      <Button variant='contained' type='submit' sx={{ mb: 2, width: "200px"}}>Submit Comment</Button>
    </Box>
  )
}

export default RouteRatingForm;