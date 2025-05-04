"use client";

import React from "react";

interface IProjectTechProps {
  tech: string[];
}

const ProjectTech: React.FC<IProjectTechProps> = ({ tech }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((tech, i) => (
        <span
          key={i}
          className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full shadow hover:bg-gray-800 transition"
        >
          # {tech}
        </span>
      ))}
    </div>
  );
};

export default ProjectTech;
