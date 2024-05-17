import LocationList from "@/components/LocationList";
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
  console.log(locations);
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
      <Paper sx={{ width: "50%" }}>
        <Rating
          key={rating.id}
          name="read-only"
          value={rating.rating}
          readOnly
        />
        {rating.comment}
      </Paper>
    )
  });
  console.log(routeDetails);

  return (
    <>
      <Box display='flex' flexDirection='row' width='100%' justifyContent='space-between' marginTop={10}>
        <Box display='flex' flexGrow='1' flexDirection='column' margin={2}>
          <Box display='flex' direction='row' width='100%' justifyContent={"space-between"}>
            <Typography variant='h5'>
                {routeDetails.route_name}
            </Typography>
            <Button variant='contained'>
              Add To Favourites
            </Button>    
          </Box>
          <Box display='flex' paddingTop={1}>
            <Typography variant='body1'>
              {routeDetails.description}
            </Typography>
          </Box>
          <Box display='flex' sx={{ mt: 2, ml: 0, width: '100%' }} border={1} margin={10}>
            <LocationList locations={locations} />
          </Box>
          <Typography variant='h6'>
            Comments
          </Typography>
          {ratings}
        </Box>
      </Box>
      {session?.user && <RouteRatingForm route_id={routeDetails.id}/>}
    </>

    // <div className="space-y-4">
    //   <table className="text-left">
    //     <thead>
    //       <tr>
    //         <th>Route Name</th>
    //         <th>Description</th>
    //         <th>Locations</th>
    //         <th>Ratings</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td>{routeDetails.route_name}</td>
    //         <td>{routeDetails.description}</td>
    //         <td>{locationNames}</td>
    //         <td>{ratings}</td>
    //       </tr>
    //     </tbody>
    //   </table>

    // {session?.user && <RouteRatingForm route_id={routeDetails.id}/>}
    // </div>
  )
}

export default RouteDetailsPage;