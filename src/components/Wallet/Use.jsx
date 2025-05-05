import React from "react";
import img from "/assets/Wallet/use/img1.png";

const Use = () => {
  return (
    <div className="flex flex-col items-center md:gap-20 gap-5 py-10">
      <div className="flex flex-col items-center md:gap-10 gap-5 font-montserrat">
        <h1 className="xl:text-[11rem] lg:text-9xl md:text-8xl text-4xl font-bold leading-none bg-gradient-to-br from-[#E31587] via-[#971EFF] to-[#F8BBD0] bg-clip-text text-transparent">
          Crypto Wallet
        </h1>

        <h1 className="xl:text-7xl lg:text-4xl md:text-3xl text-2xl font-semibold text-center md:text-start"> How do you use a crypto wallet?</h1>
        <div className="w-1/2 flex items-center justify-center gap-1">
          <img src={img} className="w-14" alt="" />
        </div>
        <p className="xl:text-2xl md:text-xl text-center max-w-6xl">
          Simple-to-use apps and more sophisticated security solutions are both
          available as crypto wallets
        </p>
      </div>
      <div className="font-inter flex flex-col items-center gap-10">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold max-w-4xl text-center">The primary wallet categories include the following:</h1>
        <p className="text-[#971EFF] text-sm max-w-2xl text-center">
          Buy, sell, and grow your crypto with CoinFlip, the platform <br/>dedicated
          to every trader at every level.
        </p>
        <button className="px-4 py-2 2xl:text-xl cursor-pointer rounded bg-gradient-to-bl from-[#18C8FF] to-[#933FFE] text-white font-poppins">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Use;
