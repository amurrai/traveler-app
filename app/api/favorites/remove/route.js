import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userId, locationId } = await req.json();

  if (!userId || !locationId) {
    return NextResponse.json({ message: "User ID and Location ID are required" }, { status: 400 });
  }

  try {
    await prisma.userLocation.delete({
      where: {
        user_id_location_id: {
          user_id: parseInt(userId),
          location_id: parseInt(locationId)
        }
      }
    });

    return NextResponse.json({ message: "Favorite removed" }, { status: 200 });
  } catch (error) {
    console.error("Error removing favorite:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
