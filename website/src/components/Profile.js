import React from 'react';
import headshot from '../assets/headshot.JPG'; // Import your headshot image
import './Profile.css'; // Import the CSS file

const Profile = () => {
    return (
        <div className="profileSection">
            {/* Profile Image */}
            <img src={headshot} alt="Headshot" />
            
            {/* Text Section */}
            <div className="textSection">
                {/* Hello with Line */}
                <div className="helloSection">
                    <span className="helloText">Hello,</span>
                    <div className="line"></div>
                </div>

                {/* Large Text */}
                <p className="bodyText">
                    My name is Chase! I'm currently a student at NYU studying Mathematics and Computer Science, driven by a passion for problem-solving that has remained constant throughout my academic journey. Mathematics has sharpened my critical thinking skills, enabling me to approach complex challenges with precision and analytical rigor. Computer Science has provided me with the technical tools to bring my ideas to life, transforming concepts into real, tangible products.
                    <br></br>
                    <br></br>
                    Through NYU's rigorous coursework, I've developed essential programming skills including data structures, algorithms, and system design. Beyond academics, my personal projects and internship experience have expanded my expertise into UI/UX design, full-stack mobile and web development, API integration, and backend data management.
                    <br></br>
                    <br></br>
                    During the Summer of 2025, I worked as a Software Engineering Intern at Eagor Inc., where I helped build a productivity tool that assisted people stay on top of their tasks. This hands-on experience deepened my understanding of startup environments, agile development, and creating user-centered applications.
                    <br></br>
                    <br></br>
                    Scroll down to explore my recent projects, technical skills, and professional experience!
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
