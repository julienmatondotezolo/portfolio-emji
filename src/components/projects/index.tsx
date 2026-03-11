import { motion } from 'framer-motion';
import {
  ExternalLinkIcon,
  GithubIcon,
  TrendingUpIcon,
  UsersIcon,
  DollarSignIcon,
  CalendarIcon,
  ChefHatIcon,
  SmartphoneIcon
} from 'lucide-react';
import React, { useState } from 'react';

import type { Project } from '../../config';
import { useTranslation } from '../../i18n';

type Props = {
  projects: Project[];
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-3xl bg-dark-800 border border-dark-700 hover:border-primary-500/30 transition-all duration-500"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

      <div className="relative p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 bg-gradient-to-br ${project.color} rounded-xl group-hover:scale-110 transition-transform`}>
              {project.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-primary-400 font-medium">{project.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">{project.status}</span>
          </div>
        </div>

        <p className="text-gray-300 mb-8 leading-relaxed">{project.description}</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
              <div className="text-2xl font-bold text-white mb-1">{value as string}</div>
              <div className="text-gray-400 text-sm capitalize">{key}</div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h4 className="text-white font-semibold mb-3">{t('projects.technologies')}</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-400 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-white font-semibold mb-3">{t('projects.keyFeatures')}</h4>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {project.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center text-gray-300 text-sm">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-end pt-6 border-t border-dark-600">
          <div className="flex gap-3">
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                {t('projects.liveDemo')}
              </motion.a>
            )}

            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white border border-dark-600 hover:border-dark-500 rounded-lg transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                {t('projects.code')}
              </motion.a>
            )}


          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent"
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
};

export function Projects({ projects: sanityProjects }: Props) {
  const { t } = useTranslation();

  const featuredProjects = [
    {
      id: 'ada-systems',
      title: t('projects.adaSystems.title'),
      subtitle: t('projects.adaSystems.subtitle'),
      description: t('projects.adaSystems.description'),
      metrics: { growth: '400%', services: '6+', efficiency: '+60%', uptime: '99.9%' },
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'AI/ML', 'Microservices'],
      features: [0, 1, 2, 3, 4].map(i => t(`projects.adaSystems.features.${i}`)),
      status: t('projects.adaSystems.status'),
      demoUrl: 'https://www.adasystems.app/',
      icon: <ChefHatIcon className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'postagen',
      title: t('projects.postagen.title'),
      subtitle: t('projects.postagen.subtitle'),
      description: t('projects.postagen.description'),
      metrics: { engagement: '+150%', posts: '1000+', saves: '30hrs/week', languages: '4+' },
      technologies: ['Next.js', 'GPT-4 Vision', 'TypeScript', 'Vercel', 'Computer Vision'],
      features: [0, 1, 2, 3, 4].map(i => t(`projects.postagen.features.${i}`)),
      status: t('projects.postagen.status'),
      demoUrl: 'https://postagen-mobile.vercel.app',
      githubUrl: 'https://github.com/julienmatondotezolo/postagen-mobile',
      icon: <SmartphoneIcon className="w-8 h-8" />,
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 'test-automation',
      title: t('projects.testAutomationProject.title'),
      subtitle: t('projects.testAutomationProject.subtitle'),
      description: t('projects.testAutomationProject.description'),
      metrics: { efficiency: '80%↑', coverage: '95%', bugs: '90%↓', time: '75% faster' },
      technologies: ['Playwright', 'Selenium', 'TypeScript', 'Docker', 'CI/CD'],
      features: [0, 1, 2, 3, 4].map(i => t(`projects.testAutomationProject.features.${i}`)),
      status: t('projects.testAutomationProject.status'),
      icon: <UsersIcon className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    }
  ];

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
            <TrendingUpIcon className="w-4 h-4" />
            {t('projects.badge')}
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {t('projects.title')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              {t('projects.titleHighlight')}
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('projects.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/30">
            <DollarSignIcon className="w-10 h-10 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-2">80%+</div>
            <div className="text-green-400 text-sm font-medium">{t('projects.efficiencyGain')}</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30">
            <TrendingUpIcon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-2">400%</div>
            <div className="text-blue-400 text-sm font-medium">{t('projects.growthRate')}</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30">
            <UsersIcon className="w-10 h-10 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-2">50+</div>
            <div className="text-purple-400 text-sm font-medium">{t('projects.hoursSaved')}</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl border border-orange-500/30">
            <CalendarIcon className="w-10 h-10 text-orange-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-2">24/7</div>
            <div className="text-orange-400 text-sm font-medium">{t('projects.aiAvailability')}</div>
          </div>
        </motion.div>

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              {t('projects.ctaTitle')}
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('projects.ctaDescription')}
            </p>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-primary-500/25"
              >
                {t('projects.ctaButton')}
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
