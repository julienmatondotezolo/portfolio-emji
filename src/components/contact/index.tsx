/* eslint-disable max-len */
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:julien.matondo-tezolo@student.ehb.be?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen relative space-y-5 flex flex-col text-center max-w-7xl justify-evenly mx-auto items-center py-10 z-0 px-5 md:px-10 box-border">
      <h3 className="brand-title">Contact</h3>

      <div className="space-y-10 w-full">
        <h4 className="text-2xl text-left md:text-center font-semibold">
          I got just what you need. Let&apos;s work <span className="text-primary-color">together.</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 md:justify-center">
            <PhoneIcon className="text-primary-color h-7 w-7 animate-pulse" />
            <p className="text-xl">+32 484 58 79 11</p>
          </div>

          <div className="flex items-center space-x-5 md:justify-center">
            <EnvelopeIcon className="text-primary-color h-7 w-7 animate-pulse" />
            <p className="text-xl">info@emji.com</p>
          </div>

          <div className="flex items-center space-x-5 md:justify-center">
            <MapPinIcon className="text-primary-color h-7 w-7 animate-pulse" />
            <p className="text-xl">Dilbeek</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 mx-auto">
          <div className="flex space-x-2">
            <input {...register("name")} placeholder="Name" className="contactInput w-1/2" type="text" />
            <input {...register("email")} placeholder="Email" className="contactInput w-1/2" type="email" />
          </div>

          <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />

          <textarea {...register("message")} placeholder="Message" className="contactInput" />
          <button className="primaryButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
