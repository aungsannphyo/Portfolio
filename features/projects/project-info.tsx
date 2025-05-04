"use client";

import React from "react";

interface IProjectInfoProps {
  title: string;
  summary: string;
}

const ProjectInfo: React.FC<IProjectInfoProps> = ({ title, summary }) => {
  return (
    <React.Fragment>
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
      <p className="text-md sm:text-base text-gray-700 leading-relaxed">
        {summary}
      </p>
    </React.Fragment>
  );
};

export default ProjectInfo;
