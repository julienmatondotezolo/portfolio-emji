import { motion } from "framer-motion";
import React from "react";

import { SkilssCard } from "../";

export function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center px-10 md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 brand-title">Skills</h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500">Hover over on of my skills</h3>

      <div className="absolute top-52 grid grid-cols-4 md:grid-cols-6 gap-5">
        <SkilssCard />
        <SkilssCard />
        <SkilssCard />
        <SkilssCard />
        <SkilssCard />
        <SkilssCard />
        <SkilssCard />
        <SkilssCard />
        <SkilssCard />
        <SkilssCard />
        <SkilssCard />
        <SkilssCard />
        <SkilssCard />
        <SkilssCard />
        <SkilssCard />
      </div>
    </motion.div>
  );
}
