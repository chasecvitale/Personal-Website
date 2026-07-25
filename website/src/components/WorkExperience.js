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
                description="As a Software Engineering Intern on Betterment's Market Data team, I am building an automated mutual fund eligibility system to close a critical gap in trade processing. Previously, mismatches between a mutual fund's eligibility and an advisor's trade only surfaced after the trade was submitted, causing 8 cross-team incidents in the past year — one requiring 8 teams and 14 days to resolve. I am building a pipeline that automatically ingests Schwab's daily 16,000-fund data file into structured Postgres tables, replacing Ops' manual lookups with direct query access, and designing a change-log system to track eligibility updates over time. Using this data, I am writing a PL/pgSQL function that evaluates eligibility trade-by-trade, blocking ineligible trades before they reach Apex. Building this requires working directly with Operations to translate their domain expertise into logic, and the function will be called directly by Betterment's Trading team in their own production systems."
            />
            <ProjectCard 
                name="Eagor" 
                photoUrl={eagor} 
                links={[
                    ['Eagor', 'https://www.eagor.ai']
                ]}
                description={"At Eagor, I helped develop an iOS productivity app that transformed inbox, messages, and calendar chaos into a collaborative, swipeable action feed. Unlike traditional productivity tools that isolated users, Eagor was built for how people actually worked together. As a Software Engineering Intern, I delivered features weekly to demonstrate product viability to investors, working across both Firebase backend and Swift frontend. My contributions included local calendar storage systems, UI components like toast notifications, and user experience improvements for the growing user base. This role provided valuable startup experience and full-stack mobile development skills."}            />

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
