import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {  
    const body = await req.json();
    console.log(body);

    const { 
      user_id, 
      name, 
      description, 
      is_public, 
      origin_id,
      destination_id,
      locations
    } = body;

    const newRoute = await prisma.route.create({
      data: {
        user_id: parseInt(user_id),
        route_name: name,
        description: description,
        is_public: is_public,
        origin_id: parseInt(origin_id ),
        destination_id: parseInt(destination_id),
        location: {
          create: locations.map(id => (
            { location: { connect: { id: parseInt(id) }}})
            )
        }
      }
    });

    return NextResponse.json({ route: newRoute });
  } catch(error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}