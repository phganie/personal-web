import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project and what technologies you used.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Project 2',
    description: 'A brief description of your second project and what technologies you used.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['React', 'Express', 'PostgreSQL'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Project 3',
    description: 'A brief description of your third project and what technologies you used.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['React Native', 'Firebase', 'Redux'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif text-slate-800 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-slate-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 font-light">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="text-slate-600 hover:text-slate-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    className="text-slate-600 hover:text-slate-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 