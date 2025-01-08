import React from 'react';
import headshot from '../assets/headshot.JPG'; // Import your headshot image
import './Profile.css'; // Import the CSS file

const Profile = () => {
    return (
        <div className="profileSection">
            {/* Profile Image */}
            <img src={headshot} alt="Profile" />
            
            {/* Text Section */}
            <div className="textSection">
                {/* Hello with Line */}
                <div className="helloSection">
                    <span className="helloText">Hello,</span>
                    <div className="line"></div>
                </div>

                {/* Large Text */}
                <p className="bodyText">
                    I'm <span className="italicText">Chase</span>, a student at <span className="purpleText">NYU</span> studying <span className="italicText">Mathematics</span> and <span className="italicText">Computer Science</span>, with a minor in <span className="italicText">Economics</span>.
                    <br></br>
                    <br></br>
                    <br></br>
                    As part of my studies, I have learned valuable skills through classes such as <span className="italicText">Data Structures</span> and <span className="italicText">Linear Algebra</span>. I have also delved into the theory side of Computer Science through <span className="italicText">Texts and Ideas: AI and Its Discontents</span>.
                    <br></br>
                    <br></br>
                    <br></br>
                    Scroll down to see my recent projects!
                    <br></br>
                    <br></br>
                </p>
                <div className="helloSection">
                    <div className="line"></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
