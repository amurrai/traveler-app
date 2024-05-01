import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.locationRating.createMany({
    data: [
      {
        user_id: 1,
        location_id: 1,
        rating: 4,
        comment: "I liked it"
      },

      {
        user_id: 2,
        location_id: 2,
        rating: 5,
        comment: "It was my dreame"
      }
    ]
  });


  await prisma.routeRating.createMany({
    data: [
      {
        user_id: 1,
        route_id: 1,
        rating: 5,
        comment: "It was fun"
      },

      {
        user_id: 2,
        route_id: 2,
        rating: 5,
        comment: "I enjoyed the trip"
      }
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