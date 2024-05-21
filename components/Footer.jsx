import { AppBar, Box, Toolbar, Typography, Stack, Button } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Typography variant="h6" component="div" sx={{ paddingRight: 2 }}>
            WanderQuest
          </Typography>
          <Stack direction="row" spacing={2} component="div">
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact us</Button>
            <Button color="inherit">Who we are</Button>          
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  )

};

export default Footer;