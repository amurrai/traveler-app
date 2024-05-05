import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10">
      <div className="flex item-center justify-between">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  )

};

export default Navbar;