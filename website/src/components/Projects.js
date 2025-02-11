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
            <ProjectCard name="ProductivePets" photoUrl={pp} description="Currently designing a widget task manager for iOS and MacOS devices using Swift. It will incentivize users to meet their daily, weekly, and long-terms goals. The manager will gamify the completion of tasks through the implementation of a virtual pet which responds to task completion and ignorance."/>
            <ProjectCard name="NYU Holodeck: High Speed Research Network" photoUrl={nyu} website = 'https://vip.hsrn.nyu.edu' description="Accepted for the Spring Semester into one of NYU's highly selective VIP programs. This project will involve a 15 hour per week time commitment, and weekly standup meetings with team members. Specific project descriptions will be released at the beginning of the semester."/>
            <ProjectCard name="This Website!" photoUrl={CV} description="This personal portfolio was created using Node.js and React, with some styling done with CSS. It was deployed using Netlify for automatic updating of the webpage when pushing to the project's main branch on GitHub."/>
       </div>
    );
};

export default Projects;
