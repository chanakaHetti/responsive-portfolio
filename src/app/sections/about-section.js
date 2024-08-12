import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto my-16 p-4">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="/images/chanaka.png"
          alt="About Me"
          className="w-48 h-48 rounded-full md:mr-8 mb-4 md:mb-0 object-cover"
        />
        <p className="text-lg">
          Hi, my name is Chanaka, and I live in Stoke-on-Trent. and I am a
          Software Engineer with over seven years of experience in full-stack
          development. Currently, I am working as a Senior FrontEnd Developer at
          YARD Digital Agency in Cardiff. Throughout my career, I have developed
          a strong foundation in both front-end and back-end technologies, with
          a particular focus on React, TypeScript, and Python in Linux
          environments. I have worked across various industries, including
          digital marketing, compliance, and finance.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
