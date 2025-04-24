import React from "react";
import startedimg1 from '/assets/Crypto/started/startedimg1.png'

const Started = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-white text-center relative z-0">
      <h2 className="text-3xl md:text-4xl font-bold">
        How To Get <span className="text-pink-600 underline">Started</span>
      </h2>

      <div className="mt-12 flex gap-4 justify-center items-center flex-wrap relative">
        {/* Card 1 */}
        <div className="bg-[#FF980E] text-[#FFFFFF80] p-6 rounded-2xl w-[260px] md:w-72 shadow-lg z-40 relative min-h-[350px]">
          <div className="text-[#FF980E] font-bold text-lg flex items-center justify-center mb-4">
          <h1 className=" w-18 h-18 rounded-full bg-white bg-opacity-20 flex items-center justify-center">01</h1>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-7">Create account</h3>
          <p className="text-lg font-semibold px-14">
            Sign in to Nexachain.ai to register a new profile.
          </p>
          <button className="text-lg p-3 mt-7 cursor-pointer border-2 border-white text-white rounded-full hover:bg-white hover:text-orange-500 transition">
            Register Now
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#226DB4] text-[#FFFFFF80] p-6 min-h-[320px] rounded-2xl w-[260px] md:w-80 shadow-lg z-30 relative md:-ml-7">
          <div className="text-[#226DB4] font-bold text-lg flex items-center justify-center mb-4">
          <h1 className=" w-18 h-18 rounded-full bg-white bg-opacity-20 flex items-center justify-center">02</h1>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-7">Verify your identity</h3>
          <p className="text-lg font-semibold px-8">
            Spend less than five minutes completing the verification process.
          </p>
          <p className="text-lg mt-7">Create your account first</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#FF3647] text-[#FFFFFF80] p-6 rounded-2xl min-h-[320px] w-[260px] md:w-80 shadow-lg z-20 relative md:-ml-7">
          <div className="text-[#FF3647] font-bold text-lg flex items-center w-full justify-center mb-4">
            <h1 className=" w-18 h-18 rounded-full bg-white bg-opacity-20 flex items-center justify-center">03</h1>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-7">Buy or deposit crypto</h3>
          <p className="text-lg font-semibold px-8">
            Add funds to your Critox account to access crypto services.
          </p>
          <p className="text-lg mt-7">Verify your identity first</p>
          
        </div>

        {/* Card 4 */}
        <div className="bg-[#0F1E2E] text-[#FFFFFF80] p-6 rounded-2xl min-h-[320px] w-[260px] md:w-80 shadow-lg z-10 relative md:-ml-7">
          <div className="text-white font-bold text-lg flex items-center justify-center mb-4">
          <h1 className=" w-18 h-18 rounded-full bg-[#1E2329] bg-opacity-20 flex items-center justify-center">04</h1>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-7">Start your journey</h3>
          <p className="text-lg font-semibold px-8">
            Explore crypto opportunities within the Critox ecosystem.
          </p>
          <p className="text-lg mt-7">Buy or deposit crypto first</p>
        </div>

        <img src={startedimg1} className="absolute top-0 right-1/5 w-40 lg:z-20 md:z-50" alt="" />
      </div>
    </section>
  );
};

export default Started;
