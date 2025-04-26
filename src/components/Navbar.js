import React, { useState } from 'react';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img
                src="/cat.png"
                alt="Cat Logo"
                className="h-10 w-10 mr-2 object-contain"
              />
              <span className="sr-only">Home</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <motion.a 
                href="#about" 
                whileHover={{ y: -2 }}
                className="text-slate-600 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </motion.a>
              <motion.a 
                href="#projects" 
                whileHover={{ y: -2 }}
                className="text-slate-600 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Projects
              </motion.a>
              <motion.a 
                href="#skills" 
                whileHover={{ y: -2 }}
                className="text-slate-600 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Skills
              </motion.a>
              <motion.a 
                href="#contact" 
                whileHover={{ y: -2 }}
                className="text-slate-600 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500"
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

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/90 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <motion.a 
              href="#about" 
              whileHover={{ x: 5 }}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              About
            </motion.a>
            <motion.a 
              href="#projects" 
              whileHover={{ x: 5 }}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Projects
            </motion.a>
            <motion.a 
              href="#skills" 
              whileHover={{ x: 5 }}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Skills
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ x: 5 }}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
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