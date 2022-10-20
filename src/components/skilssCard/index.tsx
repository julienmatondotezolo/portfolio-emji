/* eslint-disable react/jsx-max-props-per-line */
import Image from "next/image";
import React from "react";

import { Skill, urlFor } from "../../config";

type Props = {
  skill: Skill;
};

export function SkilssCard({ skill }: Props) {
  return (
    <figure className="group relative flex flex-col space-y-2 items-center object-cover cursor-pointer">
      <div className="rounded-full bg-[#252525] h-8 w-8 md:w-16 md:h-16 xl:w-24 xl:h-24">
        <Image
          className="rounded-full"
          src={urlFor(skill?.image).url()}
          alt="Picture of the author"
          width="20px"
          height="20px"
          layout="responsive"
        />
      </div>

      <div className="absolute top-[-10px] opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-8 w-8 md:w-16 md:h-16 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm md:text-xl font-bold text-primary-color opacity-100">{skill.progress}%</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 font-bold">{skill.title}</p>
    </figure>
  );
}
