import { selectClasses } from "@mui/material";
import prisma from "./prisma";

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

const fetchRouteDetails = async (routeId) => {

  try {
    // const data = await prisma.route.findUnique({
    //   include: {
    //     locationRoute: true
    //   },
    //   where: {
    //     id: parseInt(routeId)
    //   }
    // });

    // const locationIds = data.locationRoute.map((location) => location.id);

    // const locations = await prisma.location.findMany({
    //   where: {
    //     id: {
    //       in: locationIds
    //     }
    //   }
    // });

    const data = await prisma.route.findUnique({
      where: {
        id: parseInt(routeId)
      },
      include: {
        locationRoute: {
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
      where: {
        id: parseInt(locationId)
      },
      include: {
        city: true, //relationship with other tabels
        country: true,
        locationRoutes: {
          include: {
            route: true
          }
        },
        userLocations: true,
        locationRatings: true
      }
    });
    return location;

  } catch (error) {
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
    console.error("Error fetching filtered locations:", error);
    throw error; 
  }
}
//   try {
//     const filteredLocations = await prisma.location.findMany({
//       where: {
//         category: {
//           equals: selectedCategory !== 'All' ? selectedCategory : undefined, 
//         },
//         rating: {
//           gt: parseFloat(minRating), 
//         },
//       },
//     });
//     return filteredLocations;

//   } catch (error) {
//     console.error("Error fetching filtered locations:", error);
//     // throw new Error("Failed to retrieve filtered locations");
//     return { error: "Failed to retrieve filtered locations", details: error };
//   }
// };





export { fetchPublicRoutes, fetchRouteDetails, fetchLocation, fetchLocationDetails, fetchFilteredLocations };

