import React from "react";
import orangeOrb from "/assets/Nft/potential/sphere1.png";
import purpleOrb from "/assets/Nft/potential/sphere.png";
import img1 from "/assets/Nft/mint/mintimg1.png";
import img2 from "/assets/Nft/mint/mintimg2.png";
import img3 from "/assets/Nft/mint/mintimg3.png";

const Mint = () => {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-16 bg-white text-center">
      {/* Label */}
      <div className="mb-4 relative">
        <span className="bg-[#8743FF] text-white px-4 py-2 font-abeezee rounded-lg text-base font-medium">
          Investment
              </span>
              <img src={purpleOrb} className="w-7 absolute bottom-0 left-1/4" alt="" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-6xl font-chillax text-[#1E344F] leading-tight max-w-5xl mx-auto">
        Mint, purchase and bid the world's premier{" "}
        <span className="text-[#8743FF]">Token</span>.
      </h2>

      {/* Subtext */}
      <p className="mt-4 text-gray-600 max-w-3xl font-poppins mx-auto text-sm md:text-base">
        Purpose for Profit rewards contributors with short-term liquidity and
        bonuses for contributing towards long-term impact investments. Mint
        PURPOSE, Yield PROFIT, Support PROJECTS.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row font-poppins gap-4 justify-center relative">
        <button className="bg-[#8743FF] text-white px-6 py-2 rounded-md font-medium shadow-md hover:bg-purple-600 transition">
          Mint purpose
        </button>
        <button className="border border-[#8743FF] text-[#8743FF] px-6 py-2 rounded-md font-medium hover:bg-purple-50 transition">
          Learn more
        </button>
        {/* Decorative Absolute Images */}
        <img
          src={purpleOrb}
          alt="Purple Orb"
          className="absolute left-20 bottom-0 w-24 md:w-32"
        />
        <img
          src={orangeOrb}
          alt="Orange Orb"
          className="absolute right-20 bottom-0 w-12 md:w-16"
        />
      </div>

      {/* Stats */}
      <div className="mt-12 flex items-center gap-6 justify-between font-chillax max-w-5xl mx-auto px-4">
        <div className="bg-[#FFF2E2] text-left p-10 rounded-xl w-1/2 shadow-md flex flex-col gap-4">
          <div className="text-4xl text-[#1E344F]">$105.018 USD</div>
          <div className="flex items-center gap-3">
            <img src={img1} className="w-5" alt="" />
            <div className="flex items-center text-gray-600 font-poppins">
              Average price
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 w-1/2">
          <div className="bg-white text-left p-10 w-full rounded-xl shadow-md flex flex-col gap-4">
            <div className="text-4xl text-[#1E344F]">$1,894,803,003 USD</div>
            <div className="flex items-center gap-3">
              <img src={img2} className="w-5" alt="" />
              <div className="flex items-center text-gray-600 font-poppins">
                Total Profit
              </div>
            </div>
          </div>

          <div className="bg-[#8743FF] text-white w-full text-left p-10 rounded-xl shadow-md flex flex-col gap-4">
            <div className="text-4xl">$555,869,950 USD</div>
            <div className="flex items-center gap-3">
              <img src={img3} className="w-5" alt="" />
              <div className="flex items-center font-poppins">
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
