import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(29, 78, 216, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(29, 78, 216, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(29, 78, 216, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(29, 78, 216, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Animated lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          style={{ top: `${(i + 1) * 25}%` }}
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-2 h-2 bg-blue-500/20 rounded-full blur-sm"
          animate={{
            y: ['100vh', '-100vh'],
            x: Math.sin(i) * 200,
            opacity: [0, 0.5, 0],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
          style={{
            left: `${(i / 20) * 100}%`,
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        ref={ref}
        className="relative z-10 text-center max-w-5xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-light mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Aura: The Foundation of India's AI-First Future
        </motion.h1>

        <motion.div
          className="h-px w-32 mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
          }}
        />

        <motion.p
          className="text-2xl md:text-3xl text-blue-200/80 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          A sovereign, end-to-end ecosystem—from OS to processors—designed for simplicity, privacy, and power.
        </motion.p>
      </motion.div>

      {/* Bottom decorative element */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)',
        }}
      />
    </section>
  );
};

export default Hero;