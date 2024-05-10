import { Box, IconButton, Typography } from "@mui/material";
import { EditOutlined, HighlightOffOutlined, PushPinOutlined } from "@mui/icons-material"

const RouteListItem = () => {
  return (
    <Box display='flex' width='100%' direction='row' marginTop={2}>
      <Box display='flex' direction='column' width='250px' height='150px' justifyContent='center' alignItems='center' backgroundColor='#888888'>
        Photo
      </Box>
      <Box width='100%'>
        <Box display={'flex'} direction='row' justifyContent={'space-between'}>
          <Typography display='flex' variant="h5" paddingLeft={1} alignItems={'center'}>Calgary trip</Typography>
          <Box>
            <Box display={'flex'} direction='row' justifyContent={'right'}>
              <Typography variant="body">Created on: 05/07/2024</Typography>
            </Box>
            <Box display={'flex'} direction='row' justifyContent={'right'}>
              <IconButton size="small" edge="start" color="inherit" aria-label="edit" href="/">
                <PushPinOutlined />
              </IconButton>
              <IconButton size="small" edge="start" color="inherit" aria-label="edit" href="/">
                <EditOutlined />
              </IconButton>
              <IconButton size="small" edge="start" color="inherit" aria-label="delete" href="/">
                <HighlightOffOutlined />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box display='flex' width='100%' maxHeight='100%' justifyContent='center' alignItems='center' paddingTop={1}>
          <Typography variant="body" paddingLeft={1}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident"
          </Typography>
        </Box>
      </Box>
    </Box>
  )
};

export default RouteListItem;
