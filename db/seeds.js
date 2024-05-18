// before seeding the db need to add "type": "module" to the package.json then remove it after

import { PrismaClient } from '@prisma/client'
import torontoPlaces from './torontoPlaces.js';
import calgaryPlaces from './calgaryPlaces.js';
import vancouverPlaces from './vancouverPlaces.js';
import {
  users,
  locationRatings,
  routeRatings,
  routes
} from './seedsData.js';

const prisma = new PrismaClient()

async function main() {

  await prisma.user.createMany({
    data: users
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
    data: locationRatings
  });

  await prisma.route.createMany({
    data: routes
  });

  const locationRoutesData = [];

  // For route_id between 1 and 10
  for (let routeId = 1; routeId <= 10; routeId++) {
    for (let i = 0; i < Math.floor(Math.random() * 4) + 5; i++) {
      locationRoutesData.push({
        location_id: Math.floor(Math.random() * 23) + 1,
        route_id: routeId
      });
    }
  }

  // For route_id between 11 and 20
  for (let routeId = 11; routeId <= 20; routeId++) {
    for (let i = 0; i < Math.floor(Math.random() * 4) + 5; i++) {
      locationRoutesData.push({
        location_id: Math.floor(Math.random() * 21) + 24,
        route_id: routeId
      });
    }
  }

  // For route_id between 21 and 30
  for (let routeId = 21; routeId <= 30; routeId++) {
    for (let i = 0; i < Math.floor(Math.random() * 4) + 5; i++) {
      locationRoutesData.push({
        location_id: Math.floor(Math.random() * 25) + 45,
        route_id: routeId
      });
    }
  }

  await prisma.locationRoute.createMany({
    data: locationRoutesData
  });

  await prisma.routeRating.createMany({
    data: routeRatings
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