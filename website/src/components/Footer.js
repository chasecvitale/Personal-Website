import React from 'react';
import './Footer.css';
import Resume from '../assets/Vitale-Resume.pdf';

const Footer = () => {
  const openPDF = (e) => {
    e.preventDefault();
    // Open the PDF directly in a new tab/window
    window.open(Resume, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer">
      {/* Left Side: Website Name */}
      <div className="left">
        <a href="/" className="footer-link">
          Chase C. Vitale
        </a>
      </div>

      {/* Right Side: Links */}
      <div className="footer-right">
        <button className="footer-link" onClick={openPDF}>
          Résumé
        </button>
        <a
          href="https://www.linkedin.com/in/chasecvitale/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/chasecvitale"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
