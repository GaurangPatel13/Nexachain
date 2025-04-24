import React from "react";
import AnimatedText from "./AnimatedText";
import herologo from "/assets/About/abouthero/herologo.png";
import heroimg from "/assets/About/abouthero/heroimg.png";

const AboutHero = () => {
  return (
    <div className="sm:text-white text-black py-8 lg:pl-2 pr-2 flex w-full gap-7 justify-between items-start relative">
      <div className="flex herobg flex-col gap-8 items-center rounded-xl sm:bg-[#1F2024] min-[1025px]:h-[69rem] min-[1216px]:w-[80rem] lg:w-[80%] lg:px-16 px-5 sm:py-10">
        <AnimatedText />
        <p className="font-mplus1p text-lg text-justify sm:text-left">
          <span className="text-[#E31587] font-semibold">Nexachain.ai </span>is
          driven by a steadfast commitment to excellence and cutting-edge
          innovation. We specialize in delivering top-notch blockchain solutions
          & MLM that cater to the diverse needs of our clients. Our strength
          lies in the collective experience and expertise of our dynamic team.
        </p>

        <p className="font-mplus1p text-lg text-justify sm:text-left">
          Comprising seasoned professionals who have served in pivotal roles
          like Project Heads and Team Leaders in various blockchain enterprises,
          our team brings a wealth of knowledge and enthusiasm to Nexachain.ai.
          Fuelled by extensive research, dedication, and a passion for
          excellence, we are at the forefront of providing top-notch MLM
          blockchain solutions.
        </p>
        <h1 className="sm:text-5xl text-[3.1rem] font-semibold font-ubuntu">
          Software is the heart of any <h1 className="text-pink-500 md:hidden text-5xl">MLM Company</h1>
        </h1>
        <div className="lg:text-5xl 2xl:text-7xl text-4xl max-[1215px]:items-center max-[1215px]:flex-col  hidden font-dmsans font-bold md:flex w-full justify-between mt-5">
          <h1 className="flex gap-1">
            <h2 className="relative traking-widest">
              <span className="absolute -left-1">M</span>
              <span className="text-pink-500 relative">M</span>
            </h2>
            <h2 className="relative tracking-widest">
              <span className="absolute -left-1 ">L</span>
              <span className="relative z-10 text-[var(--color-orange)]">
                L
              </span>
            </h2>
            <h2 className="relative tracking-widest">
              <span className="absolute -left-1 ">M</span>
              <span className="relative z-10 text-[var(--color-green)]">M</span>
            </h2>
          </h1>
          <h1 className="lg:text-[7rem] 2xl:text-[9rem] max-[1215px]:mt-0 text-7xl flex font-ubuntu mt-7">
            <h2 className="relative tracking-widest">
              <span className="absolute -left-1.5">C</span>
              <span className="relative z-10 text-[var(--color-green)]">C</span>
            </h2>
            <h2 className="relative tracking-widest">
              <span className="absolute -left-1.5">o</span>
              <span className="relative z-10 text-[#FFD60A]">o</span>
            </h2>
            <h2 className="relative tracking-widest">
              <span className="absolute -left-1.5">m</span>
              <span className="relative z-10 text-[#2BC3D2]">m</span>
            </h2>
            <h2 className="relative tracking-widest">
              <span className="absolute -left-1.5">p</span>
              <span className="relative z-10 text-[#226DB4]">p</span>
            </h2>
            <h2 className="relative tracking-widest">
              <span className="absolute -left-1.5">a</span>
              <span className="relative z-10 text-red-600">a</span>
            </h2>
            <h2 className="relative tracking-widest">
              <span className="absolute -left-1.5">n</span>
              <span className="relative z-10 text-[#8743FF]">n</span>
            </h2>
            <h2 className="relative tracking-widest">
              <span className="absolute -left-1.5">y</span>
              <span className="relative z-10 text-[#FFD60A]">y</span>
            </h2>
          </h1>
          <h1 className="flex gap-1">
            <h2 className="relative traking-widest">
              <span className="absolute -left-1">M</span>
              <span className="text-pink-500 relative">M</span>
            </h2>
            <h2 className="relative tracking-widest">
              <span className="absolute -left-1 ">L</span>
              <span className="relative z-10 text-[var(--color-orange)]">
                L
              </span>
            </h2>
            <h2 className="relative tracking-widest">
              <span className="absolute -left-1 ">M</span>
              <span className="relative z-10 text-[var(--color-green)]">M</span>
            </h2>
          </h1>
        </div>
      </div>

      <div className="w-[18rem] hidden lg:block">
        <img src={herologo} className="w-full aboutheroimg min-[1025px]:h-[69rem] min-[1216px]:w-[80rem]" alt="" />
      </div>
        <img src={heroimg} className="hidden heroimg min-[1216px]:block absolute min-[1216px]:-bottom-10 min-[1216px]:-left-7.5 min-[1400px]:bottom-0 min-[1216px]:w-[65.2rem] min-[1400px]:w-[70rem] 2xl:w-[80rem] z-20 " alt="" />
    </div>
  );
};

export default AboutHero;
