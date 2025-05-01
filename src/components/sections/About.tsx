import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-aura-black px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-aura-silver">
                <img 
                  src="/images/Untitled%20design%20(46).png" 
                  alt="Karthik Barma, Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-aura-white/20" />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-light text-aura-white mb-6 text-center md:text-left">
              About & Founder
            </h2>
            
            <div className="bg-aura-darkgray p-8 rounded-lg border border-aura-gray/10 mb-8">
              <blockquote className="text-xl md:text-2xl font-light text-aura-white italic mb-4">
                "Great systems are invisible—they just work."
              </blockquote>
              <p className="text-aura-silver text-right">
                — Karthik Barma, Founder
              </p>
            </div>
            
            <p className="text-aura-silver leading-relaxed">
              Karthik Barma is a visionary technologist who spent a decade at leading global tech companies 
              before returning to India to build Aura. With a background in distributed systems and AI, he's 
              dedicated to creating technology that empowers without overwhelming—products that feel like 
              extensions of human capability rather than complex tools requiring mastery.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
