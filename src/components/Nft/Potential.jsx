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
      className="min-h-screen md:pb-20 pb-5 relative overflow-hidden"
    >
      {/* Background Image */}
      <img src={bg} alt="Background" className="w-full h-auto" />
      <div className="w-full absolute z-20 font-chillax 2xl:text-8xl md:text-6xl text-4xl sm:text-5xl text-center md:text-start gap-5 lg:top-10 xl:top-1/6 md:top-1/6 top-10 left-1/2 -translate-x-1/2 -translate-y-1/6 flex flex-col items-center">
        <h1 className="text-[#1E344F] md:text-center lg:text-start">Seamless Entry, Limitless</h1>
        <div className="flex items-center gap-4">
          <h1 className="text-[#FF0000] leading-none">Potential</h1>
          <div className="md:w-14 w-12 2xl:w-20 rounded-full">
            <img src={textImg} alt="" />
          </div>
        </div>
      </div>

      {/* small cards */}

      <div className="absolute hidden left-10 top-1/3 -translate-y-1/3 xl:flex items-center gap-7 shadow-md p-4 bg-white rounded-2xl">
        <div className="w-10 2xl:w-16 rounded-full">
          <img src={img1} alt="aastha" />
        </div>
        <div>
          <h6 className="font-poppin text-xl 2xl:text-3xl font-inter">Aastha</h6>
          <p className="text-sm 2xl:text-lg font-abel">
            Earn{" "}
            <span className={`font-semibold font-abril text-[#FF7051]`}>
              $1000
            </span>
          </p>
        </div>
      </div>
      <div className="absolute hidden right-10 top-1/2 z-41 -translate-y-1/2 xl:flex items-center gap-7 p-4 bg-[#FFFFFFCC] shadow-xl rounded-2xl">
        <div className="w-10 2xl:w-16 rounded-full">
          <img src={img2} alt="aastha" />
        </div>
        <div>
          <h6 className="font-poppin text-xl 2xl:text-3xl font-inter">Aastha</h6>
          <p className="text-sm 2xl:text-lg font-abel">
            Earn{" "}
            <span className={`font-semibold font-abril text-[#FF7051]`}>
              $1000
            </span>
          </p>
        </div>
      </div>

      {/* three cards */}

      <div className="lg:absolute md:relative lg:bottom-25 lg:left-1/2 lg:-translate-x-1/2 w-full px-5 z-40 mt-5 md:mt-0">
        <div className="flex lg:gap-16 gap-5 justify-center items-center md:items-start md:flex-row flex-col">
          {cardData.map((card, idx) => (
            <div key={idx} className={idx === 1 ? "relative md:bottom-10 z-20 md:z-0" : ""}>
              <BigCard {...card} />
            </div>
          ))}
                  <img src={line1} className="hidden md:block  absolute top-0 left-1/3 -translate-x-1/3 lg:w-36 md:w-24 2xl:w-48 2xl:left-3/8" alt="" />
                  <img src={line2} className="hidden md:block  absolute -top-5 left-2/3 -translate-x-3/4 lg:left-5/7 lg:w-44 md:w-24 xl:translate-x-5/10 xl:left-5/10 2xl:right-1/4 2xl:w-48" alt="" />
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
