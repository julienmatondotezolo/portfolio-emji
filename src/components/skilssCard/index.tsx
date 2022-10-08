/* eslint-disable react/jsx-max-props-per-line */
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import mypic from "../../assets/images/IMG_8258.png";

export function SkilssCard() {
  return (
    <figure className="group relative flex flex-col items-center object-cover cursor-pointer">
      <div className="rounded-full bg-[#252525] h-24 w-24 md:w-28 xl:w-32 xl:h-32">
        <Image className="rounded-full" src={mypic} alt="Picture of the author" objectFit="cover" />
      </div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-full w-full rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-primary-color opacity-100">100%</p>
        </div>
      </div>
    </figure>
  );
}