import React from 'react';
import ProjectCard from './ProjectCard';
import nyu from '../assets/nyu.png';
import eagor from '../assets/eagor.png';

const WorkExperience = () => {
    return (
       <div style={{width: '100%', gap: '20px'}}>
            <ProjectCard name="Eagor Inc" photoUrl={eagor} />

            <ProjectCard name="NYU High Speed Research Network" photoUrl={nyu} websiteUrl='https://vip.hsrn.nyu.edu' description="Collaborating with a selective research team to develop NYU's Corelink in Python, where I built benchmarking tools for UDP, TCP, and WebSocket protocols with configurable settings to test various scenarios. I identified and reported a critical TCP data-loss bug at high payload sizes, resulting in a confirmed fix. Additionally, I authored comprehensive benchmarking reports with detailed analysis and protocol optimization recommendations. I dedicate 10 hours per week to the project, including participating in weekly stand-up meetings to track progress and set goals."/>
       </div>
    );
};

export default WorkExperience;
