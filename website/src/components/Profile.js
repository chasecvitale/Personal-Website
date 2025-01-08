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
                    I'm Chase, a student at <span className="purpleText">NYU</span> studying Mathematics and Computer Science, with a minor in Economics.
                    <br></br>
                    <br></br>
                    <br></br>
                    I have learned valuable skills through classes such as Data Structures and Linear Algebra. Additionaly, I delved into the theory side of Computer Science through Texts and Ideas: AI and Its Discontents.
                    <br></br>
                    <br></br>
                    <br></br>
                    Scroll down to see my recent projects, languages, and tools!
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
