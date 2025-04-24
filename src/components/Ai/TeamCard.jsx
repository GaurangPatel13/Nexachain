import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

const TeamCard = ({ image, name, role, title, hoverText, hoverColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative sm:w-54 rounded-2xl overflow-hidden font-sora shadow-lg bg-white transition-transform transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={name} className="w-full object-cover" />
        {/* Overlay Text */}
        <div
          className={`absolute rotate-270 top-22 -right-10 leading-none flex items-center justify-center transition-opacity duration-300 
                    ${isHovered ? "opacity-0" : "opacity-100"}`}
        >
          <h1 className="text-white text-5xl font-bold">{title}</h1>
        </div>
        {/* Hover Text */}
        <div
          className={`absolute rotate-270 top-25 -right-13 flex items-center justify-center transition-opacity duration-300 
                    ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <h1 className={`text-6xl font-bold`} style={{ color: hoverColor }}>
            {hoverText}
          </h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 text-center mt-5">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500 text-xs font-manrope">{role}</p>
      </div>

      {/* Button */}
      <div className={`flex justify-center bg-white p-2 rounded-t-full absolute bottom-18 left-7 ${isHovered ? "opacity-0" : "opacity-100"}`}>
        <button
          className={`w-10 h-10 rounded-full bg-[var(--color-gray-dark)] cursor-pointer text-white  transition-all duration-300 flex items-center justify-center`}
        >
          <FaShareAlt />
        </button>
          </div>

          {/* hover button */}

      <div className={`flex justify-center bg-white p-2 rounded-t-full absolute bottom-18 left-7 ${isHovered ? "opacity-100" : "opacity-0"}`}>
        <button
          className={`w-10 h-10 rounded-full cursor-pointer transition-all duration-300 flex items-center text-white justify-center
                `}
                  style={{ backgroundColor: hoverColor }}
        >
          <FaShareAlt />
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
