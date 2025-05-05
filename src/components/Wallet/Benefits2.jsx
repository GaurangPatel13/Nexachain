import React from "react";
import LeftImage from "/assets/Wallet/benefits2/img1.png";
import SphereImage from "/assets/Wallet/benefits2/blur.png";
import ball from "/assets/Wallet/benefits2/ball.png";

const Benefits2 = () => {
  return (
    <div className="relative flex flex-col lg:flex-row md:items-start items-center justify-center font-inter px-4 py-12 bg-black text-white overflow-hidden">
      {/* Left Image */}
      <div className="relative z-10 w-full lg:w-1/2 flex justify-center items-center lg:justify-start mb-8 lg:mb-0">
        <img src={LeftImage} alt="Crypto Phones" className="w-3/4 md:w-1/3 lg:w-3/4 max-w-md" />
      </div>

      {/* Right Text */}
      <div className="relative z-10 lg:w-1/2 max-w-xl text-left">
        <h2 className="text-4xl font-bold mb-4">KEY BENEFITS</h2>
        <p className="mb-6 text-[#898990] md:text-base text-sm md:text-start text-justify">
          Crypteck is easy to use and powerful to build with. Every aspect of
          the platform was designed from the ground up to support exceptional
          user experience at mainstream scale.
        </p>
        <p className="mb-6 text-[#898990] md:text-base text-sm md:text-start text-justify">
          Originally conceived by the team behind CryptoKitties, Crypteck today
          is a decentralized network supported and built on by a growing
          community of brands and Web3 builders.
        </p>
        <ul className="space-y-6">
          <li className="flex items-start gap-3">
            <span className="h-3 w-3 bg-[#971EFF] rounded-full mt-1.5"></span>
            <p className="text-[#898990] md:text-base text-sm">
              <span className="font-bold text-white text-xl">Maximum Security:</span><br/> Keeps your
              private keys offline and immune to online threats.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="h-3 w-3 bg-[#971EFF] rounded-full mt-1.5"></span>
            <p className="text-[#898990] md:text-base text-sm">
              <span className="font-bold text-white text-xl">Full Ownership:</span><br/> You, and only
              you, control your crypto—no third party involved.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="h-3 w-3 bg-[#971EFF] rounded-full mt-1.5"></span>
            <p className="text-[#898990] md:text-base text-sm">
              <span className="font-bold text-white text-xl">Portable:</span><br/> Easily store and
              transport your assets in a small physical device.
            </p>
          </li>
        </ul>
          </div>
          
          <div className="absolute top-1/2 left-1/5 transform -translate-x-1/5 -translate-y-1/2 md:w-1/2">
          <div className="w-full relative">
          {/* Center Absolute Image (Sphere) */}
          <img
            src={SphereImage}
            alt="Decorative Sphere"
            className="opacity-60 z-0 pointer-events-none"
          />
          <img
            src={ball}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 opacity-60 z-0 pointer-events-none"
            alt=""
          />
        </div>
          </div>
    </div>
  );
};

export default Benefits2;
