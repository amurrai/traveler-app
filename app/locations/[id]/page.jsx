import LocationDetail from "@/components/LocationDetail";
import { fetchLocationDetails } from "@/lib/data";
import React from "react";


const LocationDetailsPage = async ({ params }) => {

  const locationDetails = await fetchLocationDetails(params.id);

  return (
    <div className="space-y-4">
      {locationDetails ? (  
        <LocationDetail location={locationDetails} />
      ) : (
        <div>Loading....</div>
      )}
    </div>
  )
};
export default LocationDetailsPage;
