import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  animate?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  color = '#c0c0c0',
  animate = false 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
  };

  const logoVariants = {
    initial: { 
      scale: 0.95, 
      opacity: 0,
      rotateY: -180
    },
    animate: { 
      scale: 1, 
      opacity: 1,
      rotateY: 0,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: { 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" 
      }
    }
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} relative`}
      initial={animate ? "initial" : false}
      animate={animate ? ["animate", "pulse"] : false}
      variants={logoVariants}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}20, transparent 70%)`
        }}
      />
      
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        <defs>
          <linearGradient id="metallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0e0e0" />
            <stop offset="50%" stopColor="#c0c0c0" />
            <stop offset="100%" stopColor="#a0a0a0" />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3"/>
          </filter>
          <filter id="inner-shadow">
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite operator="out" in="SourceGraphic" />
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>
          </filter>
        </defs>

        {/* Main directional arrow shape */}
        <motion.path
          d="M50,10 L90,50 L50,90 L10,50 Z"
          fill="url(#metallic)"
          filter="url(#shadow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
        />

        {/* Inner directional shapes for 3D effect */}
        <motion.path
          d="M50,20 L80,50 L50,80 L20,50 Z"
          fill="#a0a0a0"
          opacity="0.3"
          filter="url(#inner-shadow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.2
          }}
        />

        {/* Highlight lines */}
        <motion.line
          x1="50" y1="10"
          x2="90" y2="50"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.6
          }}
        />

        <motion.line
          x1="50" y1="10"
          x2="10" y2="50"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.6
          }}
        />
      </svg>

      {/* Reflection overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          mixBlendMode: 'overlay',
          borderRadius: '50%'
        }}
      />
    </motion.div>
  );
};

export default Logo;