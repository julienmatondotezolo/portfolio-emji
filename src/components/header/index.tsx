import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';

import { Social } from '../../config/';

type Props = {
  socials: Social[];
};

export function Header({ socials }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer"
            >
              <Image
                src="/favicon.ico"
                alt="emji logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-xl border-2 border-primary-500"
              />
            </button>
          </motion.div>

          {/* Social Icons + Contact Button */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-2"
          >
            {socials.map((social) => (
              <SocialIcon
                key={social._id}
                target="_blank"
                url={social.url}
                fgColor="gray"
                bgColor="transparent"
                style={{ height: 36, width: 36 }}
              />
            ))}
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
