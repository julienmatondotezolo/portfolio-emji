import { motion } from 'framer-motion';
import {
  CheckIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  SparklesIcon,
  UserIcon
} from 'lucide-react';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PageInfo } from '../../config';
import { useTranslation } from '../../i18n';

type Inputs = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

export function Contact({ pageInfo }: Props) {
  const { t, locale } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>();

  const projectTypes = [
    t('contact.projectTypes.0'),
    t('contact.projectTypes.1'),
    t('contact.projectTypes.2'),
    t('contact.projectTypes.3'),
    t('contact.projectTypes.4'),
    t('contact.projectTypes.5'),
  ];

  const budgetRanges = [
    t('contact.budgetRanges.0'),
    t('contact.budgetRanges.1'),
    t('contact.budgetRanges.2'),
    t('contact.budgetRanges.3'),
    t('contact.budgetRanges.4'),
  ];

  const timelineOptions = [
    t('contact.timelineOptions.0'),
    t('contact.timelineOptions.1'),
    t('contact.timelineOptions.2'),
    t('contact.timelineOptions.3'),
    t('contact.timelineOptions.4'),
  ];

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, locale }),
      });

      if (!res.ok) throw new Error('Failed to send');

      setIsSubmitted(true);
      reset();
    } catch {
      setError(t('contact.sendError'));
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-6 lg:px-8 bg-dark-900 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckIcon className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl font-bold text-white mb-4">
              {t('contact.thankYou')}
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              {t('contact.thankYouMessage')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl transition-colors"
              >
                {t('contact.sendAnother')}
              </button>

              <a
                href={`tel:+32477953430`}
                className="px-6 py-3 bg-transparent border border-gray-600 hover:border-primary-500 text-white rounded-xl transition-colors"
              >
                {t('contact.callDirectButton')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

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
            <MessageCircleIcon className="w-4 h-4" />
            {t('contact.badge')}
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {t('contact.title')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              {t('contact.titleHighlight')}
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">{t('contact.nameLabel')}</label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register("name", { required: t('contact.nameRequired') })}
                      className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder={t('contact.namePlaceholder')}
                      type="text"
                    />
                  </div>
                  {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">{t('contact.emailLabel')}</label>
                  <div className="relative">
                    <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register("email", {
                        required: t('contact.emailRequired'),
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: t('contact.emailInvalid')
                        }
                      })}
                      className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder={t('contact.emailPlaceholder')}
                      type="email"
                    />
                  </div>
                  {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">{t('contact.companyLabel')}</label>
                <input
                  {...register("company")}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder={t('contact.companyPlaceholder')}
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">{t('contact.projectTypeLabel')}</label>
                  <select
                    {...register("projectType", { required: t('contact.projectTypeRequired') })}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option value="">{t('contact.projectTypePlaceholder')}</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && <span className="text-red-400 text-sm">{errors.projectType.message}</span>}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">{t('contact.budgetLabel')}</label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option value="">{t('contact.budgetPlaceholder')}</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">{t('contact.timelineLabel')}</label>
                <select
                  {...register("timeline")}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                >
                  <option value="">{t('contact.timelinePlaceholder')}</option>
                  {timelineOptions.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">{t('contact.messageLabel')}</label>
                <textarea
                  {...register("message", { required: t('contact.messageRequired') })}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all min-h-[120px] resize-vertical"
                  placeholder={t('contact.messagePlaceholder')}
                />
                {errors.message && <span className="text-red-400 text-sm">{errors.message.message}</span>}
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
              >
                {isLoading ? t('contact.sending') : t('contact.sendMessage')}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.directContact')}</h3>

              <div className="space-y-4">
                <a
                  href="mailto:info@emji.be"
                  className="flex items-center gap-4 p-4 bg-dark-700 rounded-xl hover:bg-dark-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <MailIcon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{t('contact.emailMe')}</div>
                    <div className="text-gray-400 text-sm">info@emji.be</div>
                  </div>
                </a>

                <a
                  href="tel:+32477953430"
                  className="flex items-center gap-4 p-4 bg-dark-700 rounded-xl hover:bg-dark-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <PhoneIcon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{t('contact.callDirect')}</div>
                    <div className="text-gray-400 text-sm">+32 477 95 34 30</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center p-6 bg-dark-800 rounded-xl border border-dark-700">
                <ClockIcon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <div className="text-white font-medium mb-1">{t('contact.responseTime')}</div>
                <div className="text-gray-400 text-sm">{t('contact.within24')}</div>
              </div>

              <div className="text-center p-6 bg-dark-800 rounded-xl border border-dark-700">
                <MapPinIcon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-white font-medium mb-1">{t('contact.locatedIn')}</div>
                <div className="text-gray-400 text-sm">{t('contact.brussels')}</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-2xl p-6 border border-primary-500/20">
              <h4 className="text-xl font-bold text-white mb-4">{t('contact.whyWorkWithMe')}</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <SparklesIcon className="w-5 h-5 text-primary-400" />
                  {t('contact.provenSuccess')}
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                  {t('contact.yearsExpertise')}
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ClockIcon className="w-5 h-5 text-blue-400" />
                  {t('contact.fastImplementation')}
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <UserIcon className="w-5 h-5 text-purple-400" />
                  {t('contact.personalizedSolutions')}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
