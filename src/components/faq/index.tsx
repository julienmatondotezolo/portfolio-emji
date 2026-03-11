import { motion } from 'framer-motion';
import { ChevronDownIcon, HelpCircleIcon } from 'lucide-react';
import React, { useState } from 'react';

const faqs = [
  {
    id: 'implementation-time',
    question: 'How long does it take to implement an AI solution?',
    answer: 'Most restaurant AI solutions can be set up within 24-48 hours. For complex enterprise solutions, we typically deliver within 1-2 weeks. We prioritize quick wins and immediate value, so you start seeing benefits from day one.',
    category: 'Implementation'
  },
  {
    id: 'cost-roi',
    question: 'What kind of ROI can I expect from AI automation?',
    answer: 'Our clients typically see 300-400% ROI within the first 6 months. L\'Osteria Deerlijk achieved €250+/month revenue increase with a 400% growth rate. Most solutions pay for themselves within 30-60 days through efficiency gains and increased revenue.',
    category: 'ROI'
  },
  {
    id: 'technical-requirements',
    question: 'Do I need technical expertise to use these AI solutions?',
    answer: 'Not at all! Our solutions are designed for business owners, not tech experts. We provide full training, documentation, and ongoing support. The interfaces are intuitive and user-friendly. If you can use a smartphone, you can manage our AI systems.',
    category: 'Technical'
  },
  {
    id: 'data-security',
    question: 'How secure is my business data with AI systems?',
    answer: 'Security is our top priority. We use enterprise-grade encryption, secure cloud infrastructure, and comply with GDPR regulations. Your data is protected with bank-level security. We never share client data and provide full audit trails for compliance.',
    category: 'Security'
  },
  {
    id: 'customization',
    question: 'Can the AI solutions be customized for my specific business?',
    answer: 'Absolutely! While we have proven frameworks, every solution is tailored to your specific needs. We start with your business goals, analyze your workflows, and customize the AI to fit your operations perfectly. No one-size-fits-all approaches.',
    category: 'Customization'
  },
  {
    id: 'ongoing-support',
    question: 'What kind of support do you provide after implementation?',
    answer: 'We provide comprehensive ongoing support including 24/7 monitoring, regular updates, performance optimization, and training for new team members. Most clients get priority email/phone support with response times under 4 hours.',
    category: 'Support'
  },
  {
    id: 'staff-training',
    question: 'Will my staff need extensive training to use AI tools?',
    answer: 'Our AI tools are designed to enhance your staff, not replace them. Training typically takes 1-2 hours per person. We provide hands-on training, video tutorials, and documentation. Most staff find the tools make their jobs easier, not harder.',
    category: 'Training'
  },
  {
    id: 'integration',
    question: 'How does AI integrate with my existing systems?',
    answer: 'We specialize in seamless integrations. Our AI solutions work with most existing POS systems, inventory management, scheduling tools, and accounting software. We handle all technical integrations so you don\'t have to worry about compatibility.',
    category: 'Integration'
  },
  {
    id: 'starting-small',
    question: 'Can I start with one AI solution and add more later?',
    answer: 'Yes! We recommend starting with one high-impact solution (like menu management) and expanding gradually. Our modular platform allows you to add new AI capabilities as you grow. This approach minimizes risk and maximizes success.',
    category: 'Getting Started'
  },
  {
    id: 'pricing-model',
    question: 'How does the pricing work for AI solutions?',
    answer: 'We offer transparent monthly pricing starting from €299 for restaurant solutions. Enterprise solutions are customized based on scope. No hidden fees, no long-term contracts required. Most clients see positive ROI within the first month.',
    category: 'Pricing'
  }
];

const categories = [...new Set(faqs.map(faq => faq.category))];

const FAQItem = ({ faq, index }: { faq: any, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-dark-700/50 transition-colors"
      >
        <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDownIcon className="w-6 h-6 text-gray-400" />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6">
          <div className="pt-4 border-t border-dark-600">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-400 mb-3">
              {faq.category}
            </span>
            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFaqs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

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
            <HelpCircleIcon className="w-4 h-4" />
            Common Questions
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Questions
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about AI implementation, 
            costs, security, and what to expect when working with us.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === 'All'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700'
            }`}
          >
            All Questions
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} />
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? I'm here to help! 
              Schedule a free consultation to discuss your specific situation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-primary-500/25"
              >
                Ask Your Question
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border border-gray-600 hover:border-primary-500 text-white font-medium rounded-xl transition-colors hover:bg-primary-500/10"
              >
                Schedule Free Call
              </motion.button>
            </div>

            {/* Quick contact */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Quick questions? Email me at{' '}
                <a href="mailto:hello@emjidevimanus.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                  hello@emjidevimanus.com
                </a>
                {' '}• Response within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}