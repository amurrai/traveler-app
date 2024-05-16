import LocationDetail from "@/components/LocationDetail";
import { fetchLocationDetails } from "@/lib/data";
import React from "react";

const LocationDetailsPage = async ({ params }) => {

  const locationDetails = await fetchLocationDetails(params.id);

  const handleLocationClick = (id) => {
    router.push(`/locations/${id}`);
  };


  return (
    <div className="space-y-4">
      {locationDetails ? (  
        <LocationDetail location={locationDetails} onClick={handleLocationClick} />
      ) : (
        <div>Loading....</div>
      )}
      

    </div>
  )
}

export default LocationDetailsPage;