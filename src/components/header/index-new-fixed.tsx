import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';

import { Social } from '../../config/';

type Props = {
  socials: Social[];
};

const navigationLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
];

export function Header({ socials }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark-900/95 backdrop-blur-md border-b border-dark-700' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white">Emji Devimanus</h1>
                <p className="text-primary-400 text-sm">AI Solutions Architect</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>

            {/* Social Icons & CTA */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              {/* Social Icons - Hidden on mobile */}
              <div className="hidden md:flex items-center">
                {socials.map((social) => (
                  <SocialIcon 
                    key={social._id} 
                    target="_blank" 
                    url={social.url} 
                    fgColor="gray" 
                    bgColor="transparent"
                    style={{ height: 40, width: 40 }}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
                >
                  Get Started
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-primary-400 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? '0%' : '100%'
        }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 lg:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-dark-800 border-l border-dark-700 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pt-14">
            <div>
              <h2 className="text-xl font-bold text-white">Navigation</h2>
              <p className="text-gray-400 text-sm">AI Solutions Architect</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4 mb-8">
            {navigationLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : 20 
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-3 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-dark-700 transition-all duration-200"
              >
                {link.name}
              </motion.button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="border-t border-dark-700 pt-6">
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <SocialIcon 
                  key={social._id} 
                  target="_blank" 
                  url={social.url} 
                  fgColor="gray" 
                  bgColor="transparent"
                  style={{ height: 40, width: 40 }}
                />
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="mt-8">
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 px-6 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors"
              >
                Start Your AI Project
              </motion.button>
            </Link>
            
            <p className="text-gray-400 text-center text-sm mt-4">
              Free consultation • 24hr response
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}