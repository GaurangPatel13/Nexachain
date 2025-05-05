import React from 'react'
import CryptoMarquee from './CryptoMarquee'

const Crypto2 = () => {
  return (
      <div className='min-h-screen relative'>
          <div className='absolute left-1/2 -translate-x-1/2 xl:bottom-3/5 lg:bottom-3/5 bottom-0 -translate-y-full w-[150vw] rotate-35 z-3'>
          <CryptoMarquee background='#FFFFFF' textColor='black' />
          </div>
          <div className='absolute left-1/2 -translate-x-1/2 xl:-top-30 lg:-top-20 top-20 -translate-y-full w-[150vw] rotate-10 z-1'>
          <CryptoMarquee background='#8500EF' textColor='white' />
          </div>
          <div className='absolute left-1/2 -translate-x-1/2 xl:bottom-3/5 lg:bottom-3/5 bottom-1/4 -translate-y-full w-[150vw] rotate-335 z-2'>
          <CryptoMarquee background='#8500EF' textColor='white' />
          </div>
          <div className='absolute left-1/2 -translate-x-1/2 xl:bottom-6/7 lg:bottom-6/7 bottom-30 -translate-y-full w-[150vw] rotate-35 z-3'>
          <CryptoMarquee background='#FFFFFF' textColor='black' />
          </div>
          <div className='absolute left-1/2 -translate-x-1/2 xl:bottom-1/3 lg:bottom-1/3 bottom-0 -translate-y-full w-[150vw] rotate-335 z-4'>
          <CryptoMarquee background='#8500EF' textColor='white' />
          </div>
          
    </div>
  )
}

export default Crypto2