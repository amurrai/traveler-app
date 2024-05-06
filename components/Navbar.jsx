import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LogoutButton from "./LogoutButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className=" bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10">
      <div className="flex item-center justify-between">
        <div>
          <Link href="/">Home</Link> | 
          <Link href="/popular-routes"> Popular Routes</Link> |
          {session?.user && <Link href="/dashboard"> Dashboard</Link>}
        </div>
        {session?.user ? (
          <LogoutButton />
        ) : (
          <div>
            <Link href="/login">Login</Link> | 
            <Link href="/register"> Register</Link>
          </div>
        )}
      </div>
    </div>
  )

};

export default Navbar;