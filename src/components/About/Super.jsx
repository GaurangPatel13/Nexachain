import React from "react";
import glassball from "/assets/About/superproduct/glassball.png";
import frameimg from "/assets/About/superproduct/frameimg.png";
import superimg from "/assets/About/superproduct/superimg.png";

const Super = () => {
  return (
    <div className="relative justify-between bg-black text-white lg:pl-10 px-5 lg:px-0 flex pb-5 lg:pb-0">
      <img src={frameimg} alt="" className="absolute top-0 left-0 z-50 hidden lg:block" />
      {/* Left Content */}
      <div className="pt-20">
        <h1 className="text-3xl 2xl:text-5xl lg:text-start font-poppins text-center">
          <span className="text-pink-500 text-4xl 2xl:text-6xl font-bold">Nexachain.ai</span> Super Products
        </h1>
        <p className="mt-4 min-[1700px]:w-full 2xl:text-2xl lg:w-1/2 text-center text-white font-poppins">
          BlockChain Boostup offers top MLM software solutions, optimizing
          network management and boosting profits with efficient plans.
        </p>
        <div className="mt-6 relative lg:h-2/3 space-y-5">
          <div
            className="p-4 lg:absolute bottom-20 -right-15 z-50 rounded-lg lg:w-1/2 px-8 backdrop-blur-[10px] bg-white/25"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.125) 68.53%)",
            }}
          >
            <h2 className="text-2xl font-semibold mb-4">MLM business software</h2>
            <p className="text-white text-lg font-thin">
              BlockChain Boostup offers affordable, customizable MLM software
              with CMS integration for efficient business management.
            </p>
          </div>
          <div
            className="p-4 lg:absolute top-20 z-50 rounded-lg lg:w-1/2 px-8 backdrop-blur-[10px] bg-white/25"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.125) 68.53%)",
            }}
          >
            <h2 className="text-2xl font-semibold mb-4">Ecommerce mlm software</h2>
            <p className="text-white text-lg font-thin">
              BlockChain Boostup provides hack-proof software and tools for
              cryptocurrency developers and ICO companies, ensuring secure
              deployment and ICO sales.
            </p>
          </div>
          <div
            className="p-4 lg:absolute max-[1200px]:bottom-11 min-[1201px]:-top-30 min-[1201px]:-right-40 max-[1200px]:-right-100 z-50 rounded-lg lg:w-1/2 px-8 backdrop-blur-[10px] bg-white/25"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.125) 68.53%)",
            }}
          >
            <h2 className="text-2xl font-semibold mb-4">Ecommerce mlm software</h2>
            <p className="text-white text-lg font-thin">
              BlockChain Boostup provides hack-proof software and tools for
              cryptocurrency developers and ICO companies, ensuring secure
              deployment and ICO sales.
            </p>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative flex justify-center items-center">
      
        <img src={superimg} alt="" className="w-3xl hidden lg:block" />
      </div>
      <img
        src={glassball}
        alt="Decorative"
        className="glassball hidden lg:block rounded-lg shadow-lg absolute z-20 top-[52%] right-0 transform -translate-y-1/2"
      />
    </div>
  );
};

export default Super;
