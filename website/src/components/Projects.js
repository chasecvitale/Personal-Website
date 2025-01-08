import React from 'react';
import ProjectCard from './ProjectCard';
import places2be from '../assets/places2be.png';
import noimage from '../assets/noimage.png';
import nyu from '../assets/nyu.png';
import CV from '../assets/CV.png';

const Projects = () => {
    return (
       <div style={{width: '100%', gap: '20px'}}>
            <ProjectCard name="places2be" photoUrl={places2be} presentationLink = 'https://www.figma.com/deck/yI30z3gyaAsaDWAq1beOqz/Places2Be-Presentation?node-id=1-25&t=xri7Ei7RVMtBeRYV-1' demoLink = 'https://www.youtube.com/watch?v=xZwKXef8rUE' description="This mobile application was created using Node.js and React Native. Xcode was used to simulate the app during development, and Google Firebase was used via API integration for backend management of data."/>
            <ProjectCard name="NYU Holodeck: High Speed Research Network" photoUrl={nyu} website = 'https://vip.hsrn.nyu.edu' description="Hi"/>
            <ProjectCard name="Farmers Retreat Website" photoUrl={noimage} description="Hi"/>
            <ProjectCard name="This Website!" photoUrl={CV} description="This personal portfolio was created using Node.js and React. It was deployed using Netlify for automatic updating of the webpage when pushing to the project's main branch on GitHub."/>
       </div>
    );
};

export default Projects;
