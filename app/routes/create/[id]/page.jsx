import { fetchLocationDetailsByCity, fetchCities } from "@/lib/data";
import LocationList from "@/components/LocationList";
import LocationSelectionMap from "@/components/LocationSelectionMap";
import { 
  Box, 
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
    <Box sx={{ mt: 10, mx: 'auto', width: '95vw'}}>
      <Typography variant='h3'>Create route for {city.name}</Typography>
      <LocationSelectionMap locations={locations} ></LocationSelectionMap>
      <Typography variant='h5' pt={2}>Select places to add:</Typography>
      <LocationList locations={locations} />
    </Box>
  )
};

export default CreateRoute