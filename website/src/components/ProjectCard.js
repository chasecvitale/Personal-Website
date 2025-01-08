import React from 'react';

const ProjectCard = ({ name, description, photoUrl, color, textColor }) => {  // Destructure the props
    return (
        <div style={{ ...styles.card, backgroundColor: color }}> {/* Apply dynamic background color */}
            <p style={{ ...styles.name, color: textColor }}>{name}</p>
            <img src={photoUrl} alt="Project Image" style={styles.photo} /> {/* Corrected src to photoUrl */}
            <p style={styles.description}>{description}</p>
        </div>
    );
};

const styles = {
    card: {
        padding: '20px',
        flexDirection: 'column',
        display: 'flex',
        width: '300px',
        height: '300px',
        //borderRadius: '15px',
        borderColor: '#2a2829',
        borderWidth: '1px',
        borderStyle: 'solid',
        padding: '30px',
    },

    name: {
        fontSize: '25px',
        textAlign: 'center',
    },

    photo: {
        width: '90%',
    },

    description: {
        fontSize: '27px',
        color: '#e0e0dc',
    },
}

export default ProjectCard;
