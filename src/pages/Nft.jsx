import React from "react";
import Navbar from "../components/Product/Navbar";
import Hero from "../components/Nft/Hero";
import Marquee from "../components/Nft/Marquee";
import Potential from "../components/Nft/Potential";
import Mint from "../components/Nft/Mint";
import Features from "../components/Nft/Features";
import Pfp from "../components/Nft/Pfp";
import Reliable from "../components/Nft/Reliable";
import Secure from "../components/Nft/Secure";
import Place from "../components/Nft/Place";
import Footer from "../components/Nft/Footer";

const Nft = () => {
  return (
    <div className="">
      <div className="bg-[#EDF2F4] md:px-7 px-4 lg:overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <Marquee />
      <Potential />
      <Mint />
      <Features />
      <Pfp />
      <Reliable />
      <Secure />
      <Place />
      <Footer />
    </div>
  );
};

export default Nft;
