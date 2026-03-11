import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, PlayIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useCallback } from 'react';

import profileImg from '../../assets/images/IMG_8258.png';
import type { PageInfo } from '../../config';
import { useTranslation } from '../../i18n';

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

// --- Terminal Scenarios ---

type ScenarioStep = {
  action: string;
  target: string;
  value?: string;
  delay: number;
};

const scenarios: {
  id: string;
  key: string;
  code: React.ReactNode;
  steps: ScenarioStep[];
}[] = [
  {
    id: 'login',
    key: 'login',
    code: (
      <>
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
      </>
    ),
    steps: [
      { action: 'navigating', target: '/login', delay: 600 },
      { action: 'filling', target: '#email', value: 'user@test.com', delay: 800 },
      { action: 'filling', target: '#password', value: '••••••••', delay: 600 },
      { action: 'clicking', target: 'Submit button', delay: 500 },
      { action: 'waiting', target: 'navigation', delay: 700 },
      { action: 'asserting', target: 'URL = /dashboard', delay: 400 },
    ],
  },
  {
    id: 'checkout',
    key: 'checkout',
    code: (
      <>
        <div>
          <span className="text-purple-400">test</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;checkout flow&apos;</span>
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
          <span className="text-emerald-400">&apos;/products&apos;</span>
          <span className="text-gray-500">);</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">await </span>
          <span className="text-gray-300">page.</span>
          <span className="text-yellow-300">click</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;.add-to-cart&apos;</span>
          <span className="text-gray-500">);</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">await </span>
          <span className="text-gray-300">page.</span>
          <span className="text-yellow-300">click</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;#checkout-btn&apos;</span>
          <span className="text-gray-500">);</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">await </span>
          <span className="text-yellow-300">expect</span>
          <span className="text-gray-500">(</span>
          <span className="text-gray-300">page.</span>
          <span className="text-yellow-300">locator</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;.success&apos;</span>
          <span className="text-gray-500">)).</span>
          <span className="text-yellow-300">toBeVisible</span>
          <span className="text-gray-500">();</span>
        </div>
        <div>
          <span className="text-gray-500">{'}'});</span>
        </div>
      </>
    ),
    steps: [
      { action: 'navigating', target: '/products', delay: 600 },
      { action: 'clicking', target: 'Add to Cart button', delay: 700 },
      { action: 'clicking', target: 'Checkout button', delay: 500 },
      { action: 'filling', target: 'Payment details', value: '•••• 4242', delay: 900 },
      { action: 'clicking', target: 'Confirm order', delay: 600 },
      { action: 'asserting', target: 'Success message visible', delay: 400 },
    ],
  },
  {
    id: 'dashboard',
    key: 'dashboard',
    code: (
      <>
        <div>
          <span className="text-purple-400">test</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;dashboard loads data&apos;</span>
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
          <span className="text-emerald-400">&apos;/dashboard&apos;</span>
          <span className="text-gray-500">);</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">await </span>
          <span className="text-gray-300">page.</span>
          <span className="text-yellow-300">waitForSelector</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;.chart-container&apos;</span>
          <span className="text-gray-500">);</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">const </span>
          <span className="text-orange-300">count </span>
          <span className="text-gray-500">= </span>
          <span className="text-blue-400">await </span>
          <span className="text-gray-300">page.</span>
          <span className="text-yellow-300">locator</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;.metric-card&apos;</span>
          <span className="text-gray-500">).</span>
          <span className="text-yellow-300">count</span>
          <span className="text-gray-500">();</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">await </span>
          <span className="text-yellow-300">expect</span>
          <span className="text-gray-500">(</span>
          <span className="text-orange-300">count</span>
          <span className="text-gray-500">).</span>
          <span className="text-yellow-300">toBeGreaterThan</span>
          <span className="text-gray-500">(</span>
          <span className="text-purple-400">0</span>
          <span className="text-gray-500">);</span>
        </div>
        <div>
          <span className="text-gray-500">{'}'});</span>
        </div>
      </>
    ),
    steps: [
      { action: 'navigating', target: '/dashboard', delay: 700 },
      { action: 'waiting', target: 'chart-container', delay: 900 },
      { action: 'asserting', target: 'Charts rendered', delay: 400 },
      { action: 'clicking', target: 'Metric cards', delay: 500 },
      { action: 'asserting', target: 'Count > 0', delay: 400 },
    ],
  },
  {
    id: 'contact',
    key: 'contact',
    code: (
      <>
        <div>
          <span className="text-purple-400">test</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;contact form submit&apos;</span>
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
          <span className="text-emerald-400">&apos;/contact&apos;</span>
          <span className="text-gray-500">);</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">await </span>
          <span className="text-gray-300">page.</span>
          <span className="text-yellow-300">fill</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;#name&apos;</span>
          <span className="text-gray-500">,</span>
          <span className="text-orange-300"> &apos;John Doe&apos;</span>
          <span className="text-gray-500">);</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">await </span>
          <span className="text-gray-300">page.</span>
          <span className="text-yellow-300">fill</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;#email&apos;</span>
          <span className="text-gray-500">,</span>
          <span className="text-orange-300"> &apos;john@test.com&apos;</span>
          <span className="text-gray-500">);</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">await </span>
          <span className="text-gray-300">page.</span>
          <span className="text-yellow-300">fill</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;#message&apos;</span>
          <span className="text-gray-500">,</span>
          <span className="text-orange-300"> &apos;Hello!&apos;</span>
          <span className="text-gray-500">);</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">await </span>
          <span className="text-gray-300">page.</span>
          <span className="text-yellow-300">click</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;button[type=submit]&apos;</span>
          <span className="text-gray-500">);</span>
        </div>
        <div className="ml-4">
          <span className="text-blue-400">await </span>
          <span className="text-yellow-300">expect</span>
          <span className="text-gray-500">(</span>
          <span className="text-gray-300">page.</span>
          <span className="text-yellow-300">locator</span>
          <span className="text-gray-500">(</span>
          <span className="text-emerald-400">&apos;.success&apos;</span>
          <span className="text-gray-500">)).</span>
          <span className="text-yellow-300">toBeVisible</span>
          <span className="text-gray-500">();</span>
        </div>
        <div>
          <span className="text-gray-500">{'}'});</span>
        </div>
      </>
    ),
    steps: [
      { action: 'navigating', target: '/contact', delay: 600 },
      { action: 'filling', target: '#name', value: 'John Doe', delay: 700 },
      { action: 'filling', target: '#email', value: 'john@test.com', delay: 600 },
      { action: 'filling', target: '#message', value: 'Hello!', delay: 500 },
      { action: 'clicking', target: 'Submit button', delay: 600 },
      { action: 'waiting', target: 'response', delay: 800 },
      { action: 'asserting', target: 'Success message visible', delay: 400 },
    ],
  },
];

// --- Run Dialog ---

function RunDialog({
  scenario,
  onClose,
}: {
  scenario: typeof scenarios[0];
  onClose: () => void;
}) {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [phase, setPhase] = useState<'running' | 'passed' | 'generating' | 'report'>('running');
  const steps = scenario.steps;
  const totalDuration = steps.reduce((a, s) => a + s.delay, 0);

  // Lock body scroll while dialog is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    if (phase !== 'running') return;
    if (currentStep >= steps.length) {
      setPhase('passed');
      const t1 = setTimeout(() => setPhase('generating'), 1000);
      const t2 = setTimeout(() => setPhase('report'), 2500);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
    const timer = setTimeout(() => {
      setCurrentStep((s) => s + 1);
    }, steps[currentStep].delay);
    return () => clearTimeout(timer);
  }, [currentStep, steps, phase]);

  const activeStep = phase === 'running' && currentStep < steps.length ? steps[currentStep] : null;
  const done = phase !== 'running';

  // Report data
  const reportDuration = (totalDuration / 1000).toFixed(1);
  const reportTimestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-dark-900 border border-dark-600 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Dialog header */}
          <div className="flex items-center justify-between px-5 py-3 bg-dark-800 border-b border-dark-600 shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-sm font-mono text-gray-400">
                {t('hero.runDialog.title')} — {t(`hero.scenarios.${scenario.key}`)}
              </span>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Content - scrollable */}
          <div className="relative bg-dark-950 p-6 overflow-y-auto flex-1">
            {/* URL bar */}
            <div className="bg-dark-800 rounded-lg px-4 py-2 mb-6 flex items-center gap-3 border border-dark-600">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-600" />
                <div className="w-2 h-2 rounded-full bg-gray-600" />
                <div className="w-2 h-2 rounded-full bg-gray-600" />
              </div>
              <div className="text-sm font-mono text-gray-400 flex-1">
                {activeStep ? (
                  <motion.span key={currentStep} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    localhost:8123{steps[Math.min(currentStep, steps.length - 1)]?.target.startsWith('/') ? steps[Math.min(currentStep, steps.length - 1)].target : ''}
                  </motion.span>
                ) : (
                  <span className="text-green-400">localhost:8123 — {t('hero.runDialog.complete')}</span>
                )}
              </div>
            </div>

            {/* Content area */}
            <div className="bg-dark-800/50 rounded-xl border border-dark-600 p-6 min-h-[180px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {phase === 'running' && activeStep && (
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                      <span className="text-yellow-400 font-mono text-sm">
                        {t(`hero.runDialog.${activeStep.action}`)} {activeStep.target}
                      </span>
                    </div>

                    {activeStep.action === 'filling' && activeStep.value && (
                      <div className="ml-5">
                        <div className="bg-dark-700 rounded-lg px-4 py-2 border border-primary-500/40 inline-block">
                          <motion.span
                            className="text-white font-mono text-sm"
                            initial={{ width: 0 }}
                            animate={{ width: 'auto' }}
                            transition={{ duration: activeStep.delay / 1000 * 0.7 }}
                          >
                            {activeStep.value}
                          </motion.span>
                          <motion.span
                            className="text-primary-400 ml-0.5"
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                          >|</motion.span>
                        </div>
                      </div>
                    )}

                    {activeStep.action === 'clicking' && (
                      <div className="ml-5">
                        <motion.div
                          className="bg-primary-500 text-white rounded-lg px-4 py-2 text-sm font-medium inline-block"
                          animate={{ scale: [1, 0.95, 1] }}
                          transition={{ duration: 0.3 }}
                        >
                          {activeStep.target}
                        </motion.div>
                      </div>
                    )}

                    {activeStep.action === 'navigating' && (
                      <div className="ml-5 flex items-center gap-2">
                        <motion.div
                          className="w-4 h-4 border-2 border-primary-400 border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
                        />
                        <span className="text-gray-400 text-sm font-mono">Loading page...</span>
                      </div>
                    )}
                  </motion.div>
                )}

                {phase === 'passed' && (
                  <motion.div
                    key="passed"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center space-y-3"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto flex items-center justify-center border-2 border-green-500">
                      <motion.svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24">
                        <motion.path
                          d="M5 13l4 4L19 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.svg>
                    </div>
                    <p className="text-green-400 font-bold text-lg font-mono">{t('hero.runDialog.passed')}</p>
                    <p className="text-gray-400 text-sm">Generating report...</p>
                  </motion.div>
                )}

                {phase === 'generating' && (
                  <motion.div
                    key="generating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center space-y-4"
                  >
                    <motion.div
                      className="w-12 h-12 border-3 border-primary-400 border-t-transparent rounded-full mx-auto"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className="space-y-1">
                      <p className="text-white font-medium">Generating test report...</p>
                      <p className="text-gray-500 text-sm font-mono">Collecting results &amp; screenshots</p>
                    </div>
                  </motion.div>
                )}

                {phase === 'report' && (
                  <motion.div
                    key="report"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-5"
                  >
                    {/* Report title + badge */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/40">
                          <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg">Playwright Test Report</h3>
                          <p className="text-gray-500 text-xs font-mono">{reportTimestamp}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold font-mono rounded-full border border-green-500/30">
                        1 PASSED
                      </span>
                    </div>

                    {/* Summary cards */}
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { value: '1', label: 'Passed', color: 'text-green-400' },
                        { value: '0', label: 'Failed', color: 'text-gray-600' },
                        { value: `${reportDuration}s`, label: 'Duration', color: 'text-white' },
                        { value: `${steps.length}`, label: 'Steps', color: 'text-white' },
                      ].map((card, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="bg-dark-800 rounded-lg p-3 border border-dark-600 text-center"
                        >
                          <div className={`text-xl font-bold ${card.color}`}>{card.value}</div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wider">{card.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Test suite with all steps */}
                    <div className="bg-dark-800 rounded-xl border border-dark-600 overflow-hidden">
                      <div className="px-4 py-3 border-b border-dark-600 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-white font-medium text-sm">{t(`hero.scenarios.${scenario.key}`)}</span>
                        </div>
                        <span className="text-green-400 text-xs font-mono">{reportDuration}s</span>
                      </div>
                      <div className="divide-y divide-dark-700">
                        {steps.map((step, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.04, duration: 0.2 }}
                            className="px-4 py-2.5 flex items-center gap-3"
                          >
                            <span className="text-gray-600 text-[10px] font-mono w-4 text-right shrink-0">{i + 1}</span>
                            <svg className="w-3.5 h-3.5 text-green-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-gray-300 text-sm flex-1 font-mono">
                              <span className="text-primary-400">{step.action}</span>{' '}
                              <span className="text-gray-500">{step.target}</span>
                              {step.value && <span className="text-gray-500 ml-1">→ <span className="text-gray-300">{step.value}</span></span>}
                            </span>
                            <div className="shrink-0 flex items-center gap-2">
                              <div className="w-14 h-1 bg-dark-600 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-green-500/50 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: '100%' }}
                                  transition={{ delay: 0.15 + i * 0.04, duration: 0.25 }}
                                />
                              </div>
                              <span className="text-gray-600 text-[10px] font-mono w-10 text-right">{step.delay}ms</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Environment & Config */}
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-dark-800 rounded-xl border border-dark-600 p-4"
                      >
                        <h4 className="text-gray-400 text-[10px] uppercase tracking-wider mb-3">Environment</h4>
                        <div className="space-y-2 text-xs font-mono">
                          {[
                            { k: 'Browser', v: 'Chromium 124.0' },
                            { k: 'OS', v: 'macOS 15.3' },
                            { k: 'Viewport', v: '1280×720' },
                            { k: 'Node.js', v: 'v20.11.0' },
                          ].map((row) => (
                            <div key={row.k} className="flex justify-between">
                              <span className="text-gray-500">{row.k}</span>
                              <span className="text-gray-300">{row.v}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="bg-dark-800 rounded-xl border border-dark-600 p-4"
                      >
                        <h4 className="text-gray-400 text-[10px] uppercase tracking-wider mb-3">Configuration</h4>
                        <div className="space-y-2 text-xs font-mono">
                          {[
                            { k: 'Framework', v: 'Playwright 1.48' },
                            { k: 'Retries', v: '0' },
                            { k: 'Workers', v: '1' },
                            { k: 'Timeout', v: '30000ms' },
                          ].map((row) => (
                            <div key={row.k} className="flex justify-between">
                              <span className="text-gray-500">{row.k}</span>
                              <span className="text-gray-300">{row.v}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Console output */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-dark-800 rounded-xl border border-dark-600 overflow-hidden"
                    >
                      <div className="px-4 py-2.5 border-b border-dark-600">
                        <h4 className="text-gray-400 text-[10px] uppercase tracking-wider">Console Output</h4>
                      </div>
                      <div className="p-4 font-mono text-[11px] text-gray-400 space-y-1 bg-dark-900/50">
                        <p><span className="text-gray-600">[{reportTimestamp}]</span> Running 1 test using 1 worker</p>
                        <p><span className="text-green-400">{'✓'}</span> <span className="text-gray-300">{t(`hero.scenarios.${scenario.key}`)}</span> <span className="text-gray-600">({reportDuration}s)</span></p>
                        <p>&nbsp;</p>
                        <p><span className="text-gray-300">1 passed</span> <span className="text-gray-600">({reportDuration}s)</span></p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            {phase !== 'report' && (
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-dark-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-400 to-green-400 rounded-full"
                    animate={{ width: `${done ? 100 : (currentStep / steps.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-xs text-gray-500 font-mono w-16 text-right">
                  {done ? t('hero.runDialog.passed') : `${currentStep}/${steps.length}`}
                </span>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 bg-dark-800 border-t border-dark-600 flex justify-end shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white text-sm rounded-lg transition-colors border border-dark-500"
            >
              {t('hero.runDialog.close')}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

// --- Terminal Slider ---

function TerminalBlock() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showRunDialog, setShowRunDialog] = useState(false);
  const scenario = scenarios[activeIndex];

  const next = useCallback(() => setActiveIndex((i) => (i + 1) % scenarios.length), []);
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + scenarios.length) % scenarios.length), []);

  useEffect(() => {
    if (showRunDialog) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [showRunDialog, next]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="hidden lg:block mt-8 rounded-xl border border-dark-600/80 bg-dark-900/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary-500/5"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-dark-800/80 border-b border-dark-600/60">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="flex items-center gap-1.5 ml-2 text-[11px] text-gray-500 font-mono">
              {t(`hero.scenarios.${scenario.key}`)}
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowRunDialog(true)}
            className="flex items-center gap-1.5 px-3 py-1 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg text-green-400 text-xs font-medium transition-colors"
          >
            <PlayIcon className="w-3 h-3" />
            {t('hero.runScenario')}
          </motion.button>
        </div>

        {/* Code area */}
        <div className="p-4 font-mono text-[13px] leading-[1.7] select-none min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {scenario.code}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider controls */}
        <div className="flex items-center justify-between px-4 py-2 bg-dark-800/60 border-t border-dark-600/40">
          <button
            onClick={prev}
            className="p-1 text-gray-500 hover:text-gray-300 transition-colors"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5">
            {scenarios.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === activeIndex ? 'bg-primary-400' : 'bg-dark-600 hover:bg-dark-500'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-1 text-gray-500 hover:text-gray-300 transition-colors"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showRunDialog && (
          <RunDialog scenario={scenario} onClose={() => setShowRunDialog(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

// --- Intro Animation ---

function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'letters' | 'pause' | 'morph' | 'done'>('letters');

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('pause'), 1000),
      setTimeout(() => setPhase('morph'), 1400),
      setTimeout(() => {
        setPhase('done');
        onComplete();
      }, 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const letters = [
    { char: 'e', highlight: false },
    { char: 'M', highlight: true },
    { char: 'J', highlight: true },
    { char: 'i', highlight: false },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-dark-900 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* eMJi letters with staggered scale+fade */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {phase !== 'done' && (
              <motion.h1
                className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight flex items-baseline justify-center"
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                {letters.map((letter, i) => (
                  <motion.span
                    key={`letter-${i}`}
                    initial={{ opacity: 0, scale: 0, filter: 'blur(10px)' }}
                    animate={{
                      opacity: phase === 'morph' && !letter.highlight ? 0 : 1,
                      scale: phase === 'morph' && !letter.highlight ? 0.5 : 1,
                      filter: 'blur(0px)',
                    }}
                    transition={{
                      delay: phase === 'letters' ? i * 0.15 : 0,
                      duration: 0.4,
                      type: 'spring',
                      damping: 15,
                      stiffness: 200,
                    }}
                    className={
                      letter.highlight
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600'
                        : 'text-gray-500 font-light'
                    }
                  >
                    {letter.char}
                  </motion.span>
                ))}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* Full name morphs in */}
        <AnimatePresence>
          {(phase === 'morph' || phase === 'done') && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: phase === 'done' ? 0 : 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <motion.span
                className="text-lg sm:text-xl text-gray-400 font-mono tracking-widest"
                initial={{ letterSpacing: '0.5em' }}
                animate={{ letterSpacing: '0.2em' }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 font-bold">M</span>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>atondo</motion.span>
                {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 font-bold">J</span>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>ulien</motion.span>
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// --- Hero ---

export function Hero({ pageInfo }: Props) {
  const { t } = useTranslation();
  const [showIntro, setShowIntro] = useState(true);
  const heroDelay = showIntro ? 0.2 : 0;

  const stats = [
    { value: '4+', label: t('hero.statYears') },
    { value: '80%+', label: t('hero.statEfficiency') },
    { value: '95%', label: t('hero.statCoverage') },
  ];

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-900">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.04]" />

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
                {t('hero.availableBadge')}
              </motion.div>

              {/* Name + role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: heroDelay + 0.4, duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1] tracking-tight">
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
                  {t('hero.role')}
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: heroDelay + 0.6, duration: 0.5 }}
                className="text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed mx-auto lg:mx-0"
              >
                {t('hero.description')}
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
                    {t('hero.viewProjects')}
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </motion.button>
                </Link>
                <Link href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 sm:py-3.5 bg-transparent border border-dark-600 hover:border-primary-500/50 text-gray-300 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-primary-500/5"
                  >
                    {t('hero.contactMe')}
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
