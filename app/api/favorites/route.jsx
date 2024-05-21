import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log('Parsed request body:', body);
    const { user_id, location_id } = body;

    console.log('Received request:', { user_id, location_id });

    if (!user_id || !location_id) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const isFavorite = await prisma.userLocation.findFirst({
      where: {
        user_id: parseInt(user_id),
        location_id: parseInt(location_id),
      },
    });

    if (isFavorite) {
      await prisma.userLocation.delete({
        where: { id: isFavorite.id },
      });
      return NextResponse.json({ message: 'Location unfavorited' });
    } else {
      await prisma.userLocation.create({
        data: {
          user_id: parseInt(user_id),
          location_id: parseInt(location_id),
        },
      });
      return NextResponse.json({ message: 'Location favorited' });
    }
  } catch (error) {
    console.error("Error toggling favorite status:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
