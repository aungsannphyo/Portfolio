"use client";

import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { DesktopNavItems, MobileNavItems } from "./navbar-items";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-black py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <h1 className="text-2xl font-bold tracking-tight">
          <Link key="/" href="/" className="flex items-center group">
            Aung Sann Phyo
          </Link>
        </h1>
        {/* Desktop Nav */}
        <DesktopNavItems />
        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && <MobileNavItems setMenuOpen={setMenuOpen} />}
    </nav>
  );
};

export default Navbar;
