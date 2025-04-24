import React from "react";
import { Link } from "react-router-dom";
import heroimg from "/assets/SmartContract/heroimg.png"; // Adjust the path based on your project structure
import Navbar from "./Navbar";
import { TbMenu3 } from "react-icons/tb";
import ColorBlocks from "./ColorBlocks";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-between min-h-screen px-2 sm:px-6 lg:px-6 sm:py-6 py-3 bg-black fixed">
      <div className="absolute z-100 -bottom-6 left-0 w-full">
        <ColorBlocks width="w-28" />
      </div>
      <div className="border-yellow-500 rounded-3xl border-l-1 p-1 w-full">
        <div className="relative border-yellow-500 rounded-3xl border p-1 w-full font-quantico">
          <div className="absolute top-1 right-1 z-100 sm:block hidden">
            <Link
              to="/products"
              className="bg-[#E80053] text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#d1004a] transition-all"
            >
              All Product
              <TbMenu3 />
            </Link>
          </div>
          {/* Left Side Content */}
          <div className="relative lg:max-w-3xl w-full rounded-3xl px-5 sm:py-50 sm:pl-8 text-white bg-[var(--color-purple)]">
            <div className="sm:absolute sm:-top-4 sm:left-0 flex items-center justify-between sm:block w-full">
              <Navbar />
              <div className="sm:hidden">
                <Link
                  to="/products"
                  className="bg-[#E80053] text-white px-4 py-1 rounded-full flex items-center gap-2 hover:bg-[#d1004a] transition-all whitespace-nowrap"
                >
                  All Product
                  <TbMenu3 />
                </Link>
              </div>
            </div>

            <div className="sm:w-xl relative z-100">
              <h4 className="text-[1.35rem] relative z-20 font-semibold uppercase tracking-wider">
                Embrace A Transparent Way To Do Business
              </h4>
              <h1 className="text-4xl reative z-20 lg:text-6xl font-bold mt-4">
                Smart Contract <span className="text-white">Development</span>
              </h1>
              <p className="relative z-20 text-2xl mt-4">
                Writing the most secure and dependable smart contracts on
                Blockchain platforms such as Ethereum, EOS, Hyperledger, TRON,
                and more.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 relative z-100 flex gap-4 sm:flex-row text-center sm:text-start flex-col pb-5 sm:pb-0">
              <Link
                to="/demo"
                className="bg-white font-poppins text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all"
              >
                Get A Free Personalized Demo
              </Link>
              <Link
                to="/explore"
                className="bg-black font-poppins text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all"
              >
                Explore
              </Link>
            </div>
            <div className="absolute xl:w-145 lg:w-120 h-145 bg-black rounded-full right-0 top-1/2 -translate-y-1/2 translate-x-1/2 overflow-hidden hidden lg:block"></div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="absolute right-0 top-0 xl:z-50 h-full xl:w-3xl hidden lg:block">
        <img
          src={heroimg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
