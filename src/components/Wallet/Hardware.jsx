import React from "react";
import img from "/assets/Wallet/use/img1.png";
import img1 from "/assets/Wallet/hardware/img1.png";

const Hardware = () => {
  return (
    <div className="py-10  px-5 md:px-0">
      <div className="flex flex-col items-center gap-3 font-montserrat mb-5 md:mb-0">
        <h1 className="xl:text-[9rem] lg:text-8xl md:text-7xl text-3xl font-bold leading-none bg-gradient-to-br from-[#E31587] via-[#971EFF] to-[#00BCD4] bg-clip-text text-transparent">
          Hardware wallets
        </h1>

        <h1 className="md:text-4xl txt-2xl font-semibold font-inter">
          {" "}
          What is a Hardware Wallet?
        </h1>
        <div className="w-1/2 flex items-center justify-center gap-1">
          <img src={img} className="w-14" alt="" />
        </div>
        <p className="md:text-center text-justify max-w-4xl relative text-sm md:text-base">
          A hardware wallet is a physical device, roughly the size of a USB
          thumb drive, that stores the private keys to your cryptocurrency
          offline. This offline nature makes it one of the most secure ways to
          protect your digital assets.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto md:px-5 lg:px-auto">
        <div className="font-inter md:w-1/2">
          <h1 className="md:text-5xl text-2xl font-bold mb-5">
            Why Choose a<br />
            Hardware Wallet?
          </h1>
          <p className="text-sm max-w-sm md:text-start text-justify">
            While they’re more complex and expensive than software wallets,
            hardware wallets offer top-tier security. Even if your computer is
            compromised by malware or a hacker, your cryptocurrency remains safe
            in your offline device.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={img1} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hardware;
