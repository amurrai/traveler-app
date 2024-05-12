"use client";

import { signOut } from "next-auth/react";
import { Button } from "@mui/material";

// client component to handle button onClick 
const LogoutButton = () => {
  return (
    <Button onClick={() => 
      signOut({
        redirect: true,
        callbackUrl: '/'
      })} color="inherit">Logout</Button>
  )
};

export default LogoutButton;