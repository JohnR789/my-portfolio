import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />      {/* Hero section at the top to introduce the portfolio */}
      <About />     {/* About section describing the developer */}
      <Projects />  {/* Section showcasing featured projects */}
      <Contact />   {/* Contact section to allow communication */}
    </>
  );
};

export default Home;










