import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
 
  { path: '/portfolio', name: 'Work' },
  { path: '/contact', name: 'Contact' },
];

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <div className="navbar-container">
      <div
        className="popup-trigger"
        onMouseEnter={() => setIsNavVisible(true)}
      >
       Aspryde
      </div>
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
    </div>
  );
};

export default Navbar;