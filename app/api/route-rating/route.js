import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
  
    const body = await req.json();

    const { user_id, route_id, comment, rating } = body;

    

    // check if rating already exists
    const existingUserRating = await prisma.routeRating.findFirst({
      where: { 
        user_id: user_id,
        route_id: route_id
      }
    });

    if (existingUserRating) {
      return NextResponse.json({ user: null, message: "Rating already exists" });
    }

    // create new rating
    const newRouteRating = await prisma.routeRating.create({
      data: {
        user_id: parseInt(user_id),
        route_id: parseInt(route_id),
        comment,
        rating: parseInt(rating)
      }
    });

    return NextResponse.json({ routeRating: newRouteRating });
  } catch(error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}