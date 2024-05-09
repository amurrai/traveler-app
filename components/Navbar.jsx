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
        <IconButton size="large" edge="start" color="inherit" aria-label="logo" href="/">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ paddingRight: 2 }}>
          <Link href="/">My Cool App</Link>
        </Typography>
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }} component="div">
          <Button color="inherit" href="/popular-routes">Popular Routes</Button>
          <Button color="inherit">Popular Locations</Button>
          <Button color="inherit" href="/dashboard">Dashboard</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          {session?.user ? (
            <>
              <Button color="inherit">Account</Button>
              <LogoutButton />
            </>
          ) : (
            <>
              <Button color="inherit" href="/login">Login</Button>
              <Button color="inherit" href="/register">Register</Button>
            </>
          )}
          {/* <Button color="inherit">Account</Button>
          <Button color="inherit">Logout</Button>         */}
        </Stack>
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;