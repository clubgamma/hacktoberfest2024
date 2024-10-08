import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactUs from '@/Components/ContactUs';
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import Projects from '@/Components/Projects';
import QandA from '@/Components/Q&A';
import Stat from '@/Components/Stat';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        // Check if we need to scroll to a section
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            element?.scrollIntoView({ behavior: 'smooth' });

            // Clear the state after scrolling
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <div className='bg-gradient-to-br from-[#1e1e1e] to-[#4e3535]'>
            <Hero />
            <div id="q&a">
                <QandA />
            </div>
            <div id="stat">
                <Stat />
            </div>
            <div id="project">
                <Projects />
            </div>
            <div id="contact">
                <ContactUs />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
