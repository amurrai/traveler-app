import RouteLocationList from "@/components/RouteLocationList";
import RouteRatingForm from "@/components/RouteRatingForm";
import { authOptions } from "@/lib/auth";
import { fetchRouteDetails } from "@/lib/data";
import { Box, Stack, Button, Typography, Rating, Paper } from "@mui/material";
import { getServerSession } from "next-auth";
import React from "react";

const RouteDetailsPage = async ({params}) => {
  const session = await getServerSession(authOptions);
  const userData = session?.user;

  // const [ratings, setRatings] = useState(0);
  const routeDetails = await fetchRouteDetails(params.id);

  // // todo: move the data processing somewhere else?
  const locations = routeDetails.location.map(entry => entry.location);

  // populate list of locations in route
  const locationNames = locations.map((location) => {
    return (
      <li key={location.id}>
        {location.name}
      </li>
    );
  });

  // // populate list of ratings in route
  const ratings = routeDetails.ratings.map((rating) => {
    return (
      <>
      <Paper sx={{ autoHeight: true, width: '50%', p: 2, my: 1 }}>
        <Rating
          key={rating.id}
          name="read-only"
          value={rating.rating}
          size="large"
          readOnly
        />
        <Box>
          <Typography variant="caption" fontWeight="bold">Reviewed by: {rating.user.username}</Typography>
        </Box>

        <Typography variant="body">{rating.comment}</Typography>
      </Paper>
      </>
    )
  });


  return (
    <Paper sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 10, mb: 2, mx: 'auto', p: 4, width: '95vw'}}>
        <Box display='flex' flexGrow='1' flexDirection='column' >
          <Box display='flex' direction='row' width='100%' justifyContent={"space-between"}>
            <Typography variant='h4'>
                {routeDetails.route_name}
            </Typography>
            <Button variant='contained'>
              Add To Favorites
            </Button>    
          </Box>
          <Box display='flex' paddingTop={1}>
            <Typography variant='body1'>
              {routeDetails.description}
            </Typography>
          </Box>
          <Box display='flex' sx={{ my: 2, mx: 'auto', width: '100%' }} margin={10} width="100%" alignContent="">
            <RouteLocationList
              locations={locations}
              routeValues={{ origin_id: routeDetails.origin_id, destination_id: routeDetails.destination_id }} 
            />
          </Box>
          {session?.user 
          && !routeDetails.ratings.some(rating => rating.user_id === userData.id)
          && (
            <>
              <Typography variant='h6'>
                Leave a Comment
              </Typography>
              <RouteRatingForm route_id={routeDetails.id}/>
            </>)}
          {ratings.length !== 0 && <Typography variant='h6'>
            Ratings From Other Users 
          </Typography>}
          {ratings}
        </Box>
    </Paper>
  )
}

export default RouteDetailsPage;