import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            {/* Left Side: Website Name */}
            <div style={styles.left}>
                <a href="/" style={styles.link}>
                    Chase C. Vitale
                </a>
            </div>

            {/* Right Side: Links */}
            <div style={styles.right}>
                <a href="/resume" style={styles.link}>
                    Résumé
                </a>
                <a href="https://www.linkedin.com/in/chasecvitale/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    LinkedIn
                </a>
                <a href="https://github.com/chasecvitale" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    GitHub
                </a>
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '100px',
        paddingRight: '100px',
        paddingTop: '25px',
        paddingBottom: '25px',
        backgroundColor: '#2a2829',
    },
    left: {
        fontSize: '18px',
        fontWeight: 'bold',
    },
    right: {
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
    },
    link: {
        color: '#e0e0dc',
        textDecoration: 'none',
        fontSize: '18',
    },
};

export default Header;
