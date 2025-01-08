import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
    return (
        <div>
            <Header />
            <Title title="About Me"/>
            <Profile />
            <Title title="My Projects"/>
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
