"use client";

import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function SuccessMessage() {
  return (
    <div
      className="mt-6 max-w-lg mx-auto bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-md shadow-md 
    flex items-center gap-3 animate-fade-in-down transition-all duration-300"
    >
      <MdOutlineMarkEmailRead className="hidden sm:block sm:text-2xl text-green-600" />
      <div className="text-left">
        <p className="font-bold text-md">Message Sent Successfully</p>
        <p className="text-sm">
          Thank you for reaching out! I&apos;ll get back to you soon.
        </p>
      </div>
    </div>
  );
}
