import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Zap, Lock } from 'lucide-react';
import Button from '../components/common/Button';
import Hero from '../components/sections/Hero';

const Home: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-texture opacity-10"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-leather.png")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }} 
      />
      <Hero />

      {/* Video Section */}
      <section className="py-24 bg-black/80 backdrop-blur-sm relative">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-light text-center mb-16 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Aura?
            </h2>
            
            <div className="relative aspect-video rounded-xl overflow-hidden mb-24 border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
              <iframe
                src="https://www.youtube.com/embed/oR-k5QZjTw4"
                title="Why Choose Aura?"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full z-10"
              />
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Shield,
                  title: "Sovereign",
                  description: "Everything runs on-device—no more cloud-side baggage.",
                  color: "text-cyan-400",
                  gradient: "from-cyan-500/20 to-blue-500/20"
                },
                {
                  icon: Zap,
                  title: "Seamless",
                  description: "One ecosystem, zero configuration.",
                  color: "text-purple-400",
                  gradient: "from-purple-500/20 to-pink-500/20"
                },
                {
                  icon: Lock,
                  title: "Secure",
                  description: "Zero-trust by design.",
                  color: "text-amber-400",
                  gradient: "from-amber-500/20 to-orange-500/20"
                }
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} rounded-lg blur-xl transition-all duration-300 group-hover:opacity-100 opacity-0`} />
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/5 rounded-lg p-6 h-full transition-all duration-300 group-hover:border-white/20">
                    <div className="mb-4">
                      <pillar.icon size={28} className={`${pillar.color} transition-transform duration-300 group-hover:scale-110`} />
                    </div>
                    <h3 className={`text-lg font-medium mb-2 ${pillar.color}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-16"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Join the Revolution
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;