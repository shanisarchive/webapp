import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Logo from '../common/Logo';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';

interface SplashProps {
  onEnter: () => void;
}

const Splash: React.FC<SplashProps> = ({ onEnter }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showText, setShowText] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1.5, ease: "easeInOut" }
      });
      setShowText(true);
    };
    sequence();
  }, [controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const lineVariants = {
    hidden: { width: "0%", opacity: 0 },
    visible: {
      width: "30%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-aura-black flex flex-col items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ 
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/subtle-dark-vertical.png")',
        backgroundBlendMode: 'soft-light'
      }}
      onMouseMove={(e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        const elem = document.getElementById('splash-content');
        if (elem) {
          elem.style.transform = `translate(${xAxis}px, ${yAxis}px) perspective(1000px)`;
        }
      }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        style={{
          background: 'radial-gradient(circle at center, rgba(192,192,192,0.1) 0%, rgba(0,0,0,0) 70%)'
        }}
      />

      <div 
        id="splash-content"
        className="flex flex-col items-center justify-center transition-transform duration-300 ease-out relative"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          className="mb-16 relative"
        >
          <motion.div
            className="absolute inset-0 bg-aura-silver/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Logo size="xl" animate={true} />
        </motion.div>

        <AnimatePresence>
          {showText && (
            <>
              <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-5xl font-light text-aura-white text-center mb-6 relative"
              >
                Enter the world of Aura
                <motion.div
                  className="absolute -inset-x-8 -inset-y-4 bg-aura-silver/5 rounded-lg -z-10 blur-lg"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.h1>

              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="text-aura-silver text-xl md:text-2xl text-center mb-16"
              >
                A journey into India's AI-first ecosystem
              </motion.p>

              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-aura-white to-transparent mb-16"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              />

              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-aura-silver/10 rounded-full blur-lg"
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                    opacity: isHovered ? 0.8 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={onEnter}
                  icon={<ArrowRight size={18} />}
                  className="min-w-40 relative z-10"
                >
                  Enter
                </Button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.2 }}
        transition={{ duration: 2, delay: 1 }}
        style={{
          background: 'linear-gradient(to right, transparent, rgba(192,192,192,0.5), transparent)'
        }}
      />
    </motion.div>
  );
};

export default Splash;