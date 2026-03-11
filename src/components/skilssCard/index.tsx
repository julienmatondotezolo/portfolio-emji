import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import type { Skill } from '../../config';
import { urlFor } from '../../config';

type Props = {
  skill: Skill;
};

export function SkilssCard({ skill }: Props) {
  return (
    <motion.figure
      whileHover={{ scale: 1.05 }}
      className="group relative flex flex-col space-y-3 items-center cursor-pointer"
    >
      {/* Skill Icon */}
      <div className="relative">
        <div className="rounded-full bg-dark-700 border border-dark-600 p-4 w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 flex items-center justify-center group-hover:border-primary-500/50 transition-all duration-300">
          <div className="relative w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12">
            <Image
              className="rounded-sm object-contain"
              src={urlFor(skill?.image).url()}
              alt={`${skill.title} logo`}
              fill
              sizes="(max-width: 768px) 32px, (max-width: 1200px) 40px, 48px"
            />
          </div>
        </div>

        {/* Hover Overlay with Progress */}
        <div className="absolute inset-0 bg-primary-500/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <p className="text-sm md:text-base xl:text-lg font-bold text-white">
            {skill.progress}%
          </p>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </div>

      {/* Skill Name */}
      <p className="text-xs md:text-sm text-gray-400 font-medium text-center group-hover:text-primary-400 transition-colors duration-300">
        {skill.title}
      </p>

      {/* Progress Bar */}
      <div className="w-full max-w-16 md:max-w-20 xl:max-w-24 h-1 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.progress}%` }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.figure>
  );
}