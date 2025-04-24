import React from "react";
import percentage from "/assets/Home/operating/percentage.png";
import button1 from "/assets/Home/operating/button1.png";
import files_uploading from "/assets/Home/operating/files_uploading.png";
import profile2 from "/assets/Home/operating/profile2.png";
import reviews from "/assets/Home/operating/reviews.png";
import nexachain from "/assets/Home/operating/nexachain.png";

const Operating = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center px-5 sm:px-20 sm:h-[30rem]">
      {/* Left Section */}
      <div className="left sm:w-1/2">
        <img src={nexachain} alt="Nexachain logo" loading="lazy" />
        <div className="mt-5 space-y-5">
          <h1 className="font-jakarta text-xl text-black">
            The Operating System For Business
          </h1>
          <p className="text-xs text-black font-base">
            Run your entire business on Nexachain.ai with our unified cloud
            software, designed to help you break down silos between departments
            and increase organizational efficiency.
          </p>
          <button className="bg-[#000000] text-sm text-white py-2 px-4 rounded-lg font-lato">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right sm:w-1/2 flex items-center justify-center relative h-full mt-14 sm:mt-0">
        <div className="relative sm:w-full flex items-center justify-center">
          {/* Main image */}
          <img
            className="sm:w-72 w-full"
            src={files_uploading}
            alt="File uploading illustration"
            loading="lazy"
          />
          
          {/* Overlay Images */}
          <img
            className="absolute lg:left-25 -top-9 sm:left-0 sm:-top-9 -left-9 w-36 z-15"
            src={percentage}
            alt="Percentage progress"
            loading="lazy"
          />
          <img
            className="absolute bottom-0 -left-9 lg:left-25 w-36 z-15"
            src={button1}
            alt="Button illustration"
            loading="lazy"
          />
          <img
            className="absolute lg:right-17 sm:bottom-10 sm:-right-5 -top-15 -z-5 -right-5 w-40"
            src={profile2}
            alt="Profile icon"
            loading="lazy"
          />
          <img
            className="absolute md:block hidden -bottom-10 md:-right-15 -right-25 xl:right-10 w-72 z-15"
            src={reviews}
            alt="Reviews illustration"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Operating;
