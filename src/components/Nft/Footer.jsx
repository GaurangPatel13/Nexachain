import React from "react";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import bg from "/assets/Nft/footer/bg.png";
import logo from "/assets/Ai/logo.png";
import { Link } from "react-router-dom";
import biglogo from "/assets/Home/homehero/colorlogo.png"

const Footer = () => {
  return (
    <footer className="relative text-gray-800 pt-12 md:pb-6 pb-3 px-5">
      <div className="relative flex flex-col md:block justify-between gap-5 p-3 bg-[#EFE4FC] md:bg-transparent rounded-xl">
        <img src={bg} className="hidden md:block" alt="" />
        <div className="md:w-30 w-full flex items-center justify-center md:absolute md:top-3 md:-left-5 lg:top-10 lg:left-0 xl:top-3 xl:-left-5">
          <img src={logo} className="w-1/2 md:hidden" alt="" />
          <img src={biglogo} className="w-1/2 hidden md:block" alt="" />
        </div>       
        <div className="flex flex-col sm:flex-row flex-wrap justify-around md:absolute top-1/2 md:-translate-y-1/2 left-1/2 md:-translate-x-1/2 w-full gap-6  font-medium lg:px-40 md:px-20 font-poppins text-[#1E344F]">
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            <Link to="/projects">Projects</Link>
            <Link to="/marketplace">Marketplace</Link>
            <Link to="/governance">Governance</Link>
            <Link to="/discord">Discord</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <Link to="/newsletter">Newsletter</Link>
            <Link to="/linkedin">LinkedIn</Link>
            <Link to="/youtube">YouTube</Link>
            <Link to="/instagram">Instagram</Link>
            <Link to="/twitter">Twitter</Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2">
            <Link to="/contact">Contact</Link>
            <Link to="/story-archive">Story Archive</Link>
            <Link to="/privacy-terms">Privacy + Terms</Link>
            <Link to="/google">Google</Link>
            <Link to="/alphabet">Alphabet</Link>
          </div>
        </div>
        <div className="flex md:flex-col items-center md:items-start justify-center w-full gap-5 text-3xl md:absolute lg:bottom-25 md:bottom-10 left-7">
          <FaTelegramPlane className="cursor-pointer" />
          <FaDiscord className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
        </div>
        <h1 className="font-poppins text-xl text-center text-[#702F8A] font-aboreto md:absolute bottom-5 left-1/2 md:-translate-x-1/2">
          All Rights Reserved 2025
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
