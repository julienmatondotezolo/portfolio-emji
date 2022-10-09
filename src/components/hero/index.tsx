import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import mypic from "../../assets/images/IMG_8258.png";

export function Hero() {
  const [text] = useTypewriter({
    words: ["Hello, my name is Julien", "Let's talk !"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <motion.div
        initial={{
          y: 200,
          opacity: 0,
          scale: 0,
        }}
        animate={{
          y: [200, -80, -40],
          x: 0,
          opacity: 1,
          scale: [0, 1.5, 0.8],
        }}
        transition={{
          duration: 2,
        }}
        className="mx-auto"
      >
        <Image
          className="rounded-full"
          src={mypic}
          alt="Picture of the author"
          width="220px"
          height="220px"
          objectFit="cover"
        />
      </motion.div>
      <motion.article
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="z-20"
      >
        <h2 className="md:text-sm uppercase text-gray-500 pb-2 tracking-[15px] sm:text-xs">Full stack developer</h2>
        <h1>
          <span className="sm:text-xl text-2xl lg:text-6xl font-semibold scroll-px-10 md:text-xl">
            {`< `}
            {text}
            <Cursor cursorColor="red" />
            {` />`}
          </span>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton mx-5 my-1">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton mx-5 my-1">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton mx-5 my-1">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton mx-5 my-1">Projects</button>
          </Link>
        </div>
      </motion.article>
    </div>
  );
}
