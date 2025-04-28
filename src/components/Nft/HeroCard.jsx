import React from 'react'
import img1 from '/assets/Nft/hero/herocardimg1.png'
import img2 from '/assets/Nft/hero/herocardimg2.png'
import { img } from 'framer-motion/client'

const cardData = [
    {
        img: img1,
        name: "Anna May",
        text2Color: "text-[#FF980E]"
    },
    {
        img: img2,
        name: "Jane Holand",
        text2Color: "text-[#FF3647]"
    },
]

const HeroCard = () => {
  return (
    <div className='text-[#342E2E] relative z-200 hidden -bottom-26 2xl:-bottom-35 lg:flex items-center justify-between xl:px-10 lg:px-8'>
      {cardData.map((card, index) => (
        <div key={index} className='flex items-center gap-3 p-4 xl:min-w-[215px] lg:min-w-[190px] 2xl:min-w-[300px] bg-white rounded-2xl'>
          <div className='w-10 rounded-full 2xl:w-16'>
            <img src={card.img} alt={card.name} />
          </div>
          <div>
            <h6 className='font-poppin text-xl 2xl:text-2xl'>{card.name}</h6>
            <p className='text-sm 2xl:text-lg font-abel'>
              Earn <span className={`font-semibold font-abril ${card.text2Color}`}>$100</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HeroCard
