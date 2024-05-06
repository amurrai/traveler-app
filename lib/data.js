import prisma from "./prisma";

const fetchRoutes = async () => {
  try {
    const data = await prisma.route.findMany();
    return data;
  } catch (error) {
    throw new Error("Failed to retrieve routes");
  }
};

export default fetchRoutes;