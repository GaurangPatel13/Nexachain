import React from 'react'
import bg from '/assets/Wallet/future/bg.png'

const Future = () => {
  return (
    <div
      className="bg-cover bg-center text-white font-syne relative"
      >
          <img src={bg} alt="" />
          <div className='text-center space-y-5 md:max-w-xl md:mx-auto absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4'>
          <h1 className='lg:text-7xl md:text-5xl text-lg'>Let's build future together</h1>
          <button className='bg-[#1100FF] text-xs md:text-base px-4 py-2.5 cursor-pointer rounded-full'>Start now</button>
      </div>
    </div>
  );
};

export default Future;
