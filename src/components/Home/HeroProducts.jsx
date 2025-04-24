import React, { useState } from "react";
import heroproducto from "/assets/Home/homehero/heroproducto.png";
import CapsuleCard from "./CapsuleCard";
import productimg1 from "/assets/Home/homehero/productimg1.png";
import productimg2 from "/assets/Home/homehero/productimg2.png";
import productimg3 from "/assets/Home/homehero/productimg3.png";

const HeroProducts = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const cards = [
    {
      title: "Product",
      label: "MLM",
      description:
        "Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage.",
      image: productimg1,
      color: "#FFA800",
    },
    {
      title: "Smart Contract",
      label: "MLM",
      description:
        "Cut through the yawns, grab your audience’s attention, and turn passive attendees into active participants.",
      image: productimg2,
      color: "#2FA966",
    },
    {
      title: "Crypto",
      label: "MLM",
      description:
        "Track the success of your events with deep insights and analytics measured across the entire attendee experience.",
      image: productimg3,
      color: "#226DB4",
    },
  ];

  return (
    <div className="mt-8 md:px-14">
      <div className="flex items-end">
        <div className="flex items-end">
          <img
            className="lg:w-24 w-10"
            src={heroproducto}
            alt="Product Icon"
            loading="lazy" // Lazy load image
          />
          <h1 className="lg:text-6xl text-xl font-semibold font-jakarta">
            ur Products
          </h1>
        </div>
        <p className="text-[#2FA966] font-semibold text-lg font-poppins">
          / Discover Us
        </p>
      </div>

      <div className="w-full h-0.5 bg-black mt-5"></div>

      <div className="flex flex-col sm:flex-row items-center justify-between  px-5 mt-5">
        <div className="sm:w-1/2">
          <h1 className="lg:text-8xl sm:text-6xl text-4xl leading-none">
            Find <span className="text-[#226DB4]">it</span> works
          </h1>
        </div>
        <div className="sm:w-1/2">
          <p className="font-inter text-justify sm:text-left">
            Manage your experience from start to finish, from integrations to
            registration and from interactive stage elements to post-event data,
            it’s all here.
          </p>
          <button className="bg-[#FFA800] rounded-full px-3 py-2 cursor-pointer text-xs font-extralight text-white font-inter mt-5">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-10 lg:space-y-6 2xl:space-y-5 px-4">
        {cards.map((card, index) => (
          <CapsuleCard
            key={index}
            {...card}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroProducts;
