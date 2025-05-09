"use client";

import React, { useEffect, useState } from "react";
import { IoHeart } from "react-icons/io5";
import SocialLinks from "./social-links";

const Footer = () => {
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-white text-black tracking-wide text-center py-2 mt-12">
      <p>
        © Copyright {year} All rights reserved
        <IoHeart className="ml-2 inline-block text-red-500" size={25} /> by Aung
        Sann Phyo
      </p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
