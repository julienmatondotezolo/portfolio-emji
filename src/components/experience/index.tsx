import { motion } from "framer-motion";
import React from "react";

import { experience } from "../../config";
import { ExperienceCard } from "../";

type Props = {
  experiences: experience[];
};

export function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1.5 }}
      viewport={{ once: false }}
      transition={{
        duration: 1,
      }}
      className="h-fit flex flex-col relative text-left overflow-hidden max-w-full px-5 md:px-10 pt-10 justify-evenly mx-auto items-center"
    >
      <h3 className="brand-title">Experience</h3>

      <div className="w-full flex box-border py-6 space-x-5 overflow-x-scroll snap-x snap-mandatory customScrollbar">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
