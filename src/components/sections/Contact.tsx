import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../common/Button';
import { Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    // For this demo, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-aura-black px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-aura-white mb-6">
              Get in Touch
            </h2>
            <div className="h-px w-24 bg-aura-silver mx-auto" />
          </motion.div>
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-aura-darkgray p-10 rounded-lg border border-aura-gray/10 text-center"
            >
              <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <Check size={32} className="text-green-400" />
              </div>
              <h3 className="text-2xl font-medium text-aura-white mb-4">Thank You</h3>
              <p className="text-aura-silver mb-6">
                We've received your message and will respond with intention.
              </p>
              <Button
                variant="outline"
                size="md"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-aura-white mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-aura-darkgray border border-aura-gray/30 rounded-lg p-3 text-aura-white focus:outline-none focus:border-aura-silver"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-aura-white mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-aura-darkgray border border-aura-gray/30 rounded-lg p-3 text-aura-white focus:outline-none focus:border-aura-silver"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-aura-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-aura-darkgray border border-aura-gray/30 rounded-lg p-3 text-aura-white h-32 focus:outline-none focus:border-aura-silver"
                  required
                />
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={<Send size={18} />}
                fullWidth
              >
                Send Message
              </Button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;