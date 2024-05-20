import React, { useEffect } from "react";
import { List, ListItem, ListItemText, Grid } from "@mui/material";

const FilteredLocations = (props) => {
  const { filteredLocations } = props;
  console.log("props", props);
  useEffect(() => {
    console.log("Filtered Locations in useEffect:", filteredLocations);
  }, [filteredLocations]);

  //console.log('FilterLocation Component sorted location:', filteredLocations);

  return (
    <Grid container spacing={3}>
    <List sx={{ mt: 2 }}>
      {Array.isArray(filteredLocations) && filteredLocations.length > 0 ? (
        filteredLocations.map((location) => (
          <ListItem key={location.id}>
            <ListItemText
              primary={`Name: ${location.name}`}
              secondary={`City: ${location.city_name}, 
                Description: ${location.description}, 
                Category: ${location.category}, 
                Rating: ${location.rating_id}`}
            />
          </ListItem>
        ))
      ) : (
        <ListItem>
          <ListItemText primary="No locations available" />
        </ListItem>
      )}
    </List>
    </Grid>
  );
};


export default FilteredLocations;
