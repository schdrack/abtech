// src/pages/Projects.jsx
import React, { useState, useRef, useEffect } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState('All'); // Filter state
  const [lang, setLang] = useState('en'); // Language toggle
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 🔤 Translations
  const t = {
    en: {
      filter: "Filter by:",
      all: "All",
      automation: "Automation",
      electronics: "Electronics",
      iot: "IoT",
      embedded: "Embedded",
      telecom: "Telecom",
      smartCity: "Smart City",
      client: "Client",
      year: "Year",
      tech: "Tech",
      viewCase: "View Case Study",
      download: "Download PDF",
      testimonial: "Client Feedback"
    },
    kin: {
      filter: "Gusohora kuri:",
      all: "By’iminsi",
      automation: "Guverna",
      electronics: "Ibikoresho by’umweso",
      iot: "IoT",
      embedded: "Système y’umweso",
      telecom: "Amakuru",
      smartCity: "Umujyi Mwiza",
      client: "Umukiriya",
      year: "Kanya",
      tech: "Teknoloji",
      viewCase: "Reba Icyifuzo",
      download: "Kanda PDF",
      testimonial: "Amategeko y'umukiriya"
    }
  };

  // Projects Data (with Kinyarwanda descriptions, testimonials, and PDF links)
  const projects = [
    {
      id: 1,
      title: {
        en: "Smart Home Automation System",
        kin: "Système y’Igikoresha cy’Igiti"
      },
      description: {
        en: "Full IoT-based smart home with remote lighting, climate, and security control via mobile app.",
        kin: "Umweso w’igikoresha cy’igiti wose uzuza amashanyarazi, amakungu, no kubika kuri telefoni."
      },
      category: "IoT & Automation",
      image: "https://images.unsplash.com/photo-1632653570783-e6c156b78000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHxlbnwwfHx8fDE3MTc3NjAwMDA&ixlib=rb-4.0.3&q=80&w=800",
      client: "Private Residence, Kigali",
      year: "2023",
      tech: ["Arduino", "NodeMCU", "React App"],
      pdf: "/pdf/smart-home-case-study.pdf", // Place in public/pdf/
      testimonial: {
        text: "AB Tech transformed our home into a truly smart environment. Reliable and innovative!",
        author: "Jean, Kigali"
      }
    },
    {
      id: 2,
      title: {
        en: "Industrial PLC Automation for Manufacturing",
        kin: "Guverna y’Igikoresho k’Imibereho"
      },
      description: {
        en: "PLC-controlled conveyor and robotic arm system with real-time monitoring dashboard for a Rwandan factory.",
        kin: "Igikoresho cy’umusaruro no muhere w’imibereho ikurikira ibikoresho by’umweso."
      },
      category: "Industrial Automation",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kdXN0cmlhbHxlbnwwfHx8fDE3MTc3NjAwMDB8&ixlib=rb-4.0.3&q=80&w=800",
      client: "Innovatech Manufacturing Ltd.",
      year: "2022",
      tech: ["Siemens PLC", "SCADA", "HMI"],
      pdf: "/pdf/plc-manufacturing-case.pdf",
      testimonial: {
        text: "Efficiency increased by 40%. Their team is highly skilled and professional.",
        author: "Claire, Production Manager"
      }
    },
    {
      id: 3,
      title: {
        en: "Telecom Network for Healthcare Facility",
        kin: "Igikoresho cy’Amakuru ku Byemezo"
      },
      description: {
        en: "Designed and installed structured cabling, Wi-Fi mesh, and VoIP system for Kigali Med Hospital.",
        kin: "Twanditswe ibikoresho by’umweso, Wi-Fi, no VoIP ku Byemezo Kigali Med."
      },
      category: "Telecommunication",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVsZWZvbnxlbnwwfHx8fDE3MTc3NjAwMDB8&ixlib=rb-4.0.3&q=80&w=800",
      client: "Kigali Med Hospital",
      year: "2023",
      tech: ["Cisco Routers", "Fiber Optic", "VoIP"],
      pdf: "/pdf/telecom-health-case.pdf",
      testimonial: {
        text: "Reliable network setup. AB Tech delivered on time and within budget.",
        author: "Dr. David, IT Head"
      }
    },
    {
      id: 4,
      title: {
        en: "Solar-Powered Monitoring System",
        kin: "Système y’Igikoresho cy’Amasunzu"
      },
      description: {
        en: "Embedded system using Raspberry Pi to monitor solar panel performance and battery health.",
        kin: "Igikoresho cy’umweso ku Raspberry Pi kugeraho ibikoresho by’amasunzu no battery."
      },
      category: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1621350463871-6439d9a87e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c29sYXJ8ZW58MHx8fHwxNzE3NzYwMDAwfA&ixlib=rb-4.0.3&q=80&w=800",
      client: "Rural Energy Initiative",
      year: "2024",
      tech: ["Raspberry Pi", "Python", "IoT Sensors"],
      pdf: "/pdf/solar-monitoring-case.pdf",
      testimonial: {
        text: "Perfect solution for off-grid monitoring. Highly recommend AB Tech!",
        author: "Faustin, Energy Coordinator"
      }
    },
    {
      id: 5,
      title: {
        en: "Lab Equipment Automation",
        kin: "Guverna y’Ibikoresho by’Igikoresho"
      },
      description: {
        en: "Automated temperature and humidity control in a research lab using custom Arduino firmware.",
        kin: "Twaguzaga amakungu no umuheto ku lab ikora Arduino firmware."
      },
      category: "Electronics & Control",
      image: "https://images.unsplash.com/photo-1595118392204-228a64b86955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFifGVufDB8fHx8MTcxNzc2MDAwMHw&ixlib=rb-4.0.3&q=80&w=800",
      client: "Kigali Science Institute",
      year: "2023",
      tech: ["Arduino", "DHT22", "Relay Modules"],
      pdf: "/pdf/lab-automation-case.pdf",
      testimonial: {
        text: "Precise, reliable, and well-documented. AB Tech is a true partner.",
        author: "Prof. Uwera, Lab Director"
      }
    },
    {
      id: 6,
      title: {
        en: "Smart Traffic Light System",
        kin: "Igikoresho cy’Amashanyarazi y’Igikoresho"
      },
      description: {
        en: "AI-assisted traffic lights with real-time sensor feedback to reduce congestion.",
        kin: "Amashanyarazi y’igikoresho y’umweso y’AI yerekana ibyifuzo ku isoko."
      },
      category: "Smart City",
      image: "https://images.unsplash.com/photo-1518600382397-d64c75543eac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJhZmZpY3xlbnwwfHx8fDE3MTc3NjAwMDB8&ixlib=rb-4.0.3&q=80&w=800",
      client: "Kigali City Council",
      year: "2024",
      tech: ["Raspberry Pi", "OpenCV", "LoRa"],
      pdf: "/pdf/smart-traffic-case.pdf",
      testimonial: {
        text: "Reduced traffic jams by 30%. A game-changer for urban planning.",
        author: "Eng. Niyonkuru, City Planner"
      }
    }
  ];

  // Filter projects
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(filter));

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
    <section ref={sectionRef} className="section bg-light" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        {/* Language Toggle */}
        <div className="text-end mb-3">
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setLang(lang === 'en' ? 'kin' : 'en')}
          >
            {lang === 'en' ? '🇰🇮 KIN' : '🇺🇸 EN'}
          </button>
        </div>

        {/* Section Header */}
        <div className={`text-center mb-5 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">{t[lang].projects}</h2>
          <p className="lead text-muted">
            {t[lang].desc}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="text-center mb-5">
          <h6 className="d-inline-block me-3">{t[lang].filter}</h6>
          {['All', 'Automation', 'Electronics', 'IoT', 'Embedded', 'Telecom', 'Smart City'].map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm me-2 px-3 ${
                filter === cat ? 'btn-blue text-white' : 'btn-outline-dark'
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-5">
          {filteredProjects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  transform: hoveredProject === project.id ? 'translateY(-10px)' : 'translateY(0)'
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image & Category */}
                <div className="position-relative">
                  <img src={project.image} alt={project.title[lang]} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                  <span
                    className="position-absolute top-0 start-0 m-3 px-2 py-1 rounded"
                    style={{
                      backgroundColor: project.category.includes('Automation') ? '#007bff' :
                                      project.category.includes('IoT') ? '#6aa121' :
                                      project.category.includes('Embedded') ? '#9c27b0' : '#1f1f1f',
                      color: 'white',
                      fontSize: '0.8rem'
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Body */}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title[lang]}</h5>
                  <p className="card-text text-muted flex-grow-1" style={{ fontSize: '0.9rem' }}>
                    {project.description[lang]}
                  </p>

                  {/* Client & Year */}
                  <div className="mt-2">
                    <small className="text-primary"><strong>📍 {t[lang].client}: {project.client}</strong></small><br />
                    <small className="text-muted">📅 {t[lang].year}: {project.year}</small>
                  </div>

                  {/* Tech */}
                  <div className="mt-2">
                    {project.tech.slice(0, 2).map((tech, i) => (
                      <span key={i} className="badge bg-light text-dark me-1" style={{ fontSize: '0.7rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="mt-3 p-2 bg-light rounded">
                    <small><em>"{project.testimonial.text}"</em></small><br />
                    <small className="text-muted">— {project.testimonial.author}</small>
                  </div>
                </div>

                {/* Hover Overlay */}
                {hoveredProject === project.id && (
                  <div
                    className="position-absolute w-100 h-100 top-0 start-0 d-flex flex-column align-items-center justify-content-center"
                    style={{ background: 'rgba(0, 0, 0, 0.75)', color: 'white', padding: '20px' }}
                  >
                    <p>{project.description[lang]}</p>
                    <div className="d-flex gap-2">
                      <a
                        href={project.pdf}
                        className="btn btn-sm btn-green"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        📄 {t[lang].download}
                      </a>
                      <button className="btn btn-sm btn-outline-light">
                        👁️ {t[lang].viewCase}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-5 fade-in ${isVisible ? 'visible' : ''}`}>
          <p className="text-muted"><strong>{t[lang].cta}</strong></p>
          <a href="mailto:etetechs7@gmail.com" className="btn btn-blue btn-lg mt-2">Contact If you want any projects📧 {t[lang].contact}</a>
        </div>
      </div>

      <style jsx>{`
        .fade-in { opacity: 0; transform: translateY(20px); transition: all 0.8s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  );
};

export default Projects;