import React from "react";

const Crypto1 = () => {
  return (
    <div className="h-screen 2xl:h-[50vh] flex flex-col items-center md:items-start justify-between md:flex-row gap-2 md:gap-0">
      <div className="flex md:w-1/2 text-justify md:text-start">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2 font-inter font-semibold flex flex-col gap-10 lg:text-2xl text-xl">
          <p>
            We have been on the market for{" "}
            <span className="text-[#971EFF]">2 years</span> and are developing
            at a frantic pace to make life easier
          </p>
          <p>
            for hundreds of thousands of people who want to
            <span className="text-[#971EFF]"> invest in cryptocurrency</span>
          </p>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="w-full text-5xl flex flex-col gap-14 font-bold md:relative top-20 lg:left-30 left-20 font-arial text-center md:text-start">
          <span>
            2 years of
            <br />
            experience
          </span>
          <span>
            7 million
            <br />
            transactions
          </span>
        </div>
      </div>
    </div>
  );
};

export default Crypto1;
