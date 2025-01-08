import React from 'react';
import './Footer.css'; // Import the CSS file
import Resume from '../assets/Vitale-Resume.pdf'

const Footer = () => {
    return (
        <footer className="footer">
            {/* Left Side: Website Name */}
            <div className="left">
                <a href="/" className="link">
                    Chase C. Vitale
                </a>
            </div>

            {/* Right Side: Links */}
            <div className="right">
                <a href={Resume} className ='link' target="_blank" rel="noreferrer">
                    Résumé
                </a>
                <a href="https://www.linkedin.com/in/chasecvitale/" target="_blank" rel="noopener noreferrer" className="link">
                    LinkedIn
                </a>
                <a href="https://github.com/chasecvitale" target="_blank" rel="noopener noreferrer" className="link">
                    GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;
