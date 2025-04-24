import React from "react";
import hero2vid from "/assets/Home/homehero/hero2vid.mp4";
import hero2img from "/assets/Home/homehero/hero2img2.png";
import { GoPlay } from "react-icons/go";
import { TfiSharethis } from "react-icons/tfi";

const Hero2 = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center overflow-hidden gap-5 p-4 ">
      <div className="lg:w-1/2 w-full lg:h-[35rem] rounded-2xl relative">
        <video
          className="overflow-hidden w-full h-full object-cover rounded-2xl"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={hero2vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="flex absolute bottom-0 right-0 items-center gap-2 text-xs rounded-tl-2xl cursor-pointer px-2 py-3 text-black bg-[#F0F2F4]">
          <GoPlay className="text-2xl" />
          Watch video
        </button>
      </div>
      <div className="lg:w-1/2 w-full bg-[#F44E42] lg:h-[35rem] rounded-2xl">
        <div className="flex justify-end">
          <img src={hero2img} className="w-88" alt="" />
        </div>
        <div className="p-5 space-y-5">
          <h1 className="text-white font-sora sm:text-[2.75rem] lg:text-[2.2rem] xl:text-[2.75rem] leading-tight">
            Transform your brand
            <br /> with innovative
            <br /> Marketing Solutions
          </h1>
          <button className="flex items-center gap-2 text-sm font-manrope text-black font-light px-3 py-2 rounded-full bg-white cursor-pointer">
            <TfiSharethis className="text-xs" />
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
