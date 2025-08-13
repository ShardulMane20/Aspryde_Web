import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "../assets/logo.png";
import "./Home.css";
import "./Services.css";
import Android from "../assets/Android.jpg";
import WebDev from "../assets/webdev.jpg";
import iot from "../assets/iot.jpg"


import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere } from "@react-three/drei";
import * as THREE from "three";

import ParticleBackground from "../components/ParticleBackground";
import logo2 from "../assets/logo2.png";
import clientsData from "../data/clientsData";

const Home = () => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  // Handle video loading and debugging
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      console.log("Video element:", video);
      video.addEventListener('error', (e) => {
        console.error("Video error:", e);
        setVideoError(true);
      });
      video.addEventListener('loadeddata', () => {
        console.log("Video loaded");
        setVideoError(false);
      });
    }
  }, []);

  return (
    <>
      <div className="home">
        <div className="hero">
          {!videoError ? (
            <video
              ref={videoRef}
              className="hero-bg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/bg.mp4?v=1" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div
              className="hero-bg-fallback"
              style={{
                background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3a 50%, #2d2d5a 100%)',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
              }}
            />
          )}

          <div className="overlay" style={{ opacity: 0.5 }} />

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
      <ServicesPage />
    </>
  );
};

const services = [
  {
    title: 'Mobile Application Development',
    icon: <img src={Android} style={{ width: '60px', height: '60px', borderRadius: '50px' }} alt="Android" />,
    points: [
      'Native Android development with Java & Kotlin',
      'Cross-platform solutions using Flutter framework',
      'Modern UI/UX implementation with Material Design principles',
    ],
    color: '#3b82f6',
    backContent: "End-to-end mobile application development from concept to deployment, ensuring scalable and performant solutions for your business needs.",
    tech: ['Flutter', 'Kotlin', 'Firebase']
  },
  {
    title: 'Web Development Solutions',
    icon: <img src={WebDev} style={{ width: '60px', height: '60px', borderRadius: '50px' }} alt="WebDev" />,
    points: [
      'Full-stack development using modern React.js ecosystem',
      'Scalable backend architecture with Node.js and Python',
      'Database design and API development with REST/GraphQL',
    ],
    color: '#6366f1',
    backContent: "Comprehensive web development services delivering fast, responsive, and SEO-optimized websites that drive business growth.",
    tech: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    title: 'IoT Solutions & Prototyping',
    icon: <img src={iot} style={{ width: '60px', height: '60px', borderRadius: '50px' }} alt="IOT" />,
    points: [
      'Custom IoT device development with Arduino & Raspberry Pi',
      'Sensor integration and real-time data processing',
      'Cloud connectivity and dashboard development',
    ],
    color: '#06b6d4',
    backContent: "Transform your hardware concepts into working IoT prototypes with seamless cloud integration and real-time monitoring capabilities.",
    tech: ['Arduino', 'Raspberry Pi', 'AWS IoT']
  },
  {
    title: 'Technology Consulting',
    icon: '💡',
    points: [
      'Strategic technology roadmap development',
      'Architecture review and optimization recommendations',
      'Team mentorship and technical training programs',
    ],
    color: '#f59e0b',
    backContent: "Expert guidance to help your organization make informed technology decisions and build sustainable development practices.",
    tech: ['Strategy', 'Architecture', 'Mentorship']
  },
  {
    title: 'User Experience Design',
    icon: '🎨',
    points: [
      'User research and persona development',
      'Interactive prototyping and user testing',
      'Design systems and component libraries',
    ],
    color: '#10b981',
    backContent: "Data-driven design solutions that prioritize user needs while achieving business objectives through intuitive interfaces.",
    tech: ['Figma', 'Adobe Creative Suite', 'Principle']
  },
  {
    title: 'Process Automation',
    icon: '⚙️',
    points: [
      'Custom workflow automation solutions',
      'API integrations and data synchronization',
      'Performance optimization and monitoring',
    ],
    color: '#f43f5e',
    backContent: "Streamline your business operations with intelligent automation solutions that reduce manual work and increase efficiency.",
    tech: ['Python', 'Zapier', 'REST APIs']
  }
];

const Earth = () => {
  const earthRef = useRef();

  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={2.5}
        enablePan={false}
        enableRotate={false}
      />
      <Sphere ref={earthRef} args={[1.8, 64, 64]}>
        <meshPhongMaterial
          map={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg')}
          bumpMap={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg')}
          specularMap={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg')}
          bumpScale={0.05}
          specular={new THREE.Color('#4a9eff')}
          shininess={100}
        />
      </Sphere>
      <Stars radius={50} depth={30} count={2000} factor={2} saturation={0} fade speed={0.5} />
    </Canvas>
  );
};

const CosmicCard = ({ title, points, index, icon, color, backContent, tech }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef();

  return (
    <motion.div
      className="cosmic-card-container"
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="cosmic-card"
        style={{ '--card-color': color }}
        animate={{
          rotateY: isFlipped ? 180 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <motion.div
          className="card-face front"
          animate={{ opacity: isFlipped ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="star-field">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="star"
                animate={{
                  x: Math.random() * 300 - 150,
                  y: Math.random() * 300 - 150,
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.8, 1.1, 0.8]
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <motion.div
            className="card-content"
            animate={{
              y: isHovered ? -4 : 0
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="card-icon"
              animate={{
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {icon}
            </motion.div>

            <h3>{title}</h3>

            <ul>
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, type: "spring" }}
                >
                  <span className="bullet" style={{ backgroundColor: color }} />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="tech-orbs">
            {tech.map((t, i) => (
              <motion.span
                key={i}
                className="tech-orb"
                whileHover={{ scale: 1.05 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="card-face back"
          animate={{ opacity: isFlipped ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ backgroundColor: color }}
        >
          <div className="back-content">
            <p>{backContent}</p>
            <motion.button
              className="explore-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
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

const ServicesPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yLogo = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleTitle = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);
  const opacityTitle = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.8]);

  useEffect(() => {
    const comets = document.querySelectorAll('.comet');
    comets.forEach(comet => {
      const duration = 15 + Math.random() * 10;
      const delay = Math.random() * 20;
      comet.style.animation = `comet ${duration}s linear ${delay}s infinite`;
    });
  }, []);

  return (
    <div className={`cosmic-container ${darkMode ? 'dark-matter' : 'light-energy'}`} ref={containerRef}>
      <ParticleBackground darkMode={darkMode} />
      <div className="space-fabric" />

      <div className="comet" style={{ top: '20%', left: '-50px' }} />
      <div className="comet" style={{ top: '60%', left: '-80px' }} />

      <motion.div
        className="cosmic-logo"
        style={{ y: yLogo }}
      >
        <div className="earth-container">
          <Earth />
        </div>
        <div className="cosmic-ring" />
      </motion.div>

      <div className="cosmic-content">
        <motion.div
          className="cosmic-title"
          style={{ scale: scaleTitle, opacity: opacityTitle }}
        >
          <h1>
            <span className="title-glow">Our Services</span>
          </h1>
          <motion.p
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Delivering <span className="text-pulse">innovative solutions</span> through <span className="text-pulse">expert craftsmanship</span>
          </motion.p>
        </motion.div>

        <motion.div
          className="cosmic-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {services.map((service, index) => (
            <CosmicCard key={index} {...service} index={index} />
          ))}
        </motion.div>

        <motion.section
          className="cosmic-about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Approach</h2>
          <p>
            We combine <span className="text-highlight">strategic thinking</span> with
            <span className="text-highlight"> technical excellence</span> to deliver solutions
            that drive measurable business outcomes. Our methodology emphasizes user-centered design,
            scalable architecture, and agile development practices to ensure your project succeeds
            in today's competitive digital landscape.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            From initial consultation through deployment and beyond, we partner with you to
            transform complex challenges into elegant, efficient solutions that grow with your business.
          </p>

          <motion.div
            className="satellite"
            animate={{
              x: ['-50px', 'calc(100% + 50px)'],
              rotate: [0, 180]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ✦
          </motion.div>
        </motion.section>

        <motion.div
          className="quantum-divider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-100px" }}
        >
          <div className="energy-orb" />

          <motion.img
            src={logo2}
            alt="Aspryde Logo"
            className="tech-icon"
            animate={{
              y: ["-5px", "5px", "-3px", "3px", "0px"],
              rotate: [0, 5, -5, 2, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="rotating-particles">
            <div className="particle" />
            <div className="particle" />
            <div className="particle" />
          </div>
        </motion.div>

        <motion.section
          className="cosmic-about"
          style={{ textAlign: 'center', marginTop: '4rem' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Get Started?</h2>
          <p>
            Let's discuss how we can help transform your ideas into powerful digital solutions.
            <span className="text-highlight"> Contact us</span> to schedule a consultation and
            explore the possibilities for your next project.
          </p>

          <motion.button
            className="explore-button"
            style={{
              marginTop: '2rem',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
              border: 'none',
              borderRadius: '8px'
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Project
          </motion.button>
        </motion.section>

        <div className="clients-marquee">
          <div className="marquee-content">
            {[...clientsData, ...clientsData].map((client, index) => (
              <ClientLogo key={index} client={client} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;