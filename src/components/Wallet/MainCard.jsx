import React from "react";

const MainCard = ({ index, image, text }) => {
  return (
    <div className="bg-[#1D1F2B] p-6 rounded-lg font-dmsans min-h-72 shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-end mb-18">
        <img src={image} alt="Card icon" className="w-10 h-10 2xl:w-18 2xl:h-18" />
        <h3 className="text-xl 2xl:text-3xl font-semibold text-gray-100 relative 2xl:right-6 right-3 top-3 font-grotesk">
          0{index}.
        </h3>
      </div>
      <p className="text-[#A4A9AC] text-sm 2xl:text-lg">{text}</p>
    </div>
  );
};

export default MainCard;
