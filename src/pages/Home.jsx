import React, { useEffect, useState, Suspense, lazy } from "react";

// Lazy-loaded components
const Hero = lazy(() => import("../components/Home/Hero"));
const MovingText = lazy(() => import("../components/Home/MovingText"));
const GameProjectHero = lazy(() => import("../components/Home/GameProjectHero"));
const BouncingMarquee = lazy(() => import("../components/Home/BouncingMarquee"));
const Delivering = lazy(() => import("../components/Home/Delivering"));
const Operating = lazy(() => import("../components/Home/Operating"));
const TestimonialSlider = lazy(() => import("../components/Home/TestimonialSlider"));
const Partners = lazy(() => import("../components/Home/Partners"));
const Changing = lazy(() => import("../components/Home/Changing"));
const BlackMarquee = lazy(() => import("../components/Home/BlackMarquee"));
const Agency = lazy(() => import("../components/Home/Agency"));
const Price = lazy(() => import("../components/Home/Price"));
const FAQ = lazy(() => import("../components/About/FAQ"));
const Footer = lazy(() => import("../components/About/Footer"));
const PopupModal = lazy(() => import("../components/Home/PopupModal"));

// Simple fallback loader
const Loading = () => (
  <div className="text-center py-10 text-gray-400 text-sm">Loading...</div>
);

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const lastClosed = localStorage.getItem('popupClosedAt');
    if (!lastClosed) {
      setShowPopup(true);
    } else {
      const now = new Date().getTime();
      const twentyFourHours = 24 * 60 * 60 * 1000;
  
      if (now - parseInt(lastClosed, 10) > twentyFourHours) {
        setShowPopup(true);
      }
    }
  }, []);
  

  const handleClose = () => {
    localStorage.setItem('popupClosedAt', new Date().getTime());
    setShowPopup(false);
  };
  

  return (
    <div className="font-outfit">
      {/* Popup is critical for UX, so don’t put it inside Suspense */}
      {showPopup && (
        <Suspense fallback={null}>
          <PopupModal onClose={handleClose} />
        </Suspense>
      )}

      <Suspense fallback={<Loading />}>
        <div className="bg-[#F0F2F4]">
        <Hero />
        </div>
        <MovingText />
        <GameProjectHero />

        <BouncingMarquee
          text="Our games mix the best Our games mix the best Our games mix the best "
          bgColor="bg-[#000]"
          fosi="text-7xl"
          textColor="text-[#FF7E21]"
        />

        <Delivering />
        <Operating />
        <TestimonialSlider />
        <Partners />

        <div className="relative">
          <Changing />
          <BlackMarquee
          />
        </div>

        <Agency />

        <BouncingMarquee
          text="Our games mix the best Our games mix the best Our games mix the best "
          bgColor="bg-[#fff]"
          fosi="text-[8rem]"
          textColor="text-[#FF7E21]"
        />

        <Price />

        <div className="xl:px-30">
          <FAQ />
        </div>

        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
