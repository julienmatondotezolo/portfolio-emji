import { motion } from 'framer-motion';
import { 
  ArrowRightIcon, 
  CalendarIcon,
  MessageCircleIcon,
  PhoneIcon,
  SparklesIcon,
  TrendingUpIcon
} from 'lucide-react';
import React from 'react';

type CTAVariant = 'hero' | 'section' | 'contact' | 'pricing';

interface CTAProps {
  variant?: CTAVariant;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  metrics?: Array<{
    value: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  className?: string;
}

const defaultContent = {
  hero: {
    title: 'Ready to Transform Your Business with AI?',
    subtitle: 'Join L\'Osteria and other successful businesses',
    description: 'Get the same AI solutions that drove 400% revenue growth. Free consultation to discuss your specific needs and create a custom implementation plan.',
    primaryAction: { text: 'Schedule Free Consultation', href: '#contact' },
    secondaryAction: { text: 'View Success Stories', href: '#testimonials' }
  },
  section: {
    title: 'Let\'s Build Your AI Solution',
    subtitle: 'Start your transformation today',
    description: 'Ready to see similar results for your business? Let\'s discuss how our AI platform can drive growth and efficiency.',
    primaryAction: { text: 'Get Started Now', href: '#contact' },
    secondaryAction: { text: 'Learn More', href: '#about' }
  },
  contact: {
    title: 'Ready to Get Started?',
    subtitle: 'Multiple ways to connect',
    description: 'Choose the best way to discuss your AI automation needs. We\'ll respond within 24 hours.',
    primaryAction: { text: 'Schedule Video Call', href: 'https://calendly.com/emji-devimanus' },
    secondaryAction: { text: 'Send Message', href: 'mailto:hello@emjidevimanus.com' }
  },
  pricing: {
    title: 'Start Your AI Journey Today',
    subtitle: '30-day money-back guarantee',
    description: 'Join the growing number of businesses leveraging AI for competitive advantage. Setup takes less than 24 hours.',
    primaryAction: { text: 'Start Free Trial', href: '#pricing' },
    secondaryAction: { text: 'Talk to Sales', href: '#contact' }
  }
};

const defaultMetrics = [
  {
    value: '€250+',
    label: 'Monthly Revenue',
    icon: <TrendingUpIcon className="w-5 h-5" />
  },
  {
    value: '400%',
    label: 'Growth Rate',
    icon: <SparklesIcon className="w-5 h-5" />
  },
  {
    value: '24hrs',
    label: 'Setup Time',
    icon: <CalendarIcon className="w-5 h-5" />
  }
];

export function CTA({
  variant = 'section',
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  metrics,
  className = ''
}: CTAProps) {
  const content = defaultContent[variant];
  const finalTitle = title || content.title;
  const finalSubtitle = subtitle || content.subtitle;
  const finalDescription = description || content.description;
  const finalPrimaryAction = primaryAction || content.primaryAction;
  const finalSecondaryAction = secondaryAction || content.secondaryAction;
  const finalMetrics = metrics || defaultMetrics;

  const handleAction = (action: { href?: string; onClick?: () => void }) => {
    if (action.onClick) {
      action.onClick();
    } else if (action.href) {
      if (action.href.startsWith('http') || action.href.startsWith('mailto')) {
        window.open(action.href, '_blank');
      } else {
        const element = document.querySelector(action.href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return 'py-24 bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-purple-600/20';
      case 'contact':
        return 'py-16 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border-green-500/20';
      case 'pricing':
        return 'py-16 bg-gradient-to-r from-blue-500/10 to-cyan-600/10 border-blue-500/20';
      default:
        return 'py-16 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border-primary-500/20';
    }
  };

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-5" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`rounded-3xl p-8 lg:p-12 border ${getVariantStyles()}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              {finalSubtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-primary-400 font-medium mb-4"
                >
                  {finalSubtitle}
                </motion.p>
              )}

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-5xl font-bold text-white mb-6"
              >
                {finalTitle}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 mb-8 max-w-2xl lg:max-w-none"
              >
                {finalDescription}
              </motion.p>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAction(finalPrimaryAction)}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
                >
                  {finalPrimaryAction.text}
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {finalSecondaryAction && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAction(finalSecondaryAction)}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-gray-600 hover:border-primary-500 text-white font-medium rounded-xl transition-all duration-300 hover:bg-primary-500/10"
                  >
                    {finalSecondaryAction.text}
                  </motion.button>
                )}
              </motion.div>
            </div>

            {/* Metrics */}
            {finalMetrics && finalMetrics.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
              >
                {finalMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-left p-6 bg-dark-800/50 rounded-2xl border border-dark-700"
                  >
                    {metric.icon && (
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-xl mb-3">
                        <div className="text-primary-400">
                          {metric.icon}
                        </div>
                      </div>
                    )}
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Contact methods for contact variant */}
          {variant === 'contact' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 pt-12 border-t border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="mailto:hello@emjidevimanus.com"
                  className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl hover:bg-dark-700 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <MessageCircleIcon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email Us</div>
                    <div className="text-gray-400 text-sm">hello@emjidevimanus.com</div>
                  </div>
                </a>

                <a
                  href="tel:+32123456789"
                  className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl hover:bg-dark-700 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <PhoneIcon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Call Direct</div>
                    <div className="text-gray-400 text-sm">+32 123 456 789</div>
                  </div>
                </a>

                <a
                  href="https://calendly.com/emji-devimanus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl hover:bg-dark-700 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <CalendarIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Book Meeting</div>
                    <div className="text-gray-400 text-sm">Schedule online</div>
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}