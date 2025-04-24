import React from "react";
import inteimg1 from "/assets/Product/integrate/inteimg1.png";
import rightimg1 from "/assets/Product/integrate/rightimg1.png";
import rightimg2 from "/assets/Product/integrate/rightimg2.png";
import rightimg3 from "/assets/Product/integrate/rightimg3.png";
import rightimg4 from "/assets/Product/integrate/rightimg4.png";
import rightimg5 from "/assets/Product/integrate/rightimg5.png";
import rightimg6 from "/assets/Product/integrate/rightimg6.png";
import rightimg7 from "/assets/Product/integrate/rightimg7.png";
import rightimg8 from "/assets/Product/integrate/rightimg8.png";
import rightimg9 from "/assets/Product/integrate/rightimg9.png";
import rightimg10 from "/assets/Product/integrate/rightimg10.png";

const Integrate = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4">
      <div className="py-4 lg:w-1/2 md:px-20 space-y-5">
        <img src={inteimg1} className="w-20" alt="" />
        <h1 className="md:text-5xl lg:text-4xl xl:text-5xl text-3xl font-semibold font-dmsans text-[#333333] tracking-wide leading-snug">
          <span className="text-[#8743FF]">Integrate </span>with your
          <br />
          favourite apps
        </h1>
        <p className="text-sm font-inter text-[#252525]">
          Projects seamlessly integrate with various apps, enhancing
          productivity by streamlining workflows, automating tasks, and
          improving efficiency across communication, finance, and file
          management tools.
        </p>
        <button className="mt-4 border border-white text-white bg-[#202020] px-10 py-2 rounded-full font-semibold hover:bg-white hover:text-[#202020] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#202020] hover:border-[#202020] cursor-pointer">
          Get started
        </button>
        <div className="p-3.5 border-[#333333] border shadow-[10px_12px_0px_0px_rgba(51,51,51,1)]">
          <div className="bg-[#333333] text-white text-xs font-inter p-2">
            Google Apps / Microsoft Apps / Imports / Manage Documents / Manage
            Repositories / Ticketing Systems / Calendars / Messaging / Automate
            Workflows / Add-Ons
          </div>
        </div>
      </div>
      <div className="md:p-20 lg:p-5 xl:p-20 py-5 lg:w-1/2 bg-white flex justify-center items-center">
        <div className="shadow-[10px_-9px_0px_0px_rgba(135,67,255,1)] bg-white overflow-hidden max-w-6xl w-full">
          <div className="p-3 bg-[#F4F4F4]">
            <div className="border-1">
              <div className="flex">
                <img className="w-1/3 border-r " src={rightimg1} alt="" />
                <img className="w-1/3 border-r " src={rightimg2} alt="" />
                <img className="w-1/3" src={rightimg3} alt="" />
              </div>

              <div className="flex">
                <img className="w-1/3 border-r " src={rightimg4} alt="" />
                <img className="w-2/3" src={rightimg5} alt="" />
              </div>

              <div className="flex">
                <img className="w-1/3 border-r " src={rightimg6} alt="" />
                <img className="w-1/3 border-r " src={rightimg7} alt="" />
                <img className="w-1/3" src={rightimg8} alt="" />
              </div>

              <div className="flex">
                <img className="w-1/3 border-r " src={rightimg9} alt="" />
                <img className="w-1/3 border-r " src={rightimg10} alt="" />
                <img className="w-1/3" src={rightimg1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrate;
