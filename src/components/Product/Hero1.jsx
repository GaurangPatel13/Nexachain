import React from "react";
import Marquee from "./Marquee";
import heroimg1 from "/assets/Product/hero/heroimg1.png";
import heroimg2 from "/assets/Product/hero/heroimg2.png";
import heroimg3 from "/assets/Product/hero/heroimg3.png";
import heroimg4 from "/assets/Product/hero/heroimg4.png";
import heroimg5 from "/assets/Product/hero/heroimg5.png";
import heroimg6 from "/assets/Product/hero/heroimg6.png";
import heroimg7 from "/assets/Product/hero/heroimg7.png";
import Hero3 from "./Hero3";

const Hero1 = () => {
  return (
    <div className="relative pb-7">
      <div className="flex relative flex-col items-center gap-5 py-5">
        <div className="flex flex-col sm:flex-row sm:gap-10 gap-5 font-opensans text-black font-semibold text-sm sm:text-xs">
          <p className="uppercase">
            <span className="text-white bg-[#FF30FF] p-2 rounded-xl">PLAN</span>{" "}
            YOUR PROJECTS
          </p>
          <p className="uppercase">
            <span className="text-white bg-[#FFA800] p-2 rounded-xl">
              Track
            </span>{" "}
            work efficiently
          </p>
          <p className="uppercase">
            <span className="text-white bg-[#2BBD81] p-2 rounded-xl">WORK</span>{" "}
            with global teams
          </p>
        </div>
        <div className="font-dmsans text-center">
          <div>
            <h1 className="text-4xl md:text-7xl 2xl:text-8xl font-bold">
              Project Based{" "}
              <span
                className="text-[#FF30FF]"
                style={{ textShadow: "rgba(0, 0, 0, 1) -3px 0px 0px" }}
              >
                M
              </span>
              <span
                className="text-[#FFA800]"
                style={{ textShadow: "rgba(0, 0, 0, 1) -3px 0px 0px" }}
              >
                L
              </span>
              <span
                className="text-[#2BBD81]"
                style={{ textShadow: "rgba(0, 0, 0, 1) -3px 0px 0px" }}
              >
                M
              </span>
            </h1>
          </div>
          <div>
            <h1 className="text-4xl md:text-7xl 2xl:text-8xl font-bold">
              platform built for
            </h1>
          </div>
        </div>
        <div className="flex lg:flex w-1/6 xl:w-1/6 lg:w-30 absolute sm:hidden xl:right-20 right-10 sm:bottom-1/2 sm:translate-y-1/2">
          <div>
            <img src={heroimg3} alt="" />
          </div>
          <div className="py-5">
            <img src={heroimg4} className="w-3/4" alt="" />
            <img src={heroimg5} className="w-3/4" alt="" />
          </div>
        </div>
        <img src={heroimg7} className="absolute sm:top-1/4 hidden lg:block 2xl:left-30 xl:left-1/6 lg:left-20 bottom-12 sm:w-24 2xl:w-36 w-14" alt="" />
      </div>
      <div className="">
        <Marquee
          text="increased productivity improved collaboration dynamic teams you"
          color="#0E131714"
          direction="leftToRight"
        />
        <Marquee
          text="increased productivity improved collaboration dynamic teams you"
          color="#2BBD81"
          direction="rightToLeft"
        />
        <Marquee
          text="increased productivity improved collaboration dynamic teams you"
          color="#0E131714"
          direction="leftToRight"
        />
      </div>
      <img
        src={heroimg2}
        className="absolute bottom-0 z-100 right-1/2 translate-x-1/2 sm:w-3/5"
        alt=""
      />
      <img
        src={heroimg1}
        className="absolute bottom-1/2 z-50 translate-y-1/2 hidden lg:block xl:w-1/4 lg:w-54"
        alt=""
      />
      <img
        src={heroimg6}
        className="absolute top-2/3 right-14 -translate-y-1/2 hidden lg:block w-1/4"
        alt=""
      />
      <div className="hidden xl:block absolute -bottom-37 z-200 left-1/2 -translate-x-1/2 w-full">
        <Hero3 />
      </div>
    </div>
  );
};

export default Hero1;
