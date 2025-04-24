import React, { Suspense, lazy, useState } from "react"

// Lazy-load components
const HeroSection = lazy(() => import("../components/Ai/HeroSection"))
const AboutSection = lazy(() => import("../components/Ai/AboutSection"))
const ExpandableCard = lazy(() => import("../components/Ai/ExpandableCard"))
const FeatureSection = lazy(() => import("../components/Ai/FeatureSection"))
const ItWork = lazy(() => import("../components/Ai/ItWork"))
const PricingSection = lazy(() => import("../components/Ai/PricingSection"))
const FAQSection = lazy(() => import("../components/Ai/FAQSection"))
const TeamSection = lazy(() => import("../components/Ai/TeamSection"))
const Header = lazy(() => import("../components/Ai/Header"))
const TopHeader = lazy(() => import("../components/Ai/TopHeader"))
const Footer = lazy(() => import("../components/Ai/Footer"))

// Static Assets
import explogo1 from "/assets/Ai/explogo1.png"
import explogo2 from "/assets/Ai/explogo2.png"
import explogo3 from "/assets/Ai/explogo3.png"
import expimg1 from "/assets/Ai/expimg1.png"
import expimg2 from "/assets/Ai/expimg2.png"
import expimg3 from "/assets/Ai/expimg3.png"

// Basic loader
const Loading = () => (
  <div className="text-center py-10 text-gray-400 text-sm">Loading...</div>
)

const Ai = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const cards = [
    {
      image: expimg1,
      bgColor: "#FFFFFF",
      logo: explogo1,
      text: "Robotic Process Automation (RPA)",
    },
    {
      image: expimg2,
      bgColor: "#CED6DC",
      logo: explogo2,
      text: "Data Analysis and Visualization",
    },
    {
      image: expimg3,
      bgColor: "#111111",
      logo: explogo3,
      text: "Insightful market research for strategic business decisions",
    },
  ]

  return (
    <div className="bg-[var(--color-gray-light)] font-outfit">
      <Suspense fallback={<Loading />}>
        <div className="page__center__head">
          <TopHeader />
          <Header />
        </div>

        <div className="page__center__inner">
          <HeroSection />
          <AboutSection />

          {/* Expandable Cards */}
          <div className="flex flex-wrap gap-6 justify-center items-center mt-10 font-sora">
            {cards.map((card, index) => (
              <ExpandableCard
                key={index}
                image={card.image}
                bgColor={card.bgColor}
                logo={card.logo}
                text={card.text}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index)}
                index={index}
              />
            ))}
          </div>

          <FeatureSection />
        </div>

        <div className="page__center bg-white">
          <ItWork />
          <PricingSection />
          <FAQSection />
          <TeamSection />
        </div>

        <div className="bg-white page__center">
          <Footer />
        </div>
      </Suspense>
    </div>
  )
}

export default Ai
