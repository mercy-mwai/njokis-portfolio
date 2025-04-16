"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isClick, setIsClick] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsClick(!isClick);
  }

  return (
    <nav className="absolute top-0 left-0 w-full p-1 z-20 bg-opacity-30 backdrop-blur-md border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Link href="/" className="text-white text-2xl font-bold">
            NM.
          </Link>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="ml-4 flex items-center space-x-4">
          <Link 
            href="/" 
            className="text-white hover:bg-amber hover:text-black rounded-lg p-2 "
          >
            Home
          </Link>
          <Link 
            href="/" 
            className="text-white hover:bg-amber hover:text-black rounded-lg p-2"
          >
           About
          </Link>
          <Link 
            href="/" 
            className="text-white hover:bg-amber hover:text-black rounded-lg p-2"
          >
           Projects
          </Link>
          <Link 
            href="/" 
            className="text-white hover:bg-amber hover:text-black rounded-lg p-2"
          >
          Contact
          </Link>
        </div>
      </div>

        <div className="md:hidden flex items-center">
            <button className="flex-inline items-center justify-center p-2 rounded-md text-white md:text-white
            hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleNavbar}
            >
                {
                    isClick?(
                        <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor" >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    ):(
                        <svg  className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16m-7 6h7"/>
                     </svg>
                    )
                }
            </button>
        </div>
    </div>
  </div>
  
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

    <Link href="/" className="text-white text-2xl font-bold">
            NM.
          </Link>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="ml-4 flex items-center space-x-4">
          <Link 
            href="/" 
            className="text-white hover:bg-amber hover:text-black rounded-lg p-2 "
          >
            Home
          </Link>
          <Link 
            href="/" 
            className="text-white hover:bg-amber hover:text-black rounded-lg p-2"
          >
           About
          </Link>
          <Link 
            href="/" 
            className="text-white hover:bg-amber hover:text-black rounded-lg p-2"
          >
           Projects
          </Link>
          <Link 
            href="/" 
            className="text-white hover:bg-amber hover:text-black rounded-lg p-2"
          >
          Contact
          </Link>
    </div>
  </div>
</nav>

  );
};

export default Nav;
