"use client"
import Link from "next/link";
import {useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const pathname = usePathname();

  return (
    // <div> 
    //   <nav className="flex-between w-full mb-16 pt-3">
    //     <ul className="hidden md:flex space-x-4">
    //       <li><Link href="/">Home</Link></li>
    //       <li><Link href="/about">About</Link></li>
    //       <li><Link href="/projects">Projects</Link></li>
    //       <li><Link href="/contact">Contact</Link></li>
    //     </ul>
    //   </nav>

    //   {toggleDropdown && (
    //     <div className="absolute top-16 right-4 bg-gray-800 text-white rounded shadow-lg p-4 md:hidden">
    //       <ul className="space-y-2">
    //         <li><Link href="/">Home</Link></li>
    //         <li><Link href="/about">About</Link></li>
    //         <li><Link href="/projects">Projects</Link></li>
    //         <li><Link href="/contact">Contact</Link></li>
    //       </ul>
    //     </div>
    //   )}
    // </div>

    <nav className="flex justify-between items-center w-full mb-16 pt-3">
      {/** desktop Navigation*/}
      <div className="sm:hidden flex">
      <div className='flex gap-3 md:gap-7'>
        <Link href='/' className={`black_btn ${pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link href='/about' className={`black_btn ${pathname === '/about' ? 'active' : ''}`}>About</Link>
        <Link href='/projects' className={`black_btn ${pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
        <Link href='/contact' className={`black_btn ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
      </div>
      </div>

    </nav>
  )
}

export default Nav