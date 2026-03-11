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

const caseStudies = [
  {
    id: 'ada-systems',
    title: 'ADA Systems Platform',
    subtitle: 'Complete Restaurant Automation Ecosystem',
    category: 'AI Solutions',
    date: '2022 — Present',
    duration: 'Ongoing',
    description: 'Built a comprehensive AI-powered platform for restaurant management, integrating menu management, staff scheduling, inventory tracking, and social media automation into a unified ecosystem.',
    challenge: 'Restaurants face fragmented tooling for daily operations — separate systems for menus, staff scheduling, inventory, and marketing that don\'t communicate with each other. This leads to inefficiency, errors, and wasted time on administrative tasks.',
    solution: [
      'Developed AdaMenu for dynamic, real-time menu management with multi-language support',
      'Built AdaPlanning for intelligent staff scheduling with conflict resolution',
      'Created AdaStock for AI-powered inventory tracking with predictive analytics',
      'Implemented Postagen for automated social media content generation using GPT-4 Vision',
      'Integrated all services into a unified dashboard with centralized authentication'
    ],
    results: [
      {
        metric: '60%',
        label: 'Time Savings',
        description: 'Reduction in administrative tasks'
      },
      {
        metric: '6+',
        label: 'Integrated Services',
        description: 'Complete ecosystem implementation'
      },
      {
        metric: '+150%',
        label: 'Social Engagement',
        description: 'Through AI-generated content'
      },
      {
        metric: '99.9%',
        label: 'Uptime',
        description: 'Platform reliability'
      }
    ],
    technologies: [
      'Next.js & React',
      'TypeScript',
      'Node.js & Express',
      'Supabase & PostgreSQL',
      'OpenAI GPT-4',
      'Microservices Architecture'
    ],
  },
  {
    id: 'enterprise-testing',
    title: 'Enterprise Test Automation',
    subtitle: 'Government & Financial Services QA Transformation',
    category: 'Test Automation',
    date: '2023 — 2026',
    duration: '3+ years',
    description: 'Led test automation initiatives for major Belgian government and enterprise organizations, migrating legacy manual testing to modern automated frameworks and CI/CD pipelines.',
    challenge: 'Large organizations relied heavily on manual testing processes that were slow, error-prone, and couldn\'t scale with increasing development velocity. Legacy Selenium frameworks needed modernization, and test management processes lacked proper integration with development workflows.',
    solution: [
      'Led Selenium to Playwright migration for improved reliability and speed',
      'Designed comprehensive E2E test automation frameworks with Page Object Model',
      'Implemented CI/CD integration with Jenkins and GitHub Actions',
      'Set up test management with XRAY and JIRA for full traceability',
      'Established BDD practices with Cucumber/Gherkin for stakeholder collaboration',
      'Created performance testing strategies with JMeter'
    ],
    results: [
      {
        metric: '80%',
        label: 'Faster Testing',
        description: 'Reduction in test execution time'
      },
      {
        metric: '95%',
        label: 'Test Coverage',
        description: 'Automated test coverage achieved'
      },
      {
        metric: '90%',
        label: 'Bug Reduction',
        description: 'Fewer bugs escaping to production'
      },
      {
        metric: '75%',
        label: 'Faster Delivery',
        description: 'Accelerated release cycles'
      }
    ],
    technologies: [
      'Playwright',
      'Selenium WebDriver',
      'Java & TypeScript',
      'Jenkins & GitHub Actions',
      'JIRA & XRAY',
      'Cucumber/Gherkin',
      'Docker',
      'JUnit & TestNG'
    ],
  }
];

const CaseStudiesPage = () => {
  return (
    <div className="bg-dark-900 text-white min-h-screen">
      <Head>
        <title>Case Studies - Julien Matondo</title>
        <meta
          name="description"
          content="Detailed case studies showcasing successful test automation and AI solution implementations by Julien Matondo."
        />
        <meta name="keywords" content="Case Studies, Test Automation, AI Solutions, Success Stories, Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-dark-800 border-b border-dark-700 sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors">
              <ChevronLeftIcon className="w-5 h-5" />
              Back to Portfolio
            </Link>
            <h1 className="text-xl font-bold">Case Studies</h1>
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
              Success
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real-world implementations showcasing measurable results through test automation
              and AI-powered solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-sm bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20">
                        {study.category}
                      </span>
                      <span className="text-gray-400 text-sm">{study.date}</span>
                    </div>

                    <h2 className="text-4xl font-bold text-white mb-4">
                      {study.title}
                    </h2>

                    <h3 className="text-xl text-primary-400 mb-6">
                      {study.subtitle}
                    </h3>

                    <p className="text-gray-300 mb-8 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-dark-800 p-4 rounded-xl border border-dark-700">
                          <div className="text-2xl font-bold text-primary-400 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-white font-medium text-sm mb-1">
                            {result.label}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image / Details */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <div className="bg-dark-800 rounded-2xl border border-dark-700 p-8">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-primary-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                            {study.category === 'AI Solutions' ? (
                              <ZapIcon className="w-8 h-8 text-primary-400" />
                            ) : (
                              <TrendingUpIcon className="w-8 h-8 text-primary-400" />
                            )}
                          </div>
                        </div>

                        {/* Challenge */}
                        <div className="mb-6">
                          <h4 className="text-lg font-bold text-white mb-3">The Challenge</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div className="mb-6">
                          <h4 className="text-lg font-bold text-white mb-3">The Solution</h4>
                          <ul className="space-y-2">
                            {study.solution.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3">Technologies</h4>
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
            ))}
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how test automation and AI solutions can transform your business.
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors">
              Start Your Project
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
