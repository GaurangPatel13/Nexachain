import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import slideimg1 from "/assets/Product/feature/featureslideimg1.png";
import cardimg1 from "/assets/Product/feature/bcardimg1.png";
import cardimg2 from "/assets/Product/feature/bcardimg2.png";
import rightimg1 from "/assets/Product/feature/rightimg1.png";
import rightimg2 from "/assets/Product/feature/rightimg2.png";
import rightimg3 from "/assets/Product/feature/rightimg3.png";

const images = [slideimg1, slideimg1, slideimg1];

export default function Feature() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 3000); // 2s pause + 1s transition
    }
    return () => clearTimeout(timeoutRef.current);
  }, [index, isHovered]);

  return (
    <section className="flex flex-col lg:flex-row items-start justify-between gap-12 px-4 md:py-12 py-6 2xl:px-30">
      {/* Left MacBook Frame */}
      <div className="relative lg:w-2/3 w-full md:pb-20">
        <div
          className="relative w-full lg:w-full rounded-2xl overflow-hidden border-3 border-black shadow-lg"
          style={{ aspectRatio: "16/10" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top Mac-like Bar */}
          <div className="flex justify-between items-center px-4 py-2 bg-[#FFFFFF] border-black">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 cursor-pointer"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 cursor-pointer"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 cursor-pointer"></span>
            </div>
            <div className="md:px-30 px-5 h-6 rounded-lg text-[#94A3B8] font-roboto bg-[#F1F5F9] text-xs flex items-center justify-center">Smartecom.com</div>
            <div className="flex gap-3 text-gray-600">
              <button className="cursor-pointer" onClick={prevSlide}>
                <FaAngleLeft />
              </button>
              <button className="cursor-pointer" onClick={nextSlide}>
                <FaAngleRight />
              </button>
            </div>
          </div>

          {/* Slide */}
          <div
            className="w-full h-full relative transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            <div className="flex w-full h-full">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`slide-${i}`}
                  className="w-full h-full object-cover flex-shrink-0"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center pt-5 md:pt-0 gap-5 md:absolute bottom-0 right-0">
          {/* Bottom Floating Boxes */}
        <div className="space-y-5 font-dmsans md:w-54 w-full h-44 bg-[#8743FF] text-white p-4 rounded-xl shadow-lg">
          <img src={cardimg1} className="w-10" alt="" />
          <div>
            <p className="text-4xl font-semibold">30+</p>
            <p className="text-xs">TEAM MEMBER</p>
          </div>
        </div>
        <div className="space-y-5 font-dmsans md:w-54 w-full h-44 bg-[#E80053] text-white p-4 rounded-xl shadow-lg">
          <img src={cardimg2} className="w-10" alt="" />
          <div>
            <p className="text-4xl font-semibold">115+</p>
            <p className="text-xs">DUMMY</p>
          </div>
        </div>
        </div>
      </div>

      {/* Right Feature Content */}
      <div className="w-full lg:w-1/3 md:space-y-3 space-y-7 font-opensans 2xl:space-y-9">
        <p className="text-sm text-gray-500 uppercase font-semibold 2xl:text-xl">Feature</p>
        <h2 className="text-3xl 2xl:text-4xl font-bold font-dmsans">
          Log every minute with{" "}
          <span className="text-[#E80053]">Timesheets</span>
        </h2>
        <p className="text-gray-600 text-sm 2xl:text-xl">
          Log billable and non-billable hours with the Projects timesheet
          module. Record every minute of your hard work, either manually or with
          timers, and our built-in integration with Zoho Invoice will
          automatically generate invoices from your timesheets.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-5">
            <img src={rightimg1} className="w-12" alt="" />
            <div>
            <h4 className="font-semibold text-lg 2xl:text-xl font-dmsans">
              Track Work Efficiently
            </h4>
            <p className="text-sm text-gray-500 2xl:text-lg">
              Log both billable and non-billable hours manually or with timers
              to ensure accurate time tracking.
            </p>
          </div>
          </div>
          <div className="flex items-start gap-5">
            <img src={rightimg2} className="w-10" alt="" />
            <div>
            <h4 className="font-semibold text-lg 2xl:text-xl font-dmsans">
              Seamless Invoicing
            </h4>
            <p className="text-sm text-gray-500 2xl:text-lg">
              Automatically generate invoices from timesheets with the built-in
              Zoho Invoice integration.
            </p>
          </div>
          </div>
          <div className="flex items-start gap-5">
            <img src={rightimg3} className="w-12" alt="" />
            <div>
            <h4 className="font-semibold text-lg 2xl:text-xl font-dmsans">
              Maximize Productivity
            </h4>
            <p className="text-sm text-gray-500 2xl:text-lg">
              Keep a clear record of your hard work, ensuring transparency and
              efficient project management.
            </p>
          </div>
          </div>
        </div>

        <button className="mt-4 px-6 py-2 font-dmsans cursor-pointer bg-[#8300EB] hover:bg-purple-800 transition text-white rounded text-sm 2xl:text-xl flex items-center gap-2">
          LEARN MORE <span>&rarr;</span>
        </button>
      </div>
    </section>
  );
}
