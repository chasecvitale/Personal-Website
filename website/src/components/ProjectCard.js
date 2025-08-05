import React from 'react';
import './ProjectCard.css'; // Import the CSS file

const ProjectCard = ({ name, photoUrl, description, links = [], imageClassName }) => {
    return (
        <div className="container">
            <img className={`image ${imageClassName || ''}`} src={photoUrl} alt={name} />
            <div className="textBox">
                <p className="nameText">{name}</p>
                <p className="descriptionText">{description}</p>

                {/* Render links from the links array */}
                <div className="linkContainer">
                    {links.map(([displayText, url], index) => (
                        <a 
                            key={index}
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="link"
                        >
                            {displayText}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
