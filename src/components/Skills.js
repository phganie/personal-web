import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'SQL', level: 85 }
    ]
  },
  {
    category: 'Web Technologies',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'Redux', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Socket.io', level: 80 }
    ]
  },
  {
    category: 'APIs & Frameworks',
    items: [
      { name: 'REST API', level: 90 },
      { name: 'FastAPI', level: 80 },
      { name: 'Flask', level: 75 },
      { name: 'LLM APIs', level: 80 }
    ]
  },
  {
    category: 'Cloud & Databases',
    items: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Google Cloud', level: 70 }
    ]
  },
  {
    category: 'ML & Data Tools',
    items: [
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 75 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 85 },
      { name: 'Hugging Face', level: 80 }
    ]
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'Power BI', level: 75 },
      { name: 'Jira', level: 80 }
    ]
  }
];

const Skills = () => {
  const colorSchemes = [
    { bg: 'from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40', border: 'border-purple-300 dark:border-purple-600', text: 'text-purple-800 dark:text-purple-300', bar: 'bg-purple-600', title: 'text-purple-700 dark:text-purple-300' },
    { bg: 'from-pink-100 to-pink-200 dark:from-pink-900/40 dark:to-pink-800/40', border: 'border-pink-300 dark:border-pink-600', text: 'text-pink-800 dark:text-pink-300', bar: 'bg-pink-600', title: 'text-pink-700 dark:text-pink-300' },
    { bg: 'from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40', border: 'border-blue-300 dark:border-blue-600', text: 'text-blue-800 dark:text-blue-300', bar: 'bg-blue-600', title: 'text-blue-700 dark:text-blue-300' },
    { bg: 'from-indigo-100 to-indigo-200 dark:from-indigo-900/40 dark:to-indigo-800/40', border: 'border-indigo-300 dark:border-indigo-600', text: 'text-indigo-800 dark:text-indigo-300', bar: 'bg-indigo-600', title: 'text-indigo-700 dark:text-indigo-300' },
    { bg: 'from-cyan-100 to-cyan-200 dark:from-cyan-900/40 dark:to-cyan-800/40', border: 'border-cyan-300 dark:border-cyan-600', text: 'text-cyan-800 dark:text-cyan-300', bar: 'bg-cyan-600', title: 'text-cyan-700 dark:text-cyan-300' },
    { bg: 'from-emerald-100 to-emerald-200 dark:from-emerald-900/40 dark:to-emerald-800/40', border: 'border-emerald-300 dark:border-emerald-600', text: 'text-emerald-800 dark:text-emerald-300', bar: 'bg-emerald-600', title: 'text-emerald-700 dark:text-emerald-300' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif text-slate-800 dark:text-white mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-slate-600 dark:bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => {
            const colors = colorSchemes[index % colorSchemes.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br ${colors.bg} p-6 rounded-xl shadow-lg border-2 ${colors.border} hover:shadow-2xl transition-all duration-300`}
              >
                <h3 className={`text-xl font-bold ${colors.title} mb-6 flex items-center`}>
                  <span className="mr-2">{skillCategory.category}</span>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="text-2xl"
                  >
                    💻
                  </motion.div>
                </h3>
                <div className="space-y-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className={`text-sm font-semibold ${colors.text}`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm font-bold ${colors.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/60 dark:bg-slate-800/60 rounded-full h-3 overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: skillIndex * 0.1, ease: "easeOut" }}
                          className={`${colors.bar} h-3 rounded-full shadow-lg relative overflow-hidden`}
                        >
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          ></motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills; 