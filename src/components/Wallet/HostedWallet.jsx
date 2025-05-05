import React from "react";
import img1 from "/assets/Wallet/hostedWallet/img1.png";
import img2 from "/assets/Wallet/hostedWallet/img2.png";

const HostedWallet = () => {
  return (
    <div className="md:py-10 pt-10 font-poppins">
      <h1 className="md:text-5xl text-3xl font-bold text-center">
        How to Set Up a Hosted Wallet
      </h1>
      <div className="md:py-20 py-7 relative">
        <div className="flex flex-col gap-5 bg-[#1A1A1A] md:p-10 p-5 max-w-6xl rounded-lg mx-auto mb-5 md:mb-0">
          <div className="md:w-2/3">
            <div className="mb-5">
              <h1 className="text-2xl font-bold mb-2">
                1. Download a Wallet App
              </h1>
              <p>
                For example, the Coinbase app offers a popular hosted wallet
                solution.
              </p>
            </div>
            <div className="mb-5">
              <h1 className="text-2xl font-bold mb-2">2. Create an Account</h1>
              <p>
                Sign up using your email and follow the verification steps.
                Since it’s a hosted wallet, your personal information may be
                required for security and compliance reasons.
              </p>
            </div>
            <div className="mb-5">
              <h1 className="text-2xl font-bold mb-2">
                3. Start Buying & Selling
              </h1>
              <p>
                Once your account is set up, you can start buying cryptocurrency
                using traditional currency and store it safely in your hosted
                wallet.
              </p>
            </div>
            <button className="text-black bg-[#971EFF] px-3 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:absolute xl:right-40 md:right-0 top-1/2 md:-translate-y-1/2 lg:w-72 md:w-64">
          <img src={img1} alt="" />
        </div>
        <div className="absolute right-0 hidden md:block -top-15 w-60">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HostedWallet;
