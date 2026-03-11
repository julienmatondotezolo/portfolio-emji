import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import type { PageInfo } from '../../config';
import { urlFor } from '../../config';
import { useTranslation } from '../../i18n';

type TFn = (key: string, params?: Record<string, string>) => string;

function Bio1({ t }: { t: TFn }) {
  const raw = t('about.bio1', {
    name: '{{NAME}}', alias: '{{ALIAS}}', M: '{{M}}', J: '{{J}}',
    emPronounce: '{{EM}}', jiPronounce: '{{JI}}', matondo: '{{MATONDO}}', julien: '{{JULIEN}}',
  });
  const parts = raw.split(/\{\{(\w+)\}\}/);
  return (
    <p>
      {parts.map((part, i) => {
        if (i % 2 === 0) return <React.Fragment key={i}>{part}</React.Fragment>;
        switch (part) {
          case 'NAME': return <span key={i} className="text-white font-semibold">Julien Matondo</span>;
          case 'ALIAS': return <span key={i} className="text-primary-400 font-semibold">eMJi</span>;
          case 'M': return <span key={i} className="text-white font-medium">M</span>;
          case 'J': return <span key={i} className="text-white font-medium">J</span>;
          case 'EM': return <span key={i} className="italic text-gray-400">&quot;eM&quot;</span>;
          case 'JI': return <span key={i} className="italic text-gray-400">&quot;Ji&quot;</span>;
          case 'MATONDO': return <React.Fragment key={i}><span className="text-primary-400">M</span>atondo</React.Fragment>;
          case 'JULIEN': return <React.Fragment key={i}><span className="text-primary-400">J</span>ulien</React.Fragment>;
          default: return part;
        }
      })}
    </p>
  );
}

function Bio2({ t }: { t: TFn }) {
  const raw = t('about.bio2', { role: '{{ROLE}}', years: '{{YEARS}}' });
  const parts = raw.split(/\{\{(\w+)\}\}/);
  return (
    <p>
      {parts.map((part, i) => {
        if (i % 2 === 0) return <React.Fragment key={i}>{part}</React.Fragment>;
        switch (part) {
          case 'ROLE': return <span key={i} className="text-primary-400 font-semibold">Test Automation Engineer</span>;
          case 'YEARS': return <span key={i} className="text-white font-semibold">4+</span>;
          default: return part;
        }
      })}
    </p>
  );
}

function Bio3({ t }: { t: TFn }) {
  const raw = t('about.bio3', {
    fluvius: '{{FLUVIUS}}', inami: '{{INAMI}}', devoteam: '{{DEVOTEAM}}',
    efficiency: '{{EFF}}', bugReduction: '{{BUG}}',
  });
  const parts = raw.split(/\{\{(\w+)\}\}/);
  return (
    <p>
      {parts.map((part, i) => {
        if (i % 2 === 0) return <React.Fragment key={i}>{part}</React.Fragment>;
        switch (part) {
          case 'FLUVIUS': return <span key={i} className="text-primary-400 font-semibold">Fluvius</span>;
          case 'INAMI': return <span key={i} className="text-primary-400 font-semibold">INAMI-RIZIV</span>;
          case 'DEVOTEAM': return <span key={i} className="text-primary-400 font-semibold">Devoteam</span>;
          case 'EFF': return <span key={i} className="text-green-400 font-semibold">80%+</span>;
          case 'BUG': return <span key={i} className="text-green-400 font-semibold">90%</span>;
          default: return part;
        }
      })}
    </p>
  );
}

function Bio4({ t }: { t: TFn }) {
  const raw = t('about.bio4', {
    playwright: '{{PW}}', selenium: '{{SE}}', cypress: '{{CY}}', cicd: '{{CI}}',
  });
  const parts = raw.split(/\{\{(\w+)\}\}/);
  return (
    <p>
      {parts.map((part, i) => {
        if (i % 2 === 0) return <React.Fragment key={i}>{part}</React.Fragment>;
        switch (part) {
          case 'PW': return <span key={i} className="text-white font-semibold">Playwright</span>;
          case 'SE': return <span key={i} className="text-white font-semibold">Selenium</span>;
          case 'CY': return <span key={i} className="text-white font-semibold">Cypress</span>;
          case 'CI': return <span key={i} className="text-white font-semibold">CI/CD pipelines</span>;
          default: return part;
        }
      })}
    </p>
  );
}

function Bio5({ t }: { t: TFn }) {
  const raw = t('about.bio5', { action: '{{ACTION}}', results: '{{RESULTS}}' });
  const parts = raw.split(/\{\{(\w+)\}\}/);
  return (
    <p>
      {parts.map((part, i) => {
        if (i % 2 === 0) return <React.Fragment key={i}>{part}</React.Fragment>;
        switch (part) {
          case 'ACTION': return <span key={i} className="text-white font-semibold">{t('about.actionOverWords')}</span>;
          case 'RESULTS': return <span key={i} className="text-white font-semibold">{t('about.resultsOverProcess')}</span>;
          default: return part;
        }
      })}
    </p>
  );
}

type Props = {
  pageInfo: PageInfo;
};

export function About({ pageInfo }: Props) {
  const { t } = useTranslation();

  return (
    <div className="py-20 px-6 lg:px-8 bg-dark-800 relative overflow-hidden">
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
            {t('about.title')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              {t('about.titleHighlight')}
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur-3xl opacity-20" />
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
              {t('about.subtitle')}
              <span className="text-primary-400"> {t('about.subtitleHighlight')}</span>
            </h3>

            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <Bio1 t={t} />
              <Bio2 t={t} />
              <Bio3 t={t} />
              <Bio4 t={t} />
              <Bio5 t={t} />
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
                <div className="text-2xl font-bold text-primary-400">4+</div>
                <div className="text-gray-400 text-sm">{t('about.yearsExperience')}</div>
              </div>

              <div className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
                <div className="text-2xl font-bold text-green-400">80%+</div>
                <div className="text-gray-400 text-sm">{t('about.efficiencyGain')}</div>
              </div>

              <div className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
                <div className="text-2xl font-bold text-blue-400">95%</div>
                <div className="text-gray-400 text-sm">{t('about.testCoverage')}</div>
              </div>

              <div className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
                <div className="text-2xl font-bold text-purple-400">90%</div>
                <div className="text-gray-400 text-sm">{t('about.bugReduction')}</div>
              </div>
            </div>

            {/* Skills Highlight */}
            <div className="pt-6">
              <h4 className="text-xl font-bold text-white mb-4">{t('about.coreExpertise')}</h4>
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
