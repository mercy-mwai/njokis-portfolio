"use client"
import Link from "next/link";
import {useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 left-0 w-full p-1 z-20  bg-opacity-30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white">NM.</Link>
            </div>
        </div>

        <div className="hidden md:block">
            <div className=" ml-4 flex items-center space-x-4 ">
                <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg">
                Home
                </Link>
            </div>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav