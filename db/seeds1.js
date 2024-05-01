// before seeding the db need to add "type": "module" to the package.json then remove it after

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  await prisma.user.createMany({
    data: [
      { email: "bobdylan@gmail.com", username: "hacker", password: "password", first_name: "Bob", last_name: "Dylan", country_of_origin: "Canada" },
      { email: "margaret@gmail.com", username: "margo", password: "password", first_name: "Margaret", last_name: "Thatcher", country_of_origin: "United Kingdom" }
    ]
  });


  await prisma.location.createMany({
    data: [
      {
        name: "Calgary zoo",
        description: "The Wilder Institute/Calgary Zoo is located in Bridgeland, Calgary, Alberta, Canada, just east of the city's downtown and adjacent to the Inglewood and East Village neighborhoods.",
        latitude: 51.0459,
        longitude: 114.0237,
        place_id: "ChIJBS-3mq16cVMR93V1x_a4J2I"
      },
      {
        name: "Calgary tower",
        description: "The Calgary Tower is a 190.8-metre free standing observation tower in the downtown core of Calgary, Alberta, Canada.",
        latitude: 51.0443,
        longitude: 114.0631,
        place_id: "ChIJQaMBBgJwcVMRtmO9AytlDLM"
      },
      {
        name: "Big Ben",
        description: "Big Ben is a tower clock known for its accuracy and for its massive hour bell.",
        latitude: 51.5007,
        longitude: 0.1246,
        place_id: "ChIJ2dGMjMMEdkgRqVqkuXQkj7c"
      },
      {
        name: "Westminster Abbey",
        description: "Westminster Abbey, formally titled the Collegiate Church of Saint Peter at Westminster, is an Anglican church in the City of Westminster, London, England.",
        latitude: 51.4994,
        longitude: 0.1273,
        place_id: "ChIJRUeRWcMEdkgRAO7ZzLCgDXA"
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
