import React from 'react';

// সেকশন কম্পোনেন্টগুলো ইমপোর্ট করা হচ্ছে
// import Hero from '../../components/Home/Hero';
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
            {/* Navbar এর Link 'to="home"' এর সাথে মিল রেখে id="home" দেওয়া হয়েছে।
               প্রতিটি সেকশনের id অবশ্যই Navbar এর to এর সাথে মিলতে হবে।
            */}
            
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