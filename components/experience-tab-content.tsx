"use client";

import { Company } from "@/type/about_me/about-type";
import React from "react";
import Image from "next/image";

interface ICompany {
  company: Company;
}

const ExperienceTabContent: React.FC<ICompany> = ({ company }) => {
  return (
    <div className="border border-black p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 bg-white">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <Image
          src={company.image}
          alt={`${company.name} Logo`}
          width={60}
          height={60}
          className="rounded border border-black"
        />
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h3 className="text-xl font-semibold">{company.name}</h3>
            <span className="text-lg text-gray-600">{company.duration}</span>
          </div>
          <p className="text-gray-800 text-lg md:text-base">
            {company.role} &middot; {company.jobType}
          </p>
          <p className="text-sm text-gray-600 mt-1">{company.location}</p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-lg font-semibold mb-2">Responsibilities:</h4>
        <ul className="list-disc list-inside text-md text-gray-700 space-y-1">
          {company.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-lg font-semibold mb-2">Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {company.skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs bg-black text-white px-4 py-1 rounded-full"
            >
              {skill.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTabContent;
