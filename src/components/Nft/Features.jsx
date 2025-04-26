import React from "react";
import rings from "/assets/Nft/features/rings.png";
import rimg1 from "/assets/Nft/features/rimg1.png";
import rimg2 from "/assets/Nft/features/rimg2.png";
import rimg3 from "/assets/Nft/features/rimg3.png";
import rimg4 from "/assets/Nft/features/rimg4.png";
import orangeOrb from "/assets/Nft/potential/sphere1.png";

const Features = () => {
  return (
    <div className="min-h-screen relative font-poppins flex flex-col gap-5 md:gap-0 md:justify-between text-white items-start py-10 xl:px-40 px-5 lg:px-10">
      <div className="w-full">
        <button className="bg-[#FF3647] md:mb-16 mb-5 relative z-20 text-sm px-3 py-1.5 rounded-lg">
          FEATURES
        </button>
        <h1 className="text-[#1E344F] relative z-20 md:text-6xl sm:text-5xl text-2xl font-chillax md:before:w-3 before:w-1.5 md:before:h-26 sm:before:h-20 before:h-14 before:absolute before:top-1/2 before:-translate-y-1/2 md:before:-left-5 sm:before:-left-3 before:-left-2  before:rounded-full before:bg-[#FF3647] before:inline-block mb-5 lg:mb-0">
          We are platform for
          <br />
          everyone
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full items-start">
          <button className="bg-[#FF3647] relative z-20 px-5 py-2.5 rounded-lg">
            Invest
          </button>
          <div className="flex items-center justify-end w-full">
          <div className="flex lg:items-start items-center justify-center z-20 relative">
            <p
              className="font-poppins text-[#383838] px-2 py-3 relative z-22 left-10 md:-top-3 rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] shadow-lg md:w-1/2 sm:text-sm text-xs border-1 border-solid"
              style={{
                borderImageSource:
                  "linear-gradient(114.95deg, rgba(255, 255, 255, 0.6) 13.11%, rgba(255, 255, 255, 0) 65.88%)",
                borderImageSlice: 1,
              }}
            >
              You don’t have to be a computer geek to buy NFTs.
            </p>

            <img src={rimg2} className="w-30" alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className="relative flex lg:items-end lg:-bottom-45 lg:left-1/2">
        <img src={orangeOrb} className="w-10 absolute -left-1/3 z-30" alt="" />
        <div className="flex items-center z-20 relative">
          <img src={rimg4} className="w-26" alt="" />
          <p className="font-poppins text-[#383838] px-2 py-3 relative z-22 right-7 rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] border-[#FFFFFF10] shadow-lg md:w-1/2 sm:text-sm text-xs border-1 border-solid">
            50% Discount on trading fees for keycard holders.
          </p>
        </div>
      </div>
      <div className="relative lg:hidden w-full">
        <img src={rings} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-2/3" alt="" />
        <div className="flex items-center justify-end">
        <div className="flex items-center justify-center z-20 relative">
          <p
            className="font-poppins text-[#383838] px-2 py-3 relative z-22 left-10 md:-top-3 rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] shadow-lg md:w-1/2 text-xs sm:text-sm border-1 border-solid"
            style={{
              borderImageSource:
                "linear-gradient(114.95deg, rgba(255, 255, 255, 0.6) 13.11%, rgba(255, 255, 255, 0) 65.88%)",
              borderImageSlice: 1,
            }}
          >
            Your exclusive member keycard.
          </p>

          <img src={rimg1} className="w-30" alt="" />
        </div>
        </div>
        <div className="relative flex">
          <div className="flex items-center z-20 relative">
            <img src={rimg3} className="w-26" alt="" />
            <p className="font-poppins text-[#383838] px-2 py-3 relative z-22 right-7 rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] border-[#FFFFFF10] shadow-lg md:w-1/2 sm:text-sm text-xs border-1 border-solid">
              50% Discount on trading fees for keycard holders.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden absolute lg:flex items-center top-1/4">
        <div className="relative w-4/7 flex items-center gap-4">
          <img src={rings} alt="" />
          <div className="absolute top-10 w-full -right-1/2">
            <div className="relative">
              <img src={rings} className="" alt="" />
              <div className="flex items-center z-20 absolute top-1/2 left-1/2 -translate-x-1/6 -translate-y-1/2">
                <img src={rimg3} className="w-30" alt="" />
                <p className="font-poppins text-[#383838] px-2 py-3 relative z-22 right-10 rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] border-[#FFFFFF10] shadow-lg w-full text-sm border-1 border-solid">
                  The exactly Token Economics is TBA.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start z-20 absolute top-1/2 left-1/2 -translate-x-1/6 -translate-y-1/2">
            <img src={rimg1} className="w-30" alt="" />
            <p className="font-poppins text-[#383838] px-2 py-3 relative z-22 right-10 -top-5 rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] border-[#FFFFFF10] shadow-lg w-full text-sm border-1 border-solid">
              Your exclusive member keycard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
