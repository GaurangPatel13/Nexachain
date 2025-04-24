import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import logo from "/assets/Ai/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current path

  return (
    <header className="bg-[var(--color-white-translucent)] rounded-2xl mt-3 text-black py-4 font-poppins px-1 lg:px-0">
      <div className="flex justify-between items-center">
        {/* Left Section - Logo */}
        <Link to="/" className="lg:pl-4">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* Middle Section - Navigation Links */}
        <nav className="hidden lg:flex space-x-6">
          {["Home", "Services", "Enterprise", "About Us", "Customers"].map(
            (item, index) => {
              const path = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
              const isActive =
                location.pathname === path ||
                (location.pathname === "/" && item === "Home");

              return (
                <Link
                  key={index}
                  to={path}
                  className={`text-xs transition-all px-3 py-2 ${
                    isActive
                      ? "bg-[var(--color-black)] text-white rounded-full"
                      : "text-gray-dark"
                  }`}
                >
                  {item}
                </Link>
              );
            }
          )}
        </nav>

        {/* Right Section - Search + Buttons */}
        <div className="flex items-center space-x-4">
          <FiSearch className="text-xl cursor-pointer hover:text-gray-500" />

          <button className="bg-black text-white text-sm px-4 py-2 cursor-pointer rounded-full lg:block hidden">
            All Product
          </button>

          <button className="border border-black text-sm px-4 py-2 cursor-pointer rounded-full lg:block hidden">
            Get in Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-white p-6 flex flex-col">
            {/* Close Button */}
            <button
              className="self-end text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <FiX />
            </button>

            {/* Mobile Menu Links */}
            <nav className="flex flex-col space-y-4 mt-4">
              {["Home", "Services", "Enterprise", "About Us", "Customers"].map(
                (item, index) => {
                  const path = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                  const isActive =
                    location.pathname === path ||
                    (location.pathname === "/" && item === "Home");

                  return (
                    <Link
                      key={index}
                      to={path}
                      className={`hover:text-black transition-all text-lg ${
                        isActive ? "font-bold text-black" : "text-gray-dark"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  );
                }
              )}
              <div className="flex w-full gap-2 px-2">
                <button className="bg-black text-white text-sm px-4 py-2 cursor-pointer rounded-full">
                  All Product
                </button>

                <button className="border border-black text-sm px-4 py-2 cursor-pointer rounded-full">
                  Get in Touch
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
