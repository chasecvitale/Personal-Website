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
                    My name is Chase! I'm currently a student enrolled at <span className="purpleText">NYU</span> studying Mathematics and Computer Science. My passion for problem solving has been constant throughout my academic journey, inspiring me to study these two fields. Mathematics has developed my critical thinking skills, allowing me to approach challenges more precisely. Computer Science has given me the tools to implement my own project ideas, creating real, tangible products.
                    <br></br>
                    <br></br>
                    <span className="purpleText">NYU</span>'s courses have provided me essential programming skills, such as data management, logical analysis, and manipulating numerical data. Outside of this, my personal projects have developed my skills in UI/UX design, app and web development, and backend storage of data.
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
