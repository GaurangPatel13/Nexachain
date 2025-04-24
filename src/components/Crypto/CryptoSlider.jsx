import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import sliderimg1 from "/assets/Crypto/slider/sliderimg1.png";
import sliderimg2 from "/assets/Crypto/slider/sliderimg2.png";
import sliderimg3 from "/assets/Crypto/slider/sliderimg3.png";
import sliderimg4 from "/assets/Crypto/slider/sliderimg4.png";
import sliderimg5 from "/assets/Crypto/slider/sliderimg5.png";
import sliderimg6 from "/assets/Crypto/slider/sliderimg6.png";
import sliderimg7 from "/assets/Crypto/slider/sliderimg7.png";
import heroimg1 from "/assets/Crypto/hero/heroimg1.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Flexi from "./Flexi";
import flexiimg2 from "/assets/Crypto/flexi/flexiimg2.png";
import Development from "./Development";

const slides = [
  {
    title: "Earn",
    description:
      "Invest and earn steady income with the help of a professional asset manager.",
    image: sliderimg5,
  },
  {
    title: "Buy Crypto",
    description:
      "Purchase crypto quickly and easily on our popular and industry-leading platform.",
    image: sliderimg6,
  },
  {
    title: "Investment",
    description:
      "Borrow, trade, and repay. Leverage your assets with margin trading.",
    image: sliderimg7,
  },
  {
    title: "Earn",
    description:
      "Invest and earn steady income with the help of a professional asset manager.",
    image: sliderimg5,
  },
  {
    title: "Buy Crypto",
    description:
      "Purchase crypto quickly and easily on our popular and industry-leading platform.",
    image: sliderimg6,
  },
  {
    title: "Investment",
    description:
      "Borrow, trade, and repay. Leverage your assets with margin trading.",
    image: sliderimg7,
  },
  {
    title: "Earn",
    description:
      "Invest and earn steady income with the help of a professional asset manager.",
    image: sliderimg5,
  },
  {
    title: "Buy Crypto",
    description:
      "Purchase crypto quickly and easily on our popular and industry-leading platform.",
    image: sliderimg6,
  },
  {
    title: "Investment",
    description:
      "Borrow, trade, and repay. Leverage your assets with margin trading.",
    image: sliderimg7,
  },
];

const CryptoSlider = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full min-h-screen relative md:pt-14 px-4">
      <div className="w-full mx-auto lg:px-20 xl:px-40 px-5 bg-[#09131D] py-20 rounded-3xl relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-5 md:gap-0 relative z-10">
          <div className="md:w-1/2">
            <h1 className="text-white font-bold md:text-4xl text-2xl mb-5">
              Explore{" "}
              <span className="text-[#FF3647]">
                Nexachain.ai <span className="underline">Web3 </span>
              </span>
              Products
            </h1>
            <p className="text-[#DADADA] text-lg">
              <span className="text-[#E31587]">Nexachain.ai </span>is the
              easiest, safest, and fastest way to buy & sell crypto asset
              exchange.
            </p>
          </div>
          <div className="p-0.5 border-1 border-[#3A96FF] rounded-full cursor-pointer">
            <button className="bg-[#226DB4] text-white px-4 w-full py-2 cursor-pointer rounded-full text-sm font-semibold transition">
              view more
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          style={{ position: "relative", zIndex: 10 }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#09131D70] text-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-between h-full transition-transform hover:scale-105 duration-300">
                <img
                  src={slide.image}
                  className="mb-4 w-14 p-2.5 border-1 border-[#3A96FF] rounded-full"
                  alt=""
                />
                <div className="text-3xl font-semibold mb-4">{slide.title}</div>
                <p className="text-center mb-6 text-sm text-gray-300">
                  {slide.description}
                </p>
                <button className="mt-auto cursor-pointer bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition">
                  View Details
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-4 my-4 relative z-100">
          <button
            className="bg-transparent text-white px-3 py-3 rounded-full border-1 border-[#3A96FF] hover:bg-gray-300 transition"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FiArrowLeft />
          </button>
          <button
            className="bg-transparent text-white px-3 py-3 rounded-full border-1 border-[#3A96FF] hover:bg-gray-300 transition"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FiArrowRight />
          </button>
        </div>
        <img
          src={sliderimg2}
          className="absolute bottom-0 right-0 w-40"
          alt=""
        />
      </div>
      <img src={sliderimg1} className="absolute bottom-1/2 -translate-y-2/3 left-0 w-28" alt="" />
      <div className="absolute top-0 right-0">
        <div className="relative w-40">
          <img
            src={heroimg1}
            className="absolute bottom-1/2 translate-y-1/2 right-0 md:w-20 w-16"
            alt=""
          />
          <img src={sliderimg3} className="md:w-54 w-40" alt="" />
        </div>
      </div>
      <img
        src={sliderimg4}
        className="absolute md:-top-20 top-1/5 left-1/2 -translate-x-1/2 w-[60rem] z-2"
        alt=""
          />
      <Flexi />
      <img src={flexiimg2} className="absolute hidden lg:block bottom-1/3 translate-y-1/2 left-0 w-40" alt="" />
      <div className="">
      <Development />
      </div>
    </section>
  );
};

export default CryptoSlider;
