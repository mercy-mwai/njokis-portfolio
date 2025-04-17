"use client";

import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled!");
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          NM.
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/contact" label="Contact" />
        </div>

        {/* Mobile button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white p-2 rounded"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm border-t border-white/10">
          <div className="px-4 py-4 flex flex-col space-y-4">
            <NavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
            <NavLink href="/about" label="About" onClick={() => setIsOpen(false)} />
            <NavLink href="/projects" label="Projects" onClick={() => setIsOpen(false)} />
            <NavLink href="/contact" label="Contact" onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, label, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-white hover:bg-purple-900 hover:text-white rounded-lg px-3 py-2 text-lg transition duration-300"
  >
    {label}
  </Link>
);

export default Nav;