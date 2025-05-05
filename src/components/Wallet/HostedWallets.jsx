import React from "react";
import img from "/assets/Wallet/use/img1.png";
import bg from "/assets/Wallet/hosted/img1.png";
import star from "/assets/Wallet/whyCrypto/img2.png";

const HostedWallets = () => {
  return (
    <div className="flex flex-col items-center gap-20 py-10 relative md:px-5 lg:px-auto">
      <div className="flex flex-col items-center gap-3 2xl:gap-10 font-montserrat">
        <h1 className="xl:text-[9.5rem] 2xl:text-[11rem] lg:text-9xl md:text-7xl text-4xl font-bold leading-none bg-gradient-to-br from-[#E31587] via-[#971EFF] to-[#00BCD4] bg-clip-text text-transparent">
          Crypto Wallet
        </h1>
        <h1 className="lg:text-4xl 2xl:text-5xl text-2xl font-semibold text-center md:text-start">
          {" "}
          How do you use a crypto wallet?
        </h1>
        <div className="w-1/2 flex items-center justify-center gap-1">
          <img src={img} className="w-14 2xl:w-20" alt="" />
        </div>
        <p className="md:text-center text-justify max-w-4xl 2xl:max-w-5xl 2xl:text-lg relative text-sm lg:text-base px-4 md:px-0">
          A hosted wallet is the most common and beginner-friendly type of
          cryptocurrency wallet. When you buy cryptocurrency on platforms like
          Coinbase, your crypto is stored in a hosted wallet by default. It’s
          called “hosted” because a third party (like Coinbase) securely stores
          your crypto for you—similar to how a bank holds your money in a
          savings or checking account.
          <div className="w-20 2xl:w-24 absolute hidden md:block xl:-right-20 xl:-top-10 md:-top-20 md:right-10">
            <img src={star} alt="" />
          </div>
        </p>
      </div>
      <div className="w-30 2xl:w-40 absolute bottom-0 left-0">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default HostedWallets;
