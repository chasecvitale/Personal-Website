import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Tools from './components/Tools';
import WorkExperience from './components/WorkExperience';

function App() {
    return (
        <div>
            <Helmet>
                <link rel="icon" type="image/png" href="../public/favicon.ico" sizes="16x16" />
                <title>Chase C. Vitale | Portfolio</title>
            </Helmet>
            <Header />
            <br/> <br/>
            <div id="about">
                <Title title="About Me" />
                <Profile />
            </div>
            <div id="projects">
                <Title title="Projects" />
                <Projects />
            </div>
            <div id="work">
                <Title title="Work Experience" />
                <WorkExperience />
            </div>
            <div id="languages">
                <Title title="Languages" />
                <Languages />
            </div>
            <div id="tools">
                <Title title="Tools" />
                <Tools />
            </div>
            <Title title="" /> 
            <Footer />
        </div>
    );
}

export default App;
