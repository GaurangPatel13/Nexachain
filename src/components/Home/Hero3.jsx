import React from "react";
import Hero3Card from "./Hero3Card";
import hero3img from "/assets/Home/homehero/hero3img.png";
import hero3img2 from "/assets/Home/homehero/hero3img2.png";

const data = [
  {
    image: hero3img,
    title1: "Optimize your campaigns with ad",
    title2: "performance analysis",
    btnColor: "#FF3647",
  },
  {
    image: hero3img2,
    title1: "Insightful market research for strategic",
    title2: "business decisions",
    btnColor: "#FFA800",
  },
  {
    fallbackText: "$ 10 mil",
    title1: "Cost savings for",
    title2: "our customers",
    btnColor: "#8743FF",
  },
];

const Hero3 = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 sm:px-10 px-3 pt-2 pb-5">
      {data.map((card, index) => (
        <Hero3Card
          key={index}
          image={card.image}
          fallbackText={card.fallbackText}
          title1={card.title1}
          title2={card.title2}
          btnColor={card.btnColor}
        />
      ))}
    </div>
  );
};

export default Hero3;
