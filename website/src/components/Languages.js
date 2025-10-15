import React from 'react';
import Java from "../assets/java.png";
import Python from "../assets/python.png";
import JS from "../assets/js.png";
import C from "../assets/c.png";
import Swift from "../assets/swift.png";
import Cpp from "../assets/C++.png";
import './Languages.css';

const Languages = () => {
    return (
        <div className="iconContainer">
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
            <div className="iconItem">
                <img src={C} alt="C" className="iconImage" />
                <p className="iconLabel">C</p>
            </div>
            <div className="iconItem">
                <img src={Cpp} alt="C++" className="iconImage" />
                <p className="iconLabel">C++</p>
            </div>
            <div className="iconItem">
                <img src={Swift} alt="Swift" className="iconImage" />
                <p className="iconLabel">Swift</p>
            </div>
        </div>
    );
};

export default Languages;
