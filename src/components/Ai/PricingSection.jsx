import React from "react";
import pricewave from "/assets/Ai/pricewave.png";

const PricingSection = () => {
  return (
    <section className="relative max-w-6xl container font-manrope mx-auto flex flex-col xl:flex-row items-center gap-6 sm:gap-12 xl:py-12 py-6 px-6">
      
      {/* Vertical "pricing" Text */}
      <div className="xl:absolute xl:-right-150 xl:-bottom-70  xl:rotate-90 xl:text-4xl sm:text-2xl w-full text-black">
        <span className="text-red-500">/</span> pricing{" "}
        <span className="text-red-500">/</span>
      </div>

      <div className="w-full flex sm:flex-row sm:items-center flex-col gap-4">
        {/* Left Section - Title */}
      <div className="w-full lg:w-1/3 text-left font-sora">
        <h2 className="text-6xl font-semibold leading-tight">
          <span className="text-orange-500">Simple</span> and{" "}
          <span className="text-green-500">flexible</span>.
        </h2>
        <p className="text-6xl mt-4">Only pay for what you use.</p>
      </div>

      {/* Right Section - Pricing Cards */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4 sm:gap-2">
        {/* Basic Plan */}
        <div className="border border-black rounded-xl p-10 flex sm:flex-row flex-col  sm:justify-between items-center">
          <div className="flex w-full justify-between sm:flex-row flex-col gap-3 sm:gap-0">
            <div>
              <h3 className="text-xl font-bold font-sora">Basic</h3>
              <p className="text-gray-500">Great for private individuals</p>
            </div>
            <div>
              <ul className="mt-3 text-gray-600 text-sm space-y-1">
                <li>• 1 User</li>
                <li>• Unlimited Projects</li>
                <li>• Download prototypes</li>
                <li>• 1 Gb workspace</li>
              </ul>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-2xl font-bold font-sora">Free</p>
              <button className="mt-3 px-4 py-2 border border-black rounded-full text-sm hover:bg-gray-200 cursor-pointer transition">
                ➝ Get started
              </button>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="relative bg-[#E9EBED] rounded-xl p-10 flex justify-between items-center shadow-md">
          {/* Popular Tag */}
          <span className="absolute top-0 left-10 bg-white px-5 py-2 text-xs font-semibold rounded-b-lg">
            Popular
          </span>

          <div className="flex w-full justify-between sm:flex-row flex-col gap-3 sm:gap-0">
            <div>
              <h3 className="text-xl font-bold font-sora">Premium</h3>
              <p className="text-gray-500">14 days free period</p>
            </div>
            <div>
              <ul className="mt-3 text-gray-600 text-sm space-y-1">
                <li>• 3 Users</li>
                <li>• Unlimited Projects</li>
                <li>• Download prototypes</li>
                <li>• 100 Gb workspace</li>
              </ul>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-3xl font-bold font-sora">
                $99<span className="text-sm font-normal">/mo</span>
              </p>
              <button className="mt-3 px-4 py-2 bg-[var(--color-gray-dark)] text-white rounded-full text-sm hover:bg-white hover:text-black cursor-pointer border border-black transition">
                ➝ Get started
              </button>
            </div>
                  </div>
                  <img className="absolute bottom-0 left-0 w-48" src={pricewave} alt="" />
        </div>
      </div>
      </div>

      
    </section>
  );
};

export default PricingSection;
