import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
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
        ease: 'easeOut',
      },
    },
  };

  const featuredProjects = [
    {
      title: 'StayZ – Hotel Booking Platform',
      description: 'Built a full-stack hotel booking application enabling users to search, book, and manage hotels. Implemented real-time booking updates using Kafka and microservices-based architecture. Designed a scalable backend with Spring Boot and responsive frontend with React 18 + Tailwind CSS.',
      technologies: ['React 18', 'Spring Boot', 'Kafka', 'SQL', 'Microservices', 'Tailwind CSS'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Sky High Properties – Real Estate Website',
      description: 'Developed a real estate listing platform for property owners and buyers. Features include property search, filter, inquiry system, and admin dashboard. Integrated Laravel backend APIs with React frontend for smooth user experience.',
      technologies: ['React', 'Laravel', 'SQL', 'RESTful APIs', 'Admin Dashboard'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'FinShield – Financial Crime Detection',
      description: 'Designed a fraud detection system to monitor and flag suspicious financial activities. Built with microservices architecture and real-time data processing using Kafka streams. Ensured data integrity and performance with optimized SQL queries and secure APIs.',
      technologies: ['Spring Boot', 'Kafka', 'SQL', 'Microservices', 'Real-time Processing'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      featured: true,
    },
  ];

  const otherProjects = [
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with JWT authentication, built with Spring Boot and PostgreSQL.',
      technologies: ['Spring Boot', 'PostgreSQL', 'JWT', 'Swagger'],
      github: '#',
    },
    {
      title: 'React Component Library',
      description: 'Reusable React components library with TypeScript, Storybook documentation, and comprehensive testing.',
      technologies: ['React', 'TypeScript', 'Storybook', 'Jest'],
      github: '#',
    },
    {
      title: 'Laravel Blog System',
      description: 'Full-featured blog system with admin panel, comment system, and SEO optimization.',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'SEO'],
      github: '#',
    },
    {
      title: 'Microservices Communication',
      description: 'Event-driven microservices architecture with Kafka for inter-service communication.',
      technologies: ['Kafka', 'Spring Boot', 'Docker', 'Event Sourcing'],
      github: '#',
    },
  ];

  return (
    <section id="projects" className="section-padding" style={{backgroundColor: 'var(--bg-secondary)'}}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">
            Featured Projects
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Explore some of my recent projects that showcase my expertise in modern web development and system architecture.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-1 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <div className="text-6xl opacity-50">🚀</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-8 text-white">
            Other Projects
          </motion.h3>
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 text-center group"
              >
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.github}
                  className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm">View Code</span>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
