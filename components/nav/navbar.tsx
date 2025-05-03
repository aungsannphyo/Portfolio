"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  IoPersonOutline,
  IoPerson,
  IoDocumentTextOutline,
  IoDocumentText,
  IoMenu,
  IoClose,
  IoBriefcaseOutline,
  IoBriefcase,
} from "react-icons/io5";

const navItems = [
  {
    name: "About Me",
    href: "/",
    icon: (active: boolean) =>
      active ? (
        <IoPerson size={20} className="mr-2" />
      ) : (
        <IoPersonOutline size={20} className="mr-2" />
      ),
  },
  {
    name: "Content",
    href: "/content",
    icon: (active: boolean) =>
      active ? (
        <IoDocumentText size={20} className="mr-2" />
      ) : (
        <IoDocumentTextOutline size={20} className="mr-2" />
      ),
  },
  {
    name: "Experience",
    href: "/experience",
    icon: (active: boolean) =>
      active ? (
        <IoBriefcase size={20} className="mr-2" />
      ) : (
        <IoBriefcaseOutline size={20} className="mr-2" />
      ),
  },
];

const Navbar = () => {
  const pathname = usePathname();
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
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map(({ name, href, icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link href={href} className="flex items-center group">
                  {icon(isActive)}
                  <span
                    className={`inline-block transition-all duration-200 ${
                      isActive
                        ? "border-b-2 border-black pb-1 font-semibold"
                        : "group-hover:opacity-60"
                    }`}
                  >
                    {name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

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
      {menuOpen && (
        <div className="md:hidden px-6 mt-4 space-y-4 text-md font-medium">
          {navItems.map(({ name, href, icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)} // Close on click
                className="flex items-center group"
              >
                {icon(isActive)}
                <span
                  className={`inline-block transition-all duration-200 ${
                    isActive
                      ? "border-b-2 border-black pb-1 font-semibold"
                      : "group-hover:opacity-60"
                  }`}
                >
                  {name}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
