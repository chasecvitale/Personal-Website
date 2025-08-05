import React, { useEffect, useState, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef(null);

  const openPDF = (e) => {
    e.preventDefault();
    window.open('/resume.html', '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 750);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);

      if (!isSmallScreen) {
        setIsScrollingDown(currentScrollY > lastScrollY.current && currentScrollY > 0);
        lastScrollY.current = currentScrollY;
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSmallScreen]);

  return (
    <header
      className={`header ${isScrollingDown && !isSmallScreen && !isAtTop ? 'hidden' : ''}`}
    >
      {/* Left Side: Website Name */}
      <div className="left">
        <a href="/" className="header-link">
          Chase C. Vitale
        </a>
      </div>

      {/* Right Side: Links */}
      <div className="right">
        <div className="desktop-nav">
          <button className="header-link" onClick={openPDF}>
            Resume
          </button>
          <a
            href="https://www.linkedin.com/in/chasecvitale/"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/chasecvitale"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            GitHub
          </a>
          <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              <span className="dropdown-hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={() => scrollToSection('about')}>About Me</button>
                <button onClick={() => scrollToSection('projects')}>Projects</button>
                <button onClick={() => scrollToSection('work')}>Work Experience</button>
                <button onClick={() => scrollToSection('languages')}>Languages</button>
                <button onClick={() => scrollToSection('tools')}>Tools</button>
              </div>
            )}
          </div>
        </div>
        
        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <button onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }}>About Me</button>
          <button onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }}>Projects</button>
          <button onClick={() => { scrollToSection('work'); setIsMenuOpen(false); }}>Work Experience</button>
          <button onClick={() => { scrollToSection('languages'); setIsMenuOpen(false); }}>Languages</button>
          <button onClick={() => { scrollToSection('tools'); setIsMenuOpen(false); }}>Tools</button>
          <button onClick={(e) => { openPDF(e); setIsMenuOpen(false); }}>Resume</button>
          <a
            href="https://www.linkedin.com/in/chasecvitale/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/chasecvitale"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
