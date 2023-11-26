import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="dark:bg-gray-900 bg-gray-200  py-4">
            <div className="container mx-auto flex justify-between items-center max-w-6xl px-5">
                <div className="flex items-center">
                    <a href="https://github.com/naseroish" className="dark:text-white text-black mr-4">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/naseroish" className="dark:text-white text-black mr-4">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/uo3d/" className="dark:text-white text-black">
                        <FaInstagram size={20} />
                    </a>
                </div>
                <div className="dark:text-white text-black">
                    &copy; 2023 All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
