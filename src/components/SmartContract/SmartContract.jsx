import React from "react";
import { Link } from "react-router-dom";
import contractgif from "/assets/SmartContract/contractgif.mp4"; // Correct video path
import contractgif2 from "/assets/SmartContract/contractgif2.mp4"; // Correct video path
import { FiExternalLink } from "react-icons/fi";

const SmartContract = () => {
  return (
    <section className="max-w-6xl mx-auto py-10 font-jakarta mt-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="text-black">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0D0D0D]">Smart Contracts</h1>
          <div className="flex items-center sm:flex-row flex-col gap-5 mt-2">
            <span className="text-4xl traking-wider text-[#0D0D0D]">
              are the Future
            </span>
            <Link
              to="/get-started"
              className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="border-1 border-[#0D0D0D] w-34 rounded-4xl p-1">
          <div className="border-1 border-[#0D0D0D] rounded-4xl p-1">
            <video
              src={contractgif2}
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Right Content (Info Box with Video) */}
        <div className="sm:w-md flex flex-col items-start">
          <div className="flex items-center gap-4 border border-gray-300 p-4 rounded-lg">
            <div>
              <p className="text-gray-500">
                Our comprehensive guide to strategies for entrepreneurs and
                leaders offers valuable insights, practical advice.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  to="/whatsapp"
                  className="text-indigo-500 font-semibold flex items-center gap-2 mt-2 hover:underline"
                >
                  Connect on Whatsapp
                </Link>
                <span className="bg-indigo-200 p-2 rounded-lg">
                  <FiExternalLink className="text-indigo-500" />
                </span>
              </div>
              <div className="mt-1 w-full h-[2px] bg-indigo-300"></div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-gray-600 font-opensans text-sm">
        Self-executing, self-enforcing protocols governed by explicit terms and
        conditions called Smart contracts have the potential to transform the
        way agreements are made across several industries such as real estate,
        supply chain, telecom, manufacturing, healthcare, and more. Antier
        Solutions is an experienced smart contract development company with
        sheer expertise in creating smart contracts tailored perfectly to
        diverse industries and business models. Backed by skilled smart contract
        developers, we know what it takes to create an outstanding
        computer-based protocol to automate business agreements.
      </p>

      {/* Bottom Video Section */}
      <div className="mt-8 w-full h-72">
        <video
          src={contractgif}
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-cover h-full rounded-lg"
        />
      </div>
    </section>
  );
};

export default SmartContract;
