import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/Ai/logo.png";
import { Link } from "react-router-dom";
import img1 from '/assets/Wallet/navbar/loginimg1.png';
import img2 from '/assets/Wallet/navbar/loginimg2.png';
import img3 from '/assets/Wallet/navbar/loginimg3.png';
import img4 from '/assets/Wallet/navbar/loginimg4.png';

const rotatingImages = [img1, img2, img3, img4];

export default function Navbar() {
  const [imageIndex, setImageIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Start continuous rotation animation
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 16, // full rotation in 4s
        ease: "linear",
      },
    });

    // Change image every 1 second (i.e. every 90 degrees)
    const imageInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % rotatingImages.length);
    }, 4000); // 4 images per 4 seconds

    return () => clearInterval(imageInterval);
  }, [controls]);

  const currentImage = rotatingImages[imageIndex];

  return (
    <nav className="bg-black text-white flex justify-between md:items-end items-center pr-2">
      {/* Left Section */}
      <div className="flex items-center gap-7 p-3.5 bg-[#161617] rounded-br-4xl">
        <img src={logo} className="w-40" alt="Logo" />
        <ul className="hidden md:flex gap-6 text-sm">
          <li className="hover:text-teal-400"><Link to="/">Home</Link></li>
          <li className="hover:text-teal-400"><Link to="/enterprise">Enterprise</Link></li>
          <li className="hover:text-teal-400"><Link to="/customers">Customers</Link></li>
          <li className="hover:text-teal-400"><Link to="/about-us">About Us</Link></li>
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden pr-3">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Login Button */}
      <button className="relative text-white rounded-xl font-poppins hidden gap-4 md:flex items-center justify-center overflow-hidden font-medium">
        <span className="z-10 relative">Login Now</span>
        <motion.div
          animate={controls}
          className="p-3 flex items-center justify-center bg-gradient-to-b from-[#00986F] to-[#01E8DA] "
        >
          <motion.img
            key={imageIndex}
            src={currentImage}
            alt="icon"
            className="w-5 h-5 object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </button>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-start px-6 py-4 md:hidden z-50">
          <ul className="flex flex-col gap-4 text-sm w-full">
            <li className="hover:text-teal-400 cursor-pointer">Home</li>
            <li className="hover:text-teal-400 cursor-pointer">Enterprise</li>
            <li className="hover:text-teal-400 cursor-pointer">Customers</li>
            <li className="hover:text-teal-400 cursor-pointer">About Us</li>
          </ul>
          <button className="mt-4 w-full bg-teal-400 font-manrope text-black px-5 py-2 rounded-full flex items-center justify-center font-medium">
            Login Now
            <motion.div
              animate={controls}
              className="ml-2 w-5 h-5 flex items-center justify-center rounded-full bg-black"
            >
              <motion.img
                key={imageIndex + "-mobile"}
                src={currentImage}
                alt="icon"
                className="w-3 h-3 object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>
      )}
    </nav>
  );
}
