"use client";

import React, { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { IoPaperPlaneOutline, IoMailOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    console.log(formData);
    setIsLoading(true);
    setIsSubmitted(false);
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        setErrorMessage("Failed to send message: " + result.error);
      }
    } catch (err) {
      setErrorMessage(
        "There was an issue with sending your message. Please try again later."
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

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

  const isSuccess = isSubmitted && !isLoading && (
    <div
      className="mt-6 max-w-lg mx-auto bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-md shadow-md 
      flex items-center gap-3 animate-fade-in-down transition-all duration-300"
    >
      <MdOutlineMarkEmailRead className="hidden sm:block sm:text-2xl text-green-600" />
      <div className="text-left">
        <p className="font-bold text-md">Message Sent Successfully</p>
        <p className="text-sm">
          Thank you for reaching out! I&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
    </div>
  );

  const error = errorMessage && !isLoading && (
    <div
      className="mt-6 max-w-lg mx-auto bg-red-100 border border-red-300 text-red-800 px-6 py-4 rounded-md shadow-md 
      flex items-center gap-3 animate-fade-in-down transition-all duration-300"
    >
      <FaExclamationCircle className="hidden sm:block sm:text-2xl text-red-600" />
      <div className="text-left">
        <p className="font-bold text-md">Something Went Wrong</p>
        <p className="text-sm">{errorMessage}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-white text-gray-900 py-12 mt-12 rounded-lg shadow-gray-500 shadow-sm">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-black mb-6 flex items-center justify-center gap-3">
          <IoMailOutline className="text-2xl text-black" />
          Get in Touch
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg mx-auto space-y-6"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full p-4 bg-white border rounded-sm  placeholder-gray-600 focus:outline-none focus:ring-1
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
        : "border-black focus:ring-black "
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
            className="w-full hover:cursor-pointer py-3 bg-black text-white font-semibold
             hover:bg-gray-800 focus:outline-none transform transition duration-300 
             ease-in-out hover:scale-105 flex justify-center items-center space-x-2 rounded-sm"
            disabled={isLoading}
          >
            {loading}
          </button>
        </form>
        {isSuccess}
        {error}
      </div>
    </section>
  );
};

export default ContactMe;
