import { Box, IconButton, Paper, Typography } from "@mui/material";
import { HighlightOffOutlined, PushPinOutlined } from "@mui/icons-material"
import Link from "next/link";

const RouteListItem = ({ route, onDelete, onSetActive, publish }) => {

  const handleDeleteClick = (event) => {
    event.preventDefault();
    onDelete(route.id);
  };

  const handleSetActiveClick = (event) => {
    event.preventDefault();
    onSetActive(route.id);
  };
  
console.log(publish)

  return (
    <Paper component={Link} href={`/route-details/${route.id}`} elevation={4}
      sx={{ display: 'flex',
        width: '100%',
        flexDirection: 'row',
        marginTop: 2,
        padding: 2,
        height: '185px',
        overflow: 'hidden',
        backgroundColor: '#F0F5F9'
      }}>
      {route && <Box
        component='img'
        display='flex'
        direction='column'
        width='250px'
        height='150px'
        justifyContent='center'
        alignItems='center'
        overflow='hidden'
        sx= {{ minWidth: '250px', minHeight: '150px' }}
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
              {!route.is_active && !publish && (<IconButton size="small" edge="start" color="inherit" aria-label="active" onClick={handleSetActiveClick}>
                <PushPinOutlined />
              </IconButton>)}
              <IconButton size="small" edge="start" color="inherit" aria-label="delete" onClick={handleDeleteClick}>
                <HighlightOffOutlined />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box display='flex' width='100%' height='110px' paddingTop={1}>
          {route && <Typography variant="body1"
            sx={{ paddingLeft: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical'
            }}>
            {route.description}
          </Typography>}
        </Box>
      </Box>
    </Paper>
  )
};

export default RouteListItem;
