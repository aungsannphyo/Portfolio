"use client";

import React from "react";
import { experience } from "@/features/personal/about-me/data/about";
import ExperienceDetails from "@/features/experience/experience-details";

const ExperiencePage = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-0 space-y-10">
      <h2 className="text-3xl font-bold text-center">Work Experience</h2>

      <div className="space-y-8">
        {experience.map((company) => (
          <ExperienceDetails key={company.name} company={company} />
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
