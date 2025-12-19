import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ReStacked - AI-Powered Q&A Platform',
    description: 'Built full-stack Q&A platform with real-time features using React, TypeScript, Node.js, Express, and MongoDB. Implemented AI Summary and Tag Suggestion features using Gemini 2.0 Flash, vector embeddings, and RAG workflows for semantic search. Developed WebSocket-based real-time updates using Socket.io, enabling live notifications and collaborative editing. Designed and optimized RESTful API architecture with authentication, rate limiting, and comprehensive error handling. Implemented CI/CD pipeline using GitHub Actions.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'LLM APIs', 'RAG', 'CI/CD'],
    github: 'https://github.com/phganie',
    demo: '#'
  },
  {
    title: 'ADHD Prediction from Brain Imaging',
    description: 'Built ensemble ML pipeline combining LightGBM, Random Forest, and XGBoost, achieving F1 score of 0.73 on Kaggle competition. Engineered data preprocessing pipeline handling 19,000+ features using KNN imputation, PCA, and SMOTE for class imbalance. Optimized hyperparameters across 200+ Optuna trials, reducing training time by 40% while maintaining prediction accuracy. Integrated 4 complex brain imaging datasets, implementing robust validation and cross-validation strategies.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['Python', 'Scikit-learn', 'LightGBM', 'XGBoost', 'Pandas', 'NumPy', 'Optuna'],
    github: 'https://github.com/phganie',
    demo: '#'
  },
  {
    title: 'Kanbas - Learning Management System',
    description: 'Architected and developed full-stack LMS with 15+ RESTful API endpoints supporting course management, assignments, and authentication. Implemented Redux state management with normalized data structures, reducing rendering time by 35%. Designed MongoDB schema with proper indexing and relationships, optimizing query performance for 50+ concurrent users.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Redux'],
    github: 'https://github.com/phganie',
    demo: '#'
  }
];

const Projects = () => {
  const projectColors = [
    { gradient: 'from-purple-500 via-pink-500 to-blue-500', bg: 'from-purple-50 to-pink-50 dark:from-purple-900/40 dark:to-pink-900/40', border: 'border-purple-300 dark:border-purple-600', text: 'text-purple-800 dark:text-purple-300', badge: 'bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200' },
    { gradient: 'from-blue-500 via-cyan-500 to-teal-500', bg: 'from-blue-50 to-cyan-50 dark:from-blue-900/40 dark:to-cyan-900/40', border: 'border-blue-300 dark:border-blue-600', text: 'text-blue-800 dark:text-blue-300', badge: 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200' },
    { gradient: 'from-indigo-500 via-purple-500 to-pink-500', bg: 'from-indigo-50 to-purple-50 dark:from-indigo-900/40 dark:to-purple-900/40', border: 'border-indigo-300 dark:border-indigo-600', text: 'text-indigo-800 dark:text-indigo-300', badge: 'bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200' },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Projects That Matter</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-serif">
            Each project represents a step in my journey — from building things because they were impressive, 
            to building things that are useful, thoughtful, and human.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = projectColors[index % projectColors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -15, rotateY: 5, scale: 1.02 }}
                className={`bg-gradient-to-br ${colors.bg} rounded-2xl shadow-xl border-2 ${colors.border} hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-90`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-6xl opacity-20"
                      >
                        🚀
                      </motion.div>
                    </div>
                  </motion.div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold ${colors.text} mb-3 flex items-center`}>
                    {project.title}
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="ml-2 text-2xl"
                    >
                      ✨
                    </motion.span>
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`${colors.badge} text-xs font-semibold px-3 py-1 rounded-full shadow-sm cursor-default`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className={`${colors.text} font-semibold hover:underline flex items-center transition-colors`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2">🔗</span> GitHub
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      className={`${colors.text} font-semibold hover:underline flex items-center transition-colors`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2">🌐</span> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects; 