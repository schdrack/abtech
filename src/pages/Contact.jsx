// src/pages/Contact.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Play subtle tech sound
  const playSound = () => {
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Optional: Send event to Google Analytics
      if (window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: 'Contact Form'
        });
      }

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div>
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
        onMouseEnter={playSound}
      >
        <FaWhatsapp
          size={60}
          color="#25D366"
          title="Chat with us on WhatsApp"
        />
      </a>

      {/* Contact Section */}
      <section className="section bg-light" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <h2 className="section-title text-center mb-4">Contact Us</h2>
          <p className="text-center mb-5 text-muted">
            We'd love to hear from you! Reach out for inquiries, quotes, or technical support.
          </p>

          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="mb-5">
                <h4 className="mb-4" style={{ color: '#007bff' }}>Get in Touch</h4>

                {/* Email */}
                <div className="d-flex align-items-start mb-4">
                  <FaEnvelope className="text-blue mt-1 me-3" size={20} />
                  <div>
                    <p className="mb-0"><strong>Email</strong></p>
                    <a href="mailto:etetechs7@gmail.com" className="text-decoration-none">
                      etetechs7@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-start mb-4">
                  <FaPhone className="text-green mt-1 me-3" size={20} />
                  <div>
                    <p className="mb-0"><strong>Phone</strong></p>
                    <a href="tel:+250791831403" className="text-decoration-none">
                      +250 791 831 403
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="d-flex align-items-start mb-4">
                  <FaMapMarkerAlt className="text-blue mt-1 me-3" size={20} />
                  <div>
                    <p className="mb-0"><strong>Location</strong></p>
                    <small>Kigali, Rwanda</small>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-4">
                  <h6>Follow Us</h6>
                  <div className="d-flex gap-3">
                    <a href="https://youtube.com/f5jiCq5XIgE" target="_blank" rel="noopener noreferrer" onMouseEnter={playSound}>
                      <FaYoutube size={28} color="#FF0000" />
                    </a>
                    <a href="https://linkedin.com/company/ab-tech-rwanda" target="_blank" rel="noopener noreferrer" onMouseEnter={playSound}>
                      <FaLinkedin size={28} color="#0077B5" />
                    </a>
                    <a href="https://twitter.com/abtech_rw" target="_blank" rel="noopener noreferrer" onMouseEnter={playSound}>
                      <FaTwitter size={28} color="#1DA1F2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="rounded overflow-hidden shadow-sm" style={{ height: '300px', marginTop: '30px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.534538143264!2d30.06122631475554!3d-1.944107998797172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4d4c0b7f53f%3A0x7c8c4c7c7c7c7c7c!2sKigali!5e0!3m2!1sen!2srw!4v1600000000000!5m2!1sen!2srw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="AB Tech Location in Kigali, Rwanda"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label fw-bold">Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                    onMouseEnter={playSound}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    onMouseEnter={playSound}
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="message" className="form-label fw-bold">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your project or question..."
                    required
                    style={{ height: '180px' }}
                    onMouseEnter={playSound}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-blue btn-lg w-100"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: '#007bff',
                    borderColor: '#007bff',
                    padding: '12px 0',
                    fontSize: '1.1rem'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="alert alert-success mt-4 fade show" role="alert">
                    ✅ Thank you, <strong>{formData.name}</strong>! Your message has been sent. 
                    We'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx="true">{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .form-control:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Contact;