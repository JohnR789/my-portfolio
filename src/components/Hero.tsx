import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-light-blue text-gray-800 text-center py-16 px-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white transition duration-300 transform hover:shadow-xl hover:scale-105 hover:bg-blue-200 dark:hover:bg-gray-700 mb-12">
      <div className="container mx-auto">
        <h1 className="text-6xl font-extrabold mb-6 animate-bounceIn text-primary dark:text-white">Hi, I'm John Rollins</h1>
        <p className="text-2xl mb-8 animate-slideInRight">Aspiring Junior Full-Stack Developer specialized in building scalable web applications.</p>
        <a 
          href="#projects" 
          className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition duration-300 shadow-lg hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;










