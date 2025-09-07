// src/pages/Services.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaMicrochip, FaRobot, FaNetworkWired, FaCogs, FaTools, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Services Data with Real Images, Icons & Stats
  const services = [
    {
      id: 1,
      icon: <FaMicrochip size={40} className="text-blue" />,
      title: "Electronics Design & Prototyping",
      description: "Custom circuit design, PCB layout, and prototyping for IoT devices, embedded systems, and consumer electronics.",
      image: "https://images.unsplash.com/photo-1610164559911-79be44a83d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWxlY3Ryb25pY3N8ZW58MHx8fHwxNzE3NzYwMDAwfA&ixlib=rb-4.0.3&q=80&w=800",
      features: [
        "Schematic Capture & PCB Layout",
        "Prototype Development",
        "Testing & Validation"
      ],
      projects: 28,
      clients: "Manufacturers, Startups, Research Labs",
      whatsappMsg: "Hi AB Tech, I need help with electronics design and prototyping."
    },
    {
      id: 2,
      icon: <FaRobot size={40} className="text-green" />,
      title: "Automation Systems",
      description: "Design and implementation of PLC-based automation systems for manufacturing, process control, and smart buildings.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kdXN0cmlhbHxlbnwwfHx8fDE3MTc3NjAwMDB8&ixlib=rb-4.0.3&q=80&w=800",
      features: [
        "PLC Programming & Integration",
        "HMI & SCADA Solutions",
        "System Commissioning & Support"
      ],
      projects: 35,
      clients: "Factories, Energy Plants, Labs",
      whatsappMsg: "Hi AB Tech, I need a PLC automation system for my factory."
    },
    {
      id: 3,
      icon: <FaNetworkWired size={40} className="text-blue" />,
      title: "Telecommunication Systems",
      description: "Installation and maintenance of structured cabling, wireless networks, and VoIP systems for businesses and institutions.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVsZWZvbnxlbnwwfHx8fDE3MTc3NjAwMDB8&ixlib=rb-4.0.3&q=80&w=800",
      features: [
        "Network Design & Installation",
        "Wireless & VoIP Solutions",
        "Ongoing Maintenance & Support"
      ],
      projects: 42,
      clients: "Hospitals, Schools, Offices",
      whatsappMsg: "Hi AB Tech, I need a telecom network setup for my office."
    }
  ];

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section bg-light"
      style={{ paddingTop: '100px', paddingBottom: '80px' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className={`text-center mb-5 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Our Services</h2>
          <p className="lead text-muted">
            Comprehensive solutions in electronics, automation, and telecommunications — trusted across Rwanda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-5">
          {services.map((service) => (
            <div className="col-md-6 col-lg-4" key={service.id}>
              <div
                className="card h-100 shadow-sm border-0 service-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  transform: hoveredCard === service.id ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: hoveredCard === service.id
                    ? '0 12px 24px rgba(0, 0, 0, 0.18)'
                    : '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Service Image */}
                <div className="position-relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img-top"
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                  {/* Icon Badge */}
                  <div
                    className="position-absolute top-0 start-0 m-3"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '12px',
                      padding: '8px'
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-muted flex-grow-1" style={{ fontSize: '0.95rem' }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="list-unstyled mb-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="mb-1 d-flex align-items-center">
                        <FaCheckCircle size={12} className="text-green me-2" />
                        <small>{feature}</small>
                      </li>
                    ))}
                  </ul>

                  {/* Stats Badge */}
                  <div className="mb-3 p-2 bg-light rounded text-center" style={{ fontSize: '0.9rem' }}>
                    <strong>{service.projects}+ Projects</strong> | {service.clients}
                  </div>

                  {/* Trust Badge */}
                  <div className="mb-3">
                    <span className="badge bg-success">
                      ✅ Certified Technicians
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-2 mt-auto">
                    <a
                      href={`https://wa.me/250791831403?text=${encodeURIComponent(service.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-green flex-grow-1"
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#54881b')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6aa121')}
                    >
                      💬 WhatsApp
                    </a>
                    <button className="btn btn-sm btn-outline-primary">
                      📄 Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-5 fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <p className="text-muted">
            <strong>Need a custom solution?</strong> We design tailored services for your business.
          </p>
          <a href="mailto:etetechs7@gmail.com" className="btn btn-blue btn-lg mt-2">
            📧 Request Custom Service
          </a>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .service-card {
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default Services;