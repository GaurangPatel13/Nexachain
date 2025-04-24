import React from "react";
import { IoIosCheckmark } from "react-icons/io";

const LongCard = ({ bgColor, title, description, features }) => {
  return (
    <div className="w-full rounded-[15px] h-88 overflow-hidden bg-[#F5F5F5] shadow-md">
      {/* Top Section */}
      <div className={`${bgColor} h-40 p-5 text-white`}>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-xs">{description}</p>
        <button className="mt-4 border border-white text-white text-xs py-1 px-4 rounded-md hover:bg-white hover:text-black transition-all">
          Get started
        </button>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#F5F5F5] p-4">
        <h4 className="text-sm font-semibold mb-2">Features</h4>
        <ul className="space-y-2 text-xs text-gray-700">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-black"><IoIosCheckmark /></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LongCard;
