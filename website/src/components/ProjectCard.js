import React from 'react';
import './ProjectCard.css'; // Import the CSS file

const ProjectCard = ({ name, photoUrl, description, demoLink, presentationLink, website }) => {
    return (
        <div className="container">
            <img className="image" src={photoUrl} alt={name} />
            <div className="textBox">
                <p className="nameText">{name}</p>
                <p className="descriptionText">{description}</p>

                {/* Conditionally render Demo and Presentation links */}
                <div className="linkContainer">
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="link">
                            Demo
                        </a>
                    )}
                    {presentationLink && (
                        <a href={presentationLink} target="_blank" rel="noopener noreferrer" className="link">
                            Presentation
                        </a>
                    )}

                    {website && (
                        <a href={website} target="_blank" rel="noopener noreferrer" className="link">
                            Website
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
