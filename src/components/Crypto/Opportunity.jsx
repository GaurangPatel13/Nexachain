import React from "react";
import opprotunityimg1 from "/assets/Crypto/opportunity/opprotunityimg1.png";
import opprotunityimg2 from "/assets/Crypto/opportunity/opprotunityimg2.png";
import opprotunityimg3 from "/assets/Crypto/opportunity/opprotunityimg3.png";
import opprotunityimg4 from "/assets/Crypto/opportunity/opprotunityimg4.png";
import opprotunityimg5 from "/assets/Crypto/opportunity/opprotunityimg5.png";
import opprotunityimg6 from "/assets/Crypto/opportunity/opprotunityimg6.png";
import opprotunityimg7 from "/assets/Crypto/opportunity/opprotunityimg7.png";

const Opportunity = () => {
  return (
    <section className="py-12 px-4 lg:px-44 bg-white text-gray-800 font-outfit">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Find your next <span className="text-pink-600">Nexachain.ai</span>{" "}
          Opportunity
        </h2>
        <p className="mt-4 text-gray-600">
          Our comprehensive cybersecurity platform, driven by artificial
          intelligence, not only safeguards your organization.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-6">
        {/* Left column */}
        <div className="bg-[#2BBD81] text-white px-6 pt-6 rounded-xl relative flex flex-col md:flex-row justify-between">
          <div className="">
            <p className="text-lg text-[#DADADA]">Receive up to</p>
            <h3 className="text-5xl font-bold">15%</h3>
            <p className="mt-2 text-sm text-[#DADADA]">in annual crypto rewards</p>
            <p className="mt-4 text-sm w-2/3 md:w-full text-[rgba(255, 255, 255, 0.7)]">
              Earn rewards by holding cryptocurrencies in your account.
              Effortlessly.
            </p>
          </div>
          <div className="mt-6 lg:absolute -left-10 bottom-0 flex justify-center">
            <img
              src={opprotunityimg1}
              alt="Crypto Globe"
              className="md:w-full w-2/3 md:mx-auto"
            />
          </div>
        </div>

        {/* Right column - top row */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#4285F4] text-white p-6 rounded-xl relative h-54">
            <h3 className="text-3xl font-semibold">Trade Algorithm</h3>
            <p className="mt-2 text-sm text-[rgba(255, 255, 255, 0.7)]">
              Your assets. On your terms. At your fingertips.
            </p>
            <img
              src={opprotunityimg2}
              alt="Trade"
              className="mt-6 w-48 absolute bottom-0 right-0 mx-auto"
            />
          </div>

          <div className="bg-[#FFA800] relative text-white px-6 pt-6 rounded-xl h-54">
            <h3 className="text-3xl font-semibold">Spot Trading</h3>
            <p className="mt-2 text-sm text-[rgba(255, 255, 255, 0.7)]">
              Dive into deep liquidity, and trade like a pro
            </p>
            <img
              src={opprotunityimg3}
              alt="Spot Trading"
              className="mt-6 w-54 mx-auto absolute bottom-0 right-1/2 translate-x-1/2"
            />
          </div>

          <div className="bg-[#FF3647] text-white px-6 pt-6 rounded-xl relative h-54">
            <h3 className="text-3xl font-semibold">24/7 Support</h3>
            <p className="mt-2 text-sm text-[rgba(255, 255, 255, 0.7)]">
              Count on us for round-the-clock support, help whenever you need
              it.
            </p>
            <div className="flex items-end absolute bottom-0">
              <img src={opprotunityimg4} className="w-12" alt="" />
              <img
                src={opprotunityimg5}
                alt="Support"
                className="mt-6 w-40 mx-auto"
              />
            </div>
          </div>

          <div className="bg-[#226DB4] text-white p-6 relative rounded-xl h-54">
            <h3 className="text-3xl font-semibold">Trusted & Secure</h3>
            <p className="mt-2 text-sm text-[rgba(255, 255, 255, 0.7)]">
              Your assets. On your terms. At your fingertips.
            </p>
            <div className="flex items-end absolute bottom-0">
              <img src={opprotunityimg6} className="w-15" alt="" />
              <img
                src={opprotunityimg7}
                alt="Support"
                className="mt-6 w-38 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
