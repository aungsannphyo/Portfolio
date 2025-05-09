"use client";

import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { useState } from "react";

export interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export type ContactFormType = {
  register: UseFormRegister<IFormInput>;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<IFormInput>;
  isLoading: boolean;
  isSubmitted: boolean;
  errorMessage: string;
};

export const useContactForm = (): ContactFormType => {
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

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isLoading,
    isSubmitted,
    errorMessage,
  };
};
