import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Search, MessageCircle, File, Cpu, Code } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Zaya OS',
    description: 'A Rust-built microkernel operating system for secure AI workloads.',
    icon: Shield,
    color: '#0EA5E9'
  },
  {
    id: 2,
    name: 'Sphere',
    description: 'Privacy-forward browser + search, no trackers.',
    icon: Search,
    color: '#8B5CF6'
  },
  {
    id: 3,
    name: 'Bluu',
    description: 'An AI companion that listens, thinks, and learns—offline by design.',
    icon: MessageCircle,
    color: '#3B82F6'
  },
  {
    id: 4,
    name: 'Air Suite',
    description: 'Docs, Mail, Meet—rebuilt for focus and control.',
    icon: File,
    color: '#10B981'
  },
  {
    id: 5,
    name: 'BODHI-1',
    description: "India's first AI-native processor—efficient, open, and powerful.",
    icon: Cpu,
    color: '#F43F5E'
  },
  {
    id: 6,
    name: 'Barx',
    description: 'AI-native programming language designed for the next generation of intelligent systems.',
    icon: Code,
    color: '#F59E0B'
  }
];

const Products: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="min-h-screen py-32 bg-black relative overflow-hidden">
      {/* Subtle animated background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 100%)',
          backgroundSize: '100% 100%',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-6xl md:text-7xl font-light text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            What We Build
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-white/20">
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <product.icon 
                      size={32} 
                      style={{ color: product.color }}
                      className="transition-all duration-300 group-hover:scale-110" 
                    />
                  </motion.div>

                  <h3 className="text-2xl font-light mb-4 text-white group-hover:text-[${product.color}] transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {product.description}
                  </p>

                  <motion.div
                    className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${product.color}10 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;