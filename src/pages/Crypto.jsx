import React, { Suspense, lazy } from 'react'

// Lazy load non-essential or heavy components
const Navbar = lazy(() => import('../components/About/Navbar'))
const Hero = lazy(() => import('../components/Crypto/Hero'))
const Opportunity = lazy(() => import('../components/Crypto/Opportunity'))
const Started = lazy(() => import('../components/Crypto/Started'))
const CryptoSlider = lazy(() => import('../components/Crypto/CryptoSlider'))
const Service = lazy(() => import('../components/Crypto/Service'))
const Platform = lazy(() => import('../components/Crypto/Platform'))
const Answer = lazy(() => import('../components/Crypto/Answer'))
const Platforms = lazy(() => import('../components/Crypto/Platforms'))
const Trusted = lazy(() => import('../components/Crypto/Trusted'))
const Indus = lazy(() => import('../components/Crypto/Indus'))
const Schedule = lazy(() => import('../components/Crypto/Schedule'))
const Support = lazy(() => import('../components/Crypto/Support'))
const Utilize = lazy(() => import('../components/Crypto/Utilize'))
const Connect = lazy(() => import('../components/Crypto/Connect'))
const FAQ = lazy(() => import('../components/About/FAQ'))
const MostAsked = lazy(() => import('../components/About/MostAsked'))
const Footer = lazy(() => import('../components/About/Footer'))

// Fallback loader (very basic, you can improve this visually)
const Loading = () => (
  <div className="text-center text-gray-500 py-10">Loading section...</div>
)

const Crypto = () => {
  return (
    <div className="font-outfit">
      <Suspense fallback={<Loading />}>
        <div className="px-10 pt-7">
          <Navbar />
        </div>
        <Hero />
        <Opportunity />
        <Started />
        <CryptoSlider />
        <Service />
        <Platform />
        <Answer />
        <Platforms />
        <Trusted />
        <Indus />
        <Schedule />
        <Support />
        <Utilize />
        <Connect />
        <FAQ />
        <MostAsked />
        <Footer />
      </Suspense>
    </div>
  )
}

export default Crypto
