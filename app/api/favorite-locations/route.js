
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get("user_id");

    if (!user_id) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    const favoriteLocations = await prisma.userLocation.findMany({
      where: {
        user_id: parseInt(user_id),
      },
      include: {
        location: true,
      },
    });

    return NextResponse.json(favoriteLocations.map(fav => fav.location));
  } catch (error) {
    console.error("Error fetching favorite locations:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
