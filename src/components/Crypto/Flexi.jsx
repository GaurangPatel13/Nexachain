import React, { useState } from "react";
import { LinearProgress, Slider } from "@mui/material";
import flexiimg1 from "/assets/Crypto/flexi/flexiimg1.png";
import flexiimg3 from "/assets/Crypto/flexi/flexiimg3.png";
import flexiimg4 from "/assets/Crypto/flexi/flexiimg4.png";
import flexiimg5 from "/assets/Crypto/flexi/flexiimg5.png";
import flexiimg6 from "/assets/Crypto/flexi/flexiimg6.png";
import flexiimg7 from "/assets/Crypto/flexi/flexiimg7.png";

const Flexi = () => {
  const [solAmount, setSolAmount] = useState(100);
  const rewardRate = 0.0712;
  const yearlyEarnings = solAmount * rewardRate;
  const monthlyEarnings = yearlyEarnings / 12;
  const dailyEarnings = yearlyEarnings / 365;
  const usdRate = 365; // 1 SOL = 365 USD

  return (
    <div className="pt-20 pb-10">
      <div className="bg-[#02050A] rounded-3xl lg:px-40 px-5 md:py-20 pt-20">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 items-center justify-between w-full text-white">
          <div className="flex flex-col sm:flex-row gap-3 items-center relative z-150">
            <h1 className="font-bold text-xl">Earn crypto flexibly with</h1>
            <img src={flexiimg1} className="w-72" alt="" />
          </div>
          <p className="text-[#F0B90B] capitalize font-semibold cursor-pointer">
            learn more
          </p>
        </div>
        <div className="w-full mx-auto py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Staking Card */}
          <div className="bg-[#0b0f28] text-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between w-full">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Staking</h2>
                <p className="mb-4 text-gray-300">Calculate my earnings</p>
              </div>
              <div className="flex items-center gap-4 p-2 border-1 border-gray-600 rounded-xl">
                <img src={flexiimg3} alt="sol" className="w-6 h-6" />
                <h1>SOL</h1>
              </div>
            </div>
            <div className="flex items-center justify-between mb-5">
              <div className="mb-2">
                <p>How many coins do you hold?</p>
                <div className="flex items-center gap-2 font-semibold text-lg">
                  {solAmount} SOL
                </div>
              </div>
              <div className="text-right font-semibold">
                <h1>Estimate Annual Reward:</h1>
                <h1 className="text-green-400 text-xl">
                  {(rewardRate * 100).toFixed(2)}%
                </h1>
              </div>
            </div>

            {/* <Slider
          value={solAmount}
          min={0}
          max={500}
          step={1}
          onChange={(e, value) => setSolAmount(value)}
          sx={{ color: '#00f0a8', mb: 2 }}
        /> */}

            <LinearProgress
              variant="determinate"
              value={(solAmount / 500) * 100}
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: "#1e2a45",
                mb: 6,
                "& .MuiLinearProgress-bar": { backgroundColor: "#00f0a8" },
              }}
            />

            <div className="text-sm text-gray-300 space-y-2 mb-6">
              <div className="flex justify-between items-center">
                <p>Daily Earnings:</p>
                <p>
                  <span className="font-semibold">0.011000 SOL</span>
                  <span> 4 USD</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Monthly Earnings:</p>
                <p>
                  <span className="font-semibold">0.011000 SOL</span>
                  <span> 4 USD</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Yearly Earnings:</p>
                <p>
                  <span className="font-semibold">0.011000 SOL</span>
                  <span> 4 USD</span>
                </p>
              </div>
            </div>

            <div className="p-0.5 border-1 border-[#00f0a8] rounded-full">
              <button className="w-full bg-[#00f0a8] cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-[#02ddb3] transition">
                Start Staking
              </button>
            </div>
          </div>

          {/* Savings Card */}
          <div className="bg-[#0b0f28] text-[#DADADA] p-6 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Savings</h2>
              <p className="mb-4 text-[#FFFFFF80]">Earn daily rewards</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Tether USDT", reward: 4, logo: flexiimg4, subtitle: "USDT" },
                  { name: "USD Coin", reward: 4, logo: flexiimg5, subtitle: "USDT" },
                  { name: "Ethereum", reward: 0.4, logo: flexiimg6, subtitle: "ETH" },
                  { name: "Bitcoin", reward: 4, logo: flexiimg7, subtitle: "BTC" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#1e2a45] p-4 rounded-xl text-sm">
                    <div>
                    <div className="flex items-center gap-4 mb-2">
                      <img src={item.logo} className="w-10" alt="" />
                      <div>
                      <p className="font-semibold">{item.name}</p>
                    <p className="text-[#DADADA]">
                       {item.subtitle}
                    </p>
                      </div>
                      </div>
                      <div>
                      <p className="font-">Annual reward {item.reward}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-0.5 border-1 mt-5 border-[#00f0a8] rounded-full">
              <button className="w-full bg-[#00f0a8] cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-[#02ddb3] transition">
                Start Staking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexi;
