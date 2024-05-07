import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon"

const Navbar = () => {
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