import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="py-20 bg-aura-black px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Photo */}
        <motion.div
          ref={ref}
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-aura-silver mx-auto"
        >
          <img
            src="/images/karthik.png"
            alt="Karthik Barma, Founder"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.3 }}
          className="flex-1 text-aura-silver leading-relaxed"
        >
          <h2 className="text-3xl font-light text-aura-white mb-4 text-center md:text-left">
            About & Founder
          </h2>
          <blockquote className="italic text-lg mb-4 text-center md:text-left">
            "I’m not here to build what’s next. I’m here to build what should’ve existed all along."
          </blockquote>
          <p>
            Karthik Barma is a next-generation technologist and visionary founder behind <strong>Aura</strong>. He blends artificial intelligence, system design, and minimalist philosophy to craft powerful, intuitive products. From <em>The Kali Ramayana</em> to <strong>Zaya OS</strong>, <strong>BarX</strong>, and <strong>BODHI-1</strong>, his work reshapes how India builds for the world—where privacy is sacred and experience is seamless.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
