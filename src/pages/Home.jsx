// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaPlayCircle, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, years: 0, industries: 0 });
  const statsRef = useRef(null);

  // Sound effect on hover
  const playHoverSound = () => {
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  // Animate stats when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animateCounters();
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    // Projects: 50+
    let currentProjects = 0;
    const projectTimer = setInterval(() => {
      currentProjects += 50 / steps;
      if (currentProjects >= 50) {
        currentProjects = 50;
        clearInterval(projectTimer);
      }
      setAnimatedStats(prev => ({ ...prev, projects: Math.floor(currentProjects) }));
    }, interval);

    // Years: 5+
    let currentYears = 0;
    const yearTimer = setInterval(() => {
      currentYears += 5 / steps;
      if (currentYears >= 5) {
        currentYears = 5;
        clearInterval(yearTimer);
      }
      setAnimatedStats(prev => ({ ...prev, years: Math.floor(currentYears) }));
    }, interval);

    // Industries: 10+
    let currentIndustries = 0;
    const industryTimer = setInterval(() => {
      currentIndustries += 10 / steps;
      if (currentIndustries >= 10) {
        currentIndustries = 10;
        clearInterval(industryTimer);
      }
      setAnimatedStats(prev => ({ ...prev, industries: Math.floor(currentIndustries) }));
    }, interval);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Right Diagonal Gradient Background with Soft Blend */}
      <div
        className="position-relative text-light text-center"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #007bff 40%, #005baa 45%, #3a8a4a 50%, #6aa121 60%)', // Blended zone between 45%-55%
          backgroundSize: '200% 200%',
          animation: 'gradientShift 15s ease infinite',
        }}
      >
        {/* Subtle tech pattern overlay */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            background: `
              radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 20%),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 20px 20px, 20px 20px',
            opacity: 0.15,
            pointerEvents: 'none',
          }}
        />

        {/* Content */}
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ transition: 'all 1s ease' }}>
            <h1 className="display-2 fw-bold mb-3" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              AB Tech
            </h1>
            <p className="lead mb-4" style={{ fontSize: '1.3rem' }}>
              Pioneering Electronics & Automation Solutions
            </p>
            <p className="mb-5 opacity-90">
              We automate processes, innovate electronics, and deliver reliable technology across Rwanda.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
              <Link
                to="/services"
                className="btn btn-lg btn-green px-4 d-flex align-items-center"
                onMouseEnter={playHoverSound}
              >
                <strong>Our Services</strong>
              </Link>
              <Link
                to="/contact"
                className="btn btn-lg btn-outline-light px-4"
                onMouseEnter={playHoverSound}
              >
                <strong>Contact Us</strong>
              </Link>
            </div>

            {/* YouTube Video Preview */}
            <div className="mt-4">
              <a
                href="https://youtu.be/f5jiCq5XIgE"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHoverSound}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="d-inline-block position-relative shadow-lg"
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    maxWidth: '560px',
                    width: '100%',
                  }}
                >
                  <img
                    src="https://i.ytimg.com/vi/f5jiCq5XIgE/maxresdefault.jpg"
                    alt="Watch AB Tech in Action"
                    className="img-fluid"
                    style={{ height: '315px', objectFit: 'cover' }}
                  />
                  <div
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 15px rgba(0,0,0,0.3)',
                    }}
                  >
                    <FaPlayCircle size={32} color="#007bff" />
                  </div>
                </div>
              </a>
              <p className="text-light mt-2 opacity-80">Watch our real projects in action</p>
            </div>
          </div>

          {/* "Serving Rwanda" Badge */}
          <div
            className="position-absolute top-0 end-0 m-4 px-3 py-2 text-white rounded-start"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              background: '#6aa121',
              animation: 'pulse 2s infinite',
              zIndex: 10,
            }}
          >
            🌍 NGABIRANO Amani Blaise
          </div>
        </div>
      </div>

      {/* Stats Section (White background, below hero) */}
      <section
        ref={statsRef}
        className="py-5"
        style={{
          backgroundColor: '#ffffff',
          position: 'relative',
          marginTop: '-100px',
          paddingTop: '160px',
          zIndex: 1,
        }}
      >
        <div className="container">
          <div className="row text-center g-5">
            {[
              { num: `${animatedStats.projects}+`, label: 'Projects Delivered', icon: '🔧' },
              { num: `${animatedStats.years}+`, label: 'Years in Business', icon: '📅' },
              { num: `${animatedStats.industries}+`, label: 'Industries Served', icon: '🏭' },
            ].map((stat, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="p-4 rounded h-100 d-flex flex-column align-items-center"
                  style={{
                    background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <h2 className="text-green fw-bold mb-1">{stat.num}</h2>
                  <div className="mb-2" style={{ fontSize: '1.5rem' }}>{stat.icon}</div>
                  <p className="mb-0 text-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AB Tech? */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center mb-5" style={{ color: '#007bff' }}>Why Choose AB Tech?</h3>
          <div className="row g-4">
            {[
              "Expert Installation by Certified Technicians",
              "Customer-Centric Service & Support",
              "Affordable Innovation Without Compromise"
            ].map((feature, i) => (
              <div className="col-lg-4" key={i}>
                <div className="d-flex align-items-start">
                  <FaCheckCircle className="text-green mt-1 me-3" />
                  <p className="mb-0">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/250791831403"
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed bottom-0 end-0 m-4"
        style={{
          zIndex: 1000,
          animation: 'float 3s ease-in-out infinite',
        }}
        onMouseEnter={playHoverSound}
      >
        <FaWhatsapp size={60} color="#25D366" title="Chat with us on WhatsApp" />
      </a>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Home;