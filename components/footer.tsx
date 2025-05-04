"use client";

import React from "react";
import { IoHeart } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-2 mt-12">
      <p>
        © Copyright {new Date().getFullYear()} All rights reserved
        <IoHeart className="ml-2 inline-block text-red-500" size={25} /> by Aung
        Sann Phyo
      </p>
    </footer>
  );
};

export default Footer;
