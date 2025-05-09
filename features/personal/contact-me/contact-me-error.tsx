"use client";

import { FaExclamationCircle } from "react-icons/fa";

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div
      className="mt-6 max-w-lg mx-auto bg-red-100 border border-red-300 text-red-800 px-6 py-4 rounded-md shadow-md 
    flex items-center gap-3 animate-fade-in-down transition-all duration-300"
    >
      <FaExclamationCircle className="hidden sm:block sm:text-2xl text-red-600" />
      <div className="text-left">
        <p className="font-bold text-md">Something Went Wrong</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
