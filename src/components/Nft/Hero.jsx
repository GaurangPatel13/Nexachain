import React from "react";
import stars from "/assets/Nft/hero/heroimg1.png";
import Hero1 from "./Hero1";
import circularbg from '/assets/Nft/hero/circularbg.png';
import HeroCard from "./HeroCard";
import ball from '/assets/Nft/hero/heroball.png'
import ball2 from '/assets/Nft/hero/heroball2.png'
import HeroBottom from "./HeroBottom";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="space-y-5 relative z-10">
        <div className="w-full flex items-center justify-center pt-5">
          <div className="w-54">
            <img src={stars} className="w-full" alt="" />
          </div>
        </div>
        <h1 className="text-center sm:text-6xl text-4xl text-[#1E344F] font-chillax">
          Powering the <span className="text-[#5552FF]">Oilconomy</span>
        </h1>
        <div className="md:min-h-screen flex flex-col items-center justify-center md:block space-y-5">
          <div className="relative w-full">
            <img src={ball} className="md:w-20 w-14 absolute md:-bottom-8 lg:left-1/3 md:left-20 left-1/4 -translate-x-1/3 md:z-20" alt="" />
            <HeroCard />
          </div>
          <p className='text-justify lg:hidden text-sm sm:text-center font-poppin relative z-20 text-[#000000]'>The Environmental Social Governance (ESG) DAO that rewards contributors for supporting community.</p>
          <Hero1 />
          <div className="flex items-center justify-center">
          <button className='px-10 py-2 cursor-pointer rounded lg:hidden bg-[#8743FF] text-white font-poppins'>Mint now</button>
          </div>
          <div className="relative w-full">
          <img src={ball2} className="md:w-12 w-7 absolute md:-top-38 -top-30 right-1/5 translate-x-1/4 z-20" alt="" />
          <HeroBottom />
          </div>
        </div>
      </div>
      <img src={circularbg} className="w-full absolute top-0 left-1/2 -translate-x-1/2" alt="" />
      
    </div>
  );
};

export default Hero;
