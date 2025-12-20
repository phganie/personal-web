import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CatGame = () => {
  const [showPrompt, setShowPrompt] = useState(true);
  const [gameActive, setGameActive] = useState(false);
  const [cats, setCats] = useState([]);
  const [score, setScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [gameTime, setGameTime] = useState(30);
  const [timeUp, setTimeUp] = useState(false);
  const [showPeekingCat, setShowPeekingCat] = useState(false);
  const WIN_SCORE = 10;
  const GAME_DURATION = 30; // 30 seconds

  const catEmojis = ['🐱', '😸', '😺', '😻', '🙀', '😿', '😾'];
  const dangerEmojis = ['💣', '🧟']; // Bomb and zombie emojis

  // Game countdown timer (30 seconds)
  useEffect(() => {
    let interval;
    if (gameActive && !gameWon && !timeUp) {
      interval = setInterval(() => {
        setGameTime(prev => {
          if (prev <= 1) {
            setTimeUp(true);
            setGameActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameActive, gameWon, timeUp]);

  // Spawn falling cats and dangers
  useEffect(() => {
    if (!gameActive || gameWon || gameLost) return;

    const spawnCat = () => {
      const isDanger = Math.random() < 0.12; // 12% chance of spawning a danger
      const newCat = {
        id: Date.now() + Math.random(),
        emoji: isDanger 
          ? dangerEmojis[Math.floor(Math.random() * dangerEmojis.length)]
          : catEmojis[Math.floor(Math.random() * catEmojis.length)],
        x: Math.random() * 80 + 10, // Random x position (10-90%)
        y: -50, // Start above screen
        speed: 1 + Math.random() * 2, // Random fall speed
        size: isDanger ? 40 + Math.random() * 15 : 30 + Math.random() * 20, // Dangers are slightly larger
        isDanger: isDanger,
      };
      setCats(prev => [...prev, newCat]);
    };

    const interval = setInterval(spawnCat, 800); // Spawn every 800ms
    return () => clearInterval(interval);
  }, [gameActive, gameWon, gameLost]);

  // Update cat positions using requestAnimationFrame for smoother animation
  useEffect(() => {
    if (!gameActive || gameWon || gameLost || timeUp) return;

    let animationFrameId;
    let lastTime = performance.now();

    const updateCats = (currentTime) => {
      const deltaTime = Math.min(currentTime - lastTime, 100); // Cap deltaTime to prevent large jumps
      lastTime = currentTime;
      
      // Update positions based on deltaTime for consistent speed
      setCats(prev => {
        const updated = prev
          .map(cat => ({
            ...cat,
            y: cat.y + (cat.speed * deltaTime * 0.1), // Scale speed by deltaTime
          }))
          .filter(cat => cat.y < 400); // Remove cats that fell off screen (h-96 = 384px)
        
        // Only update state if there are changes to prevent unnecessary re-renders
        return updated;
      });

      animationFrameId = requestAnimationFrame(updateCats);
    };

    animationFrameId = requestAnimationFrame(updateCats);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [gameActive, gameWon, gameLost, timeUp]);

  // Check win condition
  useEffect(() => {
    if (score >= WIN_SCORE && !gameWon && !timeUp && !gameLost) {
      setGameWon(true);
      setGameActive(false);
    }
  }, [score, gameWon, timeUp, gameLost]);

  const handleCatClick = useCallback((cat) => {
    if (cat.isDanger) {
      // Game over - they clicked a bomb/zombie!
      setGameLost(true);
      setGameActive(false);
      setCats([]);
    } else {
      // Normal cat - add to score
      setCats(prev => prev.filter(c => c.id !== cat.id));
      setScore(prev => prev + 1);
    }
  }, []);

  const startGame = () => {
    setShowPrompt(false);
    setGameActive(true);
    setScore(0);
    setGameTime(GAME_DURATION);
    setGameWon(false);
    setGameLost(false);
    setTimeUp(false);
    setCats([]);
  };

  const resetGame = () => {
    setShowPrompt(true);
    setGameActive(false);
    setGameWon(false);
    setGameLost(false);
    setTimeUp(false);
    setScore(0);
    setGameTime(GAME_DURATION);
    setCats([]);
  };

  const handleMaybeLater = () => {
    setShowPrompt(false);
    setShowPeekingCat(true);
    // Hide peeking cat after 5 seconds
    setTimeout(() => {
      setShowPeekingCat(false);
    }, 5000);
  };

  if (gameLost) {
    return (
      <motion.section 
        layout
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="py-12 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 0.5
              }}
              className="text-6xl mb-4"
            >
              💥
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-serif text-slate-800 dark:text-white mb-4"
            >
              Oops! Game Over! 💣
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 dark:text-slate-300 mb-6"
            >
              You clicked on a bomb or zombie! You caught {score} cats before that happened. Try again! 🎮
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetGame}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Try Again?
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  if (timeUp && !gameWon) {
    return (
      <motion.section 
        layout
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="py-12 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              ⏰
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-serif text-slate-800 dark:text-white mb-4"
            >
              Time's Up! 🐱
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 dark:text-slate-300 mb-6"
            >
              You caught {score} cats! Try again to catch all {WIN_SCORE}! 🎮
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetGame}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Play Again?
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  if (gameWon) {
    return (
      <motion.section 
        layout
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="py-12 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-serif text-slate-800 dark:text-white mb-4"
            >
              Yayy, let's be friends! 🐱
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 dark:text-slate-300 mb-6"
            >
              You caught {score} cats! Thanks for playing! 🎮
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetGame}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Play Again?
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  if (gameActive) {
    return (
      <motion.section 
        layout
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="py-12 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Game UI */}
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-serif text-slate-800 dark:text-white mb-1">
                  Catch the Cats! 🐱
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Click on the falling cats to catch them! <span className="text-red-600 dark:text-red-400 font-semibold">Avoid bombs 💣 and zombies 🧟!</span>
                </p>
              </div>
              <button
                onClick={resetGame}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                aria-label="Close game"
              >
                ✕
              </button>
            </div>
            <div className="flex gap-6 items-center flex-wrap">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {score} / {WIN_SCORE}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Cats Caught</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${gameTime <= 5 ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'}`}>
                  {gameTime}s
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Time Left</div>
              </div>
              <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden min-w-[100px]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(score / WIN_SCORE) * 100}%` }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-full rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Game Area */}
          <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-xl h-96 overflow-hidden border-2 border-purple-200 dark:border-purple-800">
            <AnimatePresence>
              {cats.map((cat) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: cat.isDanger ? [1, 1.1, 1] : 1,
                    rotate: cat.isDanger ? [0, 5, -5, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={cat.isDanger ? {
                    scale: { duration: 0.5, repeat: Infinity },
                    rotate: { duration: 0.5, repeat: Infinity }
                  } : {
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 }
                  }}
                  whileHover={{ scale: cat.isDanger ? 1.3 : 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => handleCatClick(cat)}
                  className={`absolute cursor-pointer select-none z-10 will-change-transform ${
                    cat.isDanger ? 'filter drop-shadow-lg' : ''
                  }`}
                  style={{
                    fontSize: `${cat.size}px`,
                    left: `${cat.x}%`,
                    top: `${cat.y}px`,
                    transform: 'translateX(-50%)',
                    transition: 'none', // Disable CSS transitions for position
                  }}
                >
                  {cat.emoji}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Instructions overlay when no cats */}
            {cats.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <p className="text-slate-500 dark:text-slate-400 text-lg">
                  Cats are falling... Get ready! 🐱
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>
    );
  }

  if (showPrompt) {
    return (
      <motion.section 
        layout
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl mb-3"
            >
              🐱
            </motion.div>
            <h3 className="text-xl font-serif text-slate-800 dark:text-white mb-3">
              Wanna play a quick game?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Catch 10 falling cats in 30 seconds to win! 🎮
            </p>
            <div className="flex gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startGame}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Yes, let's play! 🎮
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleMaybeLater}
                className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-2 rounded-full text-sm font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-all"
              >
                Maybe later
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  // Peeking cat when "Maybe later" is clicked
  if (showPeekingCat) {
    return (
      <motion.section 
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 relative overflow-hidden"
      >
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border-2 border-purple-300 dark:border-purple-600 cursor-pointer hover:border-purple-500 dark:hover:border-purple-400 transition-all"
          >
            <div className="text-4xl mb-2">🐱</div>
            <p className="text-sm font-semibold text-slate-800 dark:text-white whitespace-nowrap">
              Click me to play! 👀
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    );
  }

  return null;
};

export default CatGame;
