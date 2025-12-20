import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Northeastern University",
    period: "Jan 2024 - Aug 2026",
    description: "GPA: 3.78/4.0 | Focus: AI/ML, full-stack development, NLP"
  },
  {
    degree: "Bachelor of Science in Computer Science and Business Administration",
    school: "Northeastern University",
    period: "Sep 2022 - Dec 2025",
    description: "GPA: 3.75/4.0 | Minor: Psychology | Honors Program | Concentration in Entrepreneural Startups"
  }
];

const experiences = [
  {
    title: "Center of Inclusive Computing @ Northeastern",
    role: "Research Assistant - Backend Developer",
    period: "Sep 2025 – Dec 2025",
    description: "Designed and implemented large-scale web scraper using Python to collect and clean AI curriculum data across 500+ US universities. Built ETL pipelines to automate extraction, parsing, and organization of unstructured course information from PDFs."
  },
  {
    title: "Khoury College of Computer Sciences",
    role: "Teaching Assistant",
    period: "Sep 2025 – Present; Sep – Dec 2023",
    description: "Guide 200+ students through complex algorithms and data structures including dynamic programming, graph algorithms, and complexity analysis. Grade and provide detailed code reviews for 150+ assignments weekly, focusing on correctness, optimization, and best practices."
  },
  {
    title: "Algoverse",
    role: "AI/ML Researcher",
    period: "Mar 2025 – Aug 2025",
    description: "Conducted research on ad-integrated LLM systems, developing a two-stage pipeline for ad suitability detection and context-aware placement. Evaluated ad-injected responses using embedding-based metrics and LLM-as-a-judge methods."
  },
  {
    title: "Microsoft",
    role: "AI Studio Fellow",
    period: "Aug 2024 – Jan 2025",
    description: "Led team of 5 in comparative analysis of advanced NLP models (Mini-Instruct, Mistral, Tiny Llama), evaluating response accuracy and performance. Designed efficient workflows for prompt engineering and fine-tuning. Developed Python scripts for dynamic input-output processing and performance benchmarking. Selected from 3000+ applicants for Break Through Tech AI Program."
  },
  {
    title: "Wave Life Sciences",
    role: "Research Informatics Systems Co-op",
    period: "Jan 2025 – Jun 2025",
    description: "Collaborated with 50+ researchers to identify pain points and prioritize features. Developed and maintained bioinformatics platform, resolving 60% of bug backlog and delivering 5+ new features based on user feedback. Made product decisions balancing technical constraints with researcher needs. Built automated data pipelines and Power BI dashboards processing 10,000+ data points, reducing integration time by 30% and improving researcher productivity."
  },
  {
    title: "Northeastern University",
    role: "Research Assistant",
    period: "Feb 2023 – Oct 2024",
    description: "Conducted analysis of 30+ scholarly articles on economic impacts of minimum wage increases. Led semantic analysis for narrative AI research project. Analyzed 100+ websites on darknet markets and cryptocurrency trends. Drove qualitative analysis of price fluctuation patterns in California restaurants (2017-2023), providing critical data insights."
  },
  {
    title: "The LEAH Project",
    role: "Mentor - College Persistence Program",
    period: "Oct 2023 – May 2025",
    description: "Provided personalized mentorship to first-year college students, supporting academic goals and navigating college life. Attended training on effective mentorship strategies and student support techniques. Demonstrated leadership and cross-functional collaboration skills."
  },
  {
    title: "United Nations",
    role: "Millennium Fellowship - Campus Director",
    period: "Aug 2023 – Dec 2023",
    description: "Selected as Millennium Fellow and served as Campus Director for Northeastern University. Hosted weekly training sessions on leadership and project management topics. Provided support and resources for 25+ fellows on campus. Developed individual project using illustrations to highlight environmental perspectives."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-slate-600 dark:bg-purple-500 mx-auto"></div>
        </motion.div>

        {/* The Hook - Your Why */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-xl text-slate-700 dark:text-slate-300 font-serif italic mb-6 leading-relaxed">
            "For me, engineering isn't just about writing code. It's about responsibility, empathy, 
            and using the ability to build as a way to help people — thoughtfully and at scale."
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            I'm a Master's student in Computer Science at Northeastern University, where I've learned 
            that building responsibly matters just as much as building well. Every design choice carries 
            tradeoffs, and technology is never neutral — it reflects the values of the people who create it.
            My background in Business Administration and Psychology helps me think like both an engineer 
            and a product manager: understanding not just how to build, but what to build and why it matters.
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
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Where I Am Now</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
              Today, I'm motivated by the same curiosity that pulled me into that first AP CS class, 
              but with a clearer purpose. Through my work at Wave Life Sciences, MIT & Microsoft, and 
              Northeastern, I've built systems that help researchers, students, and users — each project 
              teaching me more about what it means to build thoughtfully.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
              My interdisciplinary background in Computer Science, Business Administration, and Psychology 
              allows me to approach problems from multiple perspectives — understanding not just the technical 
              solution, but the human impact behind it.
            </p>
          </motion.div>

          {/* Values in Practice */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-2xl font-serif text-slate-800 dark:text-white mb-6">Values in Practice</h3>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10, scale: 1.05 }}
                className="flex items-start space-x-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-4 rounded-lg border-l-4 border-purple-500 dark:border-purple-400"
              >
                <motion.div 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">✨</span>
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold text-purple-800 dark:text-purple-300">Human-Centered Design</h4>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">Putting people at the heart of every solution, ensuring technology serves human needs.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10, scale: 1.05 }}
                className="flex items-start space-x-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-400"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-500 dark:to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300">Interdisciplinary Innovation</h4>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">Combining diverse perspectives to create unique solutions to complex challenges.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10, scale: 1.05 }}
                className="flex items-start space-x-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30 p-4 rounded-lg border-l-4 border-pink-500 dark:border-pink-400"
              >
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 dark:from-pink-500 dark:to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">📈</span>
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold text-pink-800 dark:text-pink-300">Continuous Growth</h4>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">Embracing new challenges and learning opportunities to expand my impact.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10, scale: 1.05 }}
                className="flex items-start space-x-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-4 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400"
              >
                <motion.div 
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-indigo-500 dark:to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">🎯</span>
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold text-indigo-800 dark:text-indigo-300">Product Thinking</h4>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">Balancing user needs, business goals, and technical constraints to build impactful products. Thinking strategically about what to build and why.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline/Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-serif text-slate-800 dark:text-white mb-12 text-center">Experience Roadmap</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 dark:from-purple-600 dark:via-pink-600 dark:to-blue-600 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className={`w-6 h-6 rounded-full border-4 border-white dark:border-slate-800 shadow-lg ${
                        index === 0 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                        index === 1 ? 'bg-gradient-to-br from-pink-500 to-pink-600' :
                        index === 2 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                        'bg-gradient-to-br from-indigo-500 to-indigo-600'
                      }`}
                    ></motion.div>
                  </div>
                  
                  {/* Content card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`bg-gradient-to-br ${
                        index === 0 ? 'from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/40' :
                        index === 1 ? 'from-pink-50 to-pink-100 dark:from-pink-900/40 dark:to-pink-800/40' :
                        index === 2 ? 'from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40' :
                        'from-indigo-50 to-indigo-100 dark:from-indigo-900/40 dark:to-indigo-800/40'
                      } p-6 rounded-xl shadow-lg border-2 ${
                        index === 0 ? 'border-purple-300 dark:border-purple-600' :
                        index === 1 ? 'border-pink-300 dark:border-pink-600' :
                        index === 2 ? 'border-blue-300 dark:border-blue-600' :
                        'border-indigo-300 dark:border-indigo-600'
                      } hover:shadow-2xl transition-all duration-300`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className={`text-lg font-bold ${
                            index === 0 ? 'text-purple-800 dark:text-purple-300' :
                            index === 1 ? 'text-pink-800 dark:text-pink-300' :
                            index === 2 ? 'text-blue-800 dark:text-blue-300' :
                            'text-indigo-800 dark:text-indigo-300'
                          }`}>{exp.title}</h4>
                          <p className={`font-semibold ${
                            index === 0 ? 'text-purple-600 dark:text-purple-400' :
                            index === 1 ? 'text-pink-600 dark:text-pink-400' :
                            index === 2 ? 'text-blue-600 dark:text-blue-400' :
                            'text-indigo-600 dark:text-indigo-400'
                          }`}>{exp.role}</p>
                        </div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          index === 0 ? 'bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200' :
                          index === 1 ? 'bg-pink-200 dark:bg-pink-800 text-pink-800 dark:text-pink-200' :
                          index === 2 ? 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200' :
                          'bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200'
                        }`}>{exp.period}</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{exp.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
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
          <h3 className="text-2xl font-serif text-slate-800 dark:text-white mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => {
              const colors = index === 0 
                ? { bg: 'from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40', border: 'border-purple-300 dark:border-purple-600', text: 'text-purple-800 dark:text-purple-300', badge: 'bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200' }
                : { bg: 'from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40', border: 'border-blue-300 dark:border-blue-600', text: 'text-blue-800 dark:text-blue-300', badge: 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200' };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                  className={`bg-gradient-to-br ${colors.bg} p-6 rounded-xl shadow-lg border-2 ${colors.border} hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className={`text-lg font-bold ${colors.text} flex items-center`}>
                        <span className="mr-2 text-2xl">🎓</span>
                        {edu.degree}
                      </h4>
                      <p className={`${colors.text} font-semibold mt-1`}>{edu.school}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${colors.badge} shadow-sm`}>{edu.period}</span>
                  </div>
                  <p className={`${colors.text} text-sm leading-relaxed font-medium`}>{edu.description}</p>
                </motion.div>
              );
            })}
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
          <h3 className="text-2xl font-serif text-slate-800 dark:text-white mb-6">Looking Forward</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto font-serif leading-relaxed">
            As I continue my journey, I want to build tools that are not only technically sound, but also 
            intentional — tools that respect users, reduce friction, and contribute something positive to 
            the world. Every line of code I write is a choice to make someone's day a little better, 
            a little easier, or a little more meaningful.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 