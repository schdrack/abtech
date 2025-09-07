// src/pages/Technologies.jsx
import React, { useState, useRef, useEffect } from 'react';

const Technologies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Technologies Data with Real Images from Unsplash & Official Sources
  const categories = [
    {
      id: 1,
      title: "Electronics Design",
      tools: [
        { name: "Altium Designer", link: "https://www.altium.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Altium_Designer_Logo.svg/1200px-Altium_Designer_Logo.svg.png" },
        { name: "Eagle PCB", link: "https://www.autodesk.com/products/eagle/overview", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Eagle_logo.svg/1200px-Eagle_logo.svg.png" },
        { name: "KiCad", link: "https://www.kicad.org", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KiCad_logo.svg/1200px-KiCad_logo.svg.png" },
        { name: "LTspice", link: "https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html", logo: "https://www.analog.com/-/media/analog/en/landing-pages/ltspice/ltspice-logo.png?h=60&la=en&w=300&rev=8a8c7f6d5f8c4f6d8a8c7f6d5f8c4f6d" }
      ],
      image: "https://images.unsplash.com/photo-1610164559911-79be44a83d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWxlY3Ryb25pY3N8ZW58MHx8fHwxNzE3NzYwMDAwfA&ixlib=rb-4.0.3&q=80&w=800",
      description: "From concept to PCB, we use industry-leading tools to design reliable electronic systems."
    },
    {
      id: 2,
      title: "Automation Systems",
      tools: [
        { name: "Siemens TIA Portal", link: "https://new.siemens.com/global/en/products/automation/systems/industrial/plc/simatic-controller/simatic-tia-portal.html", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/TIA-Portal_Logo.svg/1200px-TIA-Portal_Logo.svg.png" },
        { name: "Allen-Bradley RSLogix", link: "https://www.rockwellautomation.com/en-us/products/software/rslogix-programming-software.html", logo: "https://www.rockwellautomation.com/content/dam/ra/en/products/software/rslogix-5000-software/logo.png" },
        { name: "Schneider EcoStruxure", link: "https://www.se.com/ww/en/work/solutions-for-your-enterprise/ecostruxure-digital-transformation/", logo: "https://www.se.com/content/dam/global/branding/logo/ecostruxure-logo.png" },
        { name: "Ignition by Inductive", link: "https://inductiveautomation.com", logo: "https://inductiveautomation.com/images/logo-ignition.svg" }
      ],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kdXN0cmlhbHxlbnwwfHx8fDE3MTc3NjAwMDB8&ixlib=rb-4.0.3&q=80&w=800",
      description: "We automate factories, labs, and buildings using top-tier PLC and SCADA platforms."
    },
    {
      id: 3,
      title: "Telecommunication Systems",
      tools: [
        { name: "Cisco Networking", link: "https://www.cisco.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png" },
        { name: "Ubiquiti UniFi", link: "https://unifi.ui.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ubiquiti_Networks_Logo.svg/1200px-Ubiquiti_Networks_Logo.svg.png" },
        { name: "VoIP (Asterisk, 3CX)", link: "https://www.3cx.com", logo: "https://www.3cx.com/wp-content/themes/3cx/images/logo.svg" },
        { name: "Wireshark", link: "https://www.wireshark.org", logo: "https://www.wireshark.org/assets/images/ws_logo@2x.png" }
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVsZWZvbnxlbnwwfHx8fDE3MTc3NjAwMDB8&ixlib=rb-4.0.3&q=80&w=800",
      description: "We design and deploy secure, high-performance networks for enterprises and institutions."
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
      style={{
        paddingTop: '100px',
        paddingBottom: '80px'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className={`text-center mb-5 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Technologies We Use</h2>
          <p className="lead text-muted">
            Leveraging cutting-edge tools and platforms to deliver innovative solutions across Rwanda.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="row g-5">
          {categories.map((category) => (
            <div className="col-md-6 col-lg-4" key={category.id}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  transform: hoveredCard === category.id ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: hoveredCard === category.id
                    ? '0 12px 24px rgba(0, 0, 0, 0.18)'
                    : '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <div className="position-relative" style={{ height: '180px', overflow: 'hidden' }}>
                  <img
                    src={category.image}
                    alt={category.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.7)'
                    }}
                  />
                  <h5
                    className="position-absolute top-50 start-50 text-white fw-bold"
                    style={{
                      transform: 'translate(-50%, -50%)',
                      textShadow: '0 2px 6px rgba(0,0,0,0.6)'
                    }}
                  >
                    {category.title}
                  </h5>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <p className="text-muted mb-4" style={{ fontSize: '0.95rem' }}>
                    {category.description}
                  </p>

                  {/* Tools List */}
                  <ul className="list-unstyled mb-4">
                    {category.tools.map((tool, i) => (
                      <li key={i} className="d-flex align-items-center mb-2">
                        <a
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center text-decoration-none"
                          onMouseEnter={e => e.currentTarget.style.color = '#007bff'}
                          onMouseLeave={e => e.currentTarget.style.color = 'inherit'}
                        >
                          <img
                            src={tool.logo}
                            alt={tool.name}
                            className="me-2"
                            style={{
                              width: '24px',
                              height: '24px',
                              objectFit: 'contain',
                              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                            }}
                          />
                          <span style={{ fontSize: '0.9rem' }}>{tool.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <a
                    href={category.tools[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-blue w-100"
                    style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
                  >
                    🔗 Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-5 fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <p className="text-muted">
            <strong>Want to learn how we use these technologies?</strong> We offer training and consultation.
          </p>
          <a href="mailto:etetechs7@gmail.com" className="btn btn-green btn-lg mt-2">
            📧 Contact Us for Training
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
      `}</style>
    </section>
  );
};

export default Technologies;