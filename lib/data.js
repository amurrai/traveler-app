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


export { fetchPublicRoutes, fetchRouteDetails, fetchLocation, fetchLocationDetails, fetchCities, fetchLocationDetailsByCity };

