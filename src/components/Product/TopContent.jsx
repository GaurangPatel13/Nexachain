import React from 'react'
import img from '/assets/Product/phase/phasetconimg1.png'

const TopContent = ({title, obj, p1, p2}) => {
  return (
      <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
          <div className='text-[#424242] font-poppins lg:w-1/2 space-y-5'>
              <h1 className='text-[1A1A1A] md:text-[1.7rem] md:font-bold font-semibold text-lg'>{title}</h1>
              <p className='text-sm md:text-start text-justify'><span className='font-semibold md:text-lg'>{obj}</span>{p1}</p>
              <p className='text-sm md:text-start text-justify'>{p2}</p>
          </div>
          <div className='lg:w-1/2'>
              <img src={img} className='w-full' alt="" />
          </div>
    </div>
  )
}

export default TopContent