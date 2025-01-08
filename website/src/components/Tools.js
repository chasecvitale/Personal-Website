import React from 'react';
import ReactLogo from '../assets/react.png';
import nodejs from '../assets/nodejs.png';
import git from '../assets/git.png';
import css from '../assets/css.svg';
import './Tools.css';

const Tools = () => {
    return (
        <div style={styles.container}>
            <div className="iconItem">
                <img src={ReactLogo} alt="React Native" className="iconImage" />
                <p className="iconLabel">React Native</p>
            </div>
            <div className="iconItem">
                <img src={ReactLogo} alt="React" className="iconImage" />
                <p className="iconLabel">React</p>
            </div>
            <div className="iconItem">
                <img src={nodejs} alt="Node.js" className="iconImage" />
                <p className="iconLabel">Node.js</p>
            </div>
            <div className="iconItem">
                <img src={git} alt="Git" className="iconImage" />
                <p className="iconLabel">Git</p>
            </div>
            <div className="iconItem">
                <img src={css} alt="CSS" className="iconImage" />
                <p className="iconLabel">CSS</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '60px',
        marginLeft: '100px',
        marginRight: '100px',
    },
};

export default Tools;
