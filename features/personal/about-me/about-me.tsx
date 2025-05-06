"use client";

import React from "react";
import Image from "next/image";
import universityLogo from "@/public/university.png";
import SocialLinks from "@/features/personal/contact-me/social-links";
import { me, summary } from "@/features/personal/about-me/data/about";

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
          width={120}
          height={120}
          priority
          className="rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{me.university}</h2>
          <p className="text-md text-gray-700">{me.bachelor}</p>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default AboutMe;
