import React from "react";
import platimg1 from "/assets/Crypto/platform/platimg1.png";
import platimg2 from "/assets/Crypto/platform/platimg2.png";
import platimg3 from "/assets/Crypto/platform/platimg3.png";
import platimg4 from "/assets/Crypto/platform/platimg4.png";
import heroimg1 from "/assets/Crypto/hero/heroimg1.png";

const Platform = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row font-outfit relative min-h-screen 2xl:max-h-screen items-center w-full justify-end px-6 md:px-20 py-10 bg-white gap-8">
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 flex justify-between items-center lg:absolute top-1/2 left-10 lg:-translate-y-1/2 md:z-20 ">
        <img src={platimg4} className="w-20 h-20 hidden md:block" alt="" />
        <img
          src={platimg3}
          alt="Crypto App Illustration"
          className="max-w-xss md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 text-center md:text-left space-y-4 relative md:z-30 flex flex-col items-center">
        <img src={heroimg1} className="w-24" alt="" />
        <div className="space-y-5">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold">
            Try Our Crypto <span className="text-pink-600">Nexachain.ai</span>{" "}
            Platform
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Start now to get up to{" "}
            <span className="text-orange-500 font-semibold">10 USDT</span> in
            rewards!
          </p>

          <div className="bg-[#0B1E39] text-white rounded-xl p-6 mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-1">
              <h3 className="text-lg font-bold text-[#FF980E]">Sign Up</h3>
              <p className="text-sm text-white w-2/3">
                Sign Up and Claim 5 USDT token + 2 USDT coupon + 1 USDT Futures
                Trial Fund
              </p>
            </div>
            <button className="bg-[#FF980E] text-black w-24 py-2 rounded-full text-sm cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden md:block">
        <div className="relative">
          <img src={platimg1} className="w-36" alt="" />
          <img
            src={platimg2}
            className="absolute w-30 bottom-1/3 translate-y-1/2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Platform;
