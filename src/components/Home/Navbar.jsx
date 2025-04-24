import React, { useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import navlogo from "/assets/Home/homehero/navlogo.png";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu5Fill } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Enterprise", path: "/enterprise" },
    { name: "Customers", path: "/customers" },
    { name: "About us", path: "/about-us" },
  ];

  const linkClasses = ({ isActive }) =>
    `relative group cursor-pointer ${
      isActive
        ? "text-black font-semibold bg-white p-1.5 rounded-full"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <header className=" text-white px-4 py-2 font-manrope">
      <div className="flex items-center gap-1">
        <div className="bg-black px-4 h-14 flex items-center w-full md:w-[87%] justify-between rounded-xl">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={navlogo} className="w-10 lg:w-8 xl:w-10" alt="Logo" />
            <span className="font-manrope uppercase text-xs lg:text-[0.6rem] xl:text-xs">
              Exachain Core
            </span>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-6 text-xs lg:text-[0.55rem] xl:text-xs uppercase">
            {links.map(({ name, path }) => (
              <li key={name}>
                <NavLink to={path} className={linkClasses}>
                  {name}
                  {[
                    "Home",
                    "Services",
                    "Enterprise",
                    "Customers",
                    "About us",
                  ].includes(name) && <span> ▾</span>}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-6 text-sm">
            <span className="text-gray-400 text-xs lg:text-[0.55rem] xl:text-xs">
              Call:{" "}
              <span className="text-white font-bold text-sm lg:text-[0.60rem] xl:text-sm">
                1-800 100 97 20
              </span>
            </span>
            <div className="flex items-center gap-4">
              <button className="cursor-pointer">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z" />
                </svg>
              </button>
              <button className="cursor-pointer">
                <HiOutlineSquares2X2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* All Products button */}
        <button className="hidden lg:flex items-center gap-1 flex-1 text-white lg:text-[0.60rem] xl:text-sm bg-black px-4 h-14 cursor-pointer rounded-xl font-semibold text-sm ml-2">
          <p>All Products</p>
          <RiMenu5Fill className="ml-2 rotate-45" />
        </button>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center ml-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <RxCross2 className="w-6 h-6 text-black" />
            ) : (
              <IoMenu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sliding Menu from Right */}
            <motion.div
              key="menu"
              className="fixed sm:top-0 top-24 right-0 bottom-0 w-3/4 max-w-xs bg-black text-white z-50 p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="space-y-6 text-sm font-medium uppercase">
                {links.map(({ name, path }) => (
                  <NavLink
                    key={name}
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-1 ${
                        isActive
                          ? "text-white font-bold underline underline-offset-4"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    {name}
                    {["Home", "Pages", "Services", "Shop", "Blog"].includes(
                      name
                    ) && <span> ▾</span>}
                  </NavLink>
                ))}

                <div className="text-gray-300">Call: 1-800 100 97 20</div>

                <div className="flex justify-start gap-4">
                  <button>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z" />
                    </svg>
                  </button>
                  <button>
                    <HiOutlineSquares2X2 className="w-4 h-4" />
                  </button>
                </div>

                <button className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm">
                  All Product
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
