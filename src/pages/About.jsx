import React from "react";
import "./About.css";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import shardulMane from "../assets/Shardul.jpeg"; // Add your image
import narayanSangale from "../assets/narayan.jpg"; // Add your image
import yashKadav from "../assets/yashk.jpg"; // Add your image
import Swapnil from "../assets/Swapnil.jpg"; // Add your image

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="logo-container">
          
          <div className="logo-glow"></div>
        </div>
        <h1>
          <span className="gradient-text">About Aspryde</span>
        </h1>
        <p className="tagline">Empowering innovation with cutting-edge digital solutions</p>
        <div className="header-decoration">
          <div className="dot-grid"></div>
        </div>
      </header>

      <div className="content-wrapper">
        <section className="about-section">
          <div className="section-header">
            <h2>Company Overview</h2>
            <div className="section-divider"></div>
          </div>
          <p className="animated-text">
            Aspryde is a software technology company focused on crafting smart, scalable, and impactful digital products. We specialize in AI-powered platforms, modern mobile apps, cloud-native solutions, and full-stack web development. Our mission is to empower startups and enterprises through tech innovation.
          </p>
        </section>

       <section className="about-section">
        <div className="section-header">
          <h2>Leadership Team</h2>
          <div className="section-divider"></div>
        </div>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-card-inner">
              <div className="team-card-front">
                <img
                  src={shardulMane}
                  alt="Shardul Mane, CEO"
                  className="team-avatar"
                />
                <h3>Shardul Mane</h3>
                <p className="role">Chief Executive Officer</p>
              </div>
              <div className="team-card-back">
                <p>Tech visionary leading Aspryde's growth and strategy with a strong foundation in software innovation.</p>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/shardul-mane-4a26a2256/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Shardul Mane"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/ShardulMane20"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Shardul Mane"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="team-card">
            <div className="team-card-inner">
              <div className="team-card-front">
                <img
                  src={narayanSangale}
                  alt="Narayan Sangale, COO"
                  className="team-avatar"
                />
                <h3>Narayan Sangale</h3>
                <p className="role">Chief Operating Officer</p>
              </div>
              <div className="team-card-back">
                <p>Driving operational excellence across products and delivery with a focus on client success.</p>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/narayan-sangale/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Narayan Sangale"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/Code7Narayan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Code7Narayan"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="team-card">
            <div className="team-card-inner">
              <div className="team-card-front">
                <img
                  src={yashKadav}
                  alt="Yash Kadav, CTO"
                  className="team-avatar"
                />
                <h3>Yash Kadav</h3>
                <p className="role">Chief Technology Officer</p>
              </div>
              <div className="team-card-back">
                <p>Architect of scalable systems and AI innovation with expertise in cloud-native solutions.</p>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/yashkadav/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Yash Kadav"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/Code7Narayan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub yashajaykadav"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-inner">
              <div className="team-card-front">
                <img
                  src={Swapnil}
                  alt="Yash Kadav, CTO"
                  className="team-avatar"
                />
                <h3>Swapnil Pawar</h3>
                <p className="role">Chief Marketing Officer</p>
              </div>
              <div className="team-card-back">
                <p>Drives digital transformation through innovative marketing strategies and brand development. Specializes in scaling tech brands globally.</p>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/yashkadav/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Swapnil Pawar"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/Code7Narayan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub yashajaykadav"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="about-section">
  <div className="section-header">
    <h2>Our Tech Stack</h2>
    <div className="section-divider"></div>
  </div>

        <div className="stack-container">
          <div className="stack-category">
            <h4>Frontend</h4>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="stack-category">
            <h4>Mobile</h4>
            <ul>
              <li>Kotlin</li>
              <li>Flutter</li>
              <li>Firebase</li>
              <li>Swift</li>
            </ul>
          </div>

          <div className="stack-category">
            <h4>Backend</h4>
            <ul>
              <li>Python</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>GraphQL</li>
            </ul>
          </div>

          <div className="stack-category">
            <h4>AI/ML</h4>
            <ul>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>OpenCV</li>
              <li>HuggingFace</li>
            </ul>
          </div>

          <div className="stack-category">
            <h4>DevOps</h4>
            <ul>
              <li>Docker</li>
              <li>AWS</li>
              <li>GitHub Actions</li>
              <li>Kubernetes</li>
            </ul>
          </div>

          <div className="stack-category">
            <h4>Database</h4>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
            </ul>
          </div>

          <div className="stack-category">
            <h4>Testing</h4>
            <ul>
              <li>Jest</li>
              <li>Mocha</li>
              <li>Cypress</li>
              <li>Postman</li>
            </ul>
          </div>

          <div className="stack-category">
            <h4>Design Tools</h4>
            <ul>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
          </div>
        </div>
      </section>


        <section className="about-section vision-section">
          <div className="section-header">
            <h2>Vision & Mission</h2>
            <div className="section-divider"></div>
          </div>
          <div className="vision-cards">
            <div className="vision-card">
  <div className="vision-icon vision-icon-1">🔭</div>
  <h3>Our Vision</h3>
  <p>
    To be a <span className="vision-highlight">global tech partner</span> delivering 
    <span className="vision-highlight"> smart, reliable solutions</span> that fuel 
    tomorrow's innovation.
  </p>
</div>
<div className="vision-card">
  <div className="vision-icon vision-icon-2">🚀</div>
  <h3>Our Mission</h3>
  <p>
    Empower <span className="vision-highlight">bold ideas</span> through technology and 
    make software development <span className="vision-highlight">efficient, scalable</span>, 
    and <span className="vision-highlight">impactful</span>.
  </p>
</div>

             

          </div>
        </section>

        <section className="about-section contact">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <div className="section-divider"></div>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <FiMail className="contact-icon" />
              <h4>Email Us</h4>
              <a href="mailto:contact@aspryde.tech">aspryde,official@gmail.com</a>
            </div>
            <div className="contact-card">
              <FiPhone className="contact-icon" />
              <h4>Call Us</h4>
              <a href="tel:+917028814645">+91 70288 14645</a>
            </div>
            <div className="contact-card">
              <FiMapPin className="contact-icon" />
              <h4>Visit Us</h4>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;