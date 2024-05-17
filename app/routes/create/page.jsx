import { fetchCities, } from "@/lib/data";
import { 
  Box, 
  List, 
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";

const SelectCity = async () => {
  
  const cities = await fetchCities();
  return (
    <Box display='flex' flexDirection='column' width='100%' height='100%' alignItems='center' justifyContent='center'>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mt: 20 }}>  
        <nav aria-label="city selector">
          <List>
            <ListItemText sx={{ pl: 2}} primary='  Please select a city:' />
            {cities.map(city => {
              return (
                <ListItem key={city.id}>
                  <ListItemButton href={`./create/${city.id}`}>
                    <ListItemText primary={city.name} />                    
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </nav>
      </Box>
    </Box>
  );
};

export default SelectCity