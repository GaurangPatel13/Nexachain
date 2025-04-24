import React from "react";
import defiimg from "/assets/SmartContract/defiimg.png"; // Adjust the path
import defiimg1 from "/assets/SmartContract/defiimg1.png"; // Adjust the path
import defiimg2 from "/assets/SmartContract/defiimg2.png"; // Adjust the path
import defiimg3 from "/assets/SmartContract/defiimg3.png"; // Adjust the path
import defiimg4 from "/assets/SmartContract/defiimg4.png"; // Adjust the path
import defiimg5 from "/assets/SmartContract/defiimg5.png"; // Adjust the path
import defiimg6 from "/assets/SmartContract/defiimg6.png"; // Adjust the path

const DeFiSmartContract = () => {
  return (
    <section className="w-full mx-auto px-6 relative py-12">
      <div className="flex flex-col lg:flex-row items-center gap-10 ">
        {/* Left Side - Text Section */}
        <div className=" bg-[#1F2024] text-white py-14 p-6 rounded-lg shadow-lg">
          <div className="lg:w-1/2">
            <h2
              className="text-4xl font-bold leading-15 text-[#8743FF] tracking-wider"
              style={{ textShadow: "-3px 0px 0px rgba(135, 67, 255, 0.6)" }}
            >
              DeFi Smart Contract Development:
            </h2>

            <p className="text-white text-xl font-semibold mt-2">
              Streamlining & Automating Complex Financial Operations
            </p>
            <p className="text-white mt-4 text-sm">
              The need for automation has increased manifold across many sectors
              and the Finance industry is no exception. Many global players in
              the Finance space have started utilizing DeFi smart contract
              development services to achieve a certain level of automation to
              meet customer expectations. Besides, the global DeFi market size,
              which was valued at USD 13.61 billion in 2022, is expected to grow
              at a CAGR of 46.0% from 2023 to 2030. So it is crunch time for
              finance experts to make hefty investments in DeFi smart contract
              development.
            </p>
            <p className="mt-4 text-sm">
              Being a leading DeFi smart contract development company,{" "}
              <span className="text-[var(--color-pink)] font-bold">
                Nexachain.ai
              </span>{" "}
              provides DeFi smart contract development services to financial
              institutions to help them improve data accuracy, reduce paperwork,
              strengthen security, and faster transaction processing. Our
              Blockchain experts help businesses develop DeFi smart contracts as
              per their requirements.
            </p>
          </div>
        </div>

        {/* Right Side - Image */}

        <img
          src={defiimg}
          alt="DeFi Smart Contracts"
          className="w-1/2 lg:block hidden h-auto absolute right-0"
        />
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center">
        <h3 className="text-4xl font-bold text-[var(--color-pink)]">
          <span className="bg-[var(--color-pink)] text-white px-3 py-1 rounded-lg">
            Why
          </span>{" "}
          does your Business need Smart Contract Application Development
          Services?
        </h3>
        <p className="text-black text-lg mt-2">
          Smart contracts provide a level of automation that allows
          unprecedented efficiency and cost reductions throughout business
          operations.
        </p>

        {/* Feature Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {[
            {
              text1: (
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl xl:text-5xl font-semibold">
                    <span className="bg-[var(--color-pink)] text-white pl-2 py-1 xl:rounded-3xl rounded-xl">
                      Disinterme
                    </span>
                    <span className="text-black">diation</span>
                  </h1>
                  <img src={defiimg1} alt="" className="w-10" />
                </div>
              ),
            },
            {
              text1: (
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl xl:text-5xl font-semibold">
                    <span className="bg-[var(--color-purple)] text-white pl-2 py-1 xl:rounded-3xl rounded-xl">
                      Accura
                    </span>
                    <span className="text-black">cy</span>
                  </h1>
                  <img src={defiimg2} alt="" className="w-10" />
                </div>
              ),
            },
            {
              text1: (
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl xl:text-5xl font-semibold">
                    <span className="text-black">Tra</span>
                    <span className="bg-[var(--color-green)] text-white pr-2 py-1 xl:rounded-3xl rounded-xl">
                      nsparency
                    </span>
                  </h1>
                  <img src={defiimg3} alt="" className="w-10" />
                </div>
              ),
            },
            {
              text1: (
                <div className="flex items-center space-x-2">
                  <img src={defiimg4} alt="" className="w-10" />
                  <h1 className="text-2xl xl:text-5xl font-semibold">
                    <span className="text-black">Se</span>
                    <span className="bg-[var(--color-blue)] text-white pr-2 py-1 xl:rounded-3xl rounded-xl">
                      curity
                    </span>
                  </h1>
                </div>
              ),
            },
            {
              text1: <div className="flex items-center space-x-2">
              <img src={defiimg5} alt="" className="w-10" />
              <h1 className="text-2xl xl:text-5xl font-semibold">
                <span className="text-black">
                  Reat-T
                </span>
                  <span className="bg-[var(--color-yellow)] text-white  py-1 xl:rounded-3xl rounded-xl">ime Executio</span>
                  <span className="text-black">
                  n
                </span>
              </h1>
            </div>
            },
            {
              text1: <div className="flex items-center space-x-2">
              <img src={defiimg6} alt="" className="w-10" />
              <h1 className="text-2xl xl:text-5xl font-semibold">
                <span className="text-black">
                  Fi
                </span>
                  <span className="bg-[#2BC3D2] text-white py-1 xl:rounded-3xl rounded-xl">nancial S</span>
                  <span className="text-black">
                  aving
                </span>
              </h1>
            </div>
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span
                className={` py-4 text-white font-bold rounded-full`}
              >
                {item.text1}
              </span>
            </div>
          ))}

          
        </div>
      </div>
    </section>
  );
};

export default DeFiSmartContract;
