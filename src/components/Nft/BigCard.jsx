import React from 'react';

const BigCard = ({ title, description, btnText, btnColor, icon }) => {
  return (
    <div className="w-full max-w-2xs flex flex-col justify-between min-h-90 rounded-xl shadow-md p-5 bg-white relative overflow-hidden">
      
        {/* Icon */}
        <div
          className="w-14 h-14 flex items-center justify-center rounded-full"
          style={{ backgroundColor: btnColor }}
        >
          <img src={icon} alt="icon" className="w-5 h-5" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-chillax font-semibold">{title}</h2>

        {/* Description */}
        <p className="text-base font-poppins text-gray-600">{description}</p>

        {/* Button */}
        <button
          className="px-4 py-2 rounded-md text-white font-medium"
          style={{ backgroundColor: btnColor }}
        >
          {btnText}
        </button>
      
    </div>
  );
};

export default BigCard;
