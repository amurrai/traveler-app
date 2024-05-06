import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const { email, username, first_name, last_name, password } = body;

    // check is email is already in database 
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email }
    });

    if (existingUserByEmail) {
      return NextResponse.json({ user: null, message: "User already exists" });
    }

    // create new user with hashed password 
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        first_name,
        last_name,
        password: hashedPassword
      }
    });

    return NextResponse.json({ user: newUser, message: "User created" });
  } catch(error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
}