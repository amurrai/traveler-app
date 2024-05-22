import { fetchCities, fetchLocationDetailsByCity } from "@/lib/data";
import { 
  Box, 
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography
} from "@mui/material";

const SelectCity = async () => {
  const {cities, images} = await fetchCities();

  console.log(cities, images);

  return (
    <Paper sx={{ mt: 10, mb: 2, mx: 'auto', p: 4, minHeight: '100vh', width: '95vw'}}>
      <Typography sx={{ mt: -1, mb: 2 }} variant='h4'>CREATE ROUTE</Typography>
      <Typography variant='h5' pt={2} mb={2}>Select a city:</Typography>
      <Stack direction="row" spacing={5}>  
          {cities.map(city => {
            return (
              <Card key={city.id} sx={{ width: 300 }}>
                <CardActionArea href={`/routes/create/${city.id}`}>
                  <CardMedia
                    component="img"
                    image={images[city.id-1]}
                    sx={{ height: 300, width: 300}}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {city.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
      </Stack>
    </Paper>
  );
};

export default SelectCity