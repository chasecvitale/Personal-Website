import React from 'react';
import firebase from '../assets/firebase.svg';
import './Tools.css';

const Databases = () => {
    return (
        <div style={styles.container}>
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

export default Databases;
