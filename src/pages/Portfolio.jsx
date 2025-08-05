import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FiArrowRight, FiGrid, FiZap, FiCode, FiAward } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // ✅ ADDED
import './Portfolio.css';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import projectData from '../data/projectData';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, amount: 0.3 });

  const navigate = useNavigate(); // ✅ ADDED

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.dispatchEvent(new Event('resize'));
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 1000);
    if (inView) {
      setIsInView(true);
    }
    return () => clearTimeout(timer);
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-container">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ rotate: { repeat: Infinity, duration: 2, ease: "linear" }, scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } }}
            className="loading-spinner"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="loading-text"
          >
            Crafting Digital Excellence
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-wrapper" ref={containerRef}>
      <div className="background-container">
        <motion.div 
          className="gradient-orb orb-1"
          style={{ y: backgroundY }}
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="gradient-orb orb-2"
          animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="gradient-orb orb-3"
          animate={{ x: [0, 60, 0], y: [0, -80, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="grid-pattern" />
      <motion.div 
        className="mouse-follower"
        animate={{ x: mousePosition.x + '%', y: mousePosition.y + '%' }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="portfolio-container"
      >
        <div className="portfolio-heading" ref={headingRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-subtitle"
          >
            <FiGrid className="heading-icon" />
            <span>Our Creative Works</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="heading-title"
          >
            Project <span className="highlight">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="heading-description"
          >
            Explore our collection of innovative projects where design meets functionality.
            Each piece represents our commitment to excellence and creative problem-solving.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="heading-stats"
          >
            <div className="stat-item">
              <FiZap className="stat-icon" />
              <div>
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>
            <div className="stat-item">
              <FiCode className="stat-icon" />
              <div>
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
            <div className="stat-item">
              <FiAward className="stat-icon" />
              <div>
                <span className="stat-number">5+</span>
                <span className="stat-label">Awards</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="portfolio-content">
          <motion.div 
            className="project-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projectData.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
                className="project-card-wrapper"
              >
                <ProjectCard
                  project={project}
                  onClick={setSelectedProject}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="cta-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="cta-content">
              <h3 className="cta-title">Ready to Start Your Project?</h3>
              <p className="cta-description">
                Let's collaborate to bring your vision to life with cutting-edge technology and innovative design.
              </p>
              <motion.button 
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')} // ✅ ADDED
              >
                <span>Get Started</span>
                <FiArrowRight className="cta-icon" />
              </motion.button>
            </div>
          </motion.div>
        </div>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </motion.div>
    </div>
  );
};

export default Portfolio;
