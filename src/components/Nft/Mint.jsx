import React from "react";
import orangeOrb from "/assets/Nft/potential/sphere1.png";
import purpleOrb from "/assets/Nft/potential/sphere.png";
import img1 from "/assets/Nft/mint/mintimg1.png";
import img2 from "/assets/Nft/mint/mintimg2.png";
import img3 from "/assets/Nft/mint/mintimg3.png";

const Mint = () => {
  return (
    <section className="relative overflow-hidden px-4 py-8 md:py-16 bg-white text-center">
      {/* Label */}
      <div className="mb-4 relative">
        <span className="bg-[#8743FF] text-white px-4 py-2 font-abeezee rounded-lg 2xl:text-xl text-base font-medium">
          Investment
              </span>
              <img src={purpleOrb} className="w-7 2xl:w-10 absolute bottom-0 md:left-1/4" alt="" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-6xl 2xl:text-7xl font-chillax text-[#1E344F] leading-tight max-w-5xl 2xl:max-w-7xl mx-auto">
        Mint, purchase and bid the world's premier{" "}
        <span className="text-[#8743FF]">Token</span>.
      </h2>

      {/* Subtext */}
      <div className="relative">
      <p className="mt-4 text-gray-600 max-w-3xl 2xl:max-w-5xl font-poppins mx-auto text-sm md:text-base 2xl:text-xl relative z-20">
        Purpose for Profit rewards contributors with short-term liquidity and
        bonuses for contributing towards long-term impact investments. Mint
        PURPOSE, Yield PROFIT, Support PROJECTS.
      </p>
        <img
          src={purpleOrb}
          alt="Purple Orb"
          className="absolute md:hidden left-0 -bottom-5 w-16 z-0"
        />
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row font-poppins gap-4 justify-center relative 2xl:text-xl">
        <button className="bg-[#8743FF] text-white px-6 py-2 rounded-md font-medium shadow-md hover:bg-purple-600 transition relative z-20">
          Mint purpose
        </button>
        <button className="border border-[#8743FF] text-[#8743FF] px-6 py-2 rounded-md font-medium hover:bg-purple-50 transition relative z-7">
          Learn more
        </button>
        {/* Decorative Absolute Images */}
        <img
          src={purpleOrb}
          alt="Purple Orb"
          className="absolute hidden md:block left-20 bottom-0 w-16 md:w-32"
        />
        <img
          src={orangeOrb}
          alt="Orange Orb"
          className="absolute md:right-20 right-5 md:bottom-0 w-10 md:w-16 z-10 md:z-0"
        />
      </div>

      {/* Stats */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-6 justify-between font-chillax max-w-5xl 2xl:max-w-7xl mx-auto px-4">
        <div className="bg-[#FFF2E2] text-left md:p-10 p-5 rounded-xl md:w-1/2 w-full 2xl:w-4/5 shadow-md flex flex-col gap-4">
          <div className="text-2xl md:text-4xl 2xl:text-5xl text-[#1E344F]">$105.018 USD</div>
          <div className="flex items-center gap-3">
            <img src={img1} className="w-5 2xl:w-8" alt="" />
            <div className="flex items-center 2xl:text-xl text-gray-600 font-poppins">
              Average price
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 md:w-1/2 w-full 2xl:w-4/5">
          <div className="bg-white text-left md:p-10 p-5 w-full rounded-xl shadow-md flex flex-col gap-4">
            <div className="text-2xl md:text-4xl 2xl:text-5xl text-[#1E344F]">$1,894,803,003 USD</div>
            <div className="flex items-center gap-3">
              <img src={img2} className="w-5 2xl:w-8" alt="" />
              <div className="flex items-center 2xl:text-xl text-gray-600 font-poppins">
                Total Profit
              </div>
            </div>
          </div>

          <div className="bg-[#8743FF] text-white w-full text-left md:p-10 p-5 rounded-xl shadow-md flex flex-col gap-4">
            <div className="text-2xl md:text-4xl 2xl:text-5xl">$555,869,950 USD</div>
            <div className="flex items-center gap-3">
              <img src={img3} className="w-5 2xl:w-8" alt="" />
              <div className="flex items-center 2xl:text-xl font-poppins">
                Total Supply
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mint;
