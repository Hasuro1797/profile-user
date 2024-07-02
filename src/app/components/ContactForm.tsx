"use client";
import React, { useState } from "react";
import TitleComponent from "./TitleComponent";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<IFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const [isSend, setIsSend] = useState(false);
  const onsubmit: SubmitHandler<IFormInputs> = (data) => {
    if (isSubmitSuccessful) {
      setIsSend(true);
      setTimeout(() => {
        setIsSend(false);
      }, 3000);
      reset();
    }
  };
  return (
    <div className="border border-slate-200/30 mx-10 sm:mx-0 my-10 rounded sm:max-w-[600px] w-full p-4">
      <TitleComponent title="Contact Me" />
      <form
        className="flex flex-col gap-4 text-slate-400"
        onSubmit={handleSubmit(onsubmit)}
      >
        <label htmlFor="name*" className="text-slate-400 font-medium">
          {"Name"}
        </label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: true,
          })}
          placeholder="Your Name"
          className="p-2 border border-slate-200/30 bg-transparent rounded outline-none focus:border-slate-300"
        />
        {errors.name?.type === "required" && (
          <p role="alert" className="text-red-500 text-xs">
            The name is required
          </p>
        )}
        <label htmlFor="email*" className="text-slate-400 font-medium">
          {"Email"}
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          placeholder="Your Email"
          className="p-2 border border-slate-200/30 bg-transparent rounded outline-none focus:border-slate-300"
        />
        {errors.email?.type === "required" && (
          <p role="alert" className="text-red-500 text-xs">
            The email is required
          </p>
        )}
        <label htmlFor="message" className="text-slate-400 font-medium">
          {"Message"}
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Your Message"
          className="p-2 border border-slate-200/30 bg-transparent rounded outline-none focus:border-slate-300"
        />
        <button
          type="submit"
          className="bg-violet-600 text-white mt-4 p-2 rounded hover:bg-violet-700"
        >
          {"Send Message"}
        </button>
        {isSend && (
          <p className="text-green-500 text-center mt-2">
            {"Message sent successfully!"}
          </p>
        )}
      </form>
    </div>
  );
}
