import { useRef } from 'react';
import ContactUs from '@/Components/ContactUs';
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import Navbar from '@/Components/Navbar';
import Projects from '@/Components/Projects';
import QandA from '@/Components/Q&A';
import Stat from '@/Components/Stat';

const Home = () => {
    const contactRef = useRef(null);
    const qaRef = useRef(null);
    const statsRef = useRef(null);
    const projectRef = useRef(null);

    const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToQandA = () => qaRef.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToStatus = () => statsRef.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToProjects = () => projectRef.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        <div className='bg-gradient-to-br from-[#1e1e1e] to-[#4e3535]'>
            <Navbar
                onContactClick={scrollToContact}
                onQandAClick={scrollToQandA}
                onStatusClick={scrollToStatus}
                onProjectsClick={scrollToProjects}
            />
            <Hero />
            <div id="q&a" ref={qaRef}>
                <QandA />
            </div>
            <div id="stat" ref={statsRef}>
                <Stat />
            </div>
            <div id="project" ref={projectRef}>
                <Projects />
            </div>
            <div id="contact" ref={contactRef}>
                <ContactUs />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
