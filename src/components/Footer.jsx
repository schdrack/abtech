// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-dark text-light py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <p className="mb-0">&copy; {new Date().getFullYear()} AB Tech. All rights reserved.</p>
        </div>
        <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light mx-2"><FaLinkedin size={20} /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light mx-2"><FaTwitter size={20} /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-light mx-2"><FaGithub size={20} /></a>
          <a href="https://youtube.com/f5jiCq5XIgE" target="_blank" rel="noreferrer" className="text-light mx-2"><FaYoutube size={20} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;