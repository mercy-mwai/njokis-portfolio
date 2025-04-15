"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      Nav
    </div>
  )
}

export default Nav