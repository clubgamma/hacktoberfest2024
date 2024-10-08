import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import links from '@/links';

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center  min-h-[40vh]  p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-dm-sans mb-8">Contact Us</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {/* <SocialIcon Icon={Facebook} color="#b7472a" name="facebook" /> */}
                <SocialIcon Icon={FaDiscord} color="#b7472a" name="discord" />
                <SocialIcon Icon={Twitter} color="#b7472a" name="twitter" />
                <SocialIcon Icon={Instagram} color="#b7472a" name="instagram" />
                <SocialIcon Icon={Github} color="#b7472a" name="github" />
                <SocialIcon Icon={Linkedin} color="#b7472a" name="linkedin" />
            </div>
        </div>
    )
}

export default ContactUs;

function SocialIcon({ Icon, color, name }) {
    return (
        <a
            href={links.socials[name]}
            className="rounded-full p-3 transition-transform hover:scale-110 "
            style={{ backgroundColor: color }}
        >
            <Icon className="w-10 h-10 text-white" />
        </a>
    )
}