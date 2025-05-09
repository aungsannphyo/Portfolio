"use client";

import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaExclamationCircle } from "react-icons/fa";

import React from "react";
import SuccessMessage from "./contact-me-success";
import ErrorMessage from "./contact-me-error";
import { ContactFormType, useContactForm } from "@/hook/useContactForm";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    errors,
    isLoading,
    isSubmitted,
    errorMessage,
  }: ContactFormType = useContactForm();

  const loading = isLoading ? (
    <span className="flex items-center space-x-2">
      <span className="text-sm">Sending</span>
      <span className="dot-animation" />
    </span>
  ) : (
    <React.Fragment>
      <IoPaperPlaneOutline className="text-lg" />
      <span>Send Message</span>
    </React.Fragment>
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full p-4 bg-white border rounded-sm placeholder-gray-600 focus:outline-none focus:ring-1
              ${
                errors.name
                  ? "border-red-500 focus:ring-red-100"
                  : "border-black focus:ring-black"
              } transition-all duration-300`}
            {...register("name", { required: "Please enter your name." })}
          />
          {errors.name && (
            <div className="text-red-600 mt-2 text-sm flex items-center gap-2">
              <FaExclamationCircle className="text-xl text-red-600" />
              <span>{errors.name.message}</span>
            </div>
          )}
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder="Your Email"
            className={`w-full p-4 bg-white border rounded-sm text-black placeholder-gray-600 focus:outline-none focus:ring-1 
              ${
                errors.email
                  ? "border-red-500 focus:ring-red-100"
                  : "border-black focus:ring-black "
              } transition-all duration-300`}
            {...register("email", {
              required: "Please enter a valid email address.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Please enter a valid email address.",
              },
            })}
          />
          {errors.email && (
            <div className="text-red-600 mt-2 text-sm flex items-center gap-2">
              <FaExclamationCircle className="text-xl text-red-600" />
              <span>{errors.email.message}</span>
            </div>
          )}
        </div>
        <div className="relative">
          <textarea
            placeholder="Your Message"
            {...register("message", {
              required: "Your message cannot be empty.",
            })}
            className={`w-full p-4 bg-white border rounded-sm text-black placeholder-gray-600 
              focus:outline-none focus:ring-1
              ${
                errors.message
                  ? "border-red-500 focus:ring-red-100"
                  : "border-black focus:ring-black"
              } transition-all duration-300`}
            rows={7}
          />
          {errors.message && (
            <div className="text-red-600 mt-2 text-sm flex items-center gap-2">
              <FaExclamationCircle className="text-xl text-red-600" />
              <span>{errors.message.message}</span>
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full hover:cursor-pointer py-3 bg-black text-white font-semibold
           hover:bg-gray-800 focus:outline-none transform transition duration-300 
           ease-in-out hover:scale-105 flex justify-center items-center space-x-2 rounded-sm"
        >
          {loading}
        </button>
      </form>
      {isSubmitted && !isLoading && <SuccessMessage />}
      {errorMessage && !isLoading && <ErrorMessage message={errorMessage} />}
    </>
  );
}
