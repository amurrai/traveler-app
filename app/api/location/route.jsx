
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export default async function GET() {
  try {
    // Fetch all locations
    const allLocations = await prisma.location.findMany();
    return NextResponse.json({ locations: allLocations });
  } catch (error) {
    console.error("Error fetching locations:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}





// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, place_id, city_id, country_id, description, category, image, rating_id, days_of_operation } = body;

//     // Create a new location entry
//     const newLocation = await prisma.location.create({
//       data: {
//         name,
//         place_id,
//         city_id,
//         country_id,
//         description,
//         category,
//         image,
//         rating_id,
//         days_of_operation
//       },
//     });

//     return NextResponse.json({ location: newLocation });
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json({ message: "Something went wrong" });
//   }
// }


