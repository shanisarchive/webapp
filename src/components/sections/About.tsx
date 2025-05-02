import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[200vh] bg-aura-black overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full"
            style={{
              top: `${(i + 1) * 5}%`,
              background: `linear-gradient(90deg, 
                transparent 0%, 
                rgba(192,192,192,${0.1 + (i % 3) * 0.1}) 50%, 
                transparent 100%
              )`,
            }}
            animate={{
              scaleX: [0, 1, 0],
              x: ['-100%', '0%', '100%']
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <motion.div 
        style={{ y }}
        className="sticky top-0 h-screen w-full flex items-center justify-center"
      >
        {/* Central Image Container */}
        <div className="absolute w-full h-full flex items-center justify-center">
          <motion.div 
            style={{ scale, rotate: imageRotate }}
            className="relative w-[45vw] h-[45vw] max-w-3xl max-h-3xl"
          >
            {/* Animated Rings */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-aura-silver/20"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  rotate: { 
                    duration: 15 + i * 5, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * 0.5
                  },
                  scale: { 
                    duration: 3 + i, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }
                }}
                style={{
                  transform: `scale(${1 + i * 0.1})`,
                }}
              />
            ))}

            {/* Image with Glitch Effect */}
            <motion.div 
              className="absolute inset-[20%] rounded-full overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(192,192,192,0.2)",
                  "0 0 40px rgba(192,192,192,0.4)",
                  "0 0 20px rgba(192,192,192,0.2)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="relative w-full h-full group">
                <img 
                  src="/images/karthik.png" 
                  alt="Karthik Barma"
                  className="w-full h-full object-cover filter contrast-125"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-aura-black/90 via-transparent to-transparent mix-blend-overlay"
                  animate={{
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
            </motion.div>

            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-aura-silver/40 rounded-full"
                animate={{
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100],
                  scale: [1, Math.random() * 2 + 1, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute inset-x-0 bottom-[10%] px-6"
        >
          <div className="max-w-6xl mx-auto">
            <motion.blockquote
              className="text-4xl md:text-5xl font-light text-center mb-12 leading-relaxed"
              style={{
                background: "linear-gradient(to right, #ffffff, #c0c0c0, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              "I'm not here to build what's next. I'm here to build what should've existed all along."
              <div className="text-lg text-aura-silver mt-4">— Karthik Barma, Founder</div>
            </motion.blockquote>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">
              <motion.p
                className="text-aura-silver/80 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Karthik Barma is a next-generation technologist, visionary founder, and the creative force behind <span className="text-aura-white font-medium">Aura</span>—India's boldest leap toward a self-reliant technology ecosystem. With over 36 AI-driven innovations spanning intelligent operating systems (<span className="text-aura-white font-medium">Zaya OS</span>), futuristic programming languages (<span className="text-aura-white font-medium">BarX</span>), and AI-native processors (<span className="text-aura-white font-medium">BODHI-1</span>).
              </motion.p>
              <motion.p
                className="text-aura-silver/80 leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                From authoring <em>The Kali Ramayana</em> to speaking at Harvard HPAIR, Karthik's journey is driven by one core philosophy: build differently, think independently, and create technology that feels like poetry in motion. Under Aura, he is shaping the future of computing—where AI is native, privacy is sacred, and experience is seamless.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
