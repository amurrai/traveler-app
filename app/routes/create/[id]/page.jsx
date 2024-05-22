import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next"
import { fetchLocationDetailsByCity, fetchFavoriteLocations } from "@/lib/data";
import LocationList from "@/components/LocationList";
import LocationSelectionMap from "@/components/LocationSelectionMap";
import { 
  Box, 
  Paper,
  Typography
} from "@mui/material";

const CreateRoute = async ({params}) => {
  const locations = await fetchLocationDetailsByCity(params.id);
  const city = await prisma.city.findUnique({
        where: {
          id: parseInt(params.id)
        }
  });
  const session = await getServerSession(authOptions)

  const getFavoritesId = async (user_id) => {
    const favLocations = await fetchFavoriteLocations(user_id);

    const favInCity = favLocations.userLocations.filter(location => {
      return locations.find(x => x.id == location.location_id);
    })
    .map((location) => location.location_id)
    return favInCity
  };
  const favorites = await getFavoritesId(session.user.id);

  return (
    <Paper sx={{ mt: 10, mb: 2, mx: 'auto', p: 4, width: '95vw'}}>
      <Typography sx={{ mt: -1, mb: 2 }} variant='h4'>CREATE ROUTE FOR {city.name.toUpperCase()}</Typography>
      <LocationSelectionMap locations={locations} ></LocationSelectionMap>
      <Typography variant='h5' pt={2} mb={2}>Select places to add:</Typography>
      <LocationList locations={locations} favorites={favorites} />
    </Paper>
  )
};

export default CreateRoute