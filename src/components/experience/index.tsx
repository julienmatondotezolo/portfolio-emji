import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
import React from 'react';

import { experience } from '../../config';
import { useTranslation } from '../../i18n';

type Props = {
  experiences: experience[];
};

const hardcodedExperiences = [
  {
    id: '1',
    company: 'Fluvius',
    location: 'Belgium',
    dateStarted: 'Jan 2026',
    dateEnded: 'Mar 2026',
    technologies: ['Playwright', 'JIRA', 'SAP', 'E2E Testing'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: '2',
    company: 'INAMI-RIZIV',
    location: 'Brussels, Belgium',
    dateStarted: 'Aug 2025',
    dateEnded: 'Dec 2025',
    technologies: ['Playwright', 'Selenium', 'Test Strategy', 'EUNOME'],
    color: 'from-green-400 to-green-600',
  },
  {
    id: '3',
    company: 'INAMI-RIZIV',
    location: 'Brussels, Belgium',
    dateStarted: 'Jun 2023',
    dateEnded: 'Aug 2025',
    technologies: ['Selenium', 'Playwright', 'Java', 'CI/CD', 'Cascada 2.0'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: '4',
    company: 'My Devoteam',
    location: 'Brussels, Belgium',
    dateStarted: 'Aug 2022',
    dateEnded: 'Jun 2023',
    technologies: ['Selenium', 'JUnit', 'XRAY', 'CI/CD', 'Jenkins'],
    color: 'from-orange-400 to-orange-600',
  },
  {
    id: '5',
    company: 'Adasystems',
    location: 'Belgium',
    dateStarted: 'May 2022',
    dateEnded: 'Aug 2022',
    technologies: ['Manual Testing', 'Tablet Testing', 'QA'],
    color: 'from-teal-400 to-teal-600',
  },
  {
    id: '6',
    company: 'Bothive',
    location: 'Belgium',
    dateStarted: 'Feb 2022',
    dateEnded: 'Apr 2022',
    technologies: ['Liquid', 'Full Stack', 'Web Development'],
    color: 'from-pink-400 to-pink-600',
  },
];

export function Experience({ experiences: _sanityExperiences }: Props) {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 lg:px-8 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-5" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6"
          >
            <BriefcaseIcon className="w-4 h-4" />
            {t('experience.badge')}
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {t('experience.title')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              {t('experience.titleHighlight')}
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-600 transform md:-translate-x-0.5" />

          {hardcodedExperiences.map((exp, index) => {
            const jobTitle = t(`experience.jobs.${exp.id}.jobTitle`);
            const pointKeys = Object.keys(
              // Get the number of points from the translation
              (() => {
                const points: string[] = [];
                for (let i = 0; i < 10; i++) {
                  const val = t(`experience.jobs.${exp.id}.points.${i}`);
                  if (val !== `experience.jobs.${exp.id}.points.${i}`) points.push(val);
                  else break;
                }
                return points;
              })()
            );
            const points: string[] = [];
            for (let i = 0; i < 10; i++) {
              const val = t(`experience.jobs.${exp.id}.points.${i}`);
              if (val !== `experience.jobs.${exp.id}.points.${i}`) points.push(val);
              else break;
            }

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-dark-800" />

                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-dark-900 rounded-2xl p-6 border border-dark-700 hover:border-primary-500/30 transition-all">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <CalendarIcon className="w-4 h-4" />
                      {exp.dateStarted} — {exp.dateEnded}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{jobTitle}</h3>

                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color} font-semibold`}>
                        {exp.company}
                      </span>
                      <span className="text-gray-500">&bull;</span>
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <MapPinIcon className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2">
                      {points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
