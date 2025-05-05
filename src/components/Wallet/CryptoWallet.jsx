import React from "react";
import bgimg from "/assets/Wallet/cryptoWallet/bgimg.png";
import rock from "/assets/Wallet/cryptoWallet/rock.png";

const CryptoWallet = () => {
  return (
    <div
      className="md:h-screen flex flex-col items-center justify-between pt-10 pb-10 md:pb-0 mt-5 md:mt-0"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-between flex-col md:flex-row gap-7 md:gap-0 max-w-4xl 2xl:max-w-7xl mx-auto px-3 md:px-auto 2xl:pt-10">
        <div className="flex flex-col gap-3 md:w-1/2">
          <div className="font-arial md:text-5xl text-4xl 2xl:text-7xl font-bold">
            What is a <br />
            crypto wallet?
          </div>
          <div className="w-1/2 flex items-center gap-1">
            <div className="w-1/7 h-2 rounded-full bg-white"></div>
            <div className="w-6/7 h-2 rounded-full bg-white"></div>
          </div>
        </div>
        <div className="md:w-1/2 text-justify font-inter text-sm 2xl:text-base">
          <p>
            Your private keys are kept safe and accessible by crypto wallets.
            You can send, receive, and spend cryptocurrencies like Bitcoin and
            Ethereum using them as well. Crypto wallets, which keep your private
            keys or passwords that grant access to your cryptocurrencies safe
            and easily accessible, allow you to send and receive
            cryptocurrencies such as Bitcoin and Ethereum. They are available in
            various formats, from mobile apps like Coinbase Wallet to hardware
            wallets like Ledger (which resembles a USB stick). They make buying
            cryptocurrency online as simple as using a credit card
          </p>
        </div>
      </div>
      <div className="w-1/2 hidden md:block">
        <img src={rock} alt="" />
      </div>
    </div>
  );
};

export default CryptoWallet;
