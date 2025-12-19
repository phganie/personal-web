import React from 'react';
import { motion } from 'framer-motion';

const CatEmojiBackground = () => {
  // Different cat emojis to use
  const catEmojis = ['🐱', '😸', '😺', '😻', '🙀', '😿', '😾', '🐾'];
  
  // Generate random positions and animations for each cat
  const generateCats = (count = 15) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: catEmojis[Math.floor(Math.random() * catEmojis.length)],
      initialX: Math.random() * 100, // Random starting X position (0-100%)
      initialY: Math.random() * 100, // Random starting Y position (0-100%)
      duration: 15 + Math.random() * 20, // Random duration between 15-35 seconds
      delay: Math.random() * 5, // Random delay
      size: 20 + Math.random() * 30, // Random size between 20-50px
      rotation: Math.random() * 360, // Random initial rotation
    }));
  };

  const cats = generateCats(20);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {cats.map((cat) => (
        <motion.div
          key={cat.id}
          className="absolute opacity-20 dark:opacity-10"
          style={{
            left: `${cat.initialX}%`,
            top: `${cat.initialY}%`,
            fontSize: `${cat.size}px`,
          }}
          animate={{
            y: [
              cat.initialY,
              cat.initialY + (Math.random() > 0.5 ? 1 : -1) * (20 + Math.random() * 30),
              cat.initialY - (Math.random() > 0.5 ? 1 : -1) * (20 + Math.random() * 30),
              cat.initialY,
            ],
            x: [
              cat.initialX,
              cat.initialX + (Math.random() > 0.5 ? 1 : -1) * (10 + Math.random() * 20),
              cat.initialX - (Math.random() > 0.5 ? 1 : -1) * (10 + Math.random() * 20),
              cat.initialX,
            ],
            rotate: [
              cat.rotation,
              cat.rotation + 360,
              cat.rotation + 720,
              cat.rotation + 1080,
            ],
            scale: [
              1,
              1.2,
              0.8,
              1,
            ],
          }}
          transition={{
            duration: cat.duration,
            delay: cat.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {cat.emoji}
        </motion.div>
      ))}
      
      {/* Additional floating cats with different patterns */}
      {Array.from({ length: 10 }, (_, i) => (
        <motion.div
          key={`floating-${i}`}
          className="absolute opacity-15 dark:opacity-8"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${15 + Math.random() * 25}px`,
          }}
          animate={{
            y: [
              0,
              -100,
              -200,
              -300,
            ],
            x: [
              0,
              (Math.random() - 0.5) * 50,
              (Math.random() - 0.5) * 100,
              (Math.random() - 0.5) * 150,
            ],
            rotate: [0, 180, 360],
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 15,
            delay: Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {catEmojis[Math.floor(Math.random() * catEmojis.length)]}
        </motion.div>
      ))}
    </div>
  );
};

export default CatEmojiBackground;
