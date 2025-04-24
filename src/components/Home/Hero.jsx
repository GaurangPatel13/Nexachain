import React, { Suspense, lazy } from "react";
import SideLinks from "./SideLinks";
import Navbar from "./Navbar";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";

// Use lazy loading for HeroProducts if it's a heavy component
const LazyHeroProducts = lazy(() => import("./HeroProducts"));

const Hero = () => {
  return (
    <>
      <div className="sm:pr-8 sm:pl-24 pl-20 relative">
        {/* Side Links Component */}
        <SideLinks />

        {/* Navbar Section */}
        <div className="pt-7">
          <Navbar />
        </div>
        <Hero1 />
        <Hero2 />
      </div>
      <Hero3 />
      {/* Hero Products Section with Suspense for Lazy Loading */}
      <Suspense
        fallback={<div className="text-center">Loading Products...</div>}
      >
        <LazyHeroProducts />
      </Suspense>
    </>
  );
};

export default Hero;
