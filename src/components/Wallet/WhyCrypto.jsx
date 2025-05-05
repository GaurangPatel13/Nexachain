import React from 'react'
import img1 from '/assets/Wallet/whyCrypto/img1.png';
import img2 from '/assets/Wallet/whyCrypto/img2.png';
import img3 from '/assets/Wallet/whyCrypto/img3.png';

const WhyCrypto = () => {
  return (
      <div className='flex items-start justify-between md:items-center lg:items-start flex-col-reverse mt-5 md:mt-0 md:flex-row gap-7 md:gap-0'>
          <div className='md:w-1/2 relative'>
              <img src={img1} className='relative z-1' alt="" />
              <img src={img3} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
              <img src={img2} className='w-1/6 top-10 right-10 absolute' alt="" />
          </div>
          <div className='md:w-1/2 md:px-10 md:py-20'>
              <h1 className='text-5xl md:text-3xl lg:text-5xl 2xl:text-7xl font-bold font-arial mb-10'>Why are crypto wallets important?</h1>
              <p className='font-dmsans md:text-sm lg:text-base text-[#A4A9AC] text-justify mb-10 2xl:text-lg'>Crypto wallets technically don't store your cryptocurrency, unlike a regular wallet, which can contain actual cash. The blockchain is where your holdings are stored, but only a private key can access them. Your keys enable transactions while establishing your ownership of your digital currency. Your money is locked away if your private keys are lost. To avoid this, use a secure hardware wallet or a reputable provider of digital wallets, such as Coinbase.</p>
              <button className='text-sm 2xl:text-lg px-5 font-semibold cursor-pointer py-2 rounded-lg text-black bg-gradient-to-r from-[#E84AD2] to-[#4B9BE0] shadow-[0px_6.73px_33.63px_0px_#94E3FF42]'>Learn More</button>
          </div>
    </div>
  )
}

export default WhyCrypto