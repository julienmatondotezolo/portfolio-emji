import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  CheckIcon,
  ClockIcon,
  EnvelopeIcon, 
  MapPinIcon, 
  MessageCircleIcon,
  PhoneIcon,
  SparklesIcon,
  UserIcon
} from 'lucide-react';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PageInfo } from '../../config';
import { CTA } from '../cta';

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

const projectTypes = [
  'Restaurant AI Automation',
  'Test Automation Setup',
  'Custom AI Development',
  'Consultation Only',
  'Full Platform Implementation',
  'Other'
];

const budgetRanges = [
  'Under €5,000',
  '€5,000 - €15,000',
  '€15,000 - €50,000',
  '€50,000+',
  'Not sure yet'
];

const timelineOptions = [
  'ASAP',
  'Within 1 month',
  'Within 3 months',
  'Within 6 months',
  'Just exploring'
];

export function Contact({ pageInfo }: Props) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setIsLoading(true);
    
    // Create detailed email
    const emailSubject = `AI Project Inquiry: ${formData.projectType} - ${formData.company}`;
    const emailBody = `
Hi Emji,

I'm interested in discussing an AI automation project with you.

Project Details:
• Name: ${formData.name}
• Company: ${formData.company}
• Email: ${formData.email}
• Project Type: ${formData.projectType}
• Budget Range: ${formData.budget}
• Timeline: ${formData.timeline}

Message:
${formData.message}

Looking forward to hearing from you!

Best regards,
${formData.name}
    `.trim();

    // Simulate API call delay
    setTimeout(() => {
      window.location.href = `mailto:hello@emjidevimanus.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      setIsLoading(false);
      setIsSubmitted(true);
      reset();
    }, 1000);
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
              Thank You!
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Your message has been sent successfully. I'll respond within 24 hours to discuss your AI project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl transition-colors"
              >
                Send Another Message
              </button>
              
              <a
                href="https://calendly.com/emji-devimanus"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent border border-gray-600 hover:border-primary-500 text-white rounded-xl transition-colors"
              >
                Schedule Video Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

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
            <MessageCircleIcon className="w-4 h-4" />
            Let's Connect
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Start Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              AI Journey
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Let's discuss your project and create 
            a solution that drives real results. I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name *</label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register("name", { required: "Name is required" })}
                      className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="Your full name"
                      type="text"
                    />
                  </div>
                  {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="your.email@company.com"
                      type="email"
                    />
                  </div>
                  {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-white font-medium mb-2">Company</label>
                <input
                  {...register("company")}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="Your company name"
                  type="text"
                />
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Project Type *</label>
                  <select
                    {...register("projectType", { required: "Please select a project type" })}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && <span className="text-red-400 text-sm">{errors.projectType.message}</span>}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Budget Range</label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-white font-medium mb-2">Timeline</label>
                <select
                  {...register("timeline")}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                >
                  <option value="">When do you need this?</option>
                  {timelineOptions.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-medium mb-2">Tell me about your project</label>
                <textarea
                  {...register("message", { required: "Please describe your project" })}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all min-h-[120px] resize-vertical"
                  placeholder="Describe your goals, current challenges, and what you'd like to achieve with AI automation..."
                />
                {errors.message && <span className="text-red-400 text-sm">{errors.message.message}</span>}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact Options */}
            <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
              <h3 className="text-2xl font-bold text-white mb-6">Prefer to Connect Directly?</h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${pageInfo.email || 'hello@emjidevimanus.com'}`}
                  className="flex items-center gap-4 p-4 bg-dark-700 rounded-xl hover:bg-dark-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <EnvelopeIcon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email Me</div>
                    <div className="text-gray-400 text-sm">{pageInfo.email || 'hello@emjidevimanus.com'}</div>
                  </div>
                </a>

                <a
                  href={`tel:${pageInfo.phoneNumber || '+32123456789'}`}
                  className="flex items-center gap-4 p-4 bg-dark-700 rounded-xl hover:bg-dark-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <PhoneIcon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Call Direct</div>
                    <div className="text-gray-400 text-sm">{pageInfo.phoneNumber || '+32 123 456 789'}</div>
                  </div>
                </a>

                <a
                  href="https://calendly.com/emji-devimanus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-700 rounded-xl hover:bg-dark-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <CalendarIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Schedule Video Call</div>
                    <div className="text-gray-400 text-sm">Free 30-min consultation</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Response Time & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center p-6 bg-dark-800 rounded-xl border border-dark-700">
                <ClockIcon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <div className="text-white font-medium mb-1">Response Time</div>
                <div className="text-gray-400 text-sm">Within 24 hours</div>
              </div>
              
              <div className="text-center p-6 bg-dark-800 rounded-xl border border-dark-700">
                <MapPinIcon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-white font-medium mb-1">Located in</div>
                <div className="text-gray-400 text-sm">{pageInfo.address || 'Belgium'}</div>
              </div>
            </div>

            {/* Why Choose Me */}
            <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-2xl p-6 border border-primary-500/20">
              <h4 className="text-xl font-bold text-white mb-4">Why Work With Me?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <SparklesIcon className="w-5 h-5 text-primary-400" />
                  Proven 400% growth results
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                  5+ years automation expertise
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ClockIcon className="w-5 h-5 text-blue-400" />
                  Fast implementation (24hrs)
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <UserIcon className="w-5 h-5 text-purple-400" />
                  Personalized solutions
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <div className="mt-20">
          <CTA 
            variant="contact" 
            title="Ready to Get Started?"
            subtitle="Multiple ways to connect"
            description="Choose the best way to discuss your AI automation needs. We'll respond within 24 hours."
          />
        </div>
      </div>
    </section>
  );
}