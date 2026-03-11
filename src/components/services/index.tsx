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

const services = [
  {
    icon: <MenuIcon className="w-8 h-8" />,
    title: 'AdaMenu',
    description: 'Smart restaurant menu management with real-time updates',
    price: '€50/month',
    features: ['Dynamic menus', 'Multi-language support', 'QR integration'],
    status: 'active',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: <DatabaseIcon className="w-8 h-8" />,
    title: 'AdaStock',
    description: 'AI-powered inventory management for restaurants',
    price: 'Contact for pricing',
    features: ['Smart tracking', 'Predictive analytics', 'Automated alerts'],
    status: 'ready',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: <UsersIcon className="w-8 h-8" />,
    title: 'AdaStaff',
    description: 'Intelligent employee scheduling and management',
    price: 'Contact for pricing',
    features: ['Smart scheduling', 'Time tracking', 'Performance metrics'],
    status: 'ready',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: <PhoneIcon className="w-8 h-8" />,
    title: 'AdaPhone',
    description: 'AI receptionist for restaurants and businesses',
    price: 'Contact for pricing',
    features: ['Voice AI', '24/7 availability', 'Order management'],
    status: 'development',
    color: 'from-orange-400 to-orange-600',
  },
  {
    icon: <CalendarIcon className="w-8 h-8" />,
    title: 'AdaPlanning',
    description: 'Advanced staff planning and scheduling system',
    price: 'Contact for pricing',
    features: ['Calendar integration', 'Conflict resolution', 'Mobile app'],
    status: 'active',
    color: 'from-teal-400 to-teal-600',
  },
  {
    icon: <BrainCircuitIcon className="w-8 h-8" />,
    title: 'Custom AI Solutions',
    description: 'Tailored automation for your specific business needs',
    price: 'From €5K',
    features: ['Custom development', 'AI integration', 'Full support'],
    status: 'available',
    color: 'from-pink-400 to-pink-600',
  },
];

const getStatusBadge = (status: string) => {
  const statusConfig = {
    active: { label: 'Live', color: 'bg-green-500', textColor: 'text-green-100' },
    ready: { label: 'Ready', color: 'bg-blue-500', textColor: 'text-blue-100' },
    development: { label: 'In Dev', color: 'bg-orange-500', textColor: 'text-orange-100' },
    available: { label: 'Available', color: 'bg-purple-500', textColor: 'text-purple-100' },
  };
  
  const config = statusConfig[status as keyof typeof statusConfig];
  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.color} ${config.textColor}`}>
      {config.label}
    </span>
  );
};

export function Services() {
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
            <BotIcon className="w-4 h-4" />
            AI Solutions Portfolio
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            ADA Systems
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Platform
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Complete AI ecosystem for restaurants and enterprises. From menu management to staff scheduling,
            integrated solutions driving operational efficiency and business growth.{' '}
            <a href="https://www.adasystems.app/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">
              Visit ADA Systems
            </a>
          </p>
        </motion.div>

        {/* Success Metrics */}
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
            <div className="text-green-400 font-medium">Revenue Growth</div>
            <div className="text-gray-400 text-sm">Client Success Rate</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30">
            <BuildingIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">6+</div>
            <div className="text-blue-400 font-medium">AI Services</div>
            <div className="text-gray-400 text-sm">Integrated Platform</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30">
            <ShoppingCartIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-purple-400 font-medium">Client Retention</div>
            <div className="text-gray-400 text-sm">Satisfied Customers</div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {getStatusBadge(service.status)}
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

                {/* Pricing */}
                <div className="mt-auto">
                  <div className="text-2xl font-bold text-white mb-4">
                    {service.price}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-6 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors"
                  >
                    Get Started
                  </motion.button>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
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
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join successful restaurants and enterprises leveraging our AI platform 
              for improved efficiency and business growth. Experience the ADA Systems difference.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-primary-500/25"
            >
              Schedule a Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}