// import { fetchLocation } from "@/lib/data";

// export async function get (req, res) {
//   try {
//     const locations = await fetchLocation();
//     res.status(200).json(locations);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch locations" });
//   }
// }


// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function GET(req, res) {
//   try {
//     const locations = await prisma.location.findMany();
//     res.status(200).json(locations);
//   } catch (error) {
//     console.error("Error fetching locations:", error.message);
//     res.status(500).json({ error: "Failed to retrieve locations" });
//   }
// }


// Import statements
// import { fetchLocation } from "@/lib/data";


// // Fetch all locations
// export async function getAllLocations(req, res) {
//   try {
//     const locations = await fetchLocation();
//     res.status(200).json(locations);
//   } catch (error) {
//     console.error("Error fetching locations:", error.message);
//     console.trace(error); 
//     res.status(500).json({ error: "Failed to fetch locations", details: error.message });
//   }
// }


// import { postFilteredLocations } from "@/lib/data";

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     return postFilteredLocations(req, res);
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }




// // Fetch filtered locations
// export async function getFilteredLocations(req, res) {
//   const { selectedCategory, minRating } = req.body;

//   try {
//     const filteredLocations = await fetchFilteredLocations(selectedCategory, minRating);
//     res.status(200).json(filteredLocations);
//   } catch (error) {
//     console.error("Error fetching filtered locations:", error.message);
//     res.status(500).json({ error: "Failed to fetch locations", details: error.message });
//   }
// }

// pages/api/locations.js
// import prisma from "@/lib/prisma";


// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const locations = await prisma.location.findMany();
//       res.status(200).json(locations);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to fetch locations' });
//     }
//   } else {
//     // Handle any other HTTP methods
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// pages/api/locations.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const locations = await prisma.location.findMany();
      res.status(200).json(locations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch locations' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}






