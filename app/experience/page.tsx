"use client";

import React, { useState } from "react";
import { experience } from "@/features/personal/about-me/data/about";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExperienceDetails from "@/features/experience/experience-details";
import { IoArrowDown } from "react-icons/io5";

const ExperiencePage = () => {
  const [selectedTab, setSelectedTab] = useState<string>(experience[0].name);
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-0 space-y-10">
      <h2 className="text-3xl font-bold text-center">Work Experience</h2>

      <Tabs defaultValue={experience[0].name} className="md:block hidden">
        <div className="flex justify-center">
          <TabsList className="gap-6 mb-12">
            {experience.map((company) => (
              <TabsTrigger
                key={company.name}
                value={company.name}
                className="text-sm font-medium px-8 py-3 rounded-full 
              transition duration-300 ease-in-out border-2 border-transparent
               hover:border-black hover:text-black hover:bg-white 
               data-[state=active]:bg-black data-[state=active]:text-white
                data-[state=active]:border-black cursor-pointer"
              >
                {company.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {experience.map((company) => (
          <TabsContent key={company.name} value={company.name}>
            <ExperienceDetails company={company} />
          </TabsContent>
        ))}
      </Tabs>
      {/* Mobile Dropdown */}
      <div className="md:hidden block mt-6">
        <div className="relative w-full max-w-xs mx-auto mb-6">
          <select
            value={selectedTab}
            onChange={(e) => setSelectedTab(e.target.value)}
            className="appearance-none border border-black bg-white text-black  px-6 py-2 pr-10 text-base shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-black transition-all cursor-pointer w-full"
          >
            {experience.map((company) => (
              <option key={company.name} value={company.name}>
                {company.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <IoArrowDown />
          </div>
        </div>
        {/* Display the content for the selected tab */}
        {experience
          .filter((company) => company.name === selectedTab)
          .map((company) => (
            <ExperienceDetails key={company.name} company={company} />
          ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
