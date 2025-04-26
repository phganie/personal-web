import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "Bachelor's and Master's in Computer Science",
    school: "Northeastern University",
    period: "2020 - Present",
    description: "Combining technical expertise with Business Administration and Psychology to build an interdisciplinary toolkit for solving complex societal challenges."
  },
  {
    degree: "Business Administration",
    school: "Northeastern University",
    period: "2020 - Present",
    description: "Developing strategic thinking and entrepreneurial skills to complement technical knowledge."
  }
];

const experiences = [
  {
    title: "Wave Life Sciences",
    role: "Data Integration Specialist",
    period: "2023 - Present",
    description: "Leading efforts to improve data integration processes, developing interactive dashboards, and implementing human-centered solutions for complex biological data challenges."
  },
  {
    title: "Microsoft",
    role: "AI Model Evaluator",
    period: "2022 - 2023",
    description: "Evaluated and improved AI models while ensuring they align with human-centered design principles and ethical considerations."
  },
  {
    title: "Millennium Fellowship",
    role: "Environmental Project Lead",
    period: "2022",
    description: "Led a team in developing innovative solutions for environmental challenges, combining technical expertise with community engagement."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif text-slate-800 mb-4">My Story</h2>
          <div className="w-24 h-1 bg-slate-600 mx-auto"></div>
        </motion.div>

        {/* The Hook - Your Why */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-xl text-slate-600 font-serif italic mb-6">
            "Leveraging human-centered design, creative technology, and interdisciplinary innovation 
            to tackle complex societal challenges and create impactful solutions that enhance human experiences."
          </p>
          <p className="text-lg text-slate-600">
            As an aspiring technology innovator and current student pursuing both a Bachelor's and Master's 
            in Computer Science alongside Business Administration, I'm driven by the intersection of 
            technology and human impact.
          </p>
        </motion.div>

        {/* The Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif text-slate-800">The Journey</h3>
            <p className="text-lg text-slate-600 font-serif">
              My journey began with early experiences in community initiatives and STEM education, 
              including participation in the Mayor's Youth Council and the LEAH Project. These experiences 
              sparked my interest in using technology as a tool for positive change.
            </p>
            <p className="text-lg text-slate-600 font-serif">
              At Northeastern, I've deliberately chosen to combine Computer Science with Business Administration 
              and Psychology, building an interdisciplinary toolkit that allows me to approach problems from 
              multiple angles – technical, strategic, and human-focused.
            </p>
          </motion.div>

          {/* Values in Practice */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-serif text-slate-800 mb-6">Values in Practice</h3>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-serif text-slate-800">Human-Centered Design</h4>
                  <p className="text-slate-600">Putting people at the heart of every solution, ensuring technology serves human needs.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-serif text-slate-800">Interdisciplinary Innovation</h4>
                  <p className="text-slate-600">Combining diverse perspectives to create unique solutions to complex challenges.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-serif text-slate-800">Continuous Growth</h4>
                  <p className="text-slate-600">Embracing new challenges and learning opportunities to expand my impact.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Key Experiences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-serif text-slate-800 mb-8 text-center">Key Experiences</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-serif text-slate-800">{exp.title}</h4>
                    <p className="text-slate-600 font-light">{exp.role}</p>
                  </div>
                  <span className="text-sm text-slate-500 font-light">{exp.period}</span>
                </div>
                <p className="text-slate-600 text-sm font-light">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-serif text-slate-800 mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-serif text-slate-800">{edu.degree}</h4>
                    <p className="text-slate-600 font-light">{edu.school}</p>
                  </div>
                  <span className="text-sm text-slate-500 font-light">{edu.period}</span>
                </div>
                <p className="text-slate-600 text-sm font-light">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-serif text-slate-800 mb-6">Looking Forward</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            As I continue my journey, I remain committed to leveraging my unique blend of technical expertise, 
            business acumen, and human-centered design principles to create meaningful impact. Whether through 
            developing innovative solutions at Wave Life Sciences, pursuing my AI/ML Fellowship, or advancing 
            my Master's studies, I'm focused on building a future where technology truly serves humanity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 