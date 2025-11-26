// src/pages/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaWhatsapp, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const Testimonials = () => {
  const [lang, setLang] = useState('en');
  const [whatsAppMessages, setWhatsAppMessages] = useState([]);

  // 🔤 Translations
  const t = {
    en: {
      title: "What Clients Say",
      subtitle: "Trusted by businesses and institutions across Rwanda",
      rating: "Rated 5/5 for reliability and innovation",
      leaveReview: "Leave a Review on WhatsApp",
      submitForm: "Submit a Testimonial",
      formTitle: "Share Your Experience",
      formSubtitle: "We'd love to hear how InfinityMura supported you!",
      liveFeed: "Live Client Feedback from WhatsApp",
      noMessages: "No recent messages yet. Start the conversation!",
      from: "From"
    },
    kin: {
      title: "Ibyo Abakiriya Bavuga",
      subtitle: "Bizeye n’Imishinga n’Ibigo bitandukanye mu Rwanda",
      rating: "Batanga amanota 5/5 ku bw’ukwizera no guhanga udushya",
      leaveReview: "Tanga Ubutumwa kuri WhatsApp",
      submitForm: "Ohereza Icyo uvuze",
      formTitle: "Sangiza Uburyo Wabikunze",
      formSubtitle: "Turishimira kumenya uko InfinityMura yagufashije!",
      liveFeed: "Ubutumwa bw’Abakiriya bwa Live kuri WhatsApp",
      noMessages: "Nta butumwa bushya buraboneka. Tangira ikiganiro!",
      from: "Ubutumwa bwa"
    }
  };

  // Simulated WhatsApp Messages
  const mockMessages = [
    { id: 1, name: "Jean", text: "Great service! Automation system works perfectly.", time: "2 min ago" },
    { id: 2, name: "Claire", text: "Fast response and excellent technical support.", time: "10 min ago" },
    { id: 3, name: "David", text: "Highly recommend InfinityMura for PLC projects.", time: "15 min ago" }
  ];

  useEffect(() => {
    setWhatsAppMessages(mockMessages);

    const interval = setInterval(() => {
      setWhatsAppMessages(prev => {
        const newMsgs = prev.slice(-2);
        return [
          ...newMsgs,
          {
            id: Date.now(),
            name: ["Jean", "Claire", "David", "Faustin"][Math.floor(Math.random() * 4)],
            text: [
              "Reliable and professional team!",
              "They fixed our network in 2 hours.",
              "Best electronics service in Kigali."
            ][Math.floor(Math.random() * 3)],
            time: "Just now"
          }
        ];
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfYourFormIDHere/viewform?embedded=true";

  return (
    <section className="section bg-light" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
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
        <div className="text-center mb-5">
          <h2 className="section-title">{t[lang].title}</h2>
          <p className="lead text-muted">{t[lang].subtitle}</p>
        </div>

        {/* Live WhatsApp Feed */}
        <div className="bg-white p-4 rounded shadow-sm mb-5" style={{ borderRadius: '16px' }}>
          <h3 className="mb-4" style={{ color: '#25D366' }}>
            <FaWhatsapp size={28} className="me-2" />
            {t[lang].liveFeed}
          </h3>

          {whatsAppMessages.length === 0 ? (
            <p className="text-muted">{t[lang].noMessages}</p>
          ) : (
            <div className="border rounded p-3 bg-light" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {whatsAppMessages.map((msg) => (
                <div key={msg.id} className="mb-3 p-3 bg-white rounded shadow-sm" style={{ position: 'relative' }}>
                  <div className="d-flex justify-content-between">
                    <strong>{msg.name}</strong>
                    <small className="text-muted">{msg.time}</small>
                  </div>
                  <p className="mb-0 mt-1 text-dark" style={{ fontSize: '0.95rem' }}>
                    {msg.text}
                  </p>
                  <FaWhatsapp size={16} color="#25D366" style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.6 }} />
                </div>
              ))}
            </div>
          )}

          {/* WhatsApp CTA */}
          <div className="text-center mt-4">
            <a
              href="https://wa.me/250791831403?text=Hi%20InfinityMura%2C%20I%27d%20like%20to%20share%20my%20experience!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg d-inline-flex align-items-center"
            >
              <FaWhatsapp size={24} className="me-2" /> {t[lang].leaveReview}
            </a>
          </div>
        </div>

        {/* Google Form Section */}
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="bg-white p-4 rounded shadow-sm" style={{ borderRadius: '16px' }}>
              <h3 className="mb-3" style={{ color: '#007bff' }}>{t[lang].formTitle}</h3>
              <p className="text-muted mb-4">{t[lang].formSubtitle}</p>

              <div style={{ height: '600px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <iframe
                  src={GOOGLE_FORM_URL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Testimonial Submission Form"
                  style={{ border: 'none' }}
                >
                  Loading…
                </iframe>
              </div>

              <p className="text-muted mt-3 text-center">
                <FaCheckCircle color="#6aa121" className="me-1" />
                  {lang === 'en'
                    ? "Your testimonial will be reviewed and may be featured on this page."
                    : "Icyo uvuga kizagenzurwa kandi gishobora kugaragara kuri uru rupapuro."
                  }
              </p>
            </div>
          </div>
        </div>

        {/* Trust CTA */}
        <div className="text-center mt-5">
          <p className="text-muted">
            <strong>{t[lang].rating}</strong>
          </p>
          <a
            href="mailto:etetechs7@gmail.com"
            className="btn btn-blue btn-lg mt-2"
          >
            📧 Contact Us for More Info
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
