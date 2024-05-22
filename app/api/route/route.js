import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const type = searchParams.get("type");

    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    let routes

    if (type === 'all') {
      routes = await prisma.route.findMany({
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
    } else if (type === 'public') {
      routes = await prisma.route.findMany({
        where: {
          user_id: parseInt(userId),
          is_public: true,
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
    } else {
      return NextResponse.json({ message: "Invalid type parameter" }, { status: 400 });
    }

    return NextResponse.json(routes);
  } catch (error) {
    console.error("Error fetching user routes:", error);
    return NextResponse.json({ message: "Failed to retrieve routes" }, { status: 500 });
  }
}

export async function POST(req) {
  try {  
    const body = await req.json();

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
    console.log(newRoute);

    return NextResponse.json({ route: newRoute });
  } catch(error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Something went wrong" });
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

export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get("userId");
    const route_id = searchParams.get("routeId");

    if (!user_id || !route_id) {
      return NextResponse.json({ message: "User ID and Route ID are required" }, { status: 400 });
    }

    // Set all routes for the user to inactive
    await prisma.route.updateMany({
      where: { user_id: parseInt(user_id), is_active: true },
      data: { is_active: false },
    });

    // Set the specified route to active
    await prisma.route.update({
      where: { id: parseInt(route_id) },
      data: { is_active: true },
    });

    return NextResponse.json({ message: "Active route updated successfully" });
  } catch (error) {
    console.error("Error updating active route:", error);
    return NextResponse.json({ message: "Failed to update active route" }, { status: 500 });
  }
}