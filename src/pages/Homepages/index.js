// React
import React from 'react';

// Components
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Skills from '../../components/Skills';
import Footer from '../../components/Footer';
import Projects from '../../components/Projects';

// Data
import { projectsData, skillsData } from '../../utils/data';

const Homepage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Skills skillsData={skillsData} />
            <Projects projectsData={projectsData} />
            <Footer />
        </>
    );
};

export default Homepage;
