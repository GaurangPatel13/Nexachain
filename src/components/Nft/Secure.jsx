import React from 'react'
import bg from '/assets/Nft/secure/bgimg.png';
import img1 from '/assets/Nft/secure/img1.png';
import img2 from '/assets/Nft/secure/img2.png';
import ball from '/assets/Nft/potential/sphere1.png';

const Secure = () => {
  return (
      <div className='sm:py-14 md:py-0 pb-5 relative px-4 md:px-0'>
          <div className='relative flex flex-col gap-4 md:block'>
              <div className='flex items-center gap-14 sm:absolute sm:-top-12 sm:left-10 xl:top-0 xl:left-0 md:-top-12 md:left-14 lg:left-20'>
                  <div className='xl:flex hidden items-center gap-5'>
                      <img src={img1} className='w-36 2xl:w-40' alt="" />
                      <img src={img2} className='w-20 2xl:w-24' alt="" />
                  </div>
                  <div className='flex flex-col items-center space-y-2'>
                      <button className='text-[#2B2727] bg-[#E7EEFA] px-3 rounded-lg py-1.5 font-poppins 2xl:text-lg'>TRANSFORM</button>
                      <div className='text-center 2xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-chillax'>
                          <h1 className='text-[#1E344F]'>Authenticaly secure,</h1>
                          <h1 className='text-[#FF980E]'>sustainable</h1>
                      </div>
                  </div>
              </div>
              <img src={bg} alt="" />
              <div className='md:w-3/11 font-poppins md:text-xs text-[#162639] relative z-20 md:absolute xl:bottom-10 xl:right-6 lg:bottom-5 lg:right-5 md:bottom-2 md:right-1 lg:text-sm 2xl:text-xl'>
                  <p>Smaller currencies may often appear to have a lower carbon footprint, but that may simply be because there are fewer transactions.</p>
              </div>
          </div>
              <img src={ball} className='w-14 md:w-9 lg:w-14 absolute md:bottom-3 bottom-3 right-20' alt="" />
    </div>
  )
}

export default Secure