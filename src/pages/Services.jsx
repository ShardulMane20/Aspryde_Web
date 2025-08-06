import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';

import { TextureLoader } from 'three';
import * as THREE from 'three';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';

import './Services.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import logo from '../assets/logo.png'; // adjust path as needed



// Cosmic Service Data
const services = [
  {
    title: 'App Development',
    icon: '🚀',
    points: [
      'Android (Java/Kotlin)',
      'Cross-platform MVPs (Flutter)',
      'UI/UX design with XML and Material Design',
    ],
    color: '#6C63FF',
    backContent: "From concept to app store, we build performant mobile applications that users love.",
    tech: ['Flutter', 'Kotlin', 'Firebase']
  },
  {
    title: 'Web Development',
    icon: '🌐',
    points: [
      'Static & Dynamic Websites using React.js, HTML, CSS, JavaScript',
      'Robust Backend Development with Node.js, Python, and PHP',
      'Full-stack Development using MERN',
    ],
    color: '#c300d1ff',
    backContent: "We craft fast, responsive websites that drive engagement and conversions.",
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'IoT Prototyping',
    icon: '🔌',
    points: [
      'Arduino-based automation',
      'Sensor integration (e.g., heartbeat, pH, temp)',
      'Real-time data collection',
    ],
    color: '#20B2AA',
    backContent: "Turn your physical product ideas into working prototypes with our IoT expertise.",
    tech: ['Arduino', 'Raspberry Pi', 'MQTT']
  },
  {
    title: 'Tech Consulting',
    icon: '🎓',
    points: [
      'College projects & workshops',
      'Ideation to deployment mentorship',
      'Hackathon & startup pitch prep',
    ],
    color: '#FFA500',
    backContent: "We empower teams with knowledge and strategic guidance for tech success.",
    tech: ['Strategy', 'Training', 'Mentorship']
  },

  {
  title: 'UI/UX Design',
  icon: '🎨',
  points: [
    'Wireframes and interactive prototypes',
    'User-centric design workflows',
    'Design systems using Figma & Adobe XD',
  ],
  color: '#06c906ff',
  backContent: "We design intuitive digital experiences that are both functional and visually stunning.",
  tech: ['Figma', 'Adobe XD', 'Material UI']
},

{
  title: 'Automation & Scripting',
  icon: '🤖',
  points: [
    'Python automation for routine tasks',
    'Data scraping & API integrations',
    'Shell scripting and process optimization',
  ],
  color: '#FF6584',
  backContent: "Boost productivity with powerful scripts and automated workflows tailored to your needs.",
  tech: ['Python', 'Bash', 'APIs']
}

];

// 3D Earth Componen

const Earth = () => {
  const colorMap = useLoader(THREE.TextureLoader, 'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
  const bumpMap = useLoader(THREE.TextureLoader, 'https://threejs.org/examples/textures/planets/earth_normal_2048.jpg');
  const specularMap = useLoader(THREE.TextureLoader, 'https://threejs.org/examples/textures/planets/earth_specular_2048.jpg');

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <Sphere args={[1.5, 32, 32]}>
        <meshPhongMaterial
  map={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg')}
  bumpMap={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg')}
  specularMap={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg')}
  // ... rest of the material props
/>
      </Sphere>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </Canvas>
  );
};


// Cosmic Card Component
const CosmicCard = ({ title, points, index, icon, color, backContent, tech }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef();

  return (
    <motion.div 
      className="cosmic-card-container"
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, type: "spring" }}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        className="cosmic-card" 
        style={{ '--card-color': color }}
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          boxShadow: isHovered ? `0 0 25px ${color}` : `0 0 10px ${color}`
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Front Side */}
        <motion.div 
          className="card-face front"
          animate={{ opacity: isFlipped ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Floating Stars (Background Particles) */}
          <div className="star-field">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="star"
                animate={{
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100,
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <motion.div 
            className="card-content"
            animate={{
              y: isHovered ? -10 : 0,
              textShadow: isHovered ? `0 0 10px ${color}` : "none"
            }}
          >
            <motion.div 
              className="card-icon"
              animate={{
                rotateY: isHovered ? 360 : 0,
                scale: isHovered ? 1.3 : 1,
                filter: isHovered ? `drop-shadow(0 0 15px ${color})` : "none"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.div>

            <h3>{title}</h3>

            <ul>
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <span className="bullet" style={{ backgroundColor: color }} />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Orbs (Floating Tags) */}
          <div className="tech-orbs">
            {tech.map((t, i) => (
              <motion.span
                key={i}
                className="tech-orb"
                
                
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div 
          className="card-face back"
          animate={{ opacity: isFlipped ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: color }}
        >
          <div className="back-content">
            <p>{backContent}</p>
            <motion.button
              className="explore-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Explore More
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Helper function to lighten colors
const lightenColor = (color, percent) => {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1)}`;
};

const ServicesPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax Effects
  const yLogo = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scaleTitle = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacityTitle = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);

  // Comet animation
  useEffect(() => {
    const comets = document.querySelectorAll('.comet');
    comets.forEach(comet => {
      const duration = 10 + Math.random() * 10;
      const delay = Math.random() * 15;
      comet.style.animation = `comet ${duration}s linear ${delay}s infinite`;
    });
  }, []);

  return (
    <div className={`cosmic-container ${darkMode ? 'dark-matter' : 'light-energy'}`} ref={containerRef}>
      {/* Cosmic Background */}
      <ParticleBackground darkMode={darkMode} />
      <div className="space-fabric" />
      
      {/* Comets */}
      <div className="comet" style={{ top: '15%', left: '-100px' }} />
      <div className="comet" style={{ top: '40%', left: '-200px' }} />
      <div className="comet" style={{ top: '70%', left: '-150px' }} />

     

    

      {/* Animated Cosmic Logo */}
      <motion.div 
        className="cosmic-logo"
        style={{ y: yLogo }}
      >
        <div className="earth-container">
          <Earth />
        </div>
        <div className="cosmic-ring" />
      </motion.div>

      {/* Main Content */}
      <div className="cosmic-content">
        <motion.div className="cosmic-title" style={{ scale: scaleTitle, opacity: opacityTitle }}>
          <h1>
            <span className="title-glow">Our  Services</span>
          </h1>
          <motion.p
            animate={{
              x: [0, 10, -10, 0],
              textShadow: [
                '0 0 5px rgba(255,255,255,0.3)',
                '0 0 15px rgba(108, 99, 255, 0.7)',
                '0 0 5px rgba(255,255,255,0.3)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Transforming <span className="text-pulse">ideas</span> into <span className="text-pulse">reality</span>
          </motion.p>
        </motion.div>

        {/* Cosmic Grid */}
        <div className="cosmic-grid">
          {services.map((service, index) => (
            <CosmicCard key={index} {...service} index={index} />
          ))}
        </div>



        {/* About Section */}
        <motion.section 
          className="cosmic-about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>How We Work</h2>
          <p>
            Our process is driven by <span className="text-highlight">clarity, collaboration</span>, and 
            <span className="text-highlight"> cutting-edge technology</span>. Whether it's building scalable 
            web platforms or intuitive mobile apps, we begin by understanding your goals, crafting tailored 
            strategies, and delivering high-performance solutions that make an impact.
         </p>

          
          <motion.div 
            className="satellite"
            animate={{
              x: ['100%', '-100%'],
              rotate: 360
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            🛰️
          </motion.div>
        </motion.section>


        {/* Quantum Divider with Logo */}
            <div className="quantum-divider">
              <div className="energy-orb" />

              <motion.img
              src={logo}
              alt="Aspryde Logo"
              className="tech-icon"
              animate={{
                x: ["-10%", "10%", "-8%", "8%", "0%"],
                y: ["-10%", "10%", "-6%", "6%", "0%"],
                rotate: [0, 10, -10, 5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


              <div className="rotating-particles">
                <div className="particle" />
                <div className="particle" />
                <div className="particle" />
              </div>
            </div>


        
      </div>
    </div>
  );
};

export default ServicesPage;