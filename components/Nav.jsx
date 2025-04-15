"use client"
import Link from "next/link";
import {useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const pathname = usePathname();

  return (
    // <nav className="flex justify-between items-center w-full mb-16 pt-3">
    //   {/** desktop Navigation*/}
    //   <div className="sm:hidden flex">
    //   <div className='flex gap-3 md:gap-7'>
    //     <Link href='/' className={`black_btn ${pathname === '/' ? 'active' : ''}`}>Home</Link>
    //     <Link href='/about' className={`black_btn ${pathname === '/about' ? 'active' : ''}`}>About</Link>
    //     <Link href='/projects' className={`black_btn ${pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
    //     <Link href='/contact' className={`black_btn ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
    //   </div>
    //   </div>
    //   {/* Mobile Toggle Button */}
    //   <div className="sm:hidden flex items-center">
    //     <button
    //       onClick={() => setToggleDropdown(!toggleDropdown)}
    //       className="text-white focus:outline-none"
    //     >
    //       ☰
    //     </button>
    //   </div>

    //   {/* Mobile Dropdown Menu */}
    //   {toggleDropdown && (
    //     <div className="absolute top-16 right-5 bg-gray-800 rounded-lg p-4 flex flex-col gap-3 z-50 sm:hidden">
    //       <Link href='/' onClick={() => setToggleDropdown(false)} className={`text-white ${pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
    //       <Link href='/about' onClick={() => setToggleDropdown(false)} className={`text-white ${pathname === '/about' ? 'font-bold' : ''}`}>About</Link>
    //       <Link href='/projects' onClick={() => setToggleDropdown(false)} className={`text-white ${pathname === '/projects' ? 'font-bold' : ''}`}>Projects</Link>
    //       <Link href='/contact' onClick={() => setToggleDropdown(false)} className={`text-white ${pathname === '/contact' ? 'font-bold' : ''}`}>Contact</Link>
    //     </div>
    //   )}

    // </nav>
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