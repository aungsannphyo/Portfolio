"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaDiscord, FaTelegram } from "react-icons/fa";
import ContactMeIcon from "./contact-me-icon";
import { contactLink } from "@/type/about_me/about";

const ContactMe = () => {
  return (
    <div className="flex justify-center md:justify-start items-center mt-8 gap-5 text-2xl">
      <ContactMeIcon
        Icon={FaGithub}
        label="GitHub"
        contactLink={contactLink.github}
      />
      <ContactMeIcon
        Icon={FaLinkedin}
        label="Linkedin"
        contactLink={contactLink.linkedin}
      />
      <ContactMeIcon
        Icon={FaDiscord}
        label="Discord"
        contactLink={contactLink.discord}
      />
      <ContactMeIcon
        Icon={FaTelegram}
        label="Telegram"
        contactLink={contactLink.telegram}
      />
    </div>
  );
};

export default ContactMe;
