import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-[var(--color-gray-dark)] text-white font-manrope py-2 rounded-xl px-6 flex justify-between items-center sm:flex-row flex-col gap-4 sm:gap-0 text-sm">
          {/* Left Section */}
      <div className="flex gap-6">
        <span>Call us : +91 7024393158</span>
        <span>Email: rajat@mail.co</span>
      </div>

      {/* Right Section - Social Icons */}
      <div className="sm:flex gap-4 hidden">
        <a href="#" className="hover:text-gray-300">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaLinkedinIn />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
