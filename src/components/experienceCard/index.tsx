import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import type { experience } from '../../config';
import { urlFor } from '../../config';

type Props = {
  experience: experience;
};

export const ExperienceCard = React.forwardRef<HTMLElement, Props>(
  ({ experience }, ref) => (
    <motion.article
      ref={ref}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col rounded-2xl items-center space-y-6 flex-shrink-0 w-[320px] md:w-[420px] xl:w-[520px] snap-center bg-dark-800 border border-dark-700 py-8 px-6 md:px-8 hover:border-primary-500/30 cursor-pointer transition-all duration-300 hover:shadow-2xl"
    >
      {/* Company Logo */}
      <div className="relative w-32 h-20 flex items-center justify-center bg-white rounded-xl p-3">
        <Image
          className="object-contain"
          src={urlFor(experience.companyImage).url()}
          alt={`${experience.company} logo`}
          fill
          sizes="(max-width: 768px) 128px, 128px"
        />
      </div>

      <div className="space-y-4 text-center">
        {/* Job Title */}
        <h4 className="text-xl md:text-2xl font-bold text-white">
          {experience.jobTitle}
        </h4>
        
        {/* Company */}
        <p className="text-primary-400 font-semibold text-lg">
          {experience.company}
        </p>

        {/* Date Range */}
        <p className="text-gray-400 text-sm uppercase tracking-wide">
          {new Date(experience.dateStarted).getFullYear()} - {' '}
          {experience.dateEnded ? new Date(experience.dateEnded).getFullYear() : 'Present'}
        </p>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap justify-center gap-3">
        {experience.technologies.map((technology) => (
          <div 
            key={technology._id} 
            className="relative w-8 h-8 bg-dark-700 rounded-lg p-1 border border-dark-600 hover:border-primary-500/50 transition-colors"
          >
            <Image
              className="object-contain"
              src={urlFor(technology.image).url()}
              alt={`${technology.title || 'Technology'} icon`}
              fill
              sizes="32px"
            />
          </div>
        ))}
      </div>

      {/* Key Points */}
      <ul className="space-y-3 text-sm text-gray-300 leading-relaxed max-w-lg">
        {experience.points.map((point, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
            <span>{point}</span>
          </motion.li>
        ))}
      </ul>
    </motion.article>
  )
);

ExperienceCard.displayName = 'ExperienceCard';