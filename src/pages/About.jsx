// src/pages/About.jsx
import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ years: 0, projects: 0, industries: 0 });
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  const mapRef = useRef(null);

  // Animate stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animateCounters();
      },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentYears = 0;
    const targetYears = 5;
    const incYears = targetYears / steps;
    const yearsTimer = setInterval(() => {
      currentYears += incYears;
      if (currentYears >= targetYears) clearInterval(yearsTimer);
      setAnimatedStats(prev => ({ ...prev, years: Math.floor(currentYears) }));
    }, interval);

    let currentProjects = 0;
    const targetProjects = 50;
    const incProjects = targetProjects / steps;
    const projectsTimer = setInterval(() => {
      currentProjects += incProjects;
      if (currentProjects >= targetProjects) clearInterval(projectsTimer);
      setAnimatedStats(prev => ({ ...prev, projects: Math.floor(currentProjects) }));
    }, interval);

    let currentIndustries = 0;
    const targetIndustries = 10;
    const incIndustries = targetIndustries / steps;
    const industriesTimer = setInterval(() => {
      currentIndustries += incIndustries;
      if (currentIndustries >= targetIndustries) clearInterval(industriesTimer);
      setAnimatedStats(prev => ({ ...prev, industries: Math.floor(currentIndustries) }));
    }, interval);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Team Members
  const team = [
    {
      name: "Jean Niyonzima",
      role: "Lead Engineer",
      image: "https://i.pravatar.cc/150?img=1",
      bio: "PLC & automation expert with 7 years of industrial experience."
    },
    {
      name: "Claire Uwimana",
      role: "Electronics Specialist",
      image: "https://i.pravatar.cc/150?img=2",
      bio: "Designs and repairs high-performance electronic systems."
    },
    {
      name: "David Mugisha",
      role: "IoT & Software Lead",
      image: "https://i.pravatar.cc/150?img=3",
      bio: "Builds embedded systems with Python and Raspberry Pi."
    },
    {
      name: "Faustin Nsengimana",
      role: "Field Technician",
      image: "https://i.pravatar.cc/150?img=4",
      bio: "On-site installation and maintenance across Rwanda."
    }
  ];

  // Milestones
  const milestones = [
    { year: "2019", event: "AB Tech founded in Kigali" },
    { year: "2020", event: "First automation project delivered to a manufacturing plant" },
    { year: "2021", event: "Expanded to healthcare sector with lab automation" },
    { year: "2022", event: "50+ projects completed across Rwanda" },
    { year: "2023", event: "Launched IoT monitoring solutions for energy systems" },
    { year: "2024", event: "Partnered with 10+ institutions nationwide" }
  ];

  return (
    <section 
      className="section bg-light position-relative" 
      style={{ overflow: 'hidden', padding: '100px 0' }}
    >
      {/* "Serving Rwanda" Badge */}
      <div 
        className="position-absolute top-0 end-0 m-4 px-3 py-2 bg-green text-white rounded-start"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(180deg)',
          fontSize: '0.9rem',
          fontWeight: 'bold',
          background: '#6aa121',
          animation: 'pulse 2s infinite',
          zIndex: 1
        }}
      >
        🌍 Serving Rwanda
      </div>

      <div className="container">
        {/* Section Title */}
        <h2 className={`section-title text-center mb-5 fade-in ${isVisible ? 'visible' : ''}`}>
          About AB Tech
        </h2>

        {/* Intro & Stats */}
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <h4 className="mb-4" style={{ color: '#007bff' }}>Powering Innovation, Connecting Rwanda</h4>
              <p>
                AB Tech is a dynamic and forward-thinking enterprise based in Rwanda, specializing in the sale, installation, and maintenance of cutting-edge electronics, telecommunication systems, and electrical equipment.
              </p>
              <p>
                Our mission is to empower homes, businesses, and institutions with reliable technology solutions that drive progress and efficiency across Rwanda and beyond.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-green me-2">✅</span>
                  <strong>Expert Installation:</strong> Certified technicians delivering secure, modern setups.
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-green me-2">✅</span>
                  <strong>Customer-Centric:</strong> Tailored solutions with responsive support.
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-green me-2">✅</span>
                  <strong>Affordable Innovation:</strong> High quality at competitive prices.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div 
              ref={statsRef}
              className={`card h-100 shadow-sm border-0 fade-in ${isVisible ? 'visible' : ''}`}
              style={{
                background: 'linear-gradient(135deg, #1f1f1f, #0a2e5c)',
                color: 'white',
                borderRadius: '16px',
                transition: 'all 0.8s ease'
              }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-4 text-white">Our Impact</h3>
                <div className="row text-center g-4">
                  <div className="col-4">
                    <h2 className="text-green mb-1">{animatedStats.years}+</h2>
                    <small>Years in Business</small>
                  </div>
                  <div className="col-4">
                    <h2 className="text-green mb-1">{animatedStats.projects}+</h2>
                    <small>Projects Delivered</small>
                  </div>
                  <div className="col-4">
                    <h2 className="text-green mb-1">{animatedStats.industries}+</h2>
                    <small>Industries Served</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className={`mt-5 pt-4 fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <div className="text-center mb-4">
            <h4 className="fw-bold" style={{ color: '#007bff' }}>Our Vision</h4>
            <p className="lead text-muted">
              Bridging the technology gap across Rwanda through smart systems for smart communities.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <p className="mb-0">
              AB Tech is committed to Rwanda’s digital transformation by delivering reliable infrastructure and technical expertise. We believe in innovation that empowers — from smart homes to automated industries.
            </p>
          </div>
        </div>

        {/* 👥 Team Section */}
        <div className={`mt-6 fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.8s' }}>
          <h3 className="text-center mb-4" style={{ color: '#007bff' }}>Our Team</h3>
          <p className="text-center text-muted mb-4">Skilled professionals driving innovation in electronics and automation.</p>
          <div className="row g-4">
            {team.map((member, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div 
                  className="text-center p-3 h-100"
                  style={{
                    transition: 'transform 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                    style={{ objectFit: 'cover' }}
                  />
                  <h5 className="mb-1">{member.name}</h5>
                  <small className="text-muted">{member.role}</small>
                  <p className="mt-2 text-muted" style={{ fontSize: '0.9rem' }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 📅 Timeline of Milestones */}
        <div ref={timelineRef} className={`mt-6 fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '1s' }}>
          <h3 className="text-center mb-4" style={{ color: '#007bff' }}>Our Journey</h3>
          <div 
            className="position-relative" 
            style={{ 
              marginLeft: '50px',
              borderLeft: '3px solid #007bff',
              paddingLeft: '30px',
              margin: '40px 0'
            }}
          >
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="mb-4 position-relative"
                style={{ opacity: isVisible ? 1 : 0, transition: `opacity 0.5s ease ${index * 0.2}s` }}
              >
                <div 
                  className="position-absolute" 
                  style={{
                    left: '-48px',
                    top: '8px',
                    width: '24px',
                    height: '24px',
                    background: '#6aa121',
                    borderRadius: '50%',
                    border: '4px solid white',
                    boxShadow: '0 0 0 2px #007bff'
                  }}
                ></div>
                <h5 className="mb-0" style={{ color: '#1f1f1f' }}>{milestone.year}</h5>
                <p className="text-muted mb-0">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 📊 Project Impact Map */}
        <div ref={mapRef} className={`mt-6 fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '1.2s' }}>
          <h3 className="text-center mb-4" style={{ color: '#007bff' }}>Project Impact Across Rwanda</h3>
          <p className="text-center text-muted mb-4">We’ve delivered automation and electronics solutions in key regions.</p>
          
          <div 
            className="position-relative bg-white rounded shadow-sm mx-auto"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: '400px',
              backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Rwanda_location_map.svg/1200px-Rwanda_location_map.svg.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              border: '1px solid #ddd'
            }}
          >
            {/* Project Pins */}
            {[
              { top: '30%', left: '50%', city: 'Kigali', project: 'Smart Factory' },
              { top: '45%', left: '30%', city: 'Musanze', project: 'Lab Automation' },
              { top: '60%', left: '60%', city: 'Huye', project: 'Solar Control' },
              { top: '50%', left: '75%', city: 'Rubavu', project: 'Telecom Network' }
            ].map((pin, i) => (
              <div
                key={i}
                className="position-absolute text-center"
                style={{
                  top: pin.top,
                  left: pin.left,
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer'
                }}
                title={`${pin.city}: ${pin.project}`}
              >
                {/* Pin */}
                <div 
                  style={{
                    width: '12px',
                    height: '12px',
                    background: '#6aa121',
                    borderRadius: '50%',
                    border: '2px solid white',
                    boxShadow: '0 0 5px rgba(0,0,0,0.5)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#007bff';
                    e.currentTarget.style.transform = 'scale(1.5)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#6aa121';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                ></div>
                {/* Tooltip */}
                <div 
                  className="position-absolute bg-dark text-white px-2 py-1 rounded"
                  style={{
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '0.8rem',
                    whiteSpace: 'nowrap',
                    width: 'max-content',
                    maxWidth: '150px',
                    display: 'none'
                  }}
                  onMouseEnter={e => e.currentTarget.style.display = 'block'}
                  onMouseLeave={e => e.currentTarget.style.display = 'none'}
                >
                  {pin.city}: {pin.project}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-3 text-muted">
            <small>Map: AB Tech has served clients in Kigali, Musanze, Huye, Rubavu, and more.</small>
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx="true">{`
        @keyframes pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default About;