import { motion } from "framer-motion";
import React from "react";

import { Skill } from "../../config";
import { SkilssCard } from "../";

type Props = {
  skills: Skill[];
};

export function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center px-5 md:px-10 md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 brand-title">Skills</h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-primary-color-50 hidden lg:block">
        Hover over 1 of my skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-primary-color-50 lg:hidden">
        Click on 1 of my skills
      </h3>

      <div className="absolute top-52 grid grid-cols-4 md:grid-cols-6 gap-x-2 md:gap-x-5 gap-y-10">
        {skills.map((skill) => (
          <SkilssCard key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
