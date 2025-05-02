import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SplashProps {
  onEnter: () => void;
}

const Splash: React.FC<SplashProps> = ({ onEnter }) => {
  const [phase, setPhase] = useState<'particles' | 'welcome' | 'done'>('particles');

  useEffect(() => {
    const sequence = async () => {
      await new Promise(res => setTimeout(res, 2000));
      setPhase('welcome');
      await new Promise(res => setTimeout(res, 3000));
      setPhase('done');
      onEnter();
    };
    sequence();
  }, [onEnter]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Full-screen Particle Field */}
      <div className="absolute inset-0 -z-10">
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white/10 rounded-full"
            initial={{
              opacity: 0,
              x: `${(Math.random() - 0.5) * 300}vw`,
              y: `${(Math.random() - 0.5) * 300}vh`,
              scale: 0.4 + Math.random() * 0.8
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 0.5,
              scale: 1,
              transition: {
                delay: Math.random() * 1.5,
                duration: 2.5,
                ease: 'easeOut'
              }
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(0.3px)'
            }}
          />
        ))}
      </div>

      {/* Welcome Text */}
      {phase === 'welcome' && (
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#B0B0B0] via-[#FFFFFF] to-[#B0B0B0] animate-pulse"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          Welcome to the world of Aura
        </motion.h1>
      )}
    </motion.div>
  );
};

export default Splash;
