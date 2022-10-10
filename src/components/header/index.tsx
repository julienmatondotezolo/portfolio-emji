import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

import { Social } from "../../config/";

type Props = {
  socials: Social[];
};

export function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-2 flex items-center justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon key={social._id} url={social.url} fgColor="gray" bgColor="transparent" />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1.8,
        }}
        className="flex items-center"
      >
        <Link href="#contact">
          <button className="heroButtonInversed mx-5 my-1">Contact</button>
        </Link>
      </motion.div>
    </header>
  );
}
