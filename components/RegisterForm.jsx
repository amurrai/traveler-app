"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";



const RegisterForm = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: formData.email,
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
        password: formData.password
      })
    });

    if (response.ok) {
      router.push("/login");
    } else {
      console.log("Error");
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh">
    <Paper elevation={4} sx={{ padding: 2, height: '500px', minWidth: 'sx', backgroundColor: '#F0F5F9' }}>
      <Typography component="h1" variant="h5" gutterBottom>Sign Up</Typography>
      <Box component="form" onSubmit={onSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}> 
            <TextField variant="outlined" required fullWidth 
              id="email"
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}/>
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" required fullWidth
              id="username"
              name="username"
              label="Username"
              type="text"
              value={formData.username}
              onChange={handleChange}/>
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" required fullWidth
              id="first_name"
              name="first_name"
              label="First Name"
              type="text"
              value={formData.first_name}
              onChange={handleChange}/>
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" required fullWidth
              id="last_name"
              name="last_name"
              label="Last Name"
              type="text"
              value={formData.last_name}
              onChange={handleChange}/>
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" required fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}/>
          </Grid>
        </Grid>
        <Box mt={3} textAlign="center">
          <Button type="submit" fullWidth variant="contained" color="primary">
            Register
          </Button>
        </Box>
      </Box>
    </Paper>
    </Box>
  )
};

export default RegisterForm;