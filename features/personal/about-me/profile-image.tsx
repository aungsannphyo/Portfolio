"use client";

import React from "react";
import Image from "next/image";
import profileImage from "@/public/profile.jpeg";

const ProfileImage = () => {
  return (
    <div className="flex justify-center mt-6 md:mt-0">
      <Image
        src={profileImage}
        alt="Aung San Xallet"
        width={300}
        height={300}
        priority
        className="rounded-full border border-black"
      />
    </div>
  );
};

export default ProfileImage;
