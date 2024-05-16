import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const url = new URL(req.url);
  const userId = url.searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ message: "User ID is required" }, { status: 400 });
  }

  try {
    const favorites = await prisma.userLocation.findMany({
      where: { user_id: parseInt(userId) },
      include: { location: true },
    });

    return NextResponse.json(favorites);
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
