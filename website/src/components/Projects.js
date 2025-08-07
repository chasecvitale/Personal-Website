import React from 'react';
import ProjectCard from './ProjectCard';
import places2be from '../assets/places2be.png';
import MusicTinder from '../assets/MusicTinder.png';
import CV from '../assets/CV.png';

const Projects = () => {
    return (
       <div style={{width: '100%', gap: '20px'}}>
            
            <ProjectCard 
                name="SwipeBeats" 
                photoUrl={MusicTinder}  
                links={[
                    ['Demo', 'https://www.youtube.com/watch?v=4RlmLPf11_I']
                ]}
                description="SwipeBeats is a Python application I developed to gamify playlist making by transforming users' Spotify libraries into a Tinder-style swiping experience. The application integrates with the Spotify Web API to fetch users' complete music libraries, then organizes tracks by genre using a custom classification system that processes 3,600+ songs. I built the interface using Pygame, implementing OAuth authentication for secure Spotify access and dynamic UI theming that adapts based on album artwork colors. The app features real-time audio streaming through YouTube integration for song previews, allowing users to swipe left to skip or right to save tracks they enjoy. After completing a swiping session, users can automatically generate new Spotify playlists containing all their favorited tracks. This project demonstrated my ability to integrate multiple APIs, handle large datasets, create engaging user interfaces, and build complete applications that solve real user problems around music discovery."
            />
            <ProjectCard 
                name="places2be" 
                photoUrl={places2be} 
                links={[
                    ['Presentation', 'https://www.figma.com/deck/yI30z3gyaAsaDWAq1beOqz/Places2Be-Presentation?node-id=1-25&t=xri7Ei7RVMtBeRYV-1'],
                    ['Demo', 'https://www.youtube.com/watch?v=xZwKXef8rUE']
                ]}
                description="For this collaborative project, I worked with a team to develop a mobile application helping NYU students share and review study spots throughout the New York City area. We built the application using React Native and Node.js, utilizing Xcode and Expo for development simulation and testing. I contributed to frontend development by creating 8 pages that matched detailed Figma design specifications, and integrated Google Firebase API for secure user authentication and synchronized review data across accounts. The project spanned four months of development, culminating in a presentation at the project showcase where a Tech@NYU cohort lead ranked it as the best Fall 2024 Project. This experience provided valuable exposure to collaborative mobile development, API integration, and translating design mockups into functional user interfaces."
            />
            <ProjectCard 
                name="This Website!" 
                photoUrl={CV} 
                description="I developed this personal portfolio website to showcase my technical projects and professional experience using React and Node.js with custom CSS styling. The site features a clean, responsive design that highlights my software development work, research experience, and technical skills across multiple projects. I implemented automatic deployment through Netlify, which seamlessly updates the live website whenever changes are pushed to the project's main GitHub branch. This project allowed me to demonstrate my frontend development capabilities, version control workflow, and understanding of modern web deployment practices while creating a professional online presence for my technical career."
            />
       </div>
    );
};

export default Projects;
