import React, { useState } from 'react';
import logo from '@/assets/logo.jpeg';
import Global from '@/Global';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Menu, X, GithubIcon } from 'lucide-react';
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Outlet, Link } from 'react-router-dom';

const Navbar = ({ onContactClick, onQandAClick, onStatusClick, onProjectsClick, onLeaderboardClick }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleGithubLogin = () => {
        // window.location.href = `${import.meta.env.VITE_API_URL}/api/auth/github`;
        window.location.assign(`https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&scope=user:email`);
    };

    const handleLogout = async () => {
        try {
            await Global.logout();
        } catch (err) {
            console.error(err);
        }
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            {/* Navbar */}
            <nav
                className="bg-[rgba(30,30,30,0.8)] backdrop-blur-lg p-4 fixed top-0 left-0 right-0 z-50 flex justify-between items-center shadow-lg">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        className="w-10 h-10 rounded-full mr-4 transition-transform duration-300 ease-in-out hover:scale-110"
                        src={logo} alt="Logo"/>
                    <a href="/" className="text-red-500 font-dm-sans text-2xl font-bold tracking-wide">Club Gamma</a>
                </div>

                {/* Navbar Links (visible on larger screens) */}
                <div className="hidden lg:flex gap-12 font-montserrat text-lg">
                    <a href="/" className="text-white hover:text-red-500 transition-all duration-300">Home</a>
                    <button onClick={onQandAClick}
                            className="text-white hover:text-red-500 transition-all duration-300">Q&A
                    </button>
                    <button onClick={onStatusClick}
                            className="text-white hover:text-red-500 transition-all duration-300">Stats
                    </button>
                    <button onClick={onProjectsClick}
                            className="text-white hover:text-red-500 transition-all duration-300">Projects
                    </button>
                    <button onClick={onContactClick}
                            className="text-white hover:text-red-500 transition-all duration-300">Contact
                    </button>
                    <Link to="/leaderboard"
                          className="text-white hover:text-red-500 transition-all duration-300">Leaderboard</Link> {/* Add this line */}
                </div>

                {/* User Menu / GitHub Login */}
                <div className="hidden lg:flex">
                    {Global.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex items-center gap-2">
                                    <User className="h-4 w-4"/>
                                    {Global.user.name.split(" ")[0]}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <Link to={`/profile/${Global.user.githubId}`}>
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                </Link>
                                {/*<DropdownMenuItem>Settings</DropdownMenuItem>*/}
                                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <button onClick={handleGithubLogin}
                                className="flex font-dm-sans items-center bg-[#181717] text-white py-2 px-5 rounded-md font-bold shadow-lg hover:shadow-none transition-all duration-500">
                            <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"/>
                            </svg>
                            Continue with GitHub
                        </button>
                    )}
                </div>

                <div className="lg:hidden">
                    <button className="text-white bg-transparent border-none" onClick={toggleSidebar}>
                        {sidebarOpen ? <IoMdClose size={24}/> : <RiMenu3Fill size={24}/>}
                    </button>
                </div>
            </nav>

            <div
                className={`fixed inset-y-0 left-0 font-dm-sans w-64 bg-gray-900 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 lg:hidden`}
            >
                <div className="p-4">
                    <img className="w-10 h-10 rounded-full mb-4" src={logo} alt="Logo"/>
                    <nav className="space-y-6">
                        <a href="/" className="text-white block">Home</a>
                        <button onClick={onQandAClick} className="text-white block">Q&A</button>
                        <button onClick={onStatusClick} className="text-white block">Stats</button>
                        <button onClick={onProjectsClick} className="text-white block">Projects</button>
                        <button onClick={onContactClick} className="text-white block">Contact</button>
                        <Link to="/leaderboard" className="text-white block">Leaderboard</Link> {/* Add this line */}
                        <hr className="border-gray-700"/>
                        {Global.user ? (
                            <>
                                <Link to={`/profile/${Global.user.githubId}`} className="text-white block">
                                    Profile
                                </Link>
                                <button onClick={handleLogout} className="text-white block">Logout</button>
                            </>
                        ) : (
                            <Button onClick={handleGithubLogin} className="text-white bg-red-500 block">Continue with
                                GitHub</Button>
                        )}
                    </nav>
                </div>
            </div>
            
            <Outlet />
        </>
    );
};

export default Navbar;
