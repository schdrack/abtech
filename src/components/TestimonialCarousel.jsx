// src/components/TestimonialCarousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  {
    name: "Jean Baptiste",
    role: "CEO, SmartBuild Rwanda",
    content: "AB Tech delivered our factory automation system flawlessly. Their expertise in PLCs and sensors is unmatched.",
    img: "https://via.placeholder.com/80",
  },
  {
    name: "Claire Uwera",
    role: "IT Director, Kigali Med",
    content: "Reliable, fast, and innovative. They automated our lab equipment with embedded systems perfectly.",
    img: "https://via.placeholder.com/80",
  },
  {
    name: "David Niyonkuru",
    role: "Engineer, EcoPower Ltd",
    content: "From design to maintenance, AB Tech is our go-to partner for electronics and control systems.",
    img: "https://via.placeholder.com/80",
  },
];

const TestimonialCarousel = () => (
  <Carousel showArrows={true} infiniteLoop autoPlay interval={5000} showThumbs={false}>
    {testimonials.map((t, i) => (
      <div key={i} className="p-4 text-center">
        <img src={t.img} alt={t.name} className="rounded-circle mb-3" width="80" />
        <blockquote className="fst-italic">"{t.content}"</blockquote>
        <p><strong>{t.name}</strong><br /><small className="text-muted">{t.role}</small></p>
      </div>
    ))}
  </Carousel>
);

export default TestimonialCarousel;