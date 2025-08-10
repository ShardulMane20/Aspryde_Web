import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FiArrowRight, FiGrid, FiZap, FiCode, FiAward, FiStar, FiUsers, FiTrendingUp, FiExternalLink } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import projectData from '../data/projectData';
import clientsData from '../data/clientsData'; // Import the new clients data

// Client Card Component with proper logo handling
const ClientCard = ({ client, index }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="client-card"
    >
      <div className="client-header">
        <div className="client-logo-container">
          {!imageError ? (
            <img
              src={client.logo}
              alt={client.logoAlt}
              className={`client-logo-img ${imageLoaded ? 'loaded' : ''}`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading="lazy"
            />
          ) : (
            <div className="client-logo-fallback">
              {client.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="client-info">
          <h4 className="client-name">{client.name}</h4>
          <p className="client-industry">{client.industry}</p>
          <div className="client-meta">
            <span className="collaboration-duration">{client.collaboration_duration}</span>
            
          </div>
        </div>
        <div className="client-rating">
          {[...Array(client.rating)].map((_, i) => (
            <FiStar key={i} className="star filled" />
          ))}
        </div>
      </div>
      <div className="client-content">
        <p className="client-testimonial">"{client.testimonial}"</p>
        <div className="client-project">
          <span className="project-label">Project:</span>
          <span className="project-name">{client.project}</span>
        </div>
        
      </div>
    </motion.div>
  );
};

// Client Logo Component for marquee
const ClientLogo = ({ client, index }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="marquee-item">
      <div className="marquee-logo-container">
        {!imageError ? (
          <img
            src={client.logo}
            alt={client.logoAlt}
            className={`marquee-logo-img ${imageLoaded ? 'loaded' : ''}`}
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
          />
        ) : (
          <div className="marquee-logo-fallback">
            {client.name.charAt(0)}
          </div>
        )}
      </div>
      <span className="marquee-name">{client.name}</span>
    </div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const clientsRef = useRef(null);
  const inView = useInView(headingRef, { once: true, amount: 0.3 });
  const clientsInView = useInView(clientsRef, { once: true, amount: 0.2 });

  const navigate = useNavigate();

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
            transition={{ 
              rotate: { repeat: Infinity, duration: 2, ease: "linear" }, 
              scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } 
            }}
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
      {/* Background Effects */}
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
        {/* Portfolio Heading */}
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
          <div className="header-decoration"></div>
        </div>

        {/* Portfolio Content */}
        <div className="portfolio-content">
          {/* Projects Grid */}
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

          {/* CTA Section */}
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
                onClick={() => navigate('/contact')}
              >
                <span>Get Started</span>
                <FiArrowRight className="cta-icon" />
              </motion.button>
            </div>
          </motion.div>

          {/* Clients Section */}
          <motion.div 
            className="clients-section"
            ref={clientsRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Clients Header */}
            <div className="clients-header">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="clients-subtitle"
              >
                <FiUsers className="clients-icon" />
                <span>Trusted by Industry Leaders</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.9, 
                  delay: 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="clients-title"
              >
                Our <span className="highlight">Clients</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="clients-description"
              >
                We're proud to work with forward-thinking companies across various industries,
                delivering exceptional results that drive their business growth and digital transformation.
              </motion.p>
              
              {/* Client Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="clients-stats"
              >
                <div className="client-stat">
                  <FiUsers className="stat-icon" />
                  <div>
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Happy Clients</span>
                  </div>
                </div>
                <div className="client-stat">
                  <FiTrendingUp className="stat-icon" />
                  <div>
                    <span className="stat-number">98%</span>
                    <span className="stat-label">Satisfaction Rate</span>
                  </div>
                </div>
                <div className="client-stat">
                  <FiStar className="stat-icon" />
                  <div>
                    <span className="stat-number">4.9</span>
                    <span className="stat-label">Average Rating</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Client Cards Grid */}
            <div className="clients-grid">
              {clientsData.map((client, index) => (
                <ClientCard key={client.id} client={client} index={index} />
              ))}
            </div>

            {/* Client Logos Marquee */}
            <div className="clients-marquee">
              <div className="marquee-content">
                {[...clientsData, ...clientsData].map((client, index) => (
                  <ClientLogo key={index} client={client} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </motion.div>
    </div>
  );
};

export default Portfolio;