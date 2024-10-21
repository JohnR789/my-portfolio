import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  // State to track if dark mode is enabled
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // On component mount, check local storage to apply the saved theme
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  // Toggle between dark and light mode, and save the preference in local storage
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    // Button toggles between sun and moon icons depending on the current theme
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-secondary text-white rounded-full shadow-lg transition duration-300"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;

