import React from 'react';
import ProjectCard from './ProjectCard';
import places2be from '../assets/places2be.png';
import MusicTinder from '../assets/MusicTinder.png';
import nyu from '../assets/nyu.png';
import CV from '../assets/CV.png';

const Projects = () => {
    return (
       <div style={{width: '100%', gap: '20px'}}>
            <ProjectCard name="NYU Holodeck: High Speed Research Network" photoUrl={nyu} websiteHSRN = 'https://vip.hsrn.nyu.edu' websiteCORELINK = 'https://corelink-docs.hsrn.nyu.edu' description="Collaborating with a selective research team to develop NYU’s Corelink in Python, where I built benchmarking tools for UDP, TCP, and WebSocket protocols with configurable settings to test various scenarios. I identified and reported a critical TCP data-loss bug at high payload sizes, resulting in a confirmed fix. Additionally, I authored comprehensive benchmarking reports with detailed analysis and protocol optimization recommendations. I dedicate 10 hours per week to the project, including participating in weekly stand-up meetings to track progress and set goals."/>
            <ProjectCard name="places2be" photoUrl={places2be} presentationLink = 'https://www.figma.com/deck/yI30z3gyaAsaDWAq1beOqz/Places2Be-Presentation?node-id=1-25&t=xri7Ei7RVMtBeRYV-1' demoLink = 'https://www.youtube.com/watch?v=xZwKXef8rUE' description="This mobile application was created to help NYU students share and review study spots in the New York City area. It was developed using Node.js and React Native. Xcode and Expo were used to simulate the app during development, and Google Firebase was used via API integration for backend management of data. At the end of devlopment, the project was presented at a project showcase, where a Tech@NYU cohort lead ranked it as the best Fall 2024 Project."/>
            <ProjectCard name="Music Tinder" photoUrl={MusicTinder}  demoLink = 'https://www.youtube.com/watch?v=VzFGb4SRqw0' description="Music Tinder is a Spotify-integrated application that gamifies music discovery by allowing users to swipe through their liked songs organized by genre, similar to the Tinder dating app interface. Users can select genres from their music library, then swipe left to skip or right to save songs they enjoy, with the interface dynamically adapting its color scheme to match each track's album artwork. The application features audio streaming capabilities through YouTube for song previews and leverages the Spotify API to fetch user libraries and create custom playlists. After swiping through songs, users can automatically generate a new Spotify playlist containing all their right-swiped tracks, making it an engaging tool for rediscovering forgotten favorites and creating curated playlists."/>
            <ProjectCard name="This Website!" photoUrl={CV} description="This personal portfolio was created using Node.js and React, with some styling done with CSS. It was deployed using Netlify for automatic updating of the webpage when pushing to the project's main branch on GitHub."/>
       </div>
    );
};

export default Projects;
