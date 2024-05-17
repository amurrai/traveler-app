import { selectClasses } from "@mui/material";
import prisma from "./prisma";

const fetchAccountDetails = async (userId) => {
  try {
    const data = await prisma.user.findUnique({
      where: {
        id: parseInt(userId)
      }
    });

    return data;
  } catch (error) {
    throw new Error("Failed to retrieve account details");
  }
}

const fetchPublicRoutes = async () => {
  try {
    const data = await prisma.route.findMany({
      where: {
        is_public: true
      }
    });
    return data;
  } catch (error) {
    throw new Error("Failed to retrieve routes");
  }
};

const fetchPopularRoutes = async () => {
  try {
    const data = await prisma.route.findMany({
      select: {
        id: true,
        route_name: true,
        description: true,
        location: {
          select: {
            location: {
              select: {
                image: true
              }
            }
          }
        }
      }
    });
    return data;
  } catch (error) {
    throw new Error("Failed to retrieve routes");
  }
};

const fetchRouteDetails = async (routeId) => {

  try {
    const data = await prisma.route.findUnique({
      where: {
        id: parseInt(routeId)
      },
      include: {
        location: {
          include: {
            location: true
          }
        },
        
        ratings: true
      }
    });

    console.log(data);

    return data;
  } catch (error) {
    throw new Error("Failed to retrieve route details");
  }
};


const fetchLocation = async () => {
  try {
    const locations = await prisma.location.findMany();

    return locations;
  } catch (error) {
    console.error("Error fetching locations:", error.message);
    console.trace(error);
    throw new Error("Failed to retrieve locations");
  }
    
};


const fetchLocationDetails = async (locationId) => {
  try {
    const location = await prisma.location.findUnique({
      relationLoadStrategy: 'join',
      where: {
        id: parseInt(locationId)
      },
      include: {

        city: true, //relationship with other tabels
        country: true,
        origin: true,
        destination: true,
        locationRoutes: {
          include: {
            route: true
          }
        },
        userLocations: true,
        locationRatings: true

      }
    });

        if (!location) {
          throw new Error("Location not found");
        }
    
        return location;
    
      } catch (error) {
        console.error("Error fetching location details:", error);
        throw new Error("Failed to retrieve location details");
      }
};

// const fetchFilteredLocations = async (selectedCategory, minRating) => {
//   try {
//     console.log("Fetching filtered locations with:", selectedCategory, minRating);
//     const filteredLocations = await prisma.location.findMany({
//       where: {
        
//         category: selectedCategory !== 'All' ? selectedCategory : undefined,
        
//         rating_id: {
//           gte: minRating //gte => greate that or equal
//         }
//       },
//     });

//     return filteredLocations;

//   } catch (error) {
//     console.error("Error fetching filtered locations:", error);
//     // throw new Error("Failed to retrieve filtered locations");
//     return { error: "Failed to retrieve filtered locations", details: error };
//   }
// };



// export default async function handler(req, res) {
//   const { selectedCategory, minRating } = req.query;

//   try {
//     const filteredLocations = await prisma.location.findMany({
//       where: {
//         category: selectedCategory !== 'All' ? selectedCategory : undefined,
//         rating: {
//           gte: parseInt(minRating) || 0,
//         },
//       },
//     });
//     res.status(200).json(filteredLocations);
//   } catch (error) {
//     console.error("Error fetching filtered locations:", error);
//     res.status(500).json({ error: "Failed to fetch filtered locations" });
//   }
// }


const fetchFilteredLocations = async (selectedCategory, minRating) => {

  let whereClause = {};

  if (selectedCategory) {
    whereClause.category = {
      equals: selectedCategory,
    };
  }

  if (minRating &&!isNaN(minRating)) {
    whereClause.rating_id = {
      gt: parseFloat(minRating),
    };
  }
  

  try {
    const locations = await prisma.location.findMany({
      where: whereClause,
    });
    return locations;
  } catch (error) {
    console.error("Error fetching location details:", error);
    throw new Error("Failed to retrieve location details");
  }
}


// const fetchFilteredLocations = async (selectedCategory, minRating) => {

//   let whereClause = {};

//   if (selectedCategory) {
//     whereClause.category = {
//       equals: selectedCategory,
//     };
//   }

//   if (minRating &&!isNaN(minRating)) {
//     whereClause.rating_id = {
//       gt: parseFloat(minRating),
//     };
//   }
  

//   try {
//     const locations = await prisma.location.groupBy({
//       by: ['location_id'],
//       where: whereClause,
//     });
//     return locations;
//   } catch (error) {
//     console.error("Error fetching filtered locations:", error);
//     throw error; 
//   }
// }



// const fetchFilteredLocations = async (selectedCategory, minRating) => {
//   try {
//     const locations = await prisma.location.findMany({
//       where: {
//         // Filter by selected category if provided
//         category: selectedCategory ? { equals: selectedCategory } : undefined,
//         // Include location ratings where the rating number is greater than the minimum or 1 if not provided
//         locationRatings: {
//           some: {
//             rating: { gt: minRating ? parseInt(minRating) : 1 }
//           }
//         }
//       },
//       // Include the location ratings in the response
//       include: {
//         locationRatings: true
//       }
//     });

//     // Filter locations where the average rating is greater than 1
//     const filteredLocations = locations.filter(location => {
//       const avgRating = location.locationRatings.reduce((sum, rating) => sum + rating.rating, 0) / location.locationRatings.length;
//       return avgRating > 1;
//     });

//     return filteredLocations;
//   } catch (error) {
//     console.error("Error fetching filtered locations:", error);
//     throw error; 
//   }
// }



const fetchCities = async () => {
  try {
    const cities = await prisma.city.findMany();

    return cities;
  } catch (error) {
    throw new Error("Failed to retrieve locations");
  }
};

const fetchLocationDetailsByCity = async (cityId) => {
  try {
    const locations = await prisma.location.findMany({
      where: {
        city_id: parseInt(cityId)
      }
    });
    return locations;
  } catch (error) {
    throw new Error("Failed to retrieve locations");
  }
}


export { 
  fetchAccountDetails, 
  fetchPublicRoutes, 
  fetchPopularRoutes,
  fetchRouteDetails, 
  fetchLocation, 
  fetchLocationDetails, 
  fetchCities, 
  fetchLocationDetailsByCity 
};


