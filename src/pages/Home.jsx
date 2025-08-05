import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/bg.mp4";
import logo from "../assets/logo.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <video className="hero-bg" autoPlay muted loop>
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="overlay" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img src={logo} alt="Aspryde Logo" className="hero-logo" />

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Aspire Boldly,<br />Rise Proudly.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Transforming bold ideas into impactful digital experiences.
          </motion.p>

          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
