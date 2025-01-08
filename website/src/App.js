import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Tools from './components/Tools';
import Databases from './components/Databases';

function App() {
    return (
        <div>
            <Header />
            <Title title="About Me"/>
            <Profile />
            <Title title="Projects"/>
            <Projects />
            <Title title="Languages"/>
            <Languages />
            <Title title="Tools"/>
            <Tools />
            <Title title="Databases"/>
            <Databases />
            <Footer />
        </div>
    );
}

export default App;
