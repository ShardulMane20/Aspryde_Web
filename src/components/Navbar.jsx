import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'Our Story' },
  { path: '/portfolio', name: 'Our Creations' },
  { path: '/contact', name: 'Get in Touch' },
];

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleMobilePanel = () => {
    setIsMobilePanelOpen(!isMobilePanelOpen);
  };

  const closeMobilePanel = () => {
    setIsMobilePanelOpen(false);
  };

  return (
    <div className="navbar-container">
      {/* Desktop trigger */}
      {!isMobile && (
        <div
          className="popup-trigger"
          onMouseEnter={() => setIsNavVisible(true)}
        >
          Aspryde
        </div>
      )}

      {/* Mobile trigger */}
      {isMobile && (
        <div className="mobile-trigger" onClick={toggleMobilePanel}>
          <div className="brand-name">Aspryde</div>
          <div className={`hamburger ${isMobilePanelOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}

      {/* Desktop navbar */}
      {!isMobile && (
        <nav
          className={`navbar ${isNavVisible ? 'visible' : ''}`}
          onMouseLeave={() => setIsNavVisible(false)}
        >
          <div className="navbar-content">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}

      {/* Mobile side panel */}
      {isMobile && (
        <>
          <div 
            className={`mobile-overlay ${isMobilePanelOpen ? 'active' : ''}`}
            onClick={closeMobilePanel}
          ></div>
          
          <nav className={`mobile-panel ${isMobilePanelOpen ? 'active' : ''}`}>
            <div className="mobile-panel-header">
              <div className="panel-brand">Quick Routes</div>
              <button className="close-btn" onClick={closeMobilePanel}>
                <span></span>
                <span></span>
              </button>
            </div>
            
            <div className="mobile-nav-content">
              <div className="nav-decoration"></div>
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={closeMobilePanel}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="link-text">{item.name}</span>
                  <span className="link-arrow">→</span>
                </NavLink>
              ))}
              
              <div className="panel-footer">
                <div className="glow-orb">
                  <img 
                    src="src/assets/logo3.png" 
                    alt="Aspryde Logo" 
                    className="orb-logo"
                  />
                </div>
                <div className="panel-tagline">Aspire Boldly, Rise Proudly.</div>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default Navbar;