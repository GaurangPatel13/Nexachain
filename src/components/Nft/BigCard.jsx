import React from 'react';

const BigCard = ({ title, description, btnText, btnColor, icon }) => {
  return (
    <div className="w-full max-w-2xs 2xl:max-w-sm flex flex-col justify-between min-h-90 2xl:min-h-110 rounded-xl shadow-md p-5 bg-white relative overflow-hidden">
      
        {/* Icon */}
        <div
          className="w-14 h-14 2xl:w-18 2xl:h-18 flex items-center justify-center rounded-full"
          style={{ backgroundColor: btnColor }}
        >
          <img src={icon} alt="icon" className="w-5 h-5 2xl:w-8 2xl:h-8" />
        </div>

        {/* Title */}
        <h2 className="text-2xl 2xl:text-4xl font-chillax font-semibold">{title}</h2>

        {/* Description */}
        <p className="text-base 2xl:text-xl font-poppins text-gray-600">{description}</p>

        {/* Button */}
        <button
          className="px-4 py-2 rounded-md 2xl:text-xl text-white font-medium"
          style={{ backgroundColor: btnColor }}
        >
          {btnText}
        </button>
      
    </div>
  );
};

export default BigCard;
