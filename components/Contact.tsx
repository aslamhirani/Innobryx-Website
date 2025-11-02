
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-indigo-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build your next big thing?</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-indigo-200">
          Let's have a conversation about how we can help you achieve your goals. Reach out to us for a free initial consultation.
        </p>
        <div className="mt-10 text-indigo-200">
            <p>Email us directly at: <a href="mailto:sales@innobryx.com" className="font-semibold underline hover:text-white">sales@innobryx.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;