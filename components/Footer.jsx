import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ paddingRight: 2 }}>
          WanderQuest
        </Typography>
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }} component="div">
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact us</Button>
          <Button color="inherit">Who we are</Button>          
        </Stack>
      </Toolbar>
    </AppBar>
  )

};

export default Footer;