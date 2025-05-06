"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaDiscord, FaTelegram } from "react-icons/fa";
import SocialIcon from "./social-icon";
import { contactLink } from "@/features/personal/about-me/data/about";

const SocialLinks = () => {
  return (
    <div className="flex justify-center md:justify-start items-center mt-8 gap-5 text-2xl">
      <SocialIcon
        Icon={FaGithub}
        label="GitHub"
        contactLink={contactLink.github}
      />
      <SocialIcon
        Icon={FaLinkedin}
        label="Linkedin"
        contactLink={contactLink.linkedin}
      />
      <SocialIcon
        Icon={FaDiscord}
        label="Discord"
        contactLink={contactLink.discord}
      />
      <SocialIcon
        Icon={FaTelegram}
        label="Telegram"
        contactLink={contactLink.telegram}
      />
    </div>
  );
};

export default SocialLinks;
