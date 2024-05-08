import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon"
import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LogoutButton from "./LogoutButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ paddingRight: 2 }}>
          My Cool App
        </Typography>
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }} component="div">
          <Button color="inherit">Popular Routes</Button>
          <Button color="inherit">Popular Locations</Button>
          <Button color="inherit">Dashboard</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Account</Button>
          <Button color="inherit">Logout</Button>        
        </Stack>
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;

{/* <div className=" bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10">
  <div className="flex item-center justify-between">
    <Link href="/">Home</Link>
    {session?.user ? (
      <LogoutButton />
    ) : (
      <div>
        <Link href="/login">Login</Link> | 
        <Link href="/register"> Register</Link>
      </div>
    )}
  </div>
</div> */}