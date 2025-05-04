"use client";

import Link from "next/link";
import React from "react";

interface IProjectViewButtonProps {
  link: string;
}

const ProjectViewButton: React.FC<IProjectViewButtonProps> = ({ link }) => {
  return (
    <div className="mt-2">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-black bg-black text-white font-medium shadow-md group hover:bg-white hover:text-black transition-all duration-300"
      >
        <span className="relative overflow-hidden text-xs">
          <span className="block transform group-hover:-translate-y-[120%] transition-all duration-300">
            View Case Study
          </span>
          <span className="absolute top-0 left-0 block transform translate-y-[120%] group-hover:translate-y-0 transition-all duration-300">
            View Case Study
          </span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 ml-2 transition-all duration-300 transform group-hover:translate-x-1 group-hover:scale-125"
        >
          <path d="M15 3h6v6"></path>
          <path d="M10 14 21 3"></path>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        </svg>
      </Link>
    </div>
  );
};

export default ProjectViewButton;
