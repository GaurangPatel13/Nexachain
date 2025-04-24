import React, { useState } from "react";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full font-poppins flex items-center justify-between bg-transparent py-4">
      {/* Left Side - Menu */}
      <div className="bg-[#8300EB] text-white px-6 py-3 hidden md:flex gap-6 rounded-tl-3xl rounded-br-3xl shadow-[4px_7px_9px_0px_rgba(0,0,0,0.32)]">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/enterprise" className="hover:text-gray-300">Enterprise</Link>
        <Link to="/customers" className="hover:text-gray-300">Customers</Link>
        <Link to="/about" className="hover:text-gray-300">About Us</Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="sm:hidden text-[#8300EB] text-2xl" onClick={() => setIsOpen(!isOpen)}>
        <TbMenu3 />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute z-120 top-14 left-0 w-full rounded-tl-3xl rounded-br-3xl bg-[#8300EB] text-white flex flex-col items-center gap-4 py-4 sm:hidden shadow-lg">
          <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/enterprise" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Enterprise</Link>
          <Link to="/customers" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Customers</Link>
          <Link to="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;