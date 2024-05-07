"use client";

import { signOut } from "next-auth/react";

// client component to handle button onClick 
const LogoutButton = () => {
  return (
    <button onClick={() => 
      signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/login`
      })}>Logout</button>
  )
};

export default LogoutButton;