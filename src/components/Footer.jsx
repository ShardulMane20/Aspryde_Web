import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import companyLogo from '../assets/logo.png'; // Update with your logo path

const Footer = ({ darkMode }) => {
  return (
    <footer className={`galaxy-footer ${darkMode ? 'dark-matter' : 'light-energy'}`}>
      {/* Static Galaxy Background */}
      <div className="galaxy-static">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="galaxy-star"
            style={{
              left: `${Math.sin(i) * (i % 2 === 0 ? 150 : 250)}px`,
              top: `${Math.cos(i) * (i % 2 === 0 ? 150 : 250)}px`,
              opacity: 0.5,
              transform: `scale(${0.8 + Math.random() * 0.4})`
            }}
          />
        ))}
      </div>

      {/* Footer Content with Logo on Left */}
      <div className="footer-content">
        <div className="logo-container">
          <motion.img 
            src={companyLogo} 
            alt="Aspryde Logo" 
            className="company-logo"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>

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

      {/* Subtle Shooting Stars */}
      {[...Array(3)].map((_, i) => (
        <div 
          key={i}
          className="shooting-star"
          style={{
            top: `${Math.random() * 20}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      {/* Centered Copyright */}
      <div className="copyright-container">
        <div className="copyright">
          © {new Date().getFullYear()} Aspryde Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;