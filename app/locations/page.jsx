
import Location from "@/components/Location";
import { fetchFilteredLocations, fetchLocation } from "@/lib/data";
import Link from "next/link";
import React from "react";
import Filter from "@/components/Filter";
import { Grid } from "@mui/material";



const LocationsPage = async(props) =>  {

  console.log(props);

  const category = props.searchParams.category || '';
  const minRating = props.searchParams.minRating || '';
   const locations = await fetchFilteredLocations(category, minRating );

 
 
  return (
    <ul>
      <Grid container spacing={3} sx={{ paddingTop: 10 }}>
      <Grid item xs={12} md={3}>
      <Filter minRating={minRating} selectedCategory={category}/>
      </Grid>
      <ul>
      {locations.map(location => {
        return (
          <li key={location.id} >
            <Link href={`/locations`}>
              <Location location={location}  />
            </Link>
          </li>
        );
      })}
    </ul>


        </Grid>
        
    </ul>
    
  );
};

export default LocationsPage;




// 'use client'
// import Location from "@/components/Location";
// import { fetchFilteredLocations, fetchLocation } from "@/lib/data";
// import Link from "next/link";
// import React, {useState, useEffect} from "react";
// import Filter from "@/components/Filter";
// import { Grid } from "@mui/material";



// const LocationsPage = async() =>  {
   
//   const [locations, setLocations] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [minRating, setMinRating] = useState('');
//   const [filteredLocations, setFilteredLocations] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchedLocations = await fetchLocation();
//       setLocations(fetchedLocations);
//     };

//     fetchData();
//   }, []);

//   const handleFilterChange = (selectedCategory, minRating) => {
//     setSelectedCategory(selectedCategory);
//     setMinRating(minRating);
//   };

//   useEffect(() => {
//     const fetchFilteredLocations = async () => {
//       try {
//         const response = await fetch(`/api/filtered-locations?selectedCategory=${selectedCategory}&minRating=${minRating}`);
//         const filteredLocations = await response.json();
//         setFilteredLocations(filteredLocations);
//       } catch (error) {
//         console.error('Error fetching filtered locations:', error);
//       }
//     };

//     fetchFilteredLocations();
//   }, [selectedCategory, minRating]);
 
 
//   return (
//     <ul>
//       <Grid container spacing={3} sx={{ paddingTop: 10 }}>
//       <Grid item xs={12} md={3}>
//       <Filter
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//         minRating={minRating}
//         setMinRating={setMinRating}
//         setFilteredLocations={setFilteredLocations}
//         onChange={handleFilterChange} // Pass the handler to the Filter component
//       />
//       </Grid>
//       <ul>
//       {(filteredLocations.length > 0 ? filteredLocations : locations).map(location => (
//               <li key={location.id}>
//                 <Link href={`/locations`}>
//                   <Location location={location} />
//                 </Link>
//               </li>
//             ))}
//     </ul>


//         </Grid>
        
//     </ul>
    
//   );
// };

// export default LocationsPage;


