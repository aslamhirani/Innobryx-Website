
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}></div>
      <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Driving Impact Through Agile Innovation
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-slate-300">
          We help organizations scale agility, improve processes, and deliver value faster.
        </p>
        <a
          href="#contact"
          className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
        >
          Partner With Us
        </a>
      </div>
    </section>
  );
};

export default Hero;