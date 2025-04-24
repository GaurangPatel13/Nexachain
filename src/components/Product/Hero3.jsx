import React from "react";
import { FaUsers, FaClock, FaMoneyBillWave, FaLeaf } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import hero1 from '/assets/Product/hero/hero3img1.png';
import hero2 from '/assets/Product/hero/hero3img2.png';
import hero3 from '/assets/Product/hero/hero3img3.png';
import hero4 from '/assets/Product/hero/hero3img4.png';

const features = [
  {
    icon: hero1,
    title: "Professional Team",
    desc: "Impeccable results.",
  },
  {
    icon: hero2,
    title: "On Time Service",
    desc: "Never late to make it.",
  },
  {
    icon: hero3,
    title: "Transparent Pricing",
    desc: "No hidden costs.",
  },
  {
    icon: hero4,
    title: "Eco Friendly",
    desc: "Sparkling environment.",
  },
];

const Hero3 = () => {
  return (
    <section className="w-full md:px-10 px-4">
      <section className="w-full relative bg-white rounded-xl shadow-md p-6 md:p-6 my-10 ">
        {/* Top Heading Section */}
        <div className="flex flex-col relative md:flex-row md:items-center justify-between gap-6 xl:pb-5">
          <div>
            <p className="text-[#2FA966] font-quantico text-sm font-semibold">
              Get Success Together!
            </p>
            <h2 className="text-2xl font-podkova md:text-2xl font-bold text-gray-900 mt-1">
              The Path to Success
            </h2>
          </div>
          <p className="text-gray-600 mt-2 font-jakarta max-w-xl xl:w-full w-full">
            On The Path to Success, you will encounter challenges and obstacles
            that test your resolve. But with determination and perseverance.
          </p>

          <div className="flex gap-4 font-inter">
            <button
              className="px-5 py-2 border-2 cursor-pointer border-[#2E2F35] rounded-lg text-[#2E2F35] hover:bg-gray-100"
              style={{
                boxShadow: "4.46px 4.46px 0px 0px rgba(46, 47, 53, 1)",
              }}
            >
              Watch Video
            </button>
            <button
              className="px-5 py-2 cursor-pointer border-2 border-[#2E2F35] bg-[#FFA800] hover:bg-yellow-500 rounded-lg text-white"
              style={{
                boxShadow: "4.46px 4.46px 0px 0px rgba(46, 47, 53, 1)",
              }}
            >
              Request Demo
            </button>
          </div>
          <div className="w-[100%] h-[1px] bg-[#00000033] hidden md:block absolute bottom-0"></div>
        </div>

        {/* Feature Icons */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-purple-600 gap-3"
            >
              <img src={feature.icon} className="w-8" alt="" />
              <div className="flex flex-col items-start">
                <p className="font-semibold text-sm text-gray-900 font-dmsans">
                  {feature.title}
                </p>
                <p className="text-xs text-gray-500 font-opensans">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </section>
    </section>
  );
};

export default Hero3;
