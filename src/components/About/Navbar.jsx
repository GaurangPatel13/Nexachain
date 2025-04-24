import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import logo from "/assets/Ai/logo.png";
import { RiMenu5Fill } from "react-icons/ri";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Enterprise", path: "/enterprise" },
  { name: "Customers", path: "/customers" },
  { name: "About Us", path: "/about-us" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path || (path === "/" && location.pathname === "/");

  return (
    <div className="">
      <div className="flex justify-between items-center p-3">
        <img src={logo} loading="lazy" className="w-28" alt="" />
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-xs 2xl:text-lg font-medium px-3 py-2 text-black ${
                    isActive(item.path)
                      ? "before:content-[''] before:absolute before:-left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-pink-500"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
    
            {/* Right Section */}
            <div className="flex items-center">
              <button className="text-white lg:flex items-center justify-between text-xs 2xl:text-lg px-4 py-2 cursor-pointer rounded-full hidden bg-black">
                <p>All Products</p>
                <RiMenu5Fill className="ml-2 rotate-45" />
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
              <div className="absolute top-0 left-0 w-3/4 h-full bg-white p-6 flex flex-col">
                <button
                  className="self-end text-2xl"
                  onClick={() => setMenuOpen(false)}
                >
                  <FiX />
                </button>
    
                <nav className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`text-lg transition-all ${
                        isActive(item.path)
                          ? "font-bold text-black"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
    
                  <button className="bg-black text-white text-xs px-4 py-2 cursor-pointer rounded-full">
                    All Products
                  </button>
                </nav>
              </div>
            </div>
          )}
        </div>
  );
};

export default Navbar;
