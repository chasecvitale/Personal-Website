import React from 'react';
import ProjectCard from './ProjectCard';
import places2be from '../assets/places2be.png';
import nyu from '../assets/nyu.png';
import CV from '../assets/CV.png';
import pp from '../assets/pp.png';

const Projects = () => {
    return (
       <div style={{width: '100%', gap: '20px'}}>
            <ProjectCard name="places2be" photoUrl={places2be} presentationLink = 'https://www.figma.com/deck/yI30z3gyaAsaDWAq1beOqz/Places2Be-Presentation?node-id=1-25&t=xri7Ei7RVMtBeRYV-1' demoLink = 'https://www.youtube.com/watch?v=xZwKXef8rUE' description="This mobile application was created to help NYU students share and review study spots in the New York City area. It was developed using Node.js and React Native. Xcode and Expo were used to simulate the app during development, and Google Firebase was used via API integration for backend management of data."/>
            <ProjectCard name="NYU Holodeck: High Speed Research Network" photoUrl={nyu} websiteHSRN = 'https://vip.hsrn.nyu.edu' websiteCORELINK = 'https://corelink-docs.hsrn.nyu.edu' description="Working in the Spring 2025 semester with a selective research team of six people to develop NYU’s Corelink using Python. Integrating optional server-side data processing through a modular plugin architecture, enhancing flexibility and scalability. Committing 15 hours per week to project development, including weekly stand-up meetings on project progress and goals."/>
            <ProjectCard name="This Website!" photoUrl={CV} description="This personal portfolio was created using Node.js and React, with some styling done with CSS. It was deployed using Netlify for automatic updating of the webpage when pushing to the project's main branch on GitHub."/>
            <ProjectCard name="ProductivePets" photoUrl={pp} description="Currently designing a widget task manager for iOS and MacOS devices using Swift. It will incentivize users to meet their daily, weekly, and long-terms goals. The manager will gamify the completion of tasks through the implementation of a virtual pet which responds to task completion and ignorance."/>
       </div>
    );
};

export default Projects;
