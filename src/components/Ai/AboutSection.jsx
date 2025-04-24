import React from "react";
import nexalogo from "/assets/Ai/nexalogo.png";

const AboutSection = () => {
  return (
    <section className="bg-white sm:p-8 p-4 lg:p-16 rounded-xl font-manrope">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="relative">
          {/* Logo */}
          <img src={nexalogo} alt="Nexachain Logo" className="h-12 mb-4" />

          {/* Title */}
          <h1 className="sm:text-6xl text-4xl lg:text-8xl font-bold font-sora sm:text-start text-center">
            Nexa<span className="text-black">chain</span>
            <span className="text-sm align-top font-sora"> AI</span>
          </h1>

          {/* Subtitle */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-gray-500 md:ml-20">us /</span>
            <span className="sm:absolute sm:-left-1 sm:bottom-20 sm:transform sm:rotate-270 text-red-500 sm:text-3xl">/ <span className="text-black">about</span> /</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl lg:text-4xl md:ml-20 font-sora font-medium mt-2">
            Welcome to new era of AI Neural Networks
          </h2>
        </div>

        {/* Right Section - Description & Button */}
        <div className="text-gray-700 space-y-4">
          <p>
            Artificial Intelligence refers to the development of computer systems that can perform tasks
            that would typically require human intelligence. It involves the creation of algorithms and
            models that enable machines to learn, reason, perceive, and make decisions.
          </p>
          <p>
            There are generally two types of AI: Narrow or Weak AI, which is designed to perform specific tasks,
            and General or Strong AI, which possesses human-level intelligence and can handle a wide range of tasks.
          </p>
          <p>
            There are generally two types of AI: Narrow or Weak AI, which is designed to perform specific tasks,
            and General or Strong AI, which possesses human-level intelligence and can handle a wide range of tasks.
          </p>

          {/* Explore Button */}
          <button className="flex cursor-pointer items-center gap-2 border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all">
            <span>➜</span> Explore more
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
