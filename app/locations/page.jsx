import Location from "@/components/Location";
import { fetchLocation } from "@/lib/data";
import Link from "next/link";
import React from "react";
import Filter from "@/components/Filter";
import { Grid } from "@mui/material";

const LocationsPage = async () => {
  const locations = await fetchLocation();
  return (
    <ul>
      <Grid container spacing={3} sx={{ paddingTop: 10 }}>
      <Grid item xs={12} md={3}>
      <Filter />
      </Grid>
        {locations.map(location => {
          return (
            <li key={location.id}>
              <Link href={`/locations`}>
                <Location location={location} />
              </Link>
            </li>
          );
        })}
        </Grid>
        
    </ul>
    
  );
};

export default LocationsPage;