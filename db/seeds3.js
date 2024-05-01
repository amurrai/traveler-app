import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  const users = await prisma.user.findMany(); // Fetch users
  const locations = await prisma.location.findMany(); // Fetch locations
  await prisma.route.createMany({
    data: [
      {
        user_id: 1, // Connect to user_id 1
        route_name: "Explore Calgary",
        description: "Best things to do in Calgary",
        is_public: true,
        is_active: true,
        created_on: new Date(),
        updated_on: new Date()
      },

      {
        user_id: 2, // Connect to user_id 1
        route_name: "Explore England",
        description: "Must to see",
        is_public: true,
        is_active: true,
        created_on: new Date(),
        updated_on: new Date()
      }
    ]
  });

  // Now, create LocationRoute entries to connect routes to locations
  await prisma.locationRoute.createMany({
    data: [
      { route_id: 1, location_id: 1 },
      { route_id: 1, location_id: 2 },
      { route_id: 2, location_id: 3 },
      { route_id: 2, location_id: 4 }
    ]
  });

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })