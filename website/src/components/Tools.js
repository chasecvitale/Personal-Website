import React from 'react';
import ReactLogo from '../assets/react.png';
import nodejs from '../assets/nodejs.png';
import git from '../assets/git.png';
import css from '../assets/css.svg';
import expo from '../assets/expo.png';
import xcode from '../assets/xcode.png';
import firebase from '../assets/firebase.svg';

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
            <div className="iconItem">
                <img src={expo} alt="Expo" className="iconImage" />
                <p className="iconLabel">Expo</p>
            </div>
            <div className="iconItem">
                <img src={xcode} alt="Xcode" className="iconImage" />
                <p className="iconLabel">Xcode</p>
            </div>
            <div className="iconItem">
                <img src={firebase} alt="Google Firebase" className="iconImage" />
                <p className="iconLabel">Google Firebase</p>
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
