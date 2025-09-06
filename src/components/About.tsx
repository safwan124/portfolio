import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        
      },
    },
  };

  const features = [
    {
      icon: '🚀',
      title: 'Full-Stack Development',
      description: 'Expert in React 18, Spring Boot, Laravel, and modern web technologies with a focus on scalable solutions and clean architecture.',
    },
    {
      icon: '⚡',
      title: 'Microservices & Real-time Systems',
      description: 'Specialized in designing microservices-based solutions using Kafka for real-time data streaming and event-driven architecture.',
    },
    {
      icon: '💡',
      title: 'Production-Ready Solutions',
      description: 'Passionate about delivering efficient, user-centric applications with optimized database workflows and RESTful API integrations.',
    },
  ];

  return (
    <section id="about" className="section-padding" style={{backgroundColor: 'var(--bg-secondary)'}}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">
            About Me
          </motion.h2>
        </motion.div>

        {/* Profile Image and About Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col lg:flex-row items-center gap-12 mb-16"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <motion.img
              src="/profile.jpeg"
              alt="Syed Safwan - Software Engineer"
              className="w-32 h-32 lg:w-48 lg:h-48 rounded-full shadow-lg border-2 border-cyan-400/30 object-cover"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: '0 10px 30px rgba(0, 212, 255, 0.2)'
              }}
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            variants={itemVariants}
            className="flex-1 text-center lg:text-left"
          >
            <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-4">
              <p>
                I am <span className="text-cyan-400 font-semibold">Syed Safwan</span>, a results-driven Software Engineer specializing in React, Spring Boot, Laravel, SQL, Microservices, and Kafka. I build scalable, high-performance full-stack applications with a strong focus on clean architecture, API integrations, and real-time data streaming.
              </p>
              <p>
                With hands-on experience in modern web development and backend engineering, I excel at designing microservices-based solutions, implementing RESTful APIs, and optimizing database workflows. My passion lies in delivering production-ready solutions that are both efficient and user-centric.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-8 text-center group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Badge */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center glow-effect">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">Years Experience</div>
              <div className="text-gray-400">Building scalable applications</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
