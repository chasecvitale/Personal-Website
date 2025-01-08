import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Tools from './components/Tools';

function App() {
    return (
        <div>
            <Helmet>
                <link rel="icon" href="./assets/favicon.ico" />
                <title>Chase C. Vitale</title>
            </Helmet>
            <Header />
            <Title title="About Me" />
            <Profile />
            <Title title="Projects" />
            <Projects />
            <Title title="Languages" />
            <Languages />
            <Title title="Tools" />
            <Tools />
            <Footer />
        </div>
    );
}

export default App;
