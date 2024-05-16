import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  const { userId, locationId } = req.body;

  if (!userId || !locationId) {
    return res.status(400).json({ message: "User ID and Location ID are required" });
  }

  try {
    const favorite = await prisma.userLoction.create({
      data: {
        user_id: parseInt(userId),
        location_id: parseInt(locationId)
      }
    });

    res.status(201).json(favorite);
  } catch (error) {
    console.error("Error adding to favorites:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}