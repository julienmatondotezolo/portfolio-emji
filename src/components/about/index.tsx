import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import type { PageInfo } from '../../config';
import { urlFor } from '../../config';

type Props = {
  pageInfo: PageInfo;
};

export function About({ pageInfo }: Props) {
  return (
    <div className="py-20 px-6 lg:px-8 bg-dark-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-5" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            About
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Julien
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur-3xl opacity-20" />
              
              {/* Profile image container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-primary-500/30 bg-gradient-to-br from-primary-500/20 to-primary-600/20 p-2">
                {pageInfo?.heroImage ? (
                  <Image
                    className="rounded-xl object-cover w-full h-full"
                    src={urlFor(pageInfo.heroImage).url()}
                    alt="Profile picture of Julien Matondo"
                    width={400}
                    height={500}
                    priority
                  />
                ) : (
                  <div className="w-full h-[500px] rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">J</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Test Automation Engineer &
              <span className="text-primary-400"> AI Solutions Architect</span>
            </h3>

            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Julien Matondo</span>, an ISTQB-certified{' '}
                <span className="text-primary-400 font-semibold">Test Automation Engineer</span> with{' '}
                <span className="text-white font-semibold">4+ years</span> of hands-on experience in enterprise
                test automation and AI-driven solutions.
              </p>

              <p>
                I've worked with major organizations like <span className="text-primary-400 font-semibold">Fluvius</span>,{' '}
                <span className="text-primary-400 font-semibold">INAMI-RIZIV</span>, and{' '}
                <span className="text-primary-400 font-semibold">Devoteam</span>, delivering test automation frameworks
                that improved testing efficiency by <span className="text-green-400 font-semibold">80%+</span> and
                reduced bug escape rates by <span className="text-green-400 font-semibold">90%</span>.
              </p>

              <p>
                My expertise spans <span className="text-white font-semibold">Playwright</span>,{' '}
                <span className="text-white font-semibold">Selenium</span>,{' '}
                <span className="text-white font-semibold">Cypress</span>, and{' '}
                <span className="text-white font-semibold">CI/CD pipelines</span>. I also build AI-powered
                automation solutions using tools like n8n, Claude, and OpenAI.
              </p>

              <p>
                I believe in <span className="text-white font-semibold">action over words</span> and{' '}
                <span className="text-white font-semibold">results over process</span>. Every solution I build
                is designed to solve real problems and deliver measurable quality improvements.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
                <div className="text-2xl font-bold text-primary-400">4+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>

              <div className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
                <div className="text-2xl font-bold text-green-400">80%+</div>
                <div className="text-gray-400 text-sm">Efficiency Gain</div>
              </div>

              <div className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
                <div className="text-2xl font-bold text-blue-400">95%</div>
                <div className="text-gray-400 text-sm">Test Coverage</div>
              </div>

              <div className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
                <div className="text-2xl font-bold text-purple-400">90%</div>
                <div className="text-gray-400 text-sm">Bug Reduction</div>
              </div>
            </div>

            {/* Skills Highlight */}
            <div className="pt-6">
              <h4 className="text-xl font-bold text-white mb-4">Core Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {['Playwright', 'Selenium', 'Cypress', 'CI/CD', 'AI Automation', 'n8n'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}