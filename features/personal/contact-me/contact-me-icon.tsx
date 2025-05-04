"use client";

import React from "react";
import { IconType } from "react-icons";

interface IContactIcon {
  Icon: IconType;
  contactLink: string;
  label: string;
}

const ContactMeIcon: React.FC<IContactIcon> = ({
  Icon,
  contactLink,
  label,
}) => {
  return (
    <a
      href={contactLink}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-600"
      aria-label={label}
    >
      <Icon size={30} />
    </a>
  );
};

export default ContactMeIcon;
