import React, { Suspense, lazy } from 'react'

// Lazy imports
const Footer = lazy(() => import('../components/About/Footer'))
const MostAsked = lazy(() => import('../components/About/MostAsked'))
const FAQ = lazy(() => import('../components/About/FAQ'))
const Navbar = lazy(() => import('../components/About/Navbar'))
const Connect = lazy(() => import('../components/About/Connect'))
const AboutHero = lazy(() => import('../components/About/AboutHero'))
const HorizontalLine = lazy(() => import('../components/About/HorizontalLine'))
const WhyWeAreDifferent = lazy(() => import('../components/About/WhyWeAreDifferent'))
const Vision = lazy(() => import('../components/About/Vision'))
const Super = lazy(() => import('../components/About/Super'))
const Marquee = lazy(() => import('../components/About/Marquee'))

// Simple fallback loader
const Loading = () => (
  <div className="text-center text-gray-400 py-10 text-sm">Loading...</div>
)

const AboutUs = () => {
  return (
    <div className="bg-white font-outfit">
      <Suspense fallback={<Loading />}>
        <div className="page__center__head__about">
          <Navbar />
          <div className='px-4'>
          <div className='w-full h-0.5 bg-black'></div>
          </div>
          {/* <HorizontalLine /> Uncomment if needed */}
          <AboutHero />
        </div>

        <WhyWeAreDifferent />
        <Vision />
        <Super />
        <Marquee />
        <Connect />

        <div className="page__center__inner">
          <FAQ />
          <MostAsked />
          <Footer />
        </div>
      </Suspense>
    </div>
  )
}

export default AboutUs
