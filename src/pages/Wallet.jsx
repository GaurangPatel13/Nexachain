import React from "react";
import Navbar from "../components/Wallet/Navbar";
import Hero from "../components/Wallet/Hero";
import Crypto from "../components/Wallet/Crypto";
import Crypto1 from "../components/Wallet/Crypto1";
import Crypto2 from "../components/Wallet/Crypto2";
import CryptoWallet from "../components/Wallet/CryptoWallet";
import WhyCrypto from "../components/Wallet/WhyCrypto";
import Use from "../components/Wallet/Use";
import Primary from "../components/Wallet/Primary";
import Learn from "../components/Wallet/Learn";
import MainCom from "../components/Wallet/MainCom";
import HostedWallets from "../components/Wallet/HOstedWallets";
import Benefits from "../components/Wallet/Benefits";
import HostedWallet from "../components/Wallet/HostedWallet";
import Hardware from "../components/Wallet/Hardware";
import Benefits2 from "../components/Wallet/Benefits2";
import Future from "../components/Wallet/Future";
import Footer from "../components/Wallet/Footer";

const Wallet = () => {
  return (
    <div className="bg-[#010101] text-white">
      <div className="">
        <Navbar />
      </div>
      <div className="md:px-3 px-5 overflow-x-hidden">
        <Hero />
        <Crypto />
        
        <div className="overflow-hidden">
          <Crypto1 />
          <Crypto2 />
        </div>
        <CryptoWallet />
        <WhyCrypto />
        <Use />
      </div>
      <Primary />
      <div className="md:px-3 px-5 overflow-hidden">
        <Learn />
        <MainCom />
      </div>
      <HostedWallets />
      <Benefits />
      <div className="md:px-3 px-5 overflow-hidden">
        <HostedWallet />
      </div>
      <Hardware />
      <Benefits2 />
      <Future />
      <Footer />
    </div>
  );
};

export default Wallet;
