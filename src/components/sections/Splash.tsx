import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Logo from '../common/Logo';

interface SplashProps {
  onEnter: () => void;
}

const Splash: React.FC<SplashProps> = ({ onEnter }) => {
  const controls = useAnimation();
  const [showEnter, setShowEnter] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ scale: [0.6, 1.2, 1], opacity: [0, 1], transition: { duration: 1.8, ease: 'easeInOut' } });
      setTimeout(() => setShowEnter(true), 2000);
    };
    sequence();
  }, [controls]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Particle Nexus Simulation */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/40 rounded-full"
            initial={{
              opacity: 0,
              x: (Math.random() - 0.5) * 800,
              y: (Math.random() - 0.5) * 800,
              scale: 0.5 + Math.random()
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.1 + Math.random() * 1.5,
                duration: 1.5,
                ease: 'easeOut'
              }
            }}
          />
        ))}
      </div>

      {/* Logo at center */}
      <motion.div animate={controls} className="relative z-10">
        <Logo size="xl" animate={true} />
      </motion.div>

      {/* Enter Button */}
      {showEnter && (
        <motion.button
          onClick={onEnter}
          className="absolute bottom-16 px-6 py-3 border border-white/30 text-white bg-white/5 hover:bg-white/10 backdrop-blur rounded-full text-lg transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Enter
        </motion.button>
      )}
    </motion.div>
  );
};

export default Splash;
