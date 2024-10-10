// src/components/Hero.tsx
import React from '@/components/Hero';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col items-center py-20">
      <Image
        src="/images/your-photo.jpg"
        alt="Your Name"
        width={150}
        height={150}
        className="rounded-full"
      />
      <h1 className="text-4xl font-bold mt-6">Hello, I'm Your Name</h1>
      <p className="text-xl mt-4 text-center">
        A passionate developer specializing in [Your Specialization]
      </p>
    </section>
  );
};

export default Hero;

