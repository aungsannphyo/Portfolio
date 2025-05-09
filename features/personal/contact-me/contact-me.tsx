"use client";

import { IoMailOutline } from "react-icons/io5";
import ContactForm from "./contact-form";

export default function ContactMe() {
  return (
    <section className="bg-white text-gray-900 py-12 mt-12 rounded-lg shadow-gray-500 shadow-sm">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-black mb-6 flex items-center justify-center gap-3">
          <IoMailOutline className="text-2xl text-black" />
          Get in Touch
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
