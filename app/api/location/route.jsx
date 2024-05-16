import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const locations = await prisma.location.findMany();
    return NextResponse.json({ locations });
  } catch (error) {
    console.error("Error fetching locations:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}


// export default async function handler(req, res) {
//   const { userId, locationId } = req.body;

//   if (!userId || !locationId) {
//     return res.status(400).json({ message: "User ID and Location ID are required" });
//   }

//   try {
//     await prisma.userLocation.delete({
//       where: {
//         user_id_location_id: {
//           user_id: parseInt(userId),
//           location_id: parseInt(locationId)
//         }
//       }
//     });

//     res.status(200).json({ message: "Favorite removed" });
//   } catch (error) {
//     console.error("Error removing favorite:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }








