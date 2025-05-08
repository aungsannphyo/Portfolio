"use client";
import React, { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    name: "About Me",
    href: "/",
  },
  {
    name: "Article Series",
    href: "/article-series",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Projects",
    href: "/project",
  },
];

export const DesktopNavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="hidden md:flex space-x-8 text-sm font-medium">
      {navItems.map(({ name, href }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link href={href} className="flex items-center group">
              <span
                className={`inline-block font-semibold transition-all duration-200 ${
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
  );
};

interface IMobileNavItemsProps {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileNavItems: React.FC<IMobileNavItemsProps> = ({
  setMenuOpen,
}) => {
  const pathname = usePathname();
  return (
    <div className="md:hidden px-6 mt-4 space-y-4 text-md font-medium">
      {navItems.map(({ name, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)} // Close on click
            className="flex items-center group"
          >
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
  );
};
