import React from "react";
import { FaShareAlt } from "react-icons/fa";

const ExpandableCard = ({ image, bgColor, logo, text, isOpen, onClick, index }) => {
  return (
    <div
      className={`relative h-110 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
        isOpen ? "w-156" : "w-76 xl:w-76 lg:w-64"
      }`}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {/* Icon */}
      <div className="absolute top-4 left-4">{logo && <img src={logo} alt="Icon" className="h-5" />}</div>

      {/* Text */}
      <p
        className={`absolute left-4 bottom-4 transition-opacity z-20 duration-300 ${
          isOpen ? "opacity-100 text-lg" : "opacity-0 text-sm"
        } ${index === 2 ? "text-white" : "text-black"}`}
      >
        {text}
      </p>

      {/* Background Image */}
      <img
        src={image}
        alt="Card Image"
        className={`absolute right-0 h-full object-cover transition-all duration-300 ${
          isOpen ? "scale-100" : "scale-110"
        } ${index === 2 ? "w-130" : ""}`}
      />

      {/* Expand Button */}
      <button className="absolute cursor-pointer bottom-0 right-0 text-black bg-white p-3 rounded-tl-3xl">
        <FaShareAlt />
      </button>
    </div>
  );
};

export default ExpandableCard;
