// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaHome, FaInfoCircle, FaCogs, FaTools, FaProjectDiagram, FaComments, FaEnvelope, FaWhatsapp, FaPhone, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) document.body.classList.add('dark-mode');
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

  // Add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu items
  const menuItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/about', label: 'About', icon: FaInfoCircle },
    { path: '/services', label: 'Services', icon: FaCogs },
    { path: '/technologies', label: 'Technologies', icon: FaTools },
    { path: '/projects', label: 'Projects', icon: FaProjectDiagram },
    { path: '/testimonials', label: 'Testimonials', icon: FaComments },
    { path: '/contact', label: 'Contact', icon: FaEnvelope },
  ];

  // === MOBILE VIEW: Show Logo + Top Bar + Bottom Nav ===
  if (isMobile) {
    return (
      <>
        {/* Top Logo & Info Bar (Always Visible on Mobile) */}
        <div
          className="bg-white text-center py-2 border-bottom shadow-sm"
          style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1002,
            borderBottom: '1px solid #dee2e6',
          }}
        >
          {/* Logo & Brand */}
          <div className="d-flex align-items-center justify-content-center">
            <img
              src="/images/abtech.jpg"
              alt="AB Tech Logo"
              width="40"
              height="40"
              className="rounded me-2"
              style={{ objectFit: 'cover', border: '2px solid #6aa121' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div>
              <strong style={{ color: '#007bff', fontSize: '1.1rem' }}>AB Tech</strong>
              <div style={{ fontSize: '0.75rem', color: '#6aa121' }}>Electronics & Automation</div>
            </div>
          </div>

          {/* WhatsApp Quick Contact */}
          <a
            href="https://wa.me/250791831403"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
            style={{ fontSize: '0.85rem', color: '#25D366', marginTop: '4px', display: 'block' }}
          >
            💬 Chat with us on WhatsApp
          </a>
        </div>

        {/* Bottom Navigation Bar */}
        <nav
          className="d-flex justify-content-around align-items-center fixed-bottom bg-white border-top"
          style={{
            height: '60px',
            zIndex: 1000,
            borderTop: '1px solid #dee2e6',
            boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
          }}
        >
          {menuItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className="text-center text-decoration-none"
              style={{
                color: location.pathname === path ? '#6aa121' : '#495057',
                fontSize: '0.8rem',
                fontWeight: location.pathname === path ? 'bold' : 'normal',
              }}
              onClick={handleLinkClick}
            >
              <Icon size={18} />
              <div>{label}</div>
            </Link>
          ))}
        </nav>

        {/* Floating WhatsApp Button (Optional) */}
        <a
          href="https://wa.me/250791831403"
          target="_blank"
          rel="noopener noreferrer"
          className="position-fixed d-flex align-items-center justify-content-center"
          style={{
            bottom: '70px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1001,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#25D366',
            boxShadow: '0 -6px 12px rgba(0,0,0,0.2)',
          }}
        >
          <FaWhatsapp size={24} color="white" />
        </a>

        {/* Spacer to prevent content under nav */}
        <div style={{ height: '60px' }} aria-hidden="true" />

        {/* Spacer for top bar */}
        <div style={{ height: '80px' }} aria-hidden="true" />
      </>
    );
  }

  // === DESKTOP/TABLET NAVBAR ===
  return (
    <>
      {/* Top Info Bar (Desktop) */}
      <div
        className="bg-primary text-white py-1"
        style={{ fontSize: '0.85rem' }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* Left: Contact Info */}
            <div className="d-none d-md-flex gap-3">
              <span>📞 <a href="tel:+250791831403" className="text-white text-decoration-none">+250 791 831 403</a></span>
              <span>|</span>
              <span>✉️ <a href="mailto:etetechs7@gmail.com" className="text-white text-decoration-none">etetechs7@gmail.com</a></span>
              <span>|</span>
              <a href="https://wa.me/250791831403" target="_blank" rel="noopener noreferrer" className="text-white">
                Chat on WhatsApp
              </a>
            </div>

            {/* Right: Social Icons */}
            <div className="d-flex gap-2">
              <a
                href="https://youtu.be/f5jiCq5XIgE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                title="Watch Our Work on YouTube"
              >
                <FaYoutube size={16} />
              </a>
              <span className="text-white d-none d-md-inline">|</span>
              <a
                href="https://wa.me/250791831403"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-dark sticky-top ${
          darkMode ? 'bg-dark' : 'bg-primary'
        } ${isScrolled ? 'shadow' : 'shadow-sm'}`}
        style={{
          transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
          backgroundColor: darkMode ? '#1a1a1a' : '#007bff',
          zIndex: 1000,
        }}
      >
        <div className="container">
          {/* Logo & Brand */}
          <Link to="/" className="navbar-brand d-flex align-items-center" onClick={handleLinkClick}>
            <img
              src="/images/abtech.jpg"
              alt="AB Tech Logo"
              width="40"
              height="40"
              className="rounded me-2"
              style={{ objectFit: 'cover', border: '2px solid #6aa121' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div>
              <strong className="fs-5">AB Tech</strong>
              <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>Electronics & Automation</div>
            </div>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-controls="navbarNav"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              {menuItems.map(({ path, label, icon: Icon }) => (
                <li className="nav-item" key={path}>
                  <Link
                    to={path}
                    className={`nav-link d-flex align-items-center px-3 py-2 ${
                      location.pathname === path ? 'text-green fw-bold' : 'text-light'
                    }`}
                    onClick={handleLinkClick}
                  >
                    <Icon className="me-2" /> <span>{label}</span>
                  </Link>
                </li>
              ))}

              {/* Dark Mode Toggle */}
              <li className="nav-item ms-3">
                <button
                  className={`btn btn-sm rounded-circle d-flex align-items-center justify-content-center ${
                    darkMode ? 'btn-warning' : 'btn-outline-light'
                  }`}
                  onClick={toggleDarkMode}
                  aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  style={{ width: '36px', height: '36px' }}
                >
                  {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;