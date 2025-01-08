import React from 'react';
import Java from "../assets/java.png";
import Python from "../assets/python.png";
import JS from "../assets/js.png";
import './Languages.css';

const Languages = () => {
    return (
        <div style={styles.container}>
            <div className="iconItem">
                <img src={Python} alt="Python" className="iconImage" />
                <p className="iconLabel">Python</p>
            </div>
            <div className="iconItem">
                <img src={Java} alt="Java" className="iconImage" />
                <p className="iconLabel">Java</p>
            </div>
            <div className="iconItem">
                <img src={JS} alt="JavaScript" className="iconImage" />
                <p className="iconLabel">JavaScript</p>
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

export default Languages;
