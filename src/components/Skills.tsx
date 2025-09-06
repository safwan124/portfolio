import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ['React 18', 'JavaScript (ES6+)', 'Tailwind CSS', 'Axios', 'Responsive Web Design', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      skills: ['Spring Boot (Java 11+)', 'Laravel (PHP)', 'RESTful APIs', 'Microservices', 'Java', 'PHP'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Data & Messaging',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      skills: ['SQL (MySQL, PostgreSQL)', 'Kafka', 'Zookeeper', 'Database Design', 'Data Modeling'],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="skills" className="section-padding" style={{backgroundColor: 'var(--bg-primary)'}}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">
            Technical Skills
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical expertise organized by category. Each skill represents years of hands-on experience and continuous learning.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-8 group hover:scale-105 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                    <span className="text-gray-300 text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Skill Count Badge */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Skills</span>
                  <span className={`px-3 py-1 bg-gradient-to-r ${category.color} text-white text-sm font-semibold rounded-full`}>
                    {category.skills.length}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="card p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {skillCategories.reduce((total, category) => total + category.skills.length, 0)}+
            </div>
            <div className="text-gray-300">Total Skills</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="card p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {skillCategories.length}
            </div>
            <div className="text-gray-300">Categories</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="card p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
            <div className="text-gray-300">Years Experience</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
