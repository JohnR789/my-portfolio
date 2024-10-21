import React from 'react';
import DarkModeToggle from './DarkModeToggle'; // Dark mode toggle component

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white py-4 dark:bg-primary-dark sticky top-0 z-50 transition duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Portfolio Title */}
        <h1 className="text-2xl font-bold text-white">John's GitHub Portfolio</h1>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://github.com/JohnR789"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-600 font-bold text-white px-4 py-2 rounded transition duration-300 dark:text-neutral-dark dark:hover:bg-primary-light"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/softwaredev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-600 font-bold text-white px-4 py-2 rounded transition duration-300 dark:text-neutral-dark dark:hover:bg-primary-light"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/johnr789"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-600 font-bold text-white px-4 py-2 rounded transition duration-300 dark:text-neutral-dark dark:hover:bg-primary-light"
              >
                LinkedIn
              </a>
            </li>
          </ul>

          {/* Dark mode toggle button */}
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;























