import React from 'react';
import { motion } from 'framer-motion';

const storyChapters = [
  {
    title: "The Beginning",
    subtitle: "High School - AP Computer Science",
    emoji: "💡",
    content: "My journey into technology began in high school, when I took AP Computer Science for the first time. At the start, it wasn't about careers, prestige, or even engineering — it was the simple realization that with code, I could build things from nothing. Writing a few lines of logic and watching them turn into something functional felt powerful in a way I hadn't experienced before.",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30",
    borderColor: "border-purple-300 dark:border-purple-600"
  },
  {
    title: "The Realization",
    subtitle: "Understanding Impact",
    emoji: "🌱",
    content: "What stayed with me wasn't just the technical challenge, but the idea that software could shape real experiences. Code wasn't abstract anymore — it was a tool for solving problems, expressing ideas, and making life a little easier for someone else.",
    color: "from-pink-500 to-blue-500",
    bgColor: "from-pink-50 to-blue-50 dark:from-pink-900/30 dark:to-blue-900/30",
    borderColor: "border-pink-300 dark:border-pink-600"
  },
  {
    title: "The Evolution",
    subtitle: "Purpose-Driven Building",
    emoji: "🎯",
    content: "As I continued studying computer science, that feeling deepened. I started to care less about building things because they were impressive, and more about building things that were useful, thoughtful, and human. I became drawn to systems that sit at the intersection of technology and people — platforms that help others learn, connect, make decisions, or feel supported.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30",
    borderColor: "border-blue-300 dark:border-blue-600"
  },
  {
    title: "The Responsibility",
    subtitle: "Building with Intention",
    emoji: "⚖️",
    content: "Along the way, I learned that building responsibly matters just as much as building well. Every design choice carries tradeoffs: cost, scale, accessibility, and impact. The more I worked on real systems — from data pipelines to AI-powered applications — the more I understood that technology is never neutral. It reflects the values of the people who create it.",
    color: "from-cyan-500 to-indigo-500",
    bgColor: "from-cyan-50 to-indigo-50 dark:from-cyan-900/30 dark:to-indigo-900/30",
    borderColor: "border-cyan-300 dark:border-cyan-600"
  },
  {
    title: "Today",
    subtitle: "Building with Purpose",
    emoji: "🚀",
    content: "Today, I'm motivated by the same curiosity that pulled me into that first AP CS class, but with a clearer purpose. I want to build tools that are not only technically sound, but also intentional — tools that respect users, reduce friction, and contribute something positive to the world.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30",
    borderColor: "border-indigo-300 dark:border-indigo-600"
  },
  {
    title: "The Philosophy",
    subtitle: "Engineering as Service",
    emoji: "❤️",
    content: "For me, engineering isn't just about writing code. It's about responsibility, empathy, and using the ability to build as a way to help people — thoughtfully and at scale.",
    color: "from-purple-500 via-pink-500 to-blue-500",
    bgColor: "from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30",
    borderColor: "border-purple-300 dark:border-purple-600"
  }
];

const Story = () => {
  return (
    <section id="story" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/20 to-blue-50/20 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            My Journey
          </motion.h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            From that first AP Computer Science class to building systems that matter — 
            this is how I discovered what engineering means to me.
          </p>
        </motion.div>

        {/* Story Chapters */}
        <div className="space-y-8">
          {storyChapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline connector */}
              {index < storyChapters.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-purple-300 via-pink-300 to-blue-300 dark:from-purple-600 dark:via-pink-600 dark:to-blue-600 transform -translate-x-1/2 z-0"></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Timeline dot and emoji */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${chapter.color} flex items-center justify-center text-3xl shadow-lg border-4 border-white`}
                  >
                    {chapter.emoji}
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`flex-1 bg-gradient-to-br ${chapter.bgColor} p-8 rounded-2xl border-2 ${chapter.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                        {chapter.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                        {chapter.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
                    {chapter.content}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900/40 dark:via-pink-900/40 dark:to-blue-900/40 p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg">
            <p className="text-xl md:text-2xl text-slate-800 dark:text-slate-200 font-serif italic leading-relaxed">
              "Every line of code I write is a choice — a choice to build something 
              that makes someone's day a little better, a little easier, or a little more meaningful."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
