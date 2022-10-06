import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import mypic from "../../assets/images/IMG_8258.png";
import { BackgroundCircles } from "../";

export function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hello, my name is Matondo Julien", "But you can call me Emji"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto"
        src={mypic}
        alt="Picture of the author"
        width="220px"
        height="220px"
        objectFit="cover"
      />
      <article>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Full stack developer</h2>
        <h1>
          <span className="text-5xl lg:text-6xl font-semibold scroll-px-10">{`< ${text} />`}</span>
          <Cursor cursorColor="red" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </article>
    </div>
  );
}
