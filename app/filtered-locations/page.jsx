// 'use client'
// import React, { useState, useEffect } from 'react';
// import Filter from '@/components/Filter';
// import FilteredLocations from '@/components/FilteredLocations';

// const FilteredLocationsPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [minRating, setMinRating] = useState('');
//   const [filteredLocations, setFilteredLocations] = useState([]);


//   const handleFilterChange = (category, rating) => {
//     setSelectedCategory(category);
//     setMinRating(rating);
//   };

//   useEffect(() => {
//     const fetchFilteredLocations = async () => {
//       try {
//         const response = await fetch(`/api/filtered-locations?selectedCategory=${selectedCategory}&minRating=${minRating}`);
//         const filteredLocations = await response.json();
//         setFilteredLocations(filteredLocations); //Setting filtered locations and ratings
//         console.log("Our filtered locations are from pageJsx filtered locations:", filteredLocations);//works [{},...]
//       } catch (error) {
//         console.error('Error fetching filtered locations:', error);
//       }
//     };
//     fetchFilteredLocations();
//   }, [selectedCategory, minRating]);



//   return (
//     <div>
//       <Filter setFilteredLocations={setFilteredLocations} 
//               onChange={handleFilterChange} 
//               selectedCategory={selectedCategory}  
//               setSelectedCategory={setSelectedCategory}
//               minRating={minRating}
//               setMinRating={setMinRating}
//               />
//       {/* <FilteredLocations filteredLocations={filteredLocations} /> */}
//     </div>
//   );
// };

// export default FilteredLocationsPage;


// // 'use client'
// // import React, { useState, useEffect } from 'react';
// // import Filter from '@/components/Filter';
// // import FilteredLocations from '@/components/FilteredLocations';

// // const FilteredLocationsPage = () => {
// //   const [selectedCategory, setSelectedCategory] = useState('');
// //   const [minRating, setMinRating] = useState('');
// //   const [filteredLocations, setFilteredLocations] = useState([]);
// //   const [allLocations, setAllLocations] = useState([]);

// //   useEffect(() => {
// //     // Fetch all locations on component mount
// //     const fetchAllLocations = async () => {
// //       try {
// //         const response = await fetch('/api/locations'); 
// //         const locations = await response.json();
// //         setAllLocations(locations);
// //       } catch (error) {
// //         console.error('Error fetching all locations:', error);
// //       }
// //     };

// //     fetchAllLocations();
// //   }, []);

// //   const handleFilterChange = (category, rating) => {
// //     setSelectedCategory(category);
// //     setMinRating(rating);
// //   };

// //   useEffect(() => {
// //     const fetchFilteredLocations = async () => {
// //       try {
// //         const response = await fetch(`/api/filtered-locations?selectedCategory=${selectedCategory}&minRating=${minRating}`);
// //         const filteredLocations = await response.json();
// //         setFilteredLocations(filteredLocations);
// //       } catch (error) {
// //         console.error('Error fetching filtered locations:', error);
// //       }
// //     };

// //     if (selectedCategory || minRating) {
// //       fetchFilteredLocations();
// //     } else {
// //       // If no filter is applied, set filtered locations to all locations
// //       setFilteredLocations(allLocations);
// //     }
// //   }, [selectedCategory, minRating, allLocations]);

// //   return (
// //     <div>
// //       <Filter 
// //         setFilteredLocations={setFilteredLocations} 
// //         onChange={handleFilterChange} 
// //         selectedCategory={selectedCategory}  
// //         setSelectedCategory={setSelectedCategory}
// //         minRating={minRating}
// //         setMinRating={setMinRating}
// //       />
// //       <FilteredLocations filteredLocations={filteredLocations} />
// //     </div>
// //   );
// // };

// // export default FilteredLocationsPage;
