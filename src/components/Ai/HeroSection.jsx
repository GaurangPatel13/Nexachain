import React from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import heroRobo from "/assets/Ai/hero-robo.jpeg";
import { FaAngleRight, FaCaretRight, FaShareAlt } from "react-icons/fa";
import herocard2 from "/assets/Ai/hero-card-2.png";
import partner1 from "/assets/Ai/partner1.png";
import partner2 from "/assets/Ai/partner2.png";
import partner3 from "/assets/Ai/partner3.png";
import partner4 from "/assets/Ai/partner4.png";
import partner5 from "/assets/Ai/partner5.png";
import partner6 from "/assets/Ai/partner6.png";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-gray-light min-h-screen flex flex-col font-sora lg:flex-row items-center justify-between py-10">
        {/* Left Section - Image & Heading */}
        <div className="lg:w-1/2 relative">
          <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden">
            {/* Background Image */}
            <img
              src={heroRobo} // Replace with actual image path
              alt="AI Concept"
              className="w-full rounded-2xl"
            />

            {/* Transparent Blur Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-transparent bg-opacity-10 backdrop-blur-lg p-6 rounded-b-2xl">
              <h1 className="sm:text-5xl text-3xl font-bold leading-tight">
                <span className="text-red-500">Neural</span> <br />
                <span className="text-red-500">Net</span>
                <span className="text-black">works</span> <br />
                <span className="text-red-500">Company</span>
              </h1>
            </div>

            {/* Watch Video Button */}
            <button className="absolute cursor-pointer font-manrope bottom-0 right-0 bg-[var(--color-gray-light)] text-black px-4 py-2 rounded-tl-xl flex items-center gap-2 shadow-lg">
              <FiPlay className="text-lg" />
              Watch video
            </button>
          </div>
        </div>

        {/* Right Section - Text & Buttons */}
        <div className="lg:w-1/2 flex flex-col min-h-screen justify-between gap-6 sm:pl-20 pt-12 text-center lg:text-left mt-10 lg:mt-0">
          <button className="bg-[var(--color-red-dark)] font-manrope cursor-pointer flex gap-2 items-center text-white px-6 py-2 rounded-full self-center lg:self-start">
            <FaAngleRight />
            Get in touch
          </button>
          <p className="text-xl lg:text-3xl leading-15">
            Revolutionizing industries with innovative AI solutions, empowering
            businesses to thrive in the digital age
          </p>
          <button className="bg-[var(--color-red-dark)] font-manrope cursor-pointer text-white px-6 flex gap-2 items-center py-2 rounded-full self-center lg:self-start">
            <FaCaretRight />
            Learn More
          </button>

          {/* Bottom Stats Section */}
          <div className="flex flex-col lg:flex-row gap-6 mt-6">
            <div
              className="relative w-full max-w-sm p-6 flex flex-col justify-around rounded-xl text-white"
              style={{
                backgroundImage: "url('/assets/Ai/hero-card-1.jpeg')", // Replace with actual image path
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="text-lg font-medium">Achievements of our startup</p>
              <h2 className="text-4xl font-bold text-red-500">150K</h2>
              <p className="text-sm font-manrope">Active users every day</p>
            </div>
            <div className="relative w-full max-w-sm bg-gray-300 px-6 pt-6 rounded-xl flex flex-col justify-between">
              {/* Text Content */}
              <p className="text-lg font-medium">We change your mind with AI</p>

              {/* Image */}
              <img
                src={herocard2} // Replace with actual image path
                alt="AI Brain"
                className="w-full mt-4 rounded-b-xl"
              />

              {/* Button */}
              <button className="absolute bottom-0 right-0 bg-[var(--color-gray-light)] rounded-tl-3xl cursor-pointer p-3">
                <FaShareAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between sm:px-10 lg:px-44 md:mb-14 mb-5">
        <img className="md:w-14 w-32" src={partner1} alt="" />
        <img className="md:w-14 w-32" src={partner2} alt="" />
        <img className="md:w-14 w-32" src={partner3} alt="" />
        <img className="md:w-14 w-32" src={partner4} alt="" />
        <img className="md:w-14 w-32" src={partner5} alt="" />
        <img className="md:w-14 w-32" src={partner6} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
