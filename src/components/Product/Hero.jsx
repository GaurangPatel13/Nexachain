import React from "react";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";

const Hero = () => {
  return (
      <div className="relative">
      <Hero1 />
      <Hero2 />
      <div className="xl:hidden">
      <Hero3 />
      </div>
      </div>
  );
};

export default Hero;
