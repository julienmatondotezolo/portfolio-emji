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
              Emji
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
                    alt="Profile picture of Emji"
                    width={400}
                    height={500}
                    priority
                  />
                ) : (
                  <div className="w-full h-[500px] rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">E</span>
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
              AI Solutions Architect & 
              <span className="text-primary-400"> Automation Expert</span>
            </h3>

            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Emji Devimanus</span>, a passionate{' '}
                <span className="text-primary-400 font-semibold">AI Solutions Architect</span> with{' '}
                <span className="text-white font-semibold">5+ years</span> of full-stack development experience.
                I specialize in building intelligent automation solutions that drive real business results.
              </p>

              <p>
                Currently leading the <span className="text-primary-400 font-semibold">ADA Systems platform</span>,
                I've successfully generated <span className="text-green-400 font-semibold">€250+/month</span> revenue
                for L'Osteria Deerlijk, achieving <span className="text-green-400 font-semibold">400% growth</span>{' '}
                through AI-powered restaurant automation.
              </p>

              <p>
                My expertise spans <span className="text-white font-semibold">test automation engineering</span>,{' '}
                <span className="text-white font-semibold">full-stack development</span>, and{' '}
                <span className="text-white font-semibold">AI/ML implementation</span>. I'm driven by the goal
                of reaching <span className="text-primary-400 font-semibold">€1M net worth by 2026</span>{' '}
                through innovative AI solutions.
              </p>

              <p>
                I believe in <span className="text-white font-semibold">action over words</span> and{' '}
                <span className="text-white font-semibold">results over process</span>. Every solution I build
                is designed to solve real problems and deliver measurable ROI for clients.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
                <div className="text-2xl font-bold text-primary-400">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              
              <div className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
                <div className="text-2xl font-bold text-green-400">€450+</div>
                <div className="text-gray-400 text-sm">Monthly Revenue</div>
              </div>
              
              <div className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
                <div className="text-2xl font-bold text-blue-400">400%</div>
                <div className="text-gray-400 text-sm">Client Growth</div>
              </div>
              
              <div className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
                <div className="text-2xl font-bold text-purple-400">6+</div>
                <div className="text-gray-400 text-sm">AI Services</div>
              </div>
            </div>

            {/* Skills Highlight */}
            <div className="pt-6">
              <h4 className="text-xl font-bold text-white mb-4">Core Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {['AI/ML Implementation', 'Test Automation', 'Full-Stack Dev', 'Restaurant Tech', 'Process Automation', 'Revenue Growth'].map((skill) => (
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