import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {  
    const body = await req.json();
    console.log(body);

    const { user_id, name, description, is_public } = body;

    const newRoute = await prisma.route.create({
      data: {
        user_id: parseInt(user_id),
        route_name: name,
        description: description,
        is_public: is_public
      }
    });

    return NextResponse.json({ route: newRoute });
  } catch(error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}