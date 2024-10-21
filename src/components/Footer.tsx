import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-6 dark:bg-primary-dark mt-12">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        {/* Copyright information with dynamic year */}
        <p className="text-sm">&copy; {new Date().getFullYear()} John Rollins. All rights reserved.</p>

        {/* Social media links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/JohnR789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary dark:hover:text-secondary-light transition duration-300 transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/johnr789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary dark:hover:text-secondary-light transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




