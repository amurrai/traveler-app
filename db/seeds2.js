import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  const users = await prisma.user.findMany(); // Fetch users
  const locations = await prisma.location.findMany(); // Fetch locations


  //Correctly structured data for creating userLocation records
  const userLocationData = users.flatMap(user =>
    locations.map(location => ({
      user: { connect: { id: user.id } },
      location: { connect: { id: location.id } },
      place_name: location.name, // Assuming location has a name field
      latitude: location.latitude,
      longitude: location.longitude,
      user_id: user.id
    }))
  );

  await prisma.userLocation.createMany({
    data: [
      {
        user_id: 1,
        location_id: 1,
        place_name: "Calgary zoo",
        latitude: 51.0459,
        longitude: 114.0237
      },
      {
        user_id: 2,
        location_id: 3,
        place_name: "Big Ben",
        description: "Big Ben is the nickname of a bell that hangs in the clock tower at the northern end of the Houses of Parliament in Westminster. Officially, the tower itself is called Elizabeth Tower.",
        latitude: 51.5007,
        longitude: 0.1246
      },

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