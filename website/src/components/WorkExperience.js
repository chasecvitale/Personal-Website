import React from 'react';
import ProjectCard from './ProjectCard';
import nyu from '../assets/nyu.png';
import eagor from '../assets/eagor.png';
import betterment from '../assets/betterment.png';

const WorkExperience = () => {
    return (
       <div style={{width: '100%', gap: '20px'}}>
            <ProjectCard 
                name="Betterment" 
                photoUrl={betterment} 
                links={[
                    ['Betterment', 'https://www.betterment.com']
                ]}
                description="I will be working as a Software Engineering intern for the Summer of 2026."
            />
            <ProjectCard 
                name="Eagor Inc." 
                photoUrl={eagor} 
                links={[
                    ['Eagor', 'https://www.eagor.ai']
                ]}
                description={"At Eagor Inc., I helped develop an iOS productivity app that transformed inbox, messages, and calendar chaos into a collaborative, swipeable action feed. Unlike traditional productivity tools that isolated users, Eagor was built for how people actually worked together. As a Software Engineering Intern, I delivered features weekly to demonstrate product viability to investors, working across both Firebase backend and Swift frontend. My contributions included local calendar storage systems, UI components like toast notifications, and user experience improvements for the growing user base. This role provided valuable startup experience and full-stack mobile development skills."}            />

            <ProjectCard 
                name="NYU High Speed Research Network" 
                photoUrl={nyu} 
                links={[
                    ['High Speed Research Network', 'https://vip.hsrn.nyu.edu'],
                    ['Corelink', 'https://corelink.hsrn.nyu.edu']
                ]}
                description="At NYU's High Speed Research Network, I collaborated with a selective research team to develop Corelink benchmarking infrastructure using Python. I programmed configurable benchmarking tools to measure UDP, TCP, and WebSocket performance across various network scenarios, dedicating 10 hours per week to the project including weekly stand-up meetings. Through systematic testing, I identified and reported a critical TCP data-loss bug occurring at high payload sizes, which led to a confirmed fix by the team lead that increased overall data throughput. I also authored two comprehensive benchmarking reports with detailed protocol analysis and optimization recommendations. This experience provided valuable exposure to network protocol research, collaborative development practices, and technical writing in an academic research environment."
            />
       </div>
    );
};

export default WorkExperience;
