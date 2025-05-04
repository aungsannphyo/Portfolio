"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface IProjectImageProps {
  index: number;
  image: StaticImageData;
  title: string;
}

const ProjectImage: React.FC<IProjectImageProps> = ({
  index,
  image,
  title,
}) => {
  return (
    <div
      className={`relative w-full md:w-5/12 aspect-[4/3] bg-gray-100 rounded-xl shadow-md overflow-hidden group ${
        index % 2 !== 0 ? "md:order-2" : ""
      }`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  );
};

export default ProjectImage;
