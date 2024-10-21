import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-light-blue text-gray-800 py-12 px-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white transition duration-300 transform hover:shadow-xl hover:scale-105 hover:bg-blue-200 dark:hover:bg-gray-700 mb-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-primary dark:text-white">Get in Touch</h2>
        <p className="text-lg mb-6">
          I am actively seeking new opportunities to apply my skills and grow professionally. Please feel free to reach out if you're looking for a dedicated developer or would like to discuss potential collaborations.
        </p>
        <a 
          href="mailto:rollinsj789@gmail.com" 
          className="bg-primary text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:scale-110 hover:bg-primary-dark hover:shadow-2xl transform hover:translate-y-2"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;










