import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import companyLogo from '../assets/logo.png'; // Update with your logo path

const Footer = ({ darkMode }) => {
  return (
    <footer className={`galaxy-footer ${darkMode ? 'dark-matter' : 'light-energy'}`}>
      {/* Static Galaxy Background (no moving stars) */}
      <div className="galaxy-static">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="galaxy-star"
            style={{
              left: `${Math.sin(i) * (i % 2 === 0 ? 200 : 300)}px`,
              top: `${Math.cos(i) * (i % 2 === 0 ? 200 : 300)}px`,
              opacity: 0.5,
              transform: `scale(${0.8 + Math.random() * 0.4})`
            }}
          />
        ))}
      </div>

      {/* Company Section with Animated Logo Only */}
      <div className="footer-content">
        {/* Animated Logo */}
        <motion.div 
          className="logo-container"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.img 
            src={companyLogo} 
            alt="Aspryde Logo" 
            className="company-logo"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <p className="company-tagline">Transforming ideas into digital reality</p>
        </motion.div>

        {/* Static Footer Sections */}
        <div className="footer-sections">
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>App Development</li>
              <li>Web Solutions</li>
              <li>IoT Prototyping</li>
              <li>Tech Consulting</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect With Us</h4>
            <p>✉️ aspryde.official@gmail.com</p>
            <p>🔗 linkedin.com/company/aspryde</p>
            <p>📱 +1 (123) 456-7890</p>
          </div>

          <div className="footer-section">
            <h4>Our Expertise</h4>
            <ul>
              <li>React & Node.js</li>
              <li>Flutter & Kotlin</li>
              <li>IoT & Arduino</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Subtle Shooting Stars (background only) */}
      {[...Array(3)].map((_, i) => (
        <div 
          key={i}
          className="shooting-star"
          style={{
            top: `${Math.random() * 30}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      {/* Static Copyright */}
      <div className="copyright-container">
        <div className="copyright">
          © {new Date().getFullYear()} Aspryde Technologies. All rights reserved.
        </div>
        <div className="footer-cta">
          <button>Get In Touch</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;