// before seeding the db need to add "type": "module" to the package.json then remove it after

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  await prisma.user.createMany({
    data: [
      { email: "bobdylan@gmail.com", username: "hacker", password: "password", first_name: "Bob", last_name: "Dylan" },
      { email: "margaret@gmail.com", username: "margo", password: "password", first_name: "Margaret", last_name: "Thatcher" }
    ]
  });

  await prisma.city.create({
    data:
    {
      name: "Calgary",
    }
  });

  await prisma.country.create({
    data:
    {
      name: "Canada",
    }
  });

  await prisma.location.createMany({
    data: [
      {
        name: "Calgary zoo",
        place_id: "ChIJBS-3mq16cVMR93V1x_a4J2I",
        city_id: 1,
        country_id: 1,
        description: "The Wilder Institute/Calgary Zoo is located in Bridgeland, Calgary, Alberta, Canada, just east of the city's downtown and adjacent to the Inglewood and East Village neighborhoods.",
        category: "Parks",
        rating_id: 5
      },
      {
        name: "Calgary tower",
        place_id: "ChIJQaMBBgJwcVMRtmO9AytlDLM",
        description: "The Calgary Tower is a 190.8-metre free standing observation tower in the downtown core of Calgary, Alberta, Canada.",
        city_id: 1,
        country_id: 1,
        category: "Attractions",
        rating_id: 4.5
      },
    ]
  });

  await prisma.userLocation.createMany({
    data: [
      {
        user_id: 1,
        location_id: 1,
      },
      {
        user_id: 2,
        location_id: 2,
      },
    ]
  });

  await prisma.route.createMany({
    data: [
      {
        user_id: 1,
        route_name: "Explore Calgary",
        description: "Best things to do in Calgary",
        is_public: true,
        is_active: true,
        created_on: new Date(),
        updated_on: new Date()
      },

      {
        user_id: 2,
        route_name: "Explore Calgary",
        description: "Best things to do in Calgary",
        is_public: true,
        is_active: true,
        created_on: new Date(),
        updated_on: new Date()
      },
    ]
  });


  await prisma.locationRoute.createMany({
    data: [
      { route_id: 1, location_id: 1 },
      { route_id: 1, location_id: 2 },
    ]
  });

  await prisma.locationRating.createMany({
    data: [
      {
        user_id: 1,
        location_id: 1,
        rating: 5,
        comment: "I liked it"
      },

      {
        user_id: 2,
        location_id: 2,
        rating: 4,
        comment: "It wasn't very scary"
      }
    ]
  });


  await prisma.routeRating.createMany({
    data: [
      {
        user_id: 1,
        route_id: 1,
        rating: 4,
        comment: "It was fun"
      },

      {
        user_id: 2,
        route_id: 1,
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
