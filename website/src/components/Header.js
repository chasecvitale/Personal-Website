import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import Resume from '../assets/Vitale-Resume.pdf';

const Header = () => {
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true); // Track if the user is at the top of the page
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 750);
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if the user is at the top of the page
            setIsAtTop(currentScrollY === 0);

            if (!isSmallScreen) {
                setIsScrollingDown(currentScrollY > lastScrollY.current && currentScrollY > 0);
                lastScrollY.current = currentScrollY;
            }
        };

        handleResize(); // Set the initial screen size
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSmallScreen]);

    return (
        <header
            className={`header ${
                isScrollingDown && !isSmallScreen && !isAtTop ? 'hidden' : ''
            }`}
        >
            {/* Left Side: Website Name */}
            <div className="left">
                <a href="/" className="header-link">
                    Chase C. Vitale
                </a>
            </div>

            {/* Right Side: Links */}
            <div className="right">
                <a href={Resume} className="header-link" target="_blank" rel="noreferrer">
                    Résumé
                </a>
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
            </div>
        </header>
    );
};

export default Header;
