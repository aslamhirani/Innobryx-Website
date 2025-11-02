
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Your Innovation Partner</h2>
            <p className="text-lg text-slate-600 mb-4">
              Innobryx Consulting is a boutique firm dedicated to helping startups and enterprises build world-class digital products. We believe in a hands-on, collaborative approach, embedding ourselves with your teams to foster a culture of innovation and excellence.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Our team consists of seasoned product managers, designers, and agile coaches who have experience working with leading companies in global markets. We bring this wealth of experience to help you navigate the complexities of product development and achieve your business objectives.
            </p>
            <a href="#contact" className="text-indigo-600 font-semibold text-lg hover:underline">
              Let's build together &rarr;
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=600&auto=format&fit=crop" 
              alt="Our team collaborating" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;