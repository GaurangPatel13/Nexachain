import React from "react";
import clsx from "clsx"; // Use this for conditional class names (optional, but recommended for readability)

const DeliveringCard = ({
  title,
  description,
  image,
  reverse,
  bgColor,
  textColor,
  btnColor,
  btnTxt,
  altText, // added altText for accessibility
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col md:flex-row w-full md:w-[49%] rounded-4xl h-80 overflow-hidden shadow-md transition-transform hover:scale-[1.02]",
        { "md:flex-row-reverse": reverse }
      )}
      style={{
        backgroundColor: bgColor,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Side (Text Section) */}
      <div
        className={clsx(
          "md:w-1/2 w-full flex items-center justify-center p-6",
          textColor,
          "transition-all duration-300 ease-in-out"
        )}
        style={{ backgroundColor: bgColor }}
      >
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-semibold mb-3 font-poppins">{title}</h3>
          <p className="text-sm md:text-base mb-4">{description}</p>

          {/* Button and Demo Section */}
          <div className="text-sm flex items-center justify-between">
            <button
              className={`px-4 py-2 font-semibold hover:bg-gray-800 ${btnTxt}`}
              style={{ backgroundColor: btnColor }}
              aria-label={`Explore more about ${title}`} // Accessible button label
            >
              Explore More
            </button>
            <p>Try it for FREE DEMO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveringCard;
