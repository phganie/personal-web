import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <nav className="fixed w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg z-50 border-b-2 border-purple-200/50 dark:border-purple-800/50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img
                src="/cat.png"
                alt="Cat Logo"
                className="h-10 w-10 mr-2 object-contain"
              />
              <span className="sr-only">Home</span>
            </a>
          </div>
          
          {/* Center - Desktop Menu - Shows on md screens and above */}
          {isDesktop && (
          <div 
            className="flex items-center justify-center flex-1 space-x-2 lg:space-x-4 xl:space-x-6" 
            role="navigation" 
            aria-label="Main navigation"
          >
            <motion.a 
              href="#home" 
              whileHover={{ y: -3, scale: 1.05 }}
              className="text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 px-2 lg:px-3 xl:px-4 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors relative group whitespace-nowrap"
            >
              Home
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
            <motion.a 
              href="#story" 
              whileHover={{ y: -3, scale: 1.05 }}
              className="text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 px-2 lg:px-3 xl:px-4 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors relative group whitespace-nowrap"
            >
              Story
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
            <motion.a 
              href="#about" 
              whileHover={{ y: -3, scale: 1.05 }}
              className="text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 px-2 lg:px-3 xl:px-4 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors relative group whitespace-nowrap"
            >
              About
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
            <motion.a 
              href="#projects" 
              whileHover={{ y: -3, scale: 1.05 }}
              className="text-slate-800 dark:text-slate-200 hover:text-pink-600 dark:hover:text-pink-400 px-2 lg:px-3 xl:px-4 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors relative group whitespace-nowrap"
            >
              Projects
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
            <motion.a 
              href="#skills" 
              whileHover={{ y: -3, scale: 1.05 }}
              className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 px-2 lg:px-3 xl:px-4 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors relative group whitespace-nowrap"
            >
              Skills
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ y: -3, scale: 1.05 }}
              className="text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-2 lg:px-3 xl:px-4 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors relative group whitespace-nowrap"
            >
              Contact
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          </div>
          )}

          {/* Right side - Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Theme Toggle - Visible on all screens */}
            <div>
              <ThemeToggle />
            </div>

            {/* Mobile menu button - Only visible on mobile */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 dark:focus:ring-purple-500"
              >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <motion.a 
              href="#story" 
              whileHover={{ x: 5 }}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Story
            </motion.a>
            <motion.a 
              href="#about" 
              whileHover={{ x: 5 }}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              About
            </motion.a>
            <motion.a 
              href="#projects" 
              whileHover={{ x: 5 }}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Projects
            </motion.a>
            <motion.a 
              href="#skills" 
              whileHover={{ x: 5 }}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Skills
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ x: 5 }}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 