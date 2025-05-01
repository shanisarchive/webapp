import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../common/Button';
import { MapPin, ExternalLink } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  location: string;
  department: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Rust Engineer',
    location: 'Bangalore, India',
    department: 'Engineering'
  },
  {
    id: 2,
    title: 'AI/ML Research Scientist',
    location: 'Hyderabad, India',
    department: 'Research'
  },
  {
    id: 3,
    title: 'Product Designer',
    location: 'Remote, India',
    department: 'Design'
  },
  {
    id: 4,
    title: 'Hardware Systems Architect',
    location: 'Bangalore, India',
    department: 'Hardware'
  },
  {
    id: 5,
    title: 'Technical Program Manager',
    location: 'Mumbai, India',
    department: 'Operations'
  }
];

const Careers: React.FC = () => {
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
        staggerChildren: 0.1,
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

  const handleApply = (jobTitle: string) => {
    const subject = encodeURIComponent(`Application for ${jobTitle}`);
    const body = encodeURIComponent(
      `Dear Aura Team,

I am writing to express my interest in the ${jobTitle} position at Aura. I have experience in:

- [List relevant experience]
- [List key skills]
- [List notable achievements]

I am particularly drawn to Aura's mission of building India's sovereign AI ecosystem and would love to contribute to this vision.

Looking forward to discussing how I can contribute to Aura's success.

Best regards,
[Your name]`
    );
    
    window.location.href = `mailto:founder@auracorp.co?subject=${subject}&body=${body}`;
  };

  return (
    <section 
      id="careers" 
      className="py-20 md:py-32 bg-aura-darkgray px-4"
      style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/subtle-dark-vertical.png")' }}
    >
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-aura-white mb-6">
              Join Aura
            </h2>
            <div className="h-px w-24 bg-aura-silver mx-auto mb-8" />
            <p className="text-aura-silver text-lg max-w-2xl mx-auto">
              Be part of an ecosystem-first company. We're hiring engineers, designers, and innovators who value craftsmanship.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-aura-black p-6 rounded-lg border border-aura-gray/10 hover:border-aura-silver/30 transition-all"
              >
                <span className="text-xs text-aura-silver uppercase tracking-wider">{job.department}</span>
                <h3 className="text-xl font-medium text-aura-white mt-1 mb-3">{job.title}</h3>
                <div className="flex items-center text-aura-silver mb-6">
                  <MapPin size={14} className="mr-2" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  icon={<ExternalLink size={14} />}
                  onClick={() => handleApply(job.title)}
                >
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleApply('General Position')}
            >
              View All Openings
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;