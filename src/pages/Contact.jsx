import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Animated Header */}
      <header className="contact-header">
        <h1 className="gradient-text">Connect With Us</h1>
        <br />
        <p className="tagline">Let's build something extraordinary together</p>
        <div className="header-decoration"></div>
      </header>

      {/* Interactive Tabs */}
      <div className="tab-container">
        <button 
          className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact Form
        </button>
        <button 
          className={`tab-button ${activeTab === 'locations' ? 'active' : ''}`}
          onClick={() => setActiveTab('locations')}
        >
          Our Locations
        </button>
        <button 
          className={`tab-button ${activeTab === 'support' ? 'active' : ''}`}
          onClick={() => setActiveTab('support')}
        >
          Support
        </button>
      </div>

      {/* Main Content */}
      <div className="contact-content">
        {activeTab === 'contact' && (
          <div className="contact-section">
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              {isSubmitted ? (
                <div className="success-message">
                  <FiCheck className="success-icon" />
                  <h3>Message Sent!</h3>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group floating">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>

                  <div className="form-group floating">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Email Address</label>
                  </div>

                  <div className="form-group floating">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-button">
                    <FiSend className="button-icon" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info-card">
              <h3>Direct Contacts</h3>
              <div className="contact-method">
                <div className="contact-icon">
                  <FiMail />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:contact@aspryde.tech">contact@aspryde.tech</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FiPhone />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+917028814645">+91 70288 14645</a>
                  <p>Mon-Fri, 9am-6pm IST</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FiMapPin />
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Dighanchi, Sangli, Maharashtra, India</p>
                  <button className="map-button">View on Map</button>
                </div>
              </div>

              <div className="social-links">
                <a href="https://linkedin.com/company/aspryde" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com/aspryde" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://github.com/aspryde" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'locations' && (
          <div className="locations-section">
            <h2>Our Global Presence</h2>
            <div className="location-cards">
              <div className="location-card">
                <h3>India Headquarters</h3>
                <p>Dighanchi, Sangli, Maharashtra</p>
                <p>+91 70288 14645</p>
                <div className="location-image india"></div>
              </div>
              <div className="location-card">
                <h3>US Office</h3>
                <p>San Francisco, California</p>
                <p>+1 (555) 123-4567</p>
                <div className="location-image us"></div>
              </div>
              <div className="location-card">
                <h3>Europe Office</h3>
                <p>Berlin, Germany</p>
                <p>+49 30 1234567</p>
                <div className="location-image europe"></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'support' && (
          <div className="support-section">
            <h2>Technical Support</h2>
            <div className="support-options">
              <div className="support-card">
                <div className="support-icon">🛠️</div>
                <h3>Help Center</h3>
                <p>Browse our knowledge base for solutions</p>
                <button className="support-button">Visit Help Center</button>
              </div>
              <div className="support-card">
                <div className="support-icon">💬</div>
                <h3>Live Chat</h3>
                <p>Chat with our support team in real-time</p>
                <button className="support-button">Start Chat</button>
              </div>
              <div className="support-card">
                <div className="support-icon">📞</div>
                <h3>Emergency Support</h3>
                <p>24/7 critical issue support line</p>
                <button className="support-button">Call Now</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Map Placeholder */}
      <div className="map-container">
        <div className="map-overlay">
          <h3>Find Us Around the World</h3>
          <p>We're expanding our global presence to serve you better</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;