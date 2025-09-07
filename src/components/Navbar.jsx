// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaHome, FaInfoCircle, FaCogs, FaProjectDiagram, FaComments, FaEnvelope, FaTools } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Load dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
    localStorage.setItem('darkMode', newMode);
  };

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  // Detect scroll for shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active link class
  const getLinkClass = (path) => {
    return `nav-link px-3 py-2 position-relative ${
      location.pathname === path ? 'text-green fw-bold' : 'text-light'
    }`;
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark sticky-top ${
        darkMode ? 'bg-dark' : 'bg-primary'
      } ${isScrolled ? 'shadow' : 'shadow-sm'}`}
      style={{
        transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
        backgroundColor: darkMode ? '#1a1a1a' : '#007bff',
        boxShadow: isScrolled ? (darkMode ? '0 4px 12px rgba(0,0,0,0.5)' : '0 4px 12px rgba(0,0,0,0.2)') : 'none'
      }}
    >
      <div className="container">
        {/* Logo & Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center" onClick={handleLinkClick}>
          <img
            src="/images/abtech.jpg" // ✅ Correct path: public/images/abtech.jpg
            alt="AB Tech Logo"
            width="36"
            height="36"
            className="rounded me-2"
            style={{ objectFit: 'cover', border: '2px solid #6aa121' }}
          />
          <strong className="fs-5">AB Tech</strong>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`${isCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-1">
            {[
              { path: '/', label: 'Home', icon: FaHome },
              { path: '/about', label: 'About', icon: FaInfoCircle },
              { path: '/services', label: 'Services', icon: FaCogs },
              { path: '/technologies', label: 'Technologies', icon: FaTools },
              { path: '/projects', label: 'Projects', icon: FaProjectDiagram },
              { path: '/testimonials', label: 'Testimonials', icon: FaComments },
              { path: '/contact', label: 'Contact', icon: FaEnvelope },
            ].map(({ path, label, icon: Icon }) => (
              <li className="nav-item" key={path}>
                <Link
                  to={path}
                  className={getLinkClass(path)}
                  onClick={handleLinkClick}
                  style={{ transition: 'color 0.3s ease' }}
                >
                  <span className="d-flex align-items-center">
                    <Icon className="me-1 d-md-none" size={16} />{' '}
                    <span className="d-none d-md-inline">{label}</span>
                  </span>
                  {/* Active Link Underline */}
                  {location.pathname === path && (
                    <span
                      className="position-absolute bottom-0 start-50 translate-middle-x w-50"
                      style={{
                        height: '2px',
                        background: '#6aa121',
                        borderRadius: '2px',
                        transform: 'scaleX(1)',
                        transition: 'transform 0.3s ease'
                      }}
                    ></span>
                  )}
                </Link>
              </li>
            ))}

            {/* Dark Mode Toggle */}
            <li className="nav-item ms-2">
              <button
                className={`btn btn-sm rounded-circle d-flex align-items-center justify-content-center ${
                  darkMode ? 'btn-warning' : 'btn-outline-light'
                }`}
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                style={{
                  width: '36px',
                  height: '36px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}
              >
                {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;