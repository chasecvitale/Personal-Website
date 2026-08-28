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
                    My name is Chase! I'm currently a student at NYU studying Mathematics and Computer Science, driven by a passion for problem-solving that has remained constant throughout my academic journey. Mathematics has strengthened my critical thinking and analytical skills, while Computer Science has given me the tools to turn ideas into real, tangible products.
                    <br></br>
                    <br></br>
                    Through NYU's rigorous coursework, I've developed a strong foundation in data structures, algorithms, software engineering, and systems. Beyond academics, my personal projects and professional experience have expanded my skills across full-stack development, backend systems, API integration, database management, and UI/UX design.
                    <br></br>
                    <br></br>
                    During Summer 2026, I worked as a Software Engineering Intern at Betterment on the Market Data team, where I built backend systems supporting investment operations and financial data workflows. Working with production systems and real user data strengthened my interest in building reliable software and solving complex problems at scale.
                    <br></br>
                    <br></br>
                    Before Betterment, I worked as a Software Engineering Intern at Eagor Inc., a startup where I helped build a productivity platform and gained hands-on experience with mobile development, agile collaboration, and creating user-centered applications.
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
