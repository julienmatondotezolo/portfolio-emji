import { motion } from 'framer-motion';
import { 
  BugIcon,
  CheckCircleIcon,
  ClockIcon,
  CodeIcon,
  CpuIcon,
  GaugeIcon,
  PlayIcon,
  SettingsIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TestTubeIcon,
  ZapIcon
} from 'lucide-react';
import React from 'react';

const testServices = [
  {
    icon: <TestTubeIcon className="w-8 h-8" />,
    title: 'End-to-End Testing',
    description: 'Comprehensive test automation covering entire user journeys',
    features: ['Cross-browser testing', 'Mobile automation', 'API integration'],
    technologies: ['Selenium', 'Cypress', 'Playwright'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: <CodeIcon className="w-8 h-8" />,
    title: 'API Testing',
    description: 'Robust API testing frameworks for microservices architectures',
    features: ['REST/GraphQL testing', 'Performance validation', 'Contract testing'],
    technologies: ['Postman', 'RestAssured', 'Newman'],
    color: 'from-green-400 to-green-600',
  },
  {
    icon: <GaugeIcon className="w-8 h-8" />,
    title: 'Performance Testing',
    description: 'Load and stress testing to ensure application scalability',
    features: ['Load testing', 'Stress testing', 'Performance monitoring'],
    technologies: ['JMeter', 'K6', 'LoadRunner'],
    color: 'from-orange-400 to-orange-600',
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    title: 'Security Testing',
    description: 'Automated security testing to identify vulnerabilities',
    features: ['OWASP compliance', 'Penetration testing', 'Vulnerability scanning'],
    technologies: ['OWASP ZAP', 'Burp Suite', 'Nessus'],
    color: 'from-red-400 to-red-600',
  },
  {
    icon: <CpuIcon className="w-8 h-8" />,
    title: 'CI/CD Integration',
    description: 'Seamless integration with development pipelines',
    features: ['Pipeline automation', 'Parallel execution', 'Reporting integration'],
    technologies: ['Jenkins', 'GitLab CI', 'Azure DevOps'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: <SparklesIcon className="w-8 h-8" />,
    title: 'AI-Powered Testing',
    description: 'Next-generation testing with AI and machine learning',
    features: ['Smart test generation', 'Self-healing tests', 'Predictive analytics'],
    technologies: ['Mabl', 'Testim', 'Custom AI'],
    color: 'from-pink-400 to-pink-600',
  },
];

const benefits = [
  {
    icon: <ClockIcon className="w-6 h-6" />,
    title: '80% Faster',
    description: 'Test execution time',
  },
  {
    icon: <BugIcon className="w-6 h-6" />,
    title: '95% Bug Detection',
    description: 'Before production',
  },
  {
    icon: <CheckCircleIcon className="w-6 h-6" />,
    title: '99.9% Reliability',
    description: 'Test accuracy rate',
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: '60% Cost Reduction',
    description: 'Testing overhead',
  },
];

export function TestAutomation() {
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
            <TestTubeIcon className="w-4 h-4" />
            Enterprise Test Automation
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Test Automation
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade test automation solutions that reduce testing time, improve quality, 
            and accelerate your software delivery pipeline with cutting-edge tools and frameworks.
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
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="text-center p-6 bg-dark-800 rounded-2xl border border-dark-700">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-xl mb-4">
                {benefit.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{benefit.title}</div>
              <div className="text-gray-400 text-sm">{benefit.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative p-8 bg-dark-800 border border-dark-700 rounded-2xl hover:border-primary-500/30 transition-all duration-300 h-full">
                {/* Service Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>

                {/* Service Info */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-auto">
                  <div className="text-sm font-medium text-gray-300 mb-3">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
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
            My <span className="text-primary-500">Testing Process</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analysis', desc: 'Requirements analysis and test strategy planning' },
              { step: '02', title: 'Framework', desc: 'Custom test automation framework development' },
              { step: '03', title: 'Implementation', desc: 'Test script creation and CI/CD integration' },
              { step: '04', title: 'Optimization', desc: 'Continuous improvement and maintenance' },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
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
                Ready to Accelerate Your Testing?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how enterprise test automation can reduce your testing overhead by 60%
                while improving quality and delivery speed.
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}