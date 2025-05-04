"use client";

import React from "react";

interface IProjectRespoProps {
  responsibilities: string[];
}

const ProjectResponsibilities: React.FC<IProjectRespoProps> = ({
  responsibilities,
}) => {
  return (
    <div className="relative">
      <h3 className="font-semibold text-lg mb-2">Responsibilities</h3>
      <div className="max-h-48 overflow-y-auto pr-2 border border-gray-200 rounded-md py-4 px-3 bg-white shadow-sm relative z-10">
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
          {responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-20 rounded-b-md" />
    </div>
  );
};

export default ProjectResponsibilities;
