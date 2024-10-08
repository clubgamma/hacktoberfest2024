import links from '@/links';
import { FaDiscord, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-white bg-black border-t border-gray-500 p-5">
            {/* Flex container for the footer items, which will stack vertically on small screens and align in a row on larger screens */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
                
                {/* Email Section - Aligns center on small screens and inline on larger screens */}
                <p className="text-md mb-2 md:mb-0">
                    <a href="mailto:info@clubgamma.com" className="text-white font-dm-sans">
                    gce@charusat.edu.in
                    </a>
                </p>

                {/* Copyright Section */}
                <p className="text-md font-dm-sans mb-2 md:mb-0">
                    © 2024 All Rights Reserved | Club Gamma
                </p>

                {/* Social Links - Stack vertically on small screens, align in a row on larger screens */}
                <div className="flex space-x-3 items-center">
                    <p className="text-md font-dm-sans">Connect with us:</p>
                    
                    {/* LinkedIn and Discord icons with hover effects */}
                    <a href={links.socials.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white hover:text-gray-400 transition duration-300" size={28} />
                    </a>
                    <a href={links.socials.discord} target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="text-white hover:text-gray-400 transition duration-300" size={28} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
