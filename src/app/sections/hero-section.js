import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(/images/hero.jpg)` }}
    >
      <div className="text-center text-white bg-blue-400 bg-opacity-75 px-6 py-4">
        <h1 className="text-5xl font-bold">FrontEnd Developer</h1>
        <p className="mt-4 text-xl">
          Self-motivated Test Driven TypeScript/ JavaScript and Python Developer
          in the Cloud environment with over 7 years of experience.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
