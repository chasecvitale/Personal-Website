import React from 'react';
import ProjectCard from './ProjectCard';
import places2be from '../assets/places2be.png';
import MusicTinder from '../assets/MusicTinder.png';
import nyu from '../assets/nyu.png';
import CV from '../assets/CV.png';

const Projects = () => {
    return (
       <div style={{width: '100%', gap: '20px'}}>
            <ProjectCard name="places2be" photoUrl={places2be} presentationLink = 'https://www.figma.com/deck/yI30z3gyaAsaDWAq1beOqz/Places2Be-Presentation?node-id=1-25&t=xri7Ei7RVMtBeRYV-1' demoLink = 'https://www.youtube.com/watch?v=xZwKXef8rUE' description="This mobile application was created to help NYU students share and review study spots in the New York City area. It was developed using Node.js and React Native. Xcode and Expo were used to simulate the app during development, and Google Firebase was used via API integration for backend management of data. At the end of development, the project was presented at a project showcase, where a Tech@NYU cohort lead ranked it as the best Fall 2024 Project."/>
            <ProjectCard name="Music Tinder" photoUrl={MusicTinder}  demoLink = 'https://www.youtube.com/watch?v=VzFGb4SRqw0' description="Music Tinder is a Spotify-integrated Python application that gamifies music discovery by allowing users to swipe through their liked songs organized by genre. Users can select genres from their music library, then swipe left to skip or right to save songs they enjoy. It was built using Pygame, and features audio streaming capabilities through YouTube for song previews and leverages the Spotify API to fetch user libraries and create custom playlists. After swiping through songs, users can automatically generate a new Spotify playlist containing all their right-swiped tracks."/>
            <ProjectCard name="This Website!" photoUrl={CV} description="This personal portfolio was created using Node.js and React, with some styling done with CSS. It was deployed using Netlify for automatic updating of the webpage when pushing to the project's main branch on GitHub."/>
       </div>
    );
};

export default Projects;
