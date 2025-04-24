import React, { useRef } from "react";
import BouncingBallsWithFramer from "./BouncingBallsWithFramer";
import bg from "/assets/Nft/potential/mainbg.png";
import textImg from "/assets/Nft/potential/textimg1.png";
import img1 from "/assets/Nft/hero/herocardimg1.png";
import img2 from "/assets/Nft/hero/herocardimg2.png";
import cardimg1 from "/assets/Nft/potential/bigcardimg1.png";
import cardimg2 from "/assets/Nft/potential/bigcardimg2.png";
import cardimg3 from "/assets/Nft/potential/bigcardimg3.png";
import BigCard from "./BigCard";
import line1 from "/assets/Nft/potential/line1.png";
import line2 from "/assets/Nft/potential/line2.png";

const Potential = () => {
  const sectionRef = useRef(null);

  const cardData = [
    {
      title: "Loyalty Program",
      description:
        "Click My Collections and set up your collection. Add a description, profile & banner images, and set a secondary sales fee.",
      btnText: "Create",
      btnColor: "#FF980E",
      icon: cardimg1,
    },
    {
      title: "Reward System",
      description:
        "Track your loyal users and offer exciting rewards for consistent engagement and referrals.",
      btnText: "Start Now",
      btnColor: "#FF3647",
      icon: cardimg2,
    },
    {
      title: "Referral Bonus",
      description:
        "Let users refer friends and earn bonuses. Customize rules and track growth through referrals.",
      btnText: "Configure",
      btnColor: "#07C160",
      icon: cardimg3,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen pb-20 relative overflow-hidden"
    >
      {/* Background Image */}
      <img src={bg} alt="Background" className="w-full h-auto" />
      <div className="w-full absolute z-20 font-chillax text-6xl gap-5 top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/6 flex flex-col items-center">
        <h1 className="text-[#1E344F]">Seamless Entry, Limitless</h1>
        <div className="flex items-center gap-4">
          <h1 className="text-[#FF0000]">Potential</h1>
          <div className="w-14 rounded-full">
            <img src={textImg} alt="" />
          </div>
        </div>
      </div>

      {/* small cards */}

      <div className="absolute left-10 top-1/3 -translate-y-1/3 flex items-center gap-7 shadow-md p-4 bg-white rounded-2xl">
        <div className="w-10 rounded-full">
          <img src={img1} alt="aastha" />
        </div>
        <div>
          <h6 className="font-poppin text-xl font-inter">Aastha</h6>
          <p className="text-sm font-abel">
            Earn{" "}
            <span className={`font-semibold font-abril text-[#FF7051]`}>
              $1000
            </span>
          </p>
        </div>
      </div>
      <div className="absolute right-10 top-1/2 z-41 -translate-y-1/2 flex items-center gap-7 p-4 bg-[#FFFFFFCC] shadow-xl rounded-2xl">
        <div className="w-10 rounded-full">
          <img src={img2} alt="aastha" />
        </div>
        <div>
          <h6 className="font-poppin text-xl font-inter">Aastha</h6>
          <p className="text-sm font-abel">
            Earn{" "}
            <span className={`font-semibold font-abril text-[#FF7051]`}>
              $1000
            </span>
          </p>
        </div>
      </div>

      {/* three cards */}

      <div className="absolute bottom-25 left-1/2 -translate-x-1/2 w-full z-40">
        <div className="flex gap-16 justify-center">
          {cardData.map((card, idx) => (
            <div key={idx} className={idx === 1 ? "relative bottom-10" : ""}>
              <BigCard {...card} />
            </div>
          ))}
                  <img src={line1} className="absolute top-0 left-1/3 -translate-x-1/3 w-36" alt="" />
                  <img src={line2} className="absolute -top-5 left-2/3 -translate-x-3/4 w-44" alt="" />
        </div>
      </div>

      {/* Bouncing Balls overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <BouncingBallsWithFramer parentRef={sectionRef} />
      </div>
    </div>
  );
};

export default Potential;
