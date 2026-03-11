import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  TrendingUpIcon,
  ZapIcon
} from 'lucide-react';

import { useTranslation } from '../src/i18n';

const CaseStudiesPage = () => {
  const { t } = useTranslation();

  const caseStudies = [
    {
      id: 'ada-systems',
      key: 'ada',
      date: '2022 — Present',
      duration: 'Ongoing',
      technologies: [
        'Next.js & React', 'TypeScript', 'Node.js & Express',
        'Supabase & PostgreSQL', 'OpenAI GPT-4', 'Microservices Architecture'
      ],
    },
    {
      id: 'enterprise-testing',
      key: 'testing',
      date: '2023 — 2026',
      duration: '3+ years',
      technologies: [
        'Playwright', 'Selenium WebDriver', 'Java & TypeScript',
        'Jenkins & GitHub Actions', 'JIRA & XRAY', 'Cucumber/Gherkin',
        'Docker', 'JUnit & TestNG'
      ],
    }
  ];

  return (
    <div className="bg-dark-900 text-white min-h-screen">
      <Head>
        <title>{t('caseStudies.pageTitle')} - Julien Matondo</title>
        <meta
          name="description"
          content={t('caseStudies.heroDescription')}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-dark-800 border-b border-dark-700 sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors">
              <ChevronLeftIcon className="w-5 h-5" />
              {t('caseStudies.backToPortfolio')}
            </Link>
            <h1 className="text-xl font-bold">{t('caseStudies.pageTitle')}</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              {t('caseStudies.heroTitle')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                {t('caseStudies.heroTitleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('caseStudies.heroDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="space-y-24">
            {caseStudies.map((study, index) => {
              const solutionItems: string[] = [];
              for (let i = 0; i < 10; i++) {
                const val = t(`caseStudies.items.${study.key}.solution.${i}`);
                if (val !== `caseStudies.items.${study.key}.solution.${i}`) solutionItems.push(val);
                else break;
              }

              const results = [0, 1, 2, 3].map(i => ({
                metric: t(`caseStudies.items.${study.key}.results.${i}.metric`),
                label: t(`caseStudies.items.${study.key}.results.${i}.label`),
                description: t(`caseStudies.items.${study.key}.results.${i}.description`),
              }));

              return (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 text-sm bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20">
                          {t(`caseStudies.items.${study.key}.category`)}
                        </span>
                        <span className="text-gray-400 text-sm">{study.date}</span>
                      </div>

                      <h2 className="text-4xl font-bold text-white mb-4">
                        {t(`caseStudies.items.${study.key}.title`)}
                      </h2>

                      <h3 className="text-xl text-primary-400 mb-6">
                        {t(`caseStudies.items.${study.key}.subtitle`)}
                      </h3>

                      <p className="text-gray-300 mb-8 leading-relaxed">
                        {t(`caseStudies.items.${study.key}.description`)}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {results.map((result, idx) => (
                          <div key={idx} className="bg-dark-800 p-4 rounded-xl border border-dark-700">
                            <div className="text-2xl font-bold text-primary-400 mb-1">{result.metric}</div>
                            <div className="text-white font-medium text-sm mb-1">{result.label}</div>
                            <div className="text-gray-400 text-xs">{result.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="relative">
                        <div className="bg-dark-800 rounded-2xl border border-dark-700 p-8">
                          <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-primary-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                              {study.key === 'ada' ? (
                                <ZapIcon className="w-8 h-8 text-primary-400" />
                              ) : (
                                <TrendingUpIcon className="w-8 h-8 text-primary-400" />
                              )}
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="text-lg font-bold text-white mb-3">{t('caseStudies.theChallenge')}</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {t(`caseStudies.items.${study.key}.challenge`)}
                            </p>
                          </div>

                          <div className="mb-6">
                            <h4 className="text-lg font-bold text-white mb-3">{t('caseStudies.theSolution')}</h4>
                            <ul className="space-y-2">
                              {solutionItems.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold text-white mb-3">{t('caseStudies.technologies')}</h4>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 text-xs bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-dark-800">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('caseStudies.ctaTitle')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('caseStudies.ctaDescription')}
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors">
              {t('caseStudies.ctaButton')}
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600,
  };
};
