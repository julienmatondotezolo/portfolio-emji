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
import Image from 'next/image';
import React, { useState } from 'react';

import type { Project } from '../../config';
import { urlFor } from '../../config';

type Props = {
  projects: Project[];
};

// Featured AI projects with enhanced data
const featuredProjects = [
  {
    id: 'ada-systems',
    title: 'ADA Systems Platform',
    subtitle: 'Complete AI Restaurant Ecosystem',
    description: 'Integrated AI platform with 6+ interconnected services for restaurant management, driving significant operational efficiency improvements.',
    image: '/images/ada-systems.jpg',
    metrics: {
      growth: '400%',
      services: '6+',
      efficiency: '+60%',
      uptime: '99.9%'
    },
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'AI/ML', 'Microservices'],
    features: [
      'Menu Management (AdaMenu)',
      'Staff Scheduling (AdaPlanning)',
      'Inventory Tracking (AdaStock)',
      'AI Receptionist (AdaPhone)',
      'Social Media Automation (Postagen)'
    ],
    status: 'Live in Production',
    demoUrl: 'https://www.adasystems.app/',
    caseStudyUrl: '/case-studies',
    icon: <ChefHatIcon className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'postagen',
    title: 'Postagen AI',
    subtitle: 'Social Media Automation Platform',
    description: 'AI-powered social media content generator that transforms photos into engaging posts with automatic scheduling.',
    image: '/images/postagen.jpg',
    metrics: {
      engagement: '+150%',
      posts: '1000+',
      saves: '30hrs/week',
      languages: '4+'
    },
    technologies: ['Next.js', 'GPT-4 Vision', 'TypeScript', 'Vercel', 'Computer Vision'],
    features: [
      'AI Photo Analysis',
      'Multi-language Content',
      'Brand Voice Training',
      'Auto-scheduling',
      'Performance Analytics'
    ],
    status: 'Active',
    demoUrl: 'https://postagen-mobile.vercel.app',
    githubUrl: 'https://github.com/julienmatondotezolo/postagen-mobile',
    icon: <SmartphoneIcon className="w-8 h-8" />,
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 'test-automation',
    title: 'Enterprise Test Automation',
    subtitle: 'QA Engineering Solutions',
    description: 'Robust test automation frameworks using Playwright and Selenium, reducing testing time by 80% and improving bug detection by 90%.',
    image: '/images/test-automation.jpg',
    metrics: {
      efficiency: '80%↑',
      coverage: '95%',
      bugs: '90%↓',
      time: '75% faster'
    },
    technologies: ['Playwright', 'Selenium', 'TypeScript', 'Docker', 'CI/CD'],
    features: [
      'E2E Test Automation',
      'Visual Regression Testing',
      'API Testing',
      'CI/CD Integration',
      'Real-time Reporting'
    ],
    status: 'Enterprise Solution',
    caseStudyUrl: '/case-studies',
    icon: <UsersIcon className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-600'
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
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
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      <div className="relative p-8">
        {/* Header */}
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

        {/* Description */}
        <p className="text-gray-300 mb-8 leading-relaxed">
          {project.description}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center p-4 bg-dark-700/50 rounded-xl border border-dark-600">
              <div className="text-2xl font-bold text-white mb-1">{value as string}</div>
              <div className="text-gray-400 text-sm capitalize">{key}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="text-white font-semibold mb-3">Technologies</h4>
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

        {/* Features */}
        <div className="mb-8">
          <h4 className="text-white font-semibold mb-3">Key Features</h4>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {project.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center text-gray-300 text-sm">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
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
                Live Demo
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
                Code
              </motion.a>
            )}

            {project.caseStudyUrl && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-transparent border border-gray-600 hover:border-primary-500 text-gray-300 hover:text-white rounded-lg transition-colors"
              >
                Case Study
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Hover overlay effect */}
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
  return (
    <section className="py-20 px-6 lg:px-8 bg-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-5" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
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
            Success Stories
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            AI Projects
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Driving Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-world AI implementations that generate revenue, improve efficiency, 
            and transform business operations for our clients.
          </p>
        </motion.div>

        {/* Success Metrics */}
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
            <div className="text-green-400 text-sm font-medium">Efficiency Gain</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30">
            <TrendingUpIcon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-2">400%</div>
            <div className="text-blue-400 text-sm font-medium">Growth Rate</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30">
            <UsersIcon className="w-10 h-10 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-2">50+</div>
            <div className="text-purple-400 text-sm font-medium">Hours Saved</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl border border-orange-500/30">
            <CalendarIcon className="w-10 h-10 text-orange-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-2">24/7</div>
            <div className="text-orange-400 text-sm font-medium">AI Availability</div>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help with your test automation and AI needs.
              From concept to deployment, I deliver results.
            </p>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-primary-500/25"
              >
                Contact Me
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}