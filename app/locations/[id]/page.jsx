// import LocationDetail from "@/components/LocationDetail";
// import { fetchLocationDetails } from "@/lib/data";
// import React from "react";




// const LocationDetailsPage = async (props) => {

// console.log('Location detail props', props)
// const locationId = props.searchParams.id;
// const locationDetails = await fetchLocationDetails(locationId);


//   // Location detail props { params: { id: '1' }, searchParams: {} }
//   // Location detail props { params: { id: '1' }, searchParams: {} }

//   return (
//     <div className="space-y-4">
//       {locationDetails ? (  
//         <LocationDetail location={locationDetails} onClick={handleLocationClick} />
//       ) : (
//         <div>Loading....</div>
//       )}
      

//     </div>
//   )
// }

// export default LocationDetailsPage;


import LocationDetail from "@/components/LocationDetail";
import { fetchLocationDetails } from "@/lib/data";
import React from "react";



const LocationDetailsPage = async ({ params }) => {
  const { id } = params;

  const locationDetails = await fetchLocationDetails(id);

    return (
      <div className="space-y-4">
        {locationDetails ? (
          <LocationDetail location={locationDetails} />
        ) : (
          <div>Loading....</div>
        )}
      </div>
    );

};
export default LocationDetailsPage;
