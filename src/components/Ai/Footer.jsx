import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import logo from "/assets/Ai/logo.png";
import { FaShareAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative text-white sm:pt-16 flex flex-col gap-3 font-manrope">
      {/* Top Section - Subscribe */}
      <div className="w-full rounded-xl bg-[#121212] py-16 px-3 gap-5 sm:gap-0 sm:px-32 flex sm:justify-between sm:flex-row flex-col items-center">
        <div className="text start sm:w-1/2">
          <h2 className="text-3xl font-semibold font-sora">
            Subscribe for latest updates & insights
          </h2>
          <p className="text-gray-400 mt-3">
            Pacific hake false trevally queen parrotfish black prickleback
            mosshead warbonnet sweeper! Greenling sleeper.
          </p>
        </div>
        {/* Subscription Form */}
        <div className="flex justify-center sm:w-1/2">
          <div className="bg-white p-6 rounded-2xl shadow-md sm:w-100 flex sm:flex-row flex-col gap-5 sm:gap-0 sm:items-center sm:justify-between relative">
            {/* Input Field */}
            <div className="relative flex-1">
              <input
                type="email"
                id="email"
                className="w-full text-gray-700 bg-transparent border-b border-gray-300 outline-none focus:border-gray-500 transition px-2 py-3 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-2 top-5 text-gray-400 text-xs transition-all  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:text-sm peer-focus:text-gray-400"
              >
                Email
              </label>
            </div>

            {/* Subscribe Button */}
            <button className="bg-[#1F2024] text-xs text-white px-6 py-3 rounded-full cursor-pointer flex items-center transition hover:bg-gray-800 sm:ml-4">
              <FaShareAlt className="mr-2 text-sm" /> Subscribe
            </button>
          </div>
        </div>
      </div>

      

      <div className="relative flex flex-col pt-14 px-3 sm:px-32 rounded-xl  bg-[#121212] items-center">
        {/* Logo in Center Overlap */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-11 bg-white rounded-full p-3 shadow-lg">
        <img src={logo} alt="Nexachain.ai" className="w-32" />
      </div>
        {/* Bottom Section */}
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-0 sm:flex-wrap sm:justify-between w-full sm:pb-10">
          {/* Contact Section */}
          <div className="">
            <h3 className="text-lg font-semibold">Contacts</h3>
            <p className="mt-2 text-gray-400">+91 7024393158</p>
            <div className="flex gap-3 mt-3">
              <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
              <FaXTwitter className="text-gray-400 hover:text-white cursor-pointer" />
              <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Company Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li>About</li>
              <li>Expertise</li>
              <li>Sustainability</li>
              <li>News & Media</li>
              <li>Team</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li>Deep learning solutions</li>
              <li>Development</li>
              <li>Model evaluation</li>
              <li>Data Science Consult</li>
              <li>Neural Integration</li>
              <li>Real-time prediction</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Links */}
        <div className="text-center w-full  text-gray-500 rounded-t-3xl text-xs sm:px-20 flex sm:flex-row flex-col gap-3 sm:gap-0 items-center sm:justify-between max-w-5xl bg-white pt-5 pb-1 ">
          <p>© Nexachain.ai 2025. All rights reserved.</p>
          <p className="">
            <span className="hover:underline cursor-pointer">Terms of Use</span>{" "}
            |<span className="hover:underline cursor-pointer"> Privacy</span> |
            <span className="hover:underline cursor-pointer">
              {" "}
              Environmental Policy
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
