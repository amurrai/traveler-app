// before seeding the db need to add "type": "module" to the package.json then remove it after

import { PrismaClient } from '@prisma/client'
import torontoPlaces from './torontoPlaces.js';
import calgaryPlaces from './calgaryPlaces.js';
import vancouverPlaces from './vancouverPlaces.js';

const prisma = new PrismaClient()

async function main() {

  await prisma.user.createMany({
    data: [
      { email: "bobdylan@gmail.com", username: "hacker", password: "password", first_name: "Bob", last_name: "Dylan" },
      { email: "margaret@gmail.com", username: "margo", password: "password", first_name: "Margaret", last_name: "Thatcher" }
    ]
  });

  await prisma.city.createMany({
    data: [
    {
      name: "Calgary",
    },
    {
      name: "Toronto"
    },
    {
      name: "Vancouver"
    }
  ]
  });

  await prisma.country.create({
    data:
    {
      name: "Canada",
    }
  });

  await prisma.location.createMany({
    data: torontoPlaces
  });

  await prisma.location.createMany({
    data: vancouverPlaces
  });

  await prisma.location.createMany({
    data: calgaryPlaces
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