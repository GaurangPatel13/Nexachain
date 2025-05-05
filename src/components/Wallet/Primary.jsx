import React from "react";
import PrimaryCard from "./PrimaryCard";
import img1 from "/assets/Wallet/primary/img1.png";
import img2 from "/assets/Wallet/primary/img2.png";
import img3 from "/assets/Wallet/primary/img3.png";
import ball from "/assets/Wallet/primary/ball.png";
import star1 from "/assets/Wallet/primary/star1.png";
import star2 from "/assets/Wallet/primary/star2.png";
import elips1 from "/assets/Wallet/primary/elips1.png";
import elips2 from "/assets/Wallet/primary/elips2.png";

const Primary = () => {
  const cardData = [
    {
      title: "Paper wallets",
      description:
        "Keys are written on tangible material, such as paper, and kept securely. Naturally, this complicates your cryptocurrency since you can only use digital currency online.",
      icon: img1,
    },
    {
      title: "Hardware wallets:",
      description:
        "The keys are kept on a thumb drive in a secure location and only plugged into a computer when you want to use your cryptocurrency. The goal is to strike a balance between security and practicality.",
      icon: img2,
    },
    {
      title: "Online wallets:",
      description:
        "Look for one that uses two-step encryption and stores keys in an app or other piece of software. This makes sending, receiving, and using your cryptocurrency as simple as using an online bank account, payment method, or brokerage.",
      icon: img3,
    },
  ];
  return (
    <div className="relative flex items-center justify-end flex-col md:flex-row px-5 md:px-0">
      <div className="md:hidden  lg:block lg:w-2/5 bg-[#1A1A1A] py-1 pl-1 rounded-lg">
        <img src={ball} alt="" />
      </div>
      <div className="lg:absolute top-1/2 transform lg:-translate-y-1/2 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center py-12 md:px-20 z-20">
        {cardData.map((card, index) => (
          <div className="flex items-center justify-center">
            <PrimaryCard key={index} {...card} />
          </div>
        ))}
      </div>
        <div className="w-16 absolute bottom-3 left-3">
          <img src={star2} className="w-1/2" alt="" />
          <img src={star1} className="relative left-10 z-20" alt="" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col gap-0 w-full">
      <img src={elips1} className="" alt="" />
      <img src={elips2} className="" alt="" />
      </div>
    </div>
  );
};

export default Primary;
