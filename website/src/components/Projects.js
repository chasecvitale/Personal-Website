import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'; // Import the CSS file

const Projects = () => {
    return (
       <div className="container">
            <ProjectCard name="places2be" photoUrl="" description="Hi" color="#779dca" textColor="#2a2829" />
            <ProjectCard name="Farmers Retreat Website" photoUrl="" description="Hi" color="#779dca" textColor="#2a2829"/>
            <ProjectCard name="NYU Holodeck: High Speed Research Network" photoUrl="" description="Hi" color="#779dca" textColor="#2a2829"/>
            <ProjectCard name="NYU Holodeck: High Speed Research Network" photoUrl="" description="Hi" color="#779dca" textColor="#2a2829"/>

       </div>
    );
};

export default Projects;
