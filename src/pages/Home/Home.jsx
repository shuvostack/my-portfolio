import React from 'react';
import About from '../../components/Home/About';
import Skills from '../../components/Home/Skills';
import Education from '../../components/Home/Education';
import Experience from '../../components/Home/Experience';
import Projects from '../../components/Home/Projects';
import Contact from '../../components/Home/Contact';
import Hero from '../../components/Home/Hero';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            
            <section id="home">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="skills">
                <Skills />
            </section>

            <section id="education">
                <Education />
            </section>

            <section id="experience">
                <Experience />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default Home;