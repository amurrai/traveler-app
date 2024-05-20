
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { user_id, location_id } = body;

    if (!user_id || !location_id) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const parsedUserId = parseInt(user_id);
    const parsedLocationId = parseInt(location_id);

    const isFavorite = await prisma.userLocation.findFirst({
      where: {
        user_id: parsedUserId,
        location_id: parsedLocationId,
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
          user_id: parsedUserId,
          location_id: parsedLocationId,
        },
      });
      return NextResponse.json({ message: 'Location favorited' });
    }
  } catch (error) {
    console.error("Error toggling favorite status:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

