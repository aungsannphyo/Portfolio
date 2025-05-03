"use client";

import React from "react";
import Image from "next/image";
import universityLogo from "@/public/university.png";
import ContactMe from "@/components/contact-me/contact-me";
import { me, summary } from "@/type/about_me/about";

const AboutMe = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">{me.role}</h1>
      <p className="text-md text-gray-800">{summary.firstSummary}</p>
      <p className="text-md text-gray-800">{summary.secondSummary}</p>

      <div className="flex items-center space-x-4">
        <Image
          src={universityLogo}
          alt="University Logo"
          width={150}
          height={150}
          priority
          className="rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{me.university}</h2>
          <p className="text-md text-gray-700">{me.bachelor}</p>
        </div>
      </div>
      <ContactMe />
    </div>
  );
};

export default AboutMe;
