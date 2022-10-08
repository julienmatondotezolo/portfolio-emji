import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";

export function Contact() {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left max-w-7xl justify-evenly mx-auto items-center z-0 px-5 md:px-10">
      <h3 className="absolute top-24 brand-title">Contact</h3>

      <div className="space-y-10">
        <h4 className="text-2xl font-semibold">
          I got just what you need. Let&apos;s work <span className="text-primary-color">together.</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-primary-color h-7 w-7 animate-bounce" />
            <p className="text-xl">+32 484 58 79 11</p>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-primary-color h-7 w-7 animate-bounce" />
            <p className="text-xl">info@emji.com</p>
          </div>

          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-primary-color h-7 w-7 animate-bounce" />
            <p className="text-xl">Dilbeek</p>
          </div>
        </div>
      </div>
    </div>
  );
}
