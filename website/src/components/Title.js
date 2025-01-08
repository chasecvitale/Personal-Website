import React from 'react';

const Title = ({ title }) => {  // Destructure the 'title' prop
    return (
        <div style={styles.container}>
            <span style={styles.text}>{title}</span>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#e0e0dc',
        flex: '100%',
        paddingTop: '100px',
        paddingBottom: '75px',
        textAlign: 'center',
    },

    text: {
        fontSize: '30px',
        color: '#2a2829',
    },
};

export default Title;
