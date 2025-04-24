import React from "react";
import whyweimg from "/assets/About/whywediff/whyweimg.png";
import whyleftimg from "/assets/About/whywediff/whyleftimg.png";
import whyrighttopimg from "/assets/About/whywediff/whyrighttopimg.png";
import whyrightbottomimg from "/assets/About/whywediff/whyrightbottomimg.png";

const WhyWeAreDifferent = () => {
  return (
    <section className="relative bg-black font-lato text-white mt-5 px-10 pt-16 flex flex-col lg:flex-row justify-center gap-12">
      {/* Left Side - Image */}
      <div className="lg:w-2/3 w-full flex flex-col justify-center">
        <img src={whyleftimg} className="w-54 absolute top-10 left-0" alt="" />
        <h2 className="lg:text-7xl text-6xl font-semibold">why we are different?</h2>
        <p className="lg:text-2xl text-xl font-light  text-white mt-2">
          Know our company services how we work
        </p>
        <img src={whyweimg} alt="Abstract Design" className="w-full" />
      </div>

      {/* Right Side - Content */}
      <div className="lg:max-w-2/6 w-full">
        <div className="mt-6 space-y-10 2xl:space-y-24">
          <div className="w-14 h-1 bg-white"></div>
          <div className="">
            <img
              src={whyrighttopimg}
              alt=""
              className="w-60 absolute top-0 right-0"
            />
            <h3 className="text-4xl 2xl:text-5xl font-bold pb-5 pt-2">24*7 support</h3>
            <p className="text-white font-light 2xl:text-2xl text-xl">
              Provides 24*7 support for clients all around the world for free
            </p>
          </div>

          <div>
            <h3 className="text-4xl 2xl:text-5xl font-bold pb-5">skilled professionals</h3>
            <p className="text-white font-light 2xl:text-2xl text-xl">
              Highly skilled and experienced professionals in the industry
            </p>
          </div>

          <div>
            <h3 className="text-4xl 2xl:text-5xl font-bold pb-5">high quality products</h3>
            <p className="text-white font-light 2xl:text-2xl text-xl">
              Quality of products assured on each development phase
            </p>
          </div>

          <div>
            <h3 className="text-4xl 2xl:text-5xl font-bold pb-5">reliable service</h3>
            <p className="text-white font-light 2xl:text-2xl text-xl">
              Reliable service is offered to each and every customer
            </p>
                  </div>
                  <img src={whyrightbottomimg} className="w-72 absolute bottom-0 right-0" alt="" />
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferent;
