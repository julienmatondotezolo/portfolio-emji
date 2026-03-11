import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, TerminalIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import profileImg from '../../assets/images/IMG_8258.png';
import type { PageInfo } from '../../config';

type Props = {
  pageInfo: PageInfo;
};

const techStack = [
  'Playwright',
  'Selenium',
  'CI/CD',
  'AI Solutions',
  'TypeScript',
];

const stats = [
  { value: '4+', label: 'Years' },
  { value: '80%+', label: 'Efficiency' },
  { value: '95%', label: 'Coverage' },
];

function TerminalBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.7 }}
      className="hidden lg:block mt-8 rounded-xl border border-dark-600/80 bg-dark-900/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary-500/5"
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-dark-800/80 border-b border-dark-600/60">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex items-center gap-1.5 ml-2 text-[11px] text-gray-500 font-mono">
          <TerminalIcon className="w-3 h-3" />
          login.spec.ts
        </div>
      </div>
      <div className="p-4 font-mono text-[13px] leading-[1.7] select-none">
        <div>
          <span className="text-purple-400">test</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;user login flow&apos;</span>
          <span className="text-gray-500">,</span>
          <span className="text-gray-300"> async </span>
          <span className="text-gray-500">({'{'}</span>
          <span className="text-orange-300"> page </span>
          <span className="text-gray-500">{'}'}) =&gt; {'{'}</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">await </span>
          <span className="text-gray-300">page.</span>
          <span className="text-yellow-300">goto</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;/login&apos;</span>
          <span className="text-gray-500">);</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">await </span>
          <span className="text-gray-300">page.</span>
          <span className="text-yellow-300">fill</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;#email&apos;</span>
          <span className="text-gray-500">,</span>
          <span className="text-orange-300"> &apos;user@test.com&apos;</span>
          <span className="text-gray-500">);</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">await </span>
          <span className="text-yellow-300">expect</span>
          <span className="text-gray-500">(</span>
          <span className="text-gray-300">page</span>
          <span className="text-gray-500">).</span>
          <span className="text-yellow-300">toHaveURL</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;/dashboard&apos;</span>
          <span className="text-gray-500">);</span>
        </div>
        <div>
          <span className="text-gray-500">{'}'});</span>
        </div>
      </div>
    </motion.div>
  );
}

function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-dark-900 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* eMJi text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight"
            animate={{ opacity: [1, 1, 0] }}
            transition={{ duration: 2.8, times: [0, 0.6, 1] }}
          >
            <span className="text-gray-500 font-light">e</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">M</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">J</span>
            <span className="text-gray-500 font-light">i</span>
          </motion.h1>
        </motion.div>

        {/* Expanding into full name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 0] }}
          transition={{ duration: 2.8, times: [0, 0.35, 0.7, 1] }}
          className="mt-4"
        >
          <span className="text-sm sm:text-base text-gray-500 font-mono tracking-widest">
            <span className="text-primary-400">M</span>atondo{' '}
            <span className="text-primary-400">J</span>ulien
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Hero({ pageInfo }: Props) {
  const [showIntro, setShowIntro] = useState(true);
  const heroDelay = showIntro ? 0.2 : 0;

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-900">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.04]" />

        {/* Ambient glow */}
        <div className="absolute top-0 left-1/4 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-primary-500/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] bg-primary-600/[0.05] rounded-full blur-[100px]" />

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-0">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Mobile-only: Photo at top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: heroDelay, duration: 0.6 }}
              className="lg:hidden relative"
            >
              <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48">
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-[50px] scale-90" />
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-primary-500/20">
                  <Image
                    className="rounded-full object-cover w-full h-full"
                    src={profileImg}
                    alt="Julien Matondo"
                    width={200}
                    height={200}
                    priority
                    placeholder="blur"
                  />
                </div>
              </div>
            </motion.div>

            {/* Left Column — Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: heroDelay, duration: 0.7 }}
              className="space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: heroDelay + 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium tracking-wide uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for projects
              </motion.div>

              {/* Name + role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: heroDelay + 0.4, duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-bold leading-[1] tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                    Matondo
                  </span>
                  <br />
                  <span className="text-white">Julien</span>
                </h1>
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: '3rem' }}
                  transition={{ delay: heroDelay + 0.8, duration: 0.5 }}
                  className="h-0.5 bg-primary-500 mt-4 lg:mt-5 mb-3 lg:mb-4 rounded-full mx-auto lg:mx-0"
                />
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-light">
                  Test Automation Engineer
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: heroDelay + 0.6, duration: 0.5 }}
                className="text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed mx-auto lg:mx-0"
              >
                Building enterprise-grade test automation frameworks and AI-powered
                QA solutions that improve quality and accelerate delivery.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: heroDelay + 0.7, duration: 0.5 }}
                className="flex justify-center lg:justify-start gap-8 sm:gap-10"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: heroDelay + 0.8 + i * 0.1, duration: 0.4 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tech pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: heroDelay + 0.9, duration: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2"
              >
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: heroDelay + 1 + i * 0.05, duration: 0.3 }}
                    className="px-3 py-1.5 bg-dark-800 border border-dark-700 rounded-lg text-xs text-gray-400 font-medium hover:border-primary-500/50 hover:text-gray-300 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: heroDelay + 1.1, duration: 0.5 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-1 lg:pt-2"
              >
                <Link href="#projects">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 sm:py-3.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-lg shadow-primary-500/20"
                  >
                    View Projects
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </motion.button>
                </Link>
                <Link href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 sm:py-3.5 bg-transparent border border-dark-600 hover:border-primary-500/50 text-gray-300 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-primary-500/5"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column — Desktop photo + Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: heroDelay + 0.4, duration: 0.7 }}
              className="relative hidden lg:block"
            >
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-[80px] scale-75" />
                <motion.div
                  className="relative z-10 w-80 h-80 mx-auto rounded-full overflow-hidden border-2 border-primary-500/20 ring-1 ring-primary-500/10 ring-offset-4 ring-offset-dark-900"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    className="rounded-full object-cover w-full h-full"
                    src={profileImg}
                    alt="Julien Matondo"
                    width={400}
                    height={400}
                    priority
                    placeholder="blur"
                  />
                </motion.div>
              </div>
              <TerminalBlock />
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: heroDelay + 1.8, duration: 0.5 }}
            className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-8 border border-gray-600 rounded-full flex justify-center"
            >
              <div className="w-0.5 h-2 bg-gray-500 rounded-full mt-1.5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
