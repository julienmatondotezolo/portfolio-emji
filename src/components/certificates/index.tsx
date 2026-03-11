import { motion } from 'framer-motion';
import {
  AwardIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  GraduationCapIcon,
  ShieldCheckIcon,
  StarIcon
} from 'lucide-react';
import React from 'react';

const certificates = [
  {
    title: 'ISTQB Certified Tester Foundation Level (CTFL)',
    issuer: 'iSQI Group — International Software Testing Qualifications Board',
    date: 'February 2023',
    credentialId: '23-CTFL-221872-12',
    description: 'Internationally recognized certification covering software testing fundamentals, test design techniques, test management, and tool support for testing.',
    status: 'verified',
    icon: <AwardIcon className="w-8 h-8" />,
    color: 'from-blue-400 to-blue-600',
    verifyUrl: '#'
  },
  {
    title: 'Multimedia & Creative Technology',
    issuer: 'Erasmushogeschool Brussel',
    date: '2018 — 2022',
    credentialId: 'EHB-MCT-2022',
    description: 'Bachelor degree in Multimedia & Creative Technology with focus on full-stack development, interactive media, and modern web technologies.',
    status: 'verified',
    icon: <GraduationCapIcon className="w-8 h-8" />,
    color: 'from-purple-400 to-purple-600',
    verifyUrl: '#'
  }
];

const getStatusBadge = (status: string) => {
  const statusConfig = {
    verified: { label: 'Verified', color: 'bg-green-500', textColor: 'text-green-100', icon: <CheckCircleIcon className="w-3 h-3" /> },
    pending: { label: 'Pending', color: 'bg-yellow-500', textColor: 'text-yellow-100', icon: <ClockIcon className="w-3 h-3" /> },
  };
  
  const config = statusConfig[status as keyof typeof statusConfig];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${config.color} ${config.textColor}`}>
      {config.icon}
      {config.label}
    </span>
  );
};

export function Certificates() {
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
            <GraduationCapIcon className="w-4 h-4" />
            Professional Certifications
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Certifications &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Education
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ISTQB-certified test professional with a degree in Multimedia & Creative Technology,
            combining strong theoretical foundations with hands-on enterprise experience.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30">
            <AwardIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">ISTQB</div>
            <div className="text-blue-400 font-medium">Certified Tester</div>
            <div className="text-gray-400 text-sm">Foundation Level</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/30">
            <ShieldCheckIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">4+</div>
            <div className="text-green-400 font-medium">Years Experience</div>
            <div className="text-gray-400 text-sm">Enterprise QA</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30">
            <StarIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">BSc</div>
            <div className="text-purple-400 font-medium">Multimedia & Creative Tech</div>
            <div className="text-gray-400 text-sm">Erasmushogeschool Brussel</div>
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative p-8 bg-dark-800 border border-dark-700 rounded-2xl hover:border-primary-500/30 transition-all duration-300 h-full">
                {/* Certificate Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${certificate.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                  {certificate.icon}
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {getStatusBadge(certificate.status)}
                </div>

                {/* Certificate Info */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {certificate.title}
                </h3>
                
                <p className="text-primary-400 font-medium mb-2">
                  {certificate.issuer}
                </p>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <CalendarIcon className="w-4 h-4" />
                  {certificate.date}
                </div>
                
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {certificate.description}
                </p>

                {/* Credential ID */}
                <div className="mb-6">
                  <div className="text-xs text-gray-500 mb-1">Credential ID</div>
                  <div className="text-sm font-mono text-gray-400 bg-dark-900 px-3 py-2 rounded-lg border border-dark-600">
                    {certificate.credentialId}
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}