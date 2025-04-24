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
    <div className="w-full min-h-[screen] relative">
      <div className="space-y-5 relative z-10">
        <div className="w-full flex items-center justify-center pt-5">
          <div className="w-54">
            <img src={stars} className="w-full" alt="" />
          </div>
        </div>
        <h1 className="text-center text-6xl text-[#1E344F] font-chillax">
          Powering the <span className="text-[#5552FF]">Oilconomy</span>
        </h1>
        <div className="min-h-screen">
          <div className="relative w-full">
            <img src={ball} className="w-20 absolute -bottom-8 left-1/3 -translate-x-1/3 z-20" alt="" />
            <HeroCard />
          </div>
          <Hero1 />
          <div className="relative w-full">
          <img src={ball2} className="w-12 absolute -top-38 right-1/5 translate-x-1/4 z-20" alt="" />
          <HeroBottom />
          </div>
        </div>
      </div>
      <img src={circularbg} className="w-full absolute top-0 left-1/2 -translate-x-1/2" alt="" />
      
    </div>
  );
};

export default Hero;
