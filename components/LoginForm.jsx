"use client"

import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";

const LoginForm = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    // disabled redirect so we can log any errors
    const loginData = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false
    });

    // push to dashboard route if no authentication errors 
    if (loginData?.error) {
      console.log(`Error: ${loginData.error}`)
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh">
        <Paper elevation={4} sx={{ padding: 2, height: '350px', minWidth: 'sx', backgroundColor: '#F0F5F9' }}>
          <Typography component="h1" variant="h5" gutterBottom>Sign In</Typography>
          <Box component="form" onSubmit={onSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}> 
                <TextField variant="outlined" required fullWidth 
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Box mt={3} textAlign="center">
              <Button type="submit" fullWidth variant="contained" color="primary">
                Login
              </Button>
            </Box>
          </Box>
          <div className="mx-auto my-4 flex w-full items-center justify-evenly
          before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 
          after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>
          <Typography sx={{ textAlign: 'center' }}>
            If you don't have an account, please <Link className="text-blue-500" href="/register">register</Link>
          </Typography>
        </Paper>
      </Box>
  )
};

export default LoginForm;