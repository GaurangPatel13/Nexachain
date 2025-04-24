import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
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
  const [closing, setClosing] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path || (path === "/" && location.pathname === "/");

  const handleCloseMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 400); // Match with slide-out duration
  };

  return (
    <div className="">
      <div className="p-3">
        <div className="flex justify-between items-center">
          <img src={logo} loading="lazy" className="w-28" alt="" />
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

          <div className="flex items-center">
            <button className="text-white lg:flex items-center justify-between text-xs 2xl:text-lg px-4 py-2 cursor-pointer rounded-full hidden bg-black">
              <p>All Products</p>
              <RiMenu5Fill className="ml-2 rotate-45" />
            </button>

            <button
              className="lg:hidden text-2xl"
              onClick={() => setMenuOpen(true)}
            >
              <FiMenu />
            </button>
          </div>
        </div>
        <div className="mt-2 w-full h-0.5 bg-black"></div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-200">
          <div
            className={`absolute top-0 right-0 w-3/4 h-full bg-white p-6 flex flex-col ${
              closing ? "animate-slide-out-right" : "animate-slide-in-right"
            }`}
          >
            <button className="self-end text-2xl" onClick={handleCloseMenu}>
              <FiX />
            </button>

            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleCloseMenu}
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
