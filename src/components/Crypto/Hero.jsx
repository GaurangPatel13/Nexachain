import React from "react";
import nexachain from "/assets/Crypto/hero/nexachain.png";
import StatsSection from "./StatsSection";
import heroimg1 from "/assets/Crypto/hero/heroimg1.png";
import heroimg2 from "/assets/Crypto/hero/heroimg2.png";
import heroimg3 from "/assets/Crypto/hero/heroimg3.png";
import heroimg4 from "/assets/Crypto/hero/heroimg4.png";

const Hero = () => {
  return (
    <div className="font-outfit relative">
      <h1 className="text-[4rem] font-semibold w-full text-center mt-14 relative">
        <span className="text-[var(--color-orange)]" style={{ textShadow: "rgba(0, 0, 0, 1) -2px -5px 0px" }}>Find the </span>
        <span className="text-[var(--color-green)]" style={{ textShadow: "rgba(0, 0, 0, 1) -2px -5px 0px" }}>Next </span>
        <span className="text-[var(--color-blue)]" style={{ textShadow: "rgba(0, 0, 0, 1) -2px -5px 0px" }}>Crypto Gem </span>
        <span className="text-[var(--color-rose)]" style={{ textShadow: "rgba(0, 0, 0, 1) -2px -5px 0px" }}>on</span>
        <img src={heroimg1} className="absolute top-0 hidden lg:block right-10 w-18" alt="" />
        <img src={heroimg2} className="absolute lg:hidden block -bottom-10 right-35 w-12" alt="" />
      </h1>
      <img src={heroimg1} className="absolute -top-10 lg:hidden block right-10 w-18" alt="" />
      <div className="lg:px-50 px-5 pt-10 relative">
        <img src={nexachain} alt="" />
        <p className="text-[#1F2024] lg:w-1/3">Nexachain.ai is the easiest, safest, and fastest way to buy & sell crypto asset exchange.</p>
        <img src={heroimg2} className="absolute hidden lg:block top-10 right-35 w-12" alt="" />
      </div>
      <StatsSection />
      <div className="absolute sm:block hidden bottom-0 left-0">
        <div className="relative w-24">
        <img src={heroimg3} className="" alt="" />
        <img src={heroimg4} className="absolute right-0 top-1/2 -translate-y-1/2" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
