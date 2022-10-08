import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

import config from "../../config/config.json";

export function Header() {
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
        <SocialIcon url={config.URL.SOCIAL.BEHANCE} fgColor="gray" bgColor="transparent" />
        <SocialIcon url={config.URL.SOCIAL.LINKEDIN} fgColor="gray" bgColor="transparent" />
        <SocialIcon url={`mailto:${config.URL.SOCIAL.EMAIL}`} fgColor="gray" bgColor="transparent" />
      </motion.div>
      <div className="flex items-center">
        <Link href="#contact">
          <button className="heroButtonInversed mx-5 my-1">Contact</button>
        </Link>
      </div>
    </header>
  );
}
