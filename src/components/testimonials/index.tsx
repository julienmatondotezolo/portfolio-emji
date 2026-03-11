import { motion } from 'framer-motion';
import { StarIcon, ChefHatIcon, TrendingUpIcon, ClockIcon } from 'lucide-react';
import React from 'react';

const testimonials = [
  {
    id: 'losteria',
    name: 'Angelo Bombini',
    role: 'Owner',
    company: "L'Osteria Deerlijk",
    location: 'Deerlijk, Belgium',
    avatar: '/images/angelo-testimonial.jpg', // Add real photo
    quote: "Julien transformed our restaurant operations completely. The ADA Systems platform increased our efficiency by 400% and saved us 30+ hours per week. The AI solutions pay for themselves within the first month.",
    metrics: {
      revenue: '€250+/month',
      growth: '400%',
      timeSaved: '30hrs/week',
      roi: '300%'
    },
    services: ['AdaMenu', 'Postagen', 'AdaPlanning'],
    rating: 5,
    featured: true
  },
  {
    id: 'restaurant-chain',
    name: 'Sarah De Vries',
    role: 'Operations Manager',
    company: 'Belgian Restaurant Group',
    location: 'Brussels, Belgium',
    avatar: '/images/sarah-testimonial.jpg',
    quote: "The test automation framework Julien built reduced our QA time by 80%. His AI-driven approach to quality assurance is revolutionary. We can now deploy updates daily instead of weekly.",
    metrics: {
      efficiency: '80%',
      deployment: '7x faster',
      bugs: '90% fewer',
      coverage: '95%'
    },
    services: ['Test Automation', 'CI/CD', 'Quality Assurance'],
    rating: 5,
    featured: false
  },
  {
    id: 'tech-startup',
    name: 'Marc Janssen',
    role: 'CTO',
    company: 'InnovaTech Solutions',
    location: 'Antwerp, Belgium',
    avatar: '/images/marc-testimonial.jpg',
    quote: "Julien's custom AI implementation helped us automate our customer support. We now handle 10x more inquiries with the same team size. His technical expertise and business understanding are exceptional.",
    metrics: {
      inquiries: '10x more',
      response: '24/7',
      satisfaction: '95%',
      cost: '60% less'
    },
    services: ['Custom AI', 'Automation', 'Integration'],
    rating: 5,
    featured: false
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-3xl border transition-all duration-500 group ${
        testimonial.featured 
          ? 'bg-gradient-to-br from-primary-500/10 to-primary-600/10 border-primary-500/30 hover:border-primary-500/50' 
          : 'bg-dark-800 border-dark-700 hover:border-primary-500/30'
      }`}
    >
      {/* Featured badge */}
      {testimonial.featured && (
        <div className="absolute -top-3 left-6 px-4 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
          Featured Success
        </div>
      )}

      {/* Rating */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-lg text-gray-300 mb-8 leading-relaxed italic">
        "{testimonial.quote}"
      </blockquote>

      {/* Metrics */}
      {testimonial.metrics && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {Object.entries(testimonial.metrics).map(([key, value]) => (
            <div key={key} className="text-center p-3 bg-dark-700/50 rounded-xl">
              <div className="text-xl font-bold text-white mb-1">{value as string}</div>
              <div className="text-gray-400 text-xs capitalize">{key}</div>
            </div>
          ))}
        </div>
      )}

      {/* Services */}
      <div className="flex flex-wrap gap-2 mb-6">
        {testimonial.services.map((service: string, idx: number) => (
          <span
            key={idx}
            className="px-3 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-400 text-sm"
          >
            {service}
          </span>
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">
            {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
          </span>
        </div>
        
        <div>
          <div className="text-white font-semibold">{testimonial.name}</div>
          <div className="text-primary-400 text-sm">{testimonial.role}</div>
          <div className="text-gray-400 text-sm">{testimonial.company} • {testimonial.location}</div>
        </div>
      </div>
    </motion.div>
  );
};

export function Testimonials() {
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
            <StarIcon className="w-4 h-4" />
            Client Success Stories
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            What Clients
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Say About Me
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real results from real businesses. See how our AI solutions have transformed 
            operations and driven growth for restaurants and enterprises across Belgium.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/30">
            <TrendingUpIcon className="w-10 h-10 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-2">400%</div>
            <div className="text-green-400 text-sm font-medium">Avg Growth</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30">
            <StarIcon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-2">5.0</div>
            <div className="text-blue-400 text-sm font-medium">Client Rating</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30">
            <ClockIcon className="w-10 h-10 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-2">30+</div>
            <div className="text-purple-400 text-sm font-medium">Hours Saved/Week</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl border border-orange-500/30">
            <ChefHatIcon className="w-10 h-10 text-orange-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-2">100%</div>
            <div className="text-orange-400 text-sm font-medium">Success Rate</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
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
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can achieve similar results for your business. 
              Schedule a free consultation to explore the possibilities.
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
                View More Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}