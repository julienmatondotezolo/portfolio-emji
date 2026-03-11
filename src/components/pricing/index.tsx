import { motion } from 'framer-motion';
import { 
  CheckIcon, 
  StarIcon, 
  ArrowRightIcon,
  ChefHatIcon,
  BuildingIcon,
  ZapIcon,
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon
} from 'lucide-react';
import React, { useState } from 'react';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Restaurant Starter',
    subtitle: 'Perfect for single restaurants',
    price: '€299',
    period: '/month',
    description: 'Complete AI solution to get your restaurant started with automation',
    icon: <ChefHatIcon className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-600',
    features: [
      'AdaMenu - Smart menu management',
      'Basic staff scheduling',
      'QR code integration',
      'Mobile-responsive menus',
      'Multi-language support (EN/FR/NL)',
      'Email support',
      'Setup & training included',
      'Basic analytics dashboard'
    ],
    highlights: ['Most Popular for Small Restaurants'],
    ctaText: 'Start Free Trial',
    popular: false
  },
  {
    id: 'professional',
    name: 'ADA Professional',
    subtitle: 'Full platform for growing businesses',
    price: '€599',
    period: '/month',
    originalPrice: '€799',
    description: 'Complete ADA Systems platform with advanced AI automation',
    icon: <StarIcon className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-600',
    features: [
      'Everything in Restaurant Starter',
      'AdaStock - AI inventory management',
      'AdaStaff - Advanced scheduling',
      'AdaPlanning - Strategic planning',
      'Postagen - Social media automation',
      'Custom integrations',
      'Priority phone & chat support',
      'Advanced analytics & reporting',
      'API access',
      'Multi-location support'
    ],
    highlights: ['Save €200/month', 'Most Popular Choice'],
    ctaText: 'Get Started Today',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solution',
    subtitle: 'Custom AI for large operations',
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored AI solutions for restaurant chains and enterprises',
    icon: <BuildingIcon className="w-8 h-8" />,
    color: 'from-purple-500 to-violet-600',
    features: [
      'Everything in ADA Professional',
      'AdaPhone - AI receptionist',
      'AdaKDS - Kitchen display system',
      'Custom AI development',
      'White-label solutions',
      'Dedicated account manager',
      '24/7 premium support',
      'Custom integrations',
      'Advanced security & compliance',
      'Training & onboarding',
      'SLA guarantees'
    ],
    highlights: ['Unlimited Customization', 'Dedicated Success Manager'],
    ctaText: 'Contact Sales',
    popular: false
  }
];

const addOns = [
  {
    name: 'Test Automation Setup',
    description: 'Complete QA automation framework',
    price: '€2,500',
    features: ['80% faster testing', 'CI/CD integration', '6 months support']
  },
  {
    name: 'AI Consultation (1 day)',
    description: 'Strategic AI implementation planning',
    price: '€1,200',
    features: ['Business analysis', 'Custom roadmap', 'ROI projection']
  },
  {
    name: 'Additional Training',
    description: 'Extended team training sessions',
    price: '€150/hour',
    features: ['On-site or remote', 'Custom materials', 'Ongoing support']
  }
];

const PricingCard = ({ plan, index }: { plan: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-3xl transition-all duration-500 group hover:scale-[1.02] ${
        plan.popular 
          ? 'bg-gradient-to-br from-primary-500/20 to-primary-600/20 border-2 border-primary-500/50 shadow-2xl shadow-primary-500/20' 
          : 'bg-dark-800 border border-dark-700 hover:border-primary-500/30'
      }`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-primary-500 text-white text-sm font-bold rounded-full">
          MOST POPULAR
        </div>
      )}

      {/* Plan icon */}
      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
        {plan.icon}
      </div>

      {/* Plan header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-primary-400 font-medium mb-4">{plan.subtitle}</p>
        
        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-2">
          {plan.originalPrice && (
            <span className="text-gray-400 line-through text-xl">{plan.originalPrice}</span>
          )}
          <span className="text-4xl font-bold text-white">{plan.price}</span>
          {plan.period && (
            <span className="text-gray-400">{plan.period}</span>
          )}
        </div>
        
        <p className="text-gray-300 text-sm">{plan.description}</p>
      </div>

      {/* Highlights */}
      {plan.highlights && plan.highlights.length > 0 && (
        <div className="mb-6">
          {plan.highlights.map((highlight: string, idx: number) => (
            <div key={idx} className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm mr-2 mb-2">
              <ZapIcon className="w-3 h-3" />
              {highlight}
            </div>
          ))}
        </div>
      )}

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-4 px-6 font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
          plan.popular
            ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-primary-500/25'
            : 'bg-transparent border border-gray-600 hover:border-primary-500 text-white hover:bg-primary-500/10'
        }`}
      >
        {plan.ctaText}
        <ArrowRightIcon className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

export function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('monthly');

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
            <ZapIcon className="w-4 h-4" />
            Flexible Pricing Plans
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Choose Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Success Plan
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            From single restaurants to enterprise chains, we have the right AI solution 
            to drive your business growth. Start with a free trial and scale as you grow.
          </p>

          {/* Guarantee badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-green-400" />
              30-day money-back guarantee
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-blue-400" />
              Setup in 24 hours
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-purple-400" />
              Free migration support
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Additional Services</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Enhance your AI implementation with our specialized add-on services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-dark-800 border border-dark-700 rounded-2xl hover:border-primary-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-2">{addon.name}</h4>
                <p className="text-gray-300 mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-primary-400 mb-4">{addon.price}</div>
                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckIcon className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 px-4 bg-transparent border border-gray-600 hover:border-primary-500 text-white rounded-lg transition-colors">
                  Add to Plan
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Questions About Pricing?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're here to help you choose the right plan. Schedule a free consultation 
              to discuss your specific needs and get a custom quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-primary-500/25"
              >
                Schedule Free Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border border-gray-600 hover:border-primary-500 text-white font-medium rounded-xl transition-colors hover:bg-primary-500/10"
              >
                View FAQ
              </motion.button>
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Need a custom solution? Contact us directly at{' '}
                <a href="mailto:hello@emjidevimanus.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                  hello@emjidevimanus.com
                </a>
                {' '}or call{' '}
                <a href="tel:+32123456789" className="text-primary-400 hover:text-primary-300 transition-colors">
                  +32 123 456 789
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}