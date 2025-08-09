import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaGithub, FaArrowRight } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  const [isHovered, setIsHovered] = useState(false);

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
      {/* Enhanced Animated Header */}
      <header className="contact-header">
        <div className="header-content">
          <h1 className="gradient-text">Let's Connect</h1>
          <div className="animated-underline"></div>
          <p className="tagline">Have a project in mind or want to collaborate? We'd love to hear from you.</p>
          <div className="header-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
          </div>
        </div>
      </header>

      {/* Improved Tab Navigation */}
      <div className="tab-container">
        <div className="tab-wrapper">
          <button 
            className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            <span>Contact Form</span>
            {activeTab === 'contact' && <div className="tab-indicator"></div>}
          </button>
         
            
         
        </div>
      </div>

      {/* Main Content with Enhanced Design */}
      <div className="contact-content">
        {activeTab === 'contact' && (
          <div className="contact-section">
            <div className="contact-form-container glass-card">
              <div className="form-header">
                <h2>Get in Touch</h2>
                <p>Fill out the form and we'll respond within 24 hours</p>
              </div>
              
              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon-container">
                    <FiCheck className="success-icon" />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. Our team will contact you shortly.</p>
                  <button 
                    className="back-button"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </button>
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
                    <div className="input-underline"></div>
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
                    <div className="input-underline"></div>
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
                    <div className="input-underline"></div>
                  </div>

                  <div className="form-group">
  <label htmlFor="message">Your Message</label>
  <textarea
    id="message"
    name="message"
    className="full-textarea"
    value={formData.message}
    onChange={handleChange}
    required
  ></textarea>

                  </div>

                  <button 
                    type="submit" 
                    className="submit-button"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span>Send Message</span>
                    <div className="button-icon-wrapper">
                      <FiSend className={`button-icon ${isHovered ? 'animate' : ''}`} />
                      <FaArrowRight className={`button-icon-arrow ${isHovered ? 'animate' : ''}`} />
                    </div>
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info-card glass-card">
              <div className="card-header">
                <h3>Other Ways to Reach Us</h3>
                <p>Prefer direct communication? Here's how you can contact us</p>
              </div>
              
              <div className="contact-methods">
                <div className="contact-method">
                  
                  <div className="contact-details">
                    <h4>Email Us</h4>
                    
                    <a href="mailto:contact@aspryde.tech" className="contact-link">
                      aspryde.official@gmail.com
                    </a>
                    
                    <p>For general inquiries and partnerships</p>
                  </div>
                </div>

                <div className="contact-method">
                  
                  <div className="contact-details">
                    <h4>Call Us</h4>
                    <a href="tel:+919307708830" className="contact-link">
                      +91 70288 14645
                    </a>
                    <p>Mon-Fri, 9am - 7pm IST</p>
                  </div>
                </div>

                <div className="contact-method">
                  
                  <div className="contact-details">
                    <h4>Visit Us</h4>
                    <p>Pune, Maharashtra, India</p>
                    
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h2>Follow Us</h2>
                <div className="social-links">
                  <a href="https://linkedin.com/company/aspryde" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <FaLinkedin />
                    <span></span>
                  </a>
                  <a href="https://twitter.com/aspryde" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                    <FaTwitter />
                    <span></span>
                  </a>
                
                </div>
              </div>
            </div>
          </div>
        )}

       

       
      </div>

      
      </div>
    
  );
};

export default Contact;