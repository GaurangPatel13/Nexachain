import React from "react";
import bg from "/assets/Nft/pfp/bgimg.png";
import dimg from "/assets/Nft/pfp/dimg.png";
import pimg from "/assets/Nft/pfp/pimg.png";
import bar from "/assets/Nft/pfp/bar.png";
import pball from "/assets/Nft/potential/sphere.png";
import oball from "/assets/Nft/potential/sphere1.png";

const Pfp = () => {
  return (
    <section className="w-full relative px-5 xl:px-20 py-8 lg:pb-26 bg-white lg:mt-72 lg:flex lg:items-center lg:justify-end">
      {/* Text Section */}

      {/* Image Section */}
      <div className="relative lg:w-4/5 flex flex-col gap-5 lg:block mt-10 lg:mt-0">
        {/* Background/Bottom image */}
        <img src={bg} alt="NFT Background" className="w-full rounded-xl hidden lg:block" />
        {/* Overlay/Top image */}
        <div className="lg:absolute top-30 -left-1/5">
          <span className="inline-block bg-[#EFE4FC] text-[#2B2727] font-poppins font-bold px-3 py-1 rounded-lg text-base mb-4">
            COIN
          </span>
          <h1 className="text-[#1E344F] relative z-20 lg:text-5xl xl:text-6xl md:text-6xl sm:text-5xl text-4xl font-chillax before:w-1.5 md:before:h-32 before:h-20 sm:before:h-26 lg:before:h-26 xl:before:h-32 before:absolute before:top-1/2 before:-translate-y-1/2 leading-snug before:-left-3 before:rounded-full before:bg-[#6052FF] before:inline-block">
            PFP BIT
            <br />
            <span className="text-[#6052FF]">Marketplace</span>
            <img
              src={pimg}
              className="w-20 absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 sm:left-1/5"
              alt=""
            />
            <img src={pball} className="w-10 absolute right-0 top-0" alt="" />
          </h1>
        </div>
        <div className="lg:absolute -bottom-10 right-1/3 lg:w-4/5 flex items-center gap-5">
          <img
            src={dimg}
            alt="NFT Foreground"
            className="w-full rounded-xl shadow-xl border-4 border-white"
          />
          <img src={oball} className="w-10 hidden lg:block" alt="" />
        </div>
        <div className="lg:absolute top-0 right-20 lg:right-1 xl:right-20">
          <img src={bar} className="w-1/2 mb-6 lg:mb-4 xl:mb-6" alt="" />
          <p className="text-[#342E2E] font-poppins mb-6 max-w-sm lg:mb-4 xl:mb-6">
            We regulated NFT marketplace and payable in Cryptocurrencies and
            FIAT. You don’t have to be a computer geek to buy NFTs.
          </p>
          <button className="bg-[#5552FF] font-poppins text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
            Discover now
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Pfp;
