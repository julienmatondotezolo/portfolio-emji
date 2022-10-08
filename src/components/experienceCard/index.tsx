import Image from "next/image";
import React from "react";

import mypic from "../../assets/images/IMG_8258.png";

export function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[600px] snap-center bg-[#292929] py-10 px-5 md:px-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <Image
        className="rounded-full"
        src={mypic}
        alt="Picture of the author"
        width="100px"
        height="100px"
        objectFit="cover"
      />

      <div>
        <h4 className="text-2xl font-semibold">Junior Full stack developer (internship)</h4>
        <p className="font-bold text-1xl mt-1">Bothive</p>

        <div className="flex space-x-2 my-2">
          <figure>
            <Image
              className="rounded-full"
              src={mypic}
              alt="Picture of the author"
              width="25px"
              height="25px"
              objectFit="cover"
            />
          </figure>
          <figure>
            <Image
              className="rounded-full"
              src={mypic}
              alt="Picture of the author"
              width="25px"
              height="25px"
              objectFit="cover"
            />
          </figure>
          <figure>
            <Image
              className="rounded-full"
              src={mypic}
              alt="Picture of the author"
              width="25px"
              height="25px"
              objectFit="cover"
            />
          </figure>
        </div>

        <p className="uppercase pt-2 text-gray-400">7 februari 2022 - 29 april 2022</p>
      </div>

      <ul className="list-disc space-y-4 pb-4 ml-5 text-lg">
        <li>
          Question current solutions and contribute to the development of a robust tool that can support the growing
          user base.
        </li>
        <li>Redesigning and developing a liquid editor Liquid editor https://liquid-editor2.vercel.app/</li>
        <li>Communication between microservices using kafka.</li>
      </ul>
    </article>
  );
}
