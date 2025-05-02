import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SplashProps {
  onEnter: () => void;
}

const Splash: React.FC<SplashProps> = ({ onEnter }) => {
  const controls = useAnimation();
  const [phase, setPhase] = useState<'bluu' | 'welcome' | 'done'>('bluu');

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: [0.6, 1.2, 1],
        opacity: [0, 1],
        rotate: [0, 5, -5, 0],
        transition: { duration: 2.5, ease: 'easeInOut' }
      });
      await new Promise(res => setTimeout(res, 2500));
      await controls.start({ opacity: 0, scale: 0.4, transition: { duration: 1 } });
      setPhase('welcome');

      await new Promise(res => setTimeout(res, 500));
      setTimeout(() => {
        setPhase('done');
        onEnter();
      }, 3000);
    };

    sequence();
  }, [controls, onEnter]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Immersive Particle Field */}
      <div className="absolute inset-0 -z-10">
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1.5px] h-[1.5px] bg-white/10 rounded-full"
            initial={{
              opacity: 0,
              x: (Math.random() - 0.5) * window.innerWidth,
              y: (Math.random() - 0.5) * window.innerHeight,
              scale: 0.5 + Math.random()
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 0.6,
              scale: 1,
              transition: {
                delay: Math.random() * 1.5,
                duration: 2,
                ease: 'easeOut'
              }
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Bluu Character */}
      {phase === 'bluu' && (
        <motion.img
          src="/images/bluu.png"
          alt="Bluu character"
          animate={controls}
          initial={{ opacity: 0, scale: 0.5 }}
          className="w-64 h-64 z-10 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]"
        />
      )}

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
