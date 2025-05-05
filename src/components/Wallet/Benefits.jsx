import React from "react";
import rightimg from "/assets/Wallet/benefits/img1.png";
import b1 from "/assets/Wallet/benefits/tl1.png";
import b2 from "/assets/Wallet/benefits/tr1.png";
import b3 from "/assets/Wallet/benefits/br1.png";

const Benefits = () => {
  return (
    <div className="relative mt-5 md:mt-0">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl 2xl:max-w-7xl mx-auto px-5 md:py-5 lg:py-auto xl:px-0">
        <div className="flex flex-col gap-5 font-lato md:w-1/2">
          <div>
            <h1 className="xl:text-7xl text-4xl 2xl:text-8xl mb-4 2xl:mb-7">Key Benefits</h1>
            <p className="font-thin 2xl:text-3xl after:w-16 after:h-1 2xl:after:w-30 2xl:after:h-1.5 after:bg-white after:mt-0.5 after:block">Know key Benefits</p>
          </div>
          <div>
            <h1 className="lg:text-4xl text-2xl mb-4 2xl:mb-7 2xl:text-5xl">No Risk of Losing Your Keys:</h1>
            <p className="font-thin md:text-sm lg:text-base 2xl:text-lg">
              You don’t need to worry about losing access due to forgotten
              private keys or hardware devices.
            </p>
          </div>
          <div>
            <h1 className="lg:text-4xl text-2xl mb-4 2xl:mb-7 2xl:text-5xl">Password Recovery:</h1>
            <p className="font-thin md:text-sm lg:text-base 2xl:text-lg">
              If you forget your password, you can still recover your account
              through standard verification processes.
            </p>
          </div>
          <div>
            <h1 className="lg:text-4xl text-2xl mb-4 2xl:mb-7 2xl:text-5xl">User-Friendly:</h1>
            <p className="font-thin md:text-sm lg:text-base 2xl:text-lg">
              Ideal for beginners who want a secure and simple way to buy, sell,
              and hold cryptocurrency.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={rightimg} alt="" />
        </div>
      </div>
      <img src={b1} className="absolute top-20 left-0 md:w-1/6 w-1/2" alt="" />
      <img src={b2} className="absolute top-0 right-0 md:w-1/7 w-1/2" alt="" />
      <img src={b3} className="absolute bottom-0 right-0 md:w-1/7 w-1/2" alt="" />
    </div>
  );
};

export default Benefits;
