import { motion } from 'framer-motion';
import {
  BotIcon,
  BrainCircuitIcon,
  BuildingIcon,
  CalendarIcon,
  DatabaseIcon,
  MenuIcon,
  PhoneIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon
} from 'lucide-react';
import React from 'react';

import { useTranslation } from '../../i18n';

const serviceConfigs = [
  { key: 'adaMenu', icon: <MenuIcon className="w-8 h-8" />, price: '\u20ac50/month', status: 'active', color: 'from-green-400 to-green-600' },
  { key: 'adaStock', icon: <DatabaseIcon className="w-8 h-8" />, price: 'Contact for pricing', status: 'ready', color: 'from-blue-400 to-blue-600' },
  { key: 'adaStaff', icon: <UsersIcon className="w-8 h-8" />, price: 'Contact for pricing', status: 'ready', color: 'from-purple-400 to-purple-600' },
  { key: 'adaPhone', icon: <PhoneIcon className="w-8 h-8" />, price: 'Contact for pricing', status: 'development', color: 'from-orange-400 to-orange-600' },
  { key: 'adaPlanning', icon: <CalendarIcon className="w-8 h-8" />, price: 'Contact for pricing', status: 'active', color: 'from-teal-400 to-teal-600' },
  { key: 'customAi', icon: <BrainCircuitIcon className="w-8 h-8" />, price: 'From \u20ac5K', status: 'available', color: 'from-pink-400 to-pink-600' },
];

const statusConfig: Record<string, { label: string; color: string; textColor: string }> = {
  active: { label: 'Live', color: 'bg-green-500', textColor: 'text-green-100' },
  ready: { label: 'Ready', color: 'bg-blue-500', textColor: 'text-blue-100' },
  development: { label: 'In Dev', color: 'bg-orange-500', textColor: 'text-orange-100' },
  available: { label: 'Available', color: 'bg-purple-500', textColor: 'text-purple-100' },
};

export function Services() {
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
            <BotIcon className="w-4 h-4" />
            {t('services.badge')}
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {t('services.title')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              {t('services.titleHighlight')}
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('services.description')}{' '}
            <a href="https://www.adasystems.app/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">
              {t('services.visitAda')}
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/30">
            <TrendingUpIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">400%</div>
            <div className="text-green-400 font-medium">{t('services.revenueGrowth')}</div>
            <div className="text-gray-400 text-sm">{t('services.clientSuccessRate')}</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30">
            <BuildingIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">6+</div>
            <div className="text-blue-400 font-medium">{t('services.aiServices')}</div>
            <div className="text-gray-400 text-sm">{t('services.integratedPlatform')}</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30">
            <ShoppingCartIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-purple-400 font-medium">{t('services.clientRetention')}</div>
            <div className="text-gray-400 text-sm">{t('services.satisfiedCustomers')}</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceConfigs.map((service, index) => {
            const config = statusConfig[service.status];
            const features = [0, 1, 2].map(i => t(`services.items.${service.key}.features.${i}`));

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

                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.color} ${config.textColor}`}>
                      {config.label}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t(`services.items.${service.key}.title`)}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {t(`services.items.${service.key}.description`)}
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
                    <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 px-6 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors"
                    >
                      {t('services.getStarted')}
                    </motion.button>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
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
              {t('services.ctaTitle')}
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('services.ctaDescription')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-primary-500/25"
            >
              {t('services.scheduleDemo')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
