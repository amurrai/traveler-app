import { fetchLocationDetailsByCity, fetchCities } from "@/lib/data";
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

  return (
    <Paper sx={{ mt: 10, mb: 2, mx: 'auto', p: 4, width: '95vw'}}>
      <Typography sx={{ mt: -1, mb: 2 }} variant='h3'>Create route for {city.name}</Typography>
      <LocationSelectionMap locations={locations} ></LocationSelectionMap>
      <Typography variant='h5' pt={2}>Select places to add:</Typography>
      <LocationList locations={locations} />
    </Paper>
  )
};

export default CreateRoute