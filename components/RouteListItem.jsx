import { Box, IconButton, Typography } from "@mui/material";
import { EditOutlined, HighlightOffOutlined, PushPinOutlined } from "@mui/icons-material"

const RouteListItem = ({ route }) => {
  return (
    <Box display='flex' width='100%' direction='row' marginTop={2}>
      {route && <Box
        component='img'
        display='flex'
        direction='column'
        width='250px'
        height='150px'
        justifyContent='center'
        alignItems='center'
        overflow='hidden'
        src={route.origin.image}
      />}
      <Box width='100%'>
        <Box display={'flex'} direction='row' justifyContent={'space-between'}>
          {route && <Typography display='flex' variant="h5" paddingLeft={1} alignItems={'center'}>{route.route_name}</Typography>}
          <Box>
            <Box display={'flex'} direction='row' justifyContent={'right'}>
              <Typography variant="body">Created on: {new Date(route.created_on).toLocaleDateString()}</Typography>
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
        <Box display='flex' width='100%' maxHeight='100%' paddingTop={1}>
          {route && <Typography variant="body" paddingLeft={1}>{route.description}</Typography>}
        </Box>
      </Box>
    </Box>
  )
};

export default RouteListItem;

