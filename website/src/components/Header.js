import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import Resume from '../assets/Vitale-Resume.pdf'; // Ensure the Resume path is correct

const Header = () => {
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true); // Track if the user is at the top of the page
    const lastScrollY = useRef(0);

    const openPDF = (e) => {
        e.preventDefault(); // Prevent the default link behavior

        // Open a new window
        const pdfWindow = window.open("");

        const title = "Chase C. Vitale | Résumé";
        const URI = "Resume";
        
        // Make sure Resume points to the correct URL
        const html = `
            <html>
                <head>
                    <title>${title}</title>
                    <link rel="icon" type="image/png" href="../public/favicon.ico" sizes="16x16" />
                </head>
                <body style="margin:0">
                    <embed width="100%" height="100%" src="${Resume}" type="application/pdf">
                </body>
            </html>
        `;
        
        // Write the HTML content to the new window
        pdfWindow.document.write(html);
        pdfWindow.document.close();
        
        // Modify the URL in the new window’s address bar
        pdfWindow.history.pushState(null, null, URI);

        // Focus the new tab (though this may be blocked by some browsers)
        pdfWindow.focus();
    };

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
                <a 
                    href="#" 
                    className="header-link" 
                    onClick={openPDF} // Open PDF in a new tab
                >
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
