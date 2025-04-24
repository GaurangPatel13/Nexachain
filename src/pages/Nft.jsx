import React from "react";
import Navbar from "../components/Product/Navbar";
import Hero from "../components/Nft/Hero";
import Marquee from "../components/Nft/Marquee";
import Potential from "../components/Nft/Potential";
import Mint from "../components/Nft/Mint";
import Features from "../components/Nft/Features";

const Nft = () => {
  return (
    <div className="">
      <div className="bg-[#EDF2F4] px-7">
        <Navbar />
        <Hero />
      </div>
      <Marquee />
      <Potential />
      <Mint />
      <Features />
    </div>
  );
};

export default Nft;
