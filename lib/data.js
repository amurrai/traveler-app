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

export { fetchPublicRoutes, fetchRouteDetails };