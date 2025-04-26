import React from "react";
import OrbitSystem from "./OrbitSystem";
import img1 from "/assets/Nft/hero/herocardimg1.png";
import img2 from "/assets/Nft/hero/herocardimg2.png";
import bigimg1 from "/assets/Nft/reliable/img1.png";
import bigimg2 from "/assets/Nft/reliable/img2.png";
import bar from "/assets/Nft/pfp/bar.png";

const Reliable = () => {
  return (
    <div className="lg:min-h-screen flex items-center justify-between sm:h-screen py-10 lg:py-0 relative px-5">
      <OrbitSystem />
      <div className="xl:absolute relative z-20 xl:block md:flex flex-col items-center w-full xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
        <div className="max-w-xl flex flex-col items-center space-y-10">
          <div className="text-center font-chillax md:text-6xl sm:text-5xl text-4xl">
            <h1 className="text-[#1E344F]">We are ecofriendly</h1>
            <h1 className="text-[#1E344F]">
              and a <span className="text-[#8743FF]">reliable</span>
            </h1>
          </div>
          <p className="text-[#162639] font-poppins text-sm sm:text-base text-justify lg:text-start">
            As an ambitious community-driven project, we've placed a strong
            emphasis on setting the standard for unique NFT collector
            experiences.{" "}
          </p>
          <button className="text-white bg-[#8743FF] font-abeezee px-4 py-2 rounded-lg">
            MLM Investment Plan
          </button>
        </div>
      </div>
      <div className="xl:flex flex-col justify-between h-full hidden">
        <div className="flex items-center relative left-30">
          <div className="p-18 rounded-xl bg-[#E6F5D0] text-[#1E344F] flex items-center justify-center">
            <h1 className="font-chillax text-[#1E344F] text-2xl">Gees</h1>
          </div>
          <div className="flex items-center gap-7 min-w-3xs shadow-2xl p-4 bg-white rounded-2xl relative -left-7 top-5">
            <div className="w-10 rounded-full">
              <img src={img2} alt="aastha" />
            </div>
            <div>
              <h6 className="font-poppin text-xl font-inter">Aastha</h6>
              <p className="text-sm font-abel">
                Earn{" "}
                <span className={`font-semibold font-abril text-[#8743FF]`}>
                  $1000
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative bottom-16">
          <h1 className="text-xl font-chillax text-[#1E344F] mb-3">Luna</h1>
          <div className="flex items-center">
            <img src={bigimg1} className="w-54" alt="" />
            <div className="flex items-center gap-7 shadow-2xl p-4 bg-white rounded-2xl relative -left-7">
              <div className="w-10 rounded-full">
                <img src={img1} alt="anna may" />
              </div>
              <div>
                <h6 className="font-poppin text-xl font-inter">Anna May</h6>
                <p className="text-sm font-abel">
                  Earn{" "}
                  <span className={`font-semibold font-abril text-[#8743FF]`}>
                    $1000
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <div className="flex flex-col gap-5 text-[#232323]">
          <h1 className="font-chillax text-2xl">Syne</h1>
          <div className="flex flex-col items-center">
            <img src={bigimg2} className="w-60" alt="" />
            <div className="font-poppins bg-[#EFE4FC] w-50 relative text-sm flex flex-col space-y-6 -top-10 rounded-2xl p-5">
              <p className="text-xs text-end">86%</p>
              <p>$350,000 USD</p>
              <img src={bar} alt="" />
              <p>of 500,000</p>
              <p className="text-xs">
                Expanding internet connectivity with stratospheric balloons
              </p>
            </div>
          </div>
        </div>
        <div className="font-chillax text-2xl p-14 flex items-center justify-center bg-[#E7EEFA] rounded-2xl relative right-70 bottom-15 text-[#1E344F]">
          <h1>Sunport</h1>
        </div>
      </div>
    </div>
  );
};

export default Reliable;
