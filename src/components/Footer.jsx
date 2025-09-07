// src/components/Footer.jsx
import React from 'react';
import { FaWhatsapp, FaYoutube, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="d-flex align-items-center">
              <img
                src="/images/abtech.jpg"
                alt="AB Tech Logo"
                width="30"
                height="30"
                className="rounded me-2"
                style={{ objectFit: 'cover', border: '2px solid #6aa121' }}
              />
              <strong>AB Tech</strong>
            </h5>
            <p className="small mt-3 text-muted">
              Pioneering electronics, automation, and telecommunication solutions in Rwanda.
              Trusted for innovation, reliability, and customer-centric service.
            </p>
            <ul className="list-unstyled">
              <li className="mb-1">
                <FaMapMarkerAlt size={14} className="me-2 text-green" />
                <small>Kigali, Rwanda</small>
              </li>
              <li className="mb-1">
                <FaEnvelope size={14} className="me-2 text-green" />
                <small>etetechs7@gmail.com</small>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6>Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-1"><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li className="mb-1"><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li className="mb-1"><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li className="mb-1"><a href="/projects" className="text-light text-decoration-none">Projects</a></li>
              <li className="mb-1"><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h6>Our Services</h6>
            <ul className="list-unstyled small">
              <li className="mb-1">Electronics Design & Repair</li>
              <li className="mb-1">Automation Systems (PLC, SCADA)</li>
              <li className="mb-1">Telecommunication Networks</li>
              <li className="mb-1">Embedded Systems & IoT</li>
              <li className="mb-1">Technical Training & Support</li>
            </ul>
          </div>

          {/* Social & WhatsApp */}
          <div className="col-lg-3 col-md-6">
            <h6>Connect With Us</h6>
            <div className="d-flex gap-2 mb-3">
              <a
                href="https://wa.me/250791831403"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none d-flex align-items-center"
                title="Chat on WhatsApp"
              >
                <div
                  style={{
                    background: '#25D366',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaWhatsapp size={18} color="white" />
                </div>
              </a>
              <a
                href="https://youtube.com/f5jiCq5XIgE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none d-flex align-items-center"
                title="Watch Our Work on YouTube"
              >
                <div
                  style={{
                    background: '#FF0000',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaYoutube size={18} color="white" />
                </div>
              </a>
              <a
                href="https://linkedin.com/company/ab-tech-rwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none d-flex align-items-center"
                title="Follow on LinkedIn"
              >
                <div
                  style={{
                    background: '#0077B5',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaLinkedin size={18} color="white" />
                </div>
              </a>
              <a
                href="https://twitter.com/abtech_rw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none d-flex align-items-center"
                title="Follow on Twitter"
              >
                <div
                  style={{
                    background: '#1DA1F2',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaTwitter size={18} color="white" />
                </div>
              </a>
            </div>
            <p className="small text-muted">
              Message us for inquiries, support, or project collaboration.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <div className="text-center small text-muted">
          <p className="mb-1">
            &copy; {new Date().getFullYear()} AB Tech. All rights reserved.
          </p>
          <p className="mb-0">
            <small>
              Website built with React & hosted on Vercel • 
              <a href="https://wa.me/250791831403" target="_blank" rel="noopener noreferrer" className="text-green mx-1 text-decoration-none">
                Contact us
              </a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;