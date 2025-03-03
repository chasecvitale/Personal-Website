import React from 'react';
import './Footer.css'; // Import the CSS file
import Resume from '../assets/Vitale-Resume.pdf';

const Footer = () => {
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
                <button 
                    className="footer-link" 
                    onClick={openPDF} // Open PDF in a new tab
                >
                    Résumé
                </button>
                <a href="https://www.linkedin.com/in/chasecvitale/" target="_blank" rel="noopener noreferrer" className="footer-link">
                    LinkedIn
                </a>
                <a href="https://github.com/chasecvitale" target="_blank" rel="noopener noreferrer" className="footer-link">
                    GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;
