import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Vision: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={containerRef} className="relative min-h-screen py-32 bg-black overflow-hidden">
      {/* Reduced number of matrix lines for better performance */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-px h-32 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
          style={{
            left: `${(i / 10) * 100}%`,
            top: -128,
          }}
          animate={{
            y: ["0vh", "100vh"],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear",
          }}
        />
      ))}

      {/* Reduced number of orbs and simplified animations */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `radial-gradient(circle at center, rgba(59,130,246,0.3) 0%, transparent 70%)`,
            boxShadow: '0 0 10px rgba(59,130,246,0.2)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Simplified grid animation */}
      <motion.div 
        className="absolute inset-0"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"
          animate={{
            rotateX: [0, 5],
            rotateY: [0, 5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "linear",
          }}
          style={{
            transformOrigin: "center",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          style={{ y, opacity }}
          className="max-w-7xl mx-auto"
        >
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-light mb-6"
              style={{
                background: "linear-gradient(to right, #60A5FA, #818CF8, #E879F9)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Built from First Principles
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {[
              {
                title: "Why an Entire Stack?",
                content: "We believe that true innovation requires control of the full technology stack. By building everything from processor architecture to user applications, we eliminate the compromises and frictions that arise from integrating disparate systems.",
                gradient: "from-cyan-400 via-blue-500 to-indigo-600"
              },
              {
                title: "Privacy & Sovereignty by Design",
                content: "In today's connected world, privacy isn't a feature—it's foundational. Every element of our ecosystem, from hardware to software, is designed with data sovereignty as a core principle.",
                gradient: "from-violet-400 via-purple-500 to-fuchsia-600"
              },
              {
                title: "India to World",
                content: "Aura represents a vision for technology that's born in India but designed for global impact. We're building on India's rich heritage of mathematical and philosophical thought while embracing cutting-edge innovation.",
                gradient: "from-rose-400 via-pink-500 to-red-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group"
              >
                <div className="relative bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl p-12 overflow-hidden group-hover:border-white/20 transition-all duration-300">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-5`}
                    animate={{
                      opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />

                  <div className="relative z-10">
                    <h3 className={`text-2xl font-light mb-4 bg-clip-text text-transparent bg-gradient-to-r ${item.gradient}`}>
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-base leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;