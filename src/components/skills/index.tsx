import { motion } from 'framer-motion';
import React from 'react';

import { Skill } from '../../config';
import { useTranslation } from '../../i18n';

type Props = {
  skills: Skill[];
};

export function Skills({ skills: _sanitySkills }: Props) {
  const { t } = useTranslation();

  const skillCategories = [
    {
      titleKey: 'skills.categories.testAutomation',
      color: 'from-blue-400 to-blue-600',
      skills: [
        { name: 'Playwright', level: 95 },
        { name: 'Selenium', level: 90 },
        { name: 'Cypress', level: 85 },
        { name: 'Jest', level: 80 },
        { name: 'JUnit', level: 85 },
        { name: 'TestNG', level: 80 },
        { name: 'Cucumber/Gherkin', level: 85 },
        { name: 'REST Assured', level: 80 },
      ],
    },
    {
      titleKey: 'skills.categories.apiPerformance',
      color: 'from-green-400 to-green-600',
      skills: [
        { name: 'Postman', level: 90 },
        { name: 'REST Assured', level: 85 },
        { name: 'JMeter', level: 75 },
        { name: 'K6', level: 70 },
      ],
    },
    {
      titleKey: 'skills.categories.cicd',
      color: 'from-orange-400 to-orange-600',
      skills: [
        { name: 'Jenkins', level: 85 },
        { name: 'GitHub Actions', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'GitLab CI', level: 75 },
      ],
    },
    {
      titleKey: 'skills.categories.testManagement',
      color: 'from-purple-400 to-purple-600',
      skills: [
        { name: 'JIRA', level: 90 },
        { name: 'XRAY', level: 85 },
        { name: 'TestRail', level: 75 },
        { name: 'Azure DevOps', level: 80 },
      ],
    },
    {
      titleKey: 'skills.categories.aiTools',
      color: 'from-pink-400 to-pink-600',
      skills: [
        { name: 'n8n', level: 85 },
        { name: 'Claude AI', level: 90 },
        { name: 'OpenAI / GPT', level: 85 },
        { name: 'AI Test Generation', level: 80 },
      ],
    },
    {
      titleKey: 'skills.categories.development',
      color: 'from-teal-400 to-teal-600',
      skills: [
        { name: 'TypeScript', level: 90 },
        { name: 'Java', level: 80 },
        { name: 'Next.js / React', level: 85 },
        { name: 'Node.js', level: 85 },
      ],
    },
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
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {t('skills.title')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              {t('skills.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('skills.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-primary-500/30 transition-all"
            >
              <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.color} mb-6`}>
                {t(category.titleKey)}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-600 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
