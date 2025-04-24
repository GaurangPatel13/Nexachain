import React from 'react'
import Hero from '../components/services/Hero'
import Category from '../components/services/category'
import Exchange from '../components/services/Exchange'
import Nft from '../components/services/Nft'
import Wallet from '../components/services/Wallet'
import DeFi from '../components/services/Defi'
import Web from '../components/services/Web'
import DigitalBanking from '../components/services/DigitalBanking'
import CoinDevelopment from '../components/services/CoinDevelopment'
import FAQ from '../components/About/FAQ'
import MostAsked from '../components/About/MostAsked'
import Footer from '../components/About/Footer'

const Services = () => {
  return (
      <div>
          <Hero />
          <Category />
          <div className='xl:px-10 font-poppins'>
              <Exchange />
              <Nft />
              <Wallet />
              <DeFi />
              <Web />
              <DigitalBanking />
              <CoinDevelopment />
          </div>
          <FAQ />
          <MostAsked />
          <Footer />
    </div>
  )
}

export default Services