import React from "react";
import { FaPlay } from "react-icons/fa";
import heroImg from "/assets/Home/homehero/nexachainhome.png";
import manImage from "/assets/Home/homehero/manbgimg.jpeg";
import homebg from "/assets/Home/homehero/homeimgbg.jpeg";
import { TfiSharethis } from "react-icons/tfi";
import { GoPlay } from "react-icons/go";

const Hero1 = () => {
  return (
    <section className="w-full bg-gray-100 p-2 md:p-4 relative font-manrope">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-6 items-end rounded-xl overflow-hidden bg-white shadow-md p-2"
        style={{ backgroundImage: `url(${manImage})`, backgroundSize: "cover" }}
      >
        {/* Left Section */}
        <div className="p-2 md:p-10 flex flex-col gap-3 bg-white rounded-2xl">
          <h1 className="text-xl text-center sm:text-start md:text-6xl font-sora uppercase leading-tighter">
            THE ULTIMATE
          </h1>

          {/* Image instead of "NEXACHAIN CORE" */}
          <img
            src={heroImg}
            alt="Nexachain Core Logo"
            className="w-64 md:w-full"
          />

          <p className=" uppercase tracking-widest text-xs sm:text-base text-center sm:text-start font-sora text-[#111111]">
            Software Suite for Modern Businesses
          </p>

          <div className="flex items-center gap-3">
            <p className="text-gray-700 text-xs text-justify leading-relaxed">
              <span className="text-blue-600 font-semibold">
                Your Business, Your Way: A Software Suite That Understands Your
                Needs
              </span>
              <br />
              Imagine a unified digital workspace where productivity soars and
              efficiency becomes the norm, regardless of your business size. Our
              cutting-edge and comprehensive software suite, is meticulously
              engineered to transform the way both nimble startups and large
              enterprises operate, seamlessly adapting to your unique needs
              while enhancing every aspect of your workflow. Developed by [Your
              Company Name], a leader in innovation and security, we are deeply
              committed to safeguarding your privacy through robust measures
              while empowering your team with powerful, intuitive tools that
              streamline processes, foster collaboration, and ultimately drive
              your business towards greater success.
            </p>
            <button class="bg-black hidden text-white px-3 py-6.5 cursor-pointer rounded-full sm:flex flex-col gap-5">
              <span class="flex flex-col items-center leading-none">
                <span class="rotate-270">r</span>
                <span class="rotate-270">e</span>
                <span class="rotate-270">v</span>
                <span class="rotate-270">o</span>
                <span class="rotate-270">c</span>
                <span class="rotate-270">s</span>
                <span class="rotate-270">i</span>
                <span class="rotate-270">D</span>
              </span>
              <TfiSharethis />
            </button>
          </div>

          {/* Watch Video */}
          <div
            className="flex items-center gap-3 mt-2 p-5 rounded-2xl h-18"
            style={{ backgroundImage: `url(${homebg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <button className="flex items-center gap-2 text-xs text-white">
              <GoPlay className="text-2xl" />
              Watch video
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-end">
          {/* 350+ Badge */}
          <div className="lg:w-1/2 w-full font-sora h-40 flex flex-col items-center justify-center bg-[#33333366] backdrop-filter backdrop-blur-[10px] text-white text-center rounded-xl px-4 py-2 shadow-md">
            <p className="sm:text-7xl text-5xl font-semibold">350+</p>
            <p className="text-sm">Creative specialist in our team</p>
          </div>

          
        </div>
          </div>
          {/* Side Buttons (like Share icons) */}
          <div className="absolute hidden top-1/2 -translate-y-1/2 right-0 bg-[#F0F2F4] p-1.5 rounded-lg lg:flex flex-col gap-2 transform pr-2">
            <button className="bg-black text-white py-2 w-18 rounded-l-lg"><TfiSharethis className="ml-2 text-xs" /></button>
            <button className="bg-black text-white py-2 w-18 rounded-l-lg"><TfiSharethis className="ml-2 rotate-180 text-xs" /></button>
          </div>
    </section>
  );
};

export default Hero1;
