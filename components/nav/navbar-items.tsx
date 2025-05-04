"use client";
import React, { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import {
  IoPersonOutline,
  IoPerson,
  IoDocumentTextOutline,
  IoDocumentText,
  IoBriefcaseOutline,
  IoBriefcase,
  IoLaptop,
  IoLaptopOutline,
} from "react-icons/io5";
import Link from "next/link";

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
  {
    name: "Projects",
    href: "/project",
    icon: (active: boolean) =>
      active ? (
        <IoLaptop size={20} className="mr-2" />
      ) : (
        <IoLaptopOutline size={20} className="mr-2" />
      ),
  },
];

export const DesktopNavItems = () => {
  const pathname = usePathname();
  return (
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
  );
};
