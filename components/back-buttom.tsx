"use client";

import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-black border
       border-black px-4 py-1 rounded 
       hover:bg-black hover:text-white transition cursor-pointer"
    >
      <IoArrowBack />
      Back
    </button>
  );
};

export default BackButton;
