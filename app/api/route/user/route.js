import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    const routes = await prisma.route.findMany({
      where: {
        user_id: parseInt(userId),
      },
      include: {
        origin: true,
        location: {
          include: {
            location: true,
          },
        },
        ratings: true,
      },
    });

    return NextResponse.json(routes);
  } catch (error) {
    console.error("Error fetching user routes:", error);
    return NextResponse.json({ message: "Failed to retrieve routes" }, { status: 500 });
  }
}

export async function DELETE(req) {  
  try {
    const { searchParams } = new URL(req.url);    
    const routeId = searchParams.get("routeId");
    console.log(routeId)

    if (!routeId) {
      return NextResponse.json({ message: "Route ID is required" }, { status: 400 });
    }
  
    await prisma.route.delete({
      where: {
        id: parseInt(routeId),
      },
    });

    return NextResponse.json({ message: "Route deleted successfully" });
  } catch (error) {
    console.error("Error deleting route:", error);
    return NextResponse.json({ message: "Failed to delete route" }, { status: 500 });
  }
}