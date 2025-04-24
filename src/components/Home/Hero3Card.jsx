import React from "react";
import { TfiSharethis } from "react-icons/tfi";

const Hero3Card = ({ image, title1, title2, fallbackText, btnColor }) => {
  return (
    <div className="bg-white min-h-44 py-10 w-full rounded-2xl font-sora relative overflow-hidden">
      {/* Conditionally show image or fallback h1 */}
      <div className="xl:pl-14">
        {image ? (
          <img
            src={image}
            alt=""
            className="w-8 ml-4 object-cover object-top"
          />
        ) : (
          <h1 className="w-full px-4 text-3xl text-[#111111] font-semibold">
            {fallbackText || "No Image Available"}
          </h1>
        )}

        <p className="p-4 text-[#111111]">
          {title1} <br /> {title2}
        </p>
      </div>

      <div className="p-1.5 absolute bottom-0 right-0 bg-[#F0F2F4] rounded-tl-3xl">
        <button
          className="rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-white rotate-180"
          style={{ backgroundColor: btnColor }}
        >
          <TfiSharethis className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default Hero3Card;
