import React from "react";
import cryptoText from "/assets/Wallet/hero/img2.png";
import cryptoLock from "/assets/Wallet/hero/img1.png";
import profile from "/assets/Wallet/hero/img3.png";

export default function Hero() {
  return (
    <section className="relative w-full md:min-h-screen flex flex-col py-10 font-inter items-center md:justify-between md:gap-20 bg-black overflow-hidden">
      <div>
        {/* Background Crypto Text */}
        <img
          src={cryptoText}
          alt="Cryptocurrency"
          className="w-full object-contain"
        />
      </div>

      {/* Central Image */}
      <img
        src={cryptoLock}
        alt="Crypto Lock"
        className="md:absolute left-1/2 top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 md:w-3/6"
      />

      <div className="w-full flex flex-col md:gap-25 gap-5 md:px-4">
        {/* Left Text */}
        <div className=" text-white justify-between items-start flex flex-col md:flex-row gap-5 md:gap-0 z-20">
          <p className="md:text-2xl max-w-xs font-medium">
            Easily buy and sell cryptocurrency with our{" "}
            <span className="text-[#4D0F83]">user-friendly app</span>
          </p>
          {/* Right Text */}
          <div className="md:text-right text-white max-w-sm z-20">
            <p className="md:text-2xl max-w-xs font-medium">
              Start accepting <span className="text-[#4D0F83]">payment</span>{" "}
              and earning money{" "}
              <span className="text-[#4D0F83] font-bold">today!</span>
            </p>
          </div>
        </div>

        <div className="">
          <img src={profile} className="w-24" />
        </div>
      </div>
    </section>
  );
}
