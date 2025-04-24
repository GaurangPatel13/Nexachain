import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const UtilizeCard = ({ bgColor, accentColor, title, description, icon }) => {
  return (
    <div className="relative lg:w-sm 2xl:w-lg">
        <div
          className="h-5 rounded-t-3xl lg:w-sm 2xl:w-lg shadow-xl overflow-hidden"
          style={{ backgroundColor: accentColor }}
          ></div>
          {/* Top Accent */}
        <div
          className="absolute top-0 right-0 h-16 w-12 z-20 flex justify-between items-start px-1 pt-2"
          style={{ color: accentColor }}
        >
          <div className="h-6 w-1 bg-current"></div>
          <div className="h-15 w-1 bg-current"></div>
          <div className="h-30 w-1 bg-current"></div>
        </div>
      <div
        className="relative rounded-b-3xl text-white p-6 lg:w-sm 2xl:w-lg shadow-xl overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        

        {/* Icon */}
        <img src={icon} alt={title} className="h-8 w-8 mb-4" />

        {/* Title & Description */}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-white/90 leading-relaxed mb-12">
          {description}
        </p>

        {/* Bottom Button */}
        <div className="absolute bottom-1 right-1 group">
          <div className="bg-white text-black h-8 w-8 rounded-br-3xl cursor-pointer rounded-tl-3xl flex items-center justify-center transition-all duration-500 ease-in-out group-hover:w-24 overflow-hidden border-1" style={{ color: accentColor }}>
            <div className="flex items-center gap-2 px-2">
              <FaArrowRightLong style={{ color: accentColor }} size={16} />
              <span className="text-sm hidden group-hover:inline">Explore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilizeCard;
