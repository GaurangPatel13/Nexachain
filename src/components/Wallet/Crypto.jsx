import React from 'react'
import CryptoCard from './CryptoCard'
import btc from '/assets/Wallet/crypto/bitimg.png'
import grt from '/assets/Wallet/crypto/GRTimg.png'
import eth from '/assets/Wallet/crypto/etheimg.png'
import ltc from '/assets/Wallet/crypto/litimg.png'


const Crypto = () => {

    const cardData = [
        {
          name: 'Bitcoin',
          symbol: 'BTC',
          icon: btc,
          price: '$29.959,50',
          change: '0,61',
          changePositive: false,
        },
        {
          name: 'The Graph',
          symbol: 'GRT',
          icon: grt,
          price: '$0,120991',
          change: '4,12',
          changePositive: true,
        },
        {
          name: 'Ethereum',
          symbol: 'ETH',
          icon: eth,
          price: '$1.898,81',
          change: '1,64',
          changePositive: false,
        },
        {
          name: 'Litcoin',
          symbol: 'LTC',
          icon: ltc,
          price: '$1.898,81',
          change: '1,64',
          changePositive: false,
        },
      ];
  return (
      <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:px-4 gap-6 justify-center bg-black py-10">
      {cardData.map((card, idx) => (
        <CryptoCard key={idx} {...card} />
      ))}
    </div>
    </div>
  )
}

export default Crypto