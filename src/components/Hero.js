import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Bello, my name is An :)";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [text, isTyping]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 pt-16 relative overflow-hidden">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-800 dark:text-white mb-4"
            >
              {text}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-slate-600 dark:text-purple-400"
              >
                |
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-6 font-light"
            >
              AI/ML Engineer & Product Thinker
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-slate-700 dark:text-slate-300 mb-8 font-serif leading-relaxed"
            >
              It started with a simple realization: with code, I could build things from nothing. 
              Today, I build tools that are not only technically sound, but also intentional — 
              tools that respect users, reduce friction, and contribute something positive to the world.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex space-x-4"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -5, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="#story"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-2xl"
              >
                Read My Story
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-full text-sm font-semibold border-2 border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all shadow-lg hover:shadow-xl"
              >
                See My Work
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden shadow-2xl"
            >
              <img
                src={`${process.env.PUBLIC_URL}/selfie.png`}
                alt="Phuong-An Bui"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 rounded-full bg-purple-300/30 dark:bg-purple-500/20 blur-xl"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-pink-300/30 dark:bg-pink-500/20 blur-xl"
              animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-blue-300/30 dark:bg-blue-500/20 blur-xl"
              animate={{ scale: [1, 1.4, 1], y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero; 