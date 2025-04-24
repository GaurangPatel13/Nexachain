import React, { useState, useEffect } from "react";

const GameProjectHero = () => {
  const [backgroundImageLoaded, setBackgroundImageLoaded] = useState(false);
  
  useEffect(() => {
    // Preload background image
    const img = new Image();
    img.src = "/assets/Home/gameproject/gameproimg1.png";
    img.onload = () => setBackgroundImageLoaded(true);
  }, []);
  
  return (
    <div
      className={`relative w-full sm:h-screen flex flex-col items-center justify-center text-white ${
        backgroundImageLoaded ? "bg-cover bg-center" : "bg-gray-300"
      }`}
      style={{
        backgroundImage: backgroundImageLoaded
          ? "url('/assets/Home/gameproject/gameproimg1.png')"
          : "none",
      }}
    >
      {/* Text Content */}
      <div className="z-10 text-center mb-8 px-4 sm:px-8">
        <p className="text-xs md:text-sm tracking-wider uppercase font-inter">
          Become a virtual landlord to some of the largest projects in crypto
        </p>
        <h1 className="text-5xl font-jersey25 md:text-7xl font-extrabold text-[#FF7E21] my-2">
          GAME PROJECT
        </h1>
        <button className="mt-2 px-6 py-2 font-inter bg-[#FF7E21] hover:bg-orange-600 text-white font-semibold rounded-md transition duration-300 ease-in-out">
          MORE INFORMATION
        </button>
      </div>

      {/* Static Image (like video placeholder) */}
      <div className="relative w-[90%] max-w-3xl z-10 rounded-lg overflow-hidden shadow-lg mb-8">
        <img
          src="/assets/Home/gameproject/gameproimg2.png"
          alt="Static Placeholder"
          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
  );
};

export default GameProjectHero;
