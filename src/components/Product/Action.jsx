import React from 'react';
import img1 from '/assets/Product/action/img1.png';

const Action = () => {
  return (
    <section
      className="relative bg-cover bg-center font-jakarta bg-no-repeat text-white py-8 px-4 md:px-12"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="p-10 rounded-xl mx-auto max-w-4xl">
        <p className="uppercase text-sm mb-4 text-pink-300 tracking-wider font-semibold">
          Take Action Now
        </p>
        <h2 className="text-3xl md:text-3xl mb-6 leading-tight">
          Let’s Create Your Next Big Project Together
        </h2>
        <p className="text-sm md:text-base text-gray-200 mb-8 max-w-2xl">
          Let’s work together to turn your vision into reality. Contact us today to schedule a consultation and take the first step toward creating something amazing together.
        </p>
        <div className="flex flex-col md:flex-row items-center md:justify-start justify-center gap-4">
          <button className="bg-pink-600 cursor-pointer hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
            Get Started
          </button>
          <button className="bg-white cursor-pointer hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-xl transition duration-300 flex items-center gap-2">
            Learn More <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Action;
