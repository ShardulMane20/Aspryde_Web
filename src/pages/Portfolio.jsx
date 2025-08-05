import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import projectData from '../data/projectData';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import backgroundVideo from '../assets/bg.mp4'; // Adjust path as needed

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="loading-spinner"
        />
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="portfolio-content"
      >
        <div className="portfolio-header">
          <motion.h1 
            className="portfolio-heading"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="highlight">Work</span>
          </motion.h1>
          
          <motion.p 
            className="portfolio-subheading"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We turn ideas into powerful digital solutions that drive results.
          </motion.p>
        </div>

        <motion.div 
          className="project-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div 
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <FiArrowRight className="arrow-icon" />
          <span>Scroll to discover more</span>
        </motion.div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </motion.div>
    </div>
  );
};

export default Portfolio;