"use client";

import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react"

const EditAccountForm = ({ userId }) => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    password: '',  
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        password: formData.password
      })
    });

    if (response.ok) {
      setFormData({ password: '' });
    } else {
      console.log("Error");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Box display='flex' flexDirection='column'>
        <TextField
          label="Enter New Password"
          name="password"
          value={formData.password}
          onChange={handleChange} />
        <Box display="flex" marginTop={1}>
          <Button type="submit" variant="contained" color="primary" sx={{ width: "100%"}}>
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  )
}

export default EditAccountForm;