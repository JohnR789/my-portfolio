import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-light-blue text-gray-800 py-12 px-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white transition duration-300 transform hover:shadow-xl hover:scale-105 hover:bg-blue-200 dark:hover:bg-gray-700 mb-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-primary dark:text-white">About Me</h2>
        <p className="text-lg mb-4">
          Hi, I'm John, an <strong>aspiring Junior full-stack developer</strong> with expertise in <strong>TypeScript</strong>, <strong>JavaScript</strong> (<strong>React.js</strong>, <strong>Node.js</strong>), and <strong>HTML & CSS</strong>. 
          I specialize in building dynamic, responsive web applications with a focus on <strong>clean code</strong> and <strong>scalability</strong>.
        </p>
        <p className="text-lg mb-4">
          With experience in <strong>Python (Django)</strong> and <strong>Firebase</strong>, I create robust back-end systems and seamless real-time integrations. I am proficient in <strong>SQL (PostgreSQL)</strong>, <strong>RESTful API development</strong>, and version control using <strong>Git</strong>. 
          Additionally, I have successfully deployed projects to cloud platforms like <strong>Heroku</strong> and <strong>Firebase</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;







