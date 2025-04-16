"use client"
import Link from "next/link";
import {useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white">Home</Link>
            </div>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav