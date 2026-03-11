import { motion } from 'framer-motion';
import {
  BugIcon,
  CheckCircleIcon,
  ClockIcon,
  CodeIcon,
  CpuIcon,
  GaugeIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TestTubeIcon,
  ZapIcon
} from 'lucide-react';
import React from 'react';

import { useTranslation } from '../../i18n';

const serviceIcons = [
  { key: 'e2e', icon: <TestTubeIcon className="w-8 h-8" />, techs: ['Selenium', 'Cypress', 'Playwright'], color: 'from-blue-400 to-blue-600' },
  { key: 'api', icon: <CodeIcon className="w-8 h-8" />, techs: ['Postman', 'RestAssured', 'Newman'], color: 'from-green-400 to-green-600' },
  { key: 'performance', icon: <GaugeIcon className="w-8 h-8" />, techs: ['JMeter', 'K6', 'LoadRunner'], color: 'from-orange-400 to-orange-600' },
  { key: 'security', icon: <ShieldCheckIcon className="w-8 h-8" />, techs: ['OWASP ZAP', 'Burp Suite', 'Nessus'], color: 'from-red-400 to-red-600' },
  { key: 'cicd', icon: <CpuIcon className="w-8 h-8" />, techs: ['Jenkins', 'GitLab CI', 'Azure DevOps'], color: 'from-purple-400 to-purple-600' },
  { key: 'aiPowered', icon: <SparklesIcon className="w-8 h-8" />, techs: ['Mabl', 'Testim', 'Custom AI'], color: 'from-pink-400 to-pink-600' },
];

const benefitIcons = [
  { key: 'faster', icon: <ClockIcon className="w-6 h-6" /> },
  { key: 'bugDetection', icon: <BugIcon className="w-6 h-6" /> },
  { key: 'reliability', icon: <CheckCircleIcon className="w-6 h-6" /> },
  { key: 'costReduction', icon: <ZapIcon className="w-6 h-6" /> },
];

export function TestAutomation() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 lg:px-8 bg-dark-900 relative overflow-hidden">
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
            <TestTubeIcon className="w-4 h-4" />
            {t('testAutomation.badge')}
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {t('testAutomation.title')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              {t('testAutomation.titleHighlight')}
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('testAutomation.description')}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {benefitIcons.map((benefit) => (
            <div key={benefit.key} className="text-center p-6 bg-dark-800 rounded-2xl border border-dark-700">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-xl mb-4">
                {benefit.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{t(`testAutomation.benefits.${benefit.key}.title`)}</div>
              <div className="text-gray-400 text-sm">{t(`testAutomation.benefits.${benefit.key}.description`)}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceIcons.map((service, index) => {
            const features = [0, 1, 2].map(i => t(`testAutomation.services.${service.key}.features.${i}`));

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative p-8 bg-dark-800 border border-dark-700 rounded-2xl hover:border-primary-500/30 transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t(`testAutomation.services.${service.key}.title`)}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {t(`testAutomation.services.${service.key}.description`)}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="text-sm font-medium text-gray-300 mb-3">{t('testAutomation.technologiesLabel')}</div>
                    <div className="flex flex-wrap gap-2">
                      {service.techs.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-dark-800 rounded-2xl p-8 border border-dark-700 mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            {t('testAutomation.processTitle')} <span className="text-primary-500">{t('testAutomation.processTitleHighlight')}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full text-white font-bold text-xl mb-4">
                  {t(`testAutomation.process.${i}.step`)}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{t(`testAutomation.process.${i}.title`)}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{t(`testAutomation.process.${i}.desc`)}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl p-8 border border-primary-500/20 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary-500/15 rounded-full blur-[80px] animate-pulse-slow" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary-600/10 rounded-full blur-[60px] animate-pulse-slow" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('testAutomation.ctaTitle')}
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('testAutomation.ctaDescription')}
              </p>
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-primary-500/25"
                >
                  {t('testAutomation.ctaButton')}
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
