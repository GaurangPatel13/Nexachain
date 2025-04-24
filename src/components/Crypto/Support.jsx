import React from "react";
import supportimg1 from "/assets/Crypto/support/supportimg1.png";
import supportimg2 from "/assets/Crypto/support/supportimg2.png";
import supportimg3 from "/assets/Crypto/support/supportimg3.png";
import supportimg4 from "/assets/Crypto/support/supportimg4.png";
import supportimg5 from "/assets/Crypto/support/supportimg5.png";
import supportimg6 from "/assets/Crypto/support/supportimg6.png";
import supportimg7 from "/assets/Crypto/support/supportimg7.png";
import supportimg8 from "/assets/Crypto/support/supportimg8.png";
import supportimg9 from "/assets/Crypto/support/supportimg9.png";

const blockchains = [
  { name: "Ethereum", icon: supportimg1 },
  { name: "Solana", icon: supportimg2 },
  { name: "Polygon", icon: supportimg3 },
  { name: "Binance", icon: supportimg4 },
  { name: "Cardano", icon: supportimg5 },
  { name: "Avalanche", icon: supportimg6 },
  { name: "Eos", icon: supportimg7 },
  { name: "Fantom", icon: supportimg8 },
  { name: "Optimum", icon: supportimg9 },
];

const Support = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="py-8 bg-[#1F2024] text-white w-full text-center rounded-3xl px-4 sm:px-8">
        <h2 className="text-lg sm:text-2xl font-bold text-pink-500 mb-4">
          Blockchain Development Platforms We Support
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-sm mb-10">
          As a leading custom blockchain development company, we leverage
          different blockchain networks to provide you with the best solutions
          aligned with your needs.
        </p>

        <div className="bg-white text-gray-800 rounded-2xl px-6 py-4 inline-flex flex-wrap justify-center gap-8 max-w-5xl mx-auto shadow-lg">
          {blockchains.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-sm w-20"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="h-10 w-10 object-contain mb-2"
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
