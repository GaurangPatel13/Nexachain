import React from 'react'
import bg from '/assets/Nft/place/bg.png';
import obj1 from '/assets/Nft/place/obj1.png';
import obj2 from '/assets/Nft/place/obj2.png';
import obj3 from '/assets/Nft/place/obj3.png';

const Place = () => {
  return (
      <div className='md:px-10 px-5 py-14'>
          <div className='relative'>
              <img src={bg} className="hidden md:block" alt="" />
              <div className='text-center flex flex-col w-full items-center lg:space-y-20 rounded-xl space-y-7 p-2 bg-blue-500 md:bg-transparent md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>
                  <h1 className='xl:text-6xl lg:text-5xl sm:text-3xl font-chillax relative z-20 md:z-0 text-white uppercase'>Join Us to make The world a<br />better place</h1>
                  <p className='font-poppins lg:max-w-2xl md:max-w-lg sm:text-sm relative z-20 lg:z-0 text-xs text-white'>Smaller currencies may often appear to have a lower carbon footprint, but that may simply be because there are fewer transactions.</p>
                  <button className='font-poppins relative z-20 md:z-0 cursor-pointer text-xs bg-white font-semibold text-[#4A3AFF] px-4 py-2 rounded-lg sm:text-sm'>Contact Us</button>
              </div>
              <div className='flex flex-col items-end absolute lg:-bottom-20 -bottom-8 lg:right-20 md:right-15 md:-bottom-16 right-0'>
                  <div className='flex items-start gap-1'>
                      <img src={obj2} className='lg:w-28 w-16 md:w-20' alt="" />
                      <img src={obj1} className='lg:w-16 w-10 md:w-14' alt="" />
                  </div>
                  <div>
                  <img src={obj3} className='lg:w-36 w-16 md:w-24 relative right-50' alt="" />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Place