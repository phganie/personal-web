import React from 'react';
import { motion } from 'framer-motion';

const TestBlossom = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <div className="text-center">
        <h1 className="text-3xl font-serif text-slate-800 mb-4">Cherry Blossom Test</h1>
        <p className="text-slate-600 mb-8">This is a test to verify the cherry blossom animation is working.</p>
        
        <motion.div
          animate={{
            y: [0, 100, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mx-auto"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="2" fill="rgba(255, 255, 255, 0.9)" />
            <path
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"
              fill="rgba(255, 182, 193, 0.9)"
            />
            <path
              d="M12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18Z"
              fill="rgba(255, 182, 193, 0.9)"
            />
            <path
              d="M12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10Z"
              fill="rgba(255, 182, 193, 0.9)"
            />
            <path
              d="M2 12C2 10.9 2.9 10 4 10C5.1 10 6 10.9 6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12Z"
              fill="rgba(255, 182, 193, 0.9)"
            />
            <path
              d="M18 12C18 10.9 18.9 10 20 10C21.1 10 22 10.9 22 12C22 13.1 21.1 14 20 14C18.9 14 18 13.1 18 12Z"
              fill="rgba(255, 182, 193, 0.9)"
            />
          </svg>
        </motion.div>
        
        <button 
          className="mt-8 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default TestBlossom; 