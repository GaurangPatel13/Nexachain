import React from "react";
import img1 from "/assets/Wallet/learn/img1.png";
import img2 from "/assets/Wallet/whyCrypto/img3.png";

const Learn = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl 2xl:max-w-7xl mx-auto">
      <div className="relative flex items-center justify-between flex-col md:flex-row md:px-10 xl:px-auto">
        <div className="md:w-1/2 md:pr-7">
          <p className="font-dmsans text-[#A4A9AC] md:text-sm lg:text-base 2xl:text-lg mb-5 text-justify md:text-start">
            {" "}
            Every type has trade-offs. Paper and hardware wallets have limited
            functionality and risk being lost or destroyed, but they are more
            challenging for malicious users to access because they are stored
            offline. The simplest way to get started with cryptocurrency and
            provide a balance of security and accessibility are online wallets
            provided by a major exchange like Coinbase. Protecting against
            hackers depends on your wallet provider's security, so look for
            features like two-factor verification. This is because your private
            information is online. You can easily access your cryptocurrency
            holdings using an app like Coinbase Wallet or Exodus. You could:
          </p>
          <button className="px-4 py-2 rounded border border-white text-white 2xl:text-lg">
            Learn more
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <img src={img1} className="relative z-2" alt="" />
        </div>
        <img
          src={img2}
          className="absolute w-2/3 top-1/2 lg:-right-25 md:right-0 -right-25 -translate-y-1/2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Learn;
