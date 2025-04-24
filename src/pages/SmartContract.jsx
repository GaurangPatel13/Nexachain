import React, { Suspense, lazy } from "react";

// Lazy load all SmartContract components
const Hero = lazy(() => import("../components/SmartContract/Hero"));
const SmartContract = lazy(() => import("../components/SmartContract/SmartContract"));
const ContractDevelopment = lazy(() => import("../components/SmartContract/ContractDevelopment"));
const DeFiSmartContract = lazy(() => import("../components/SmartContract/DefiSmartContract"));
const UseCases = lazy(() => import("../components/SmartContract/UseCases"));
const Schedule = lazy(() => import("../components/SmartContract/Schedule"));
const BlockChain = lazy(() => import("../components/SmartContract/BlockChain"));
const SmartContractProcess = lazy(() => import("../components/SmartContract/SmartContractProcess"));
const Partners = lazy(() => import("../components/SmartContract/Partners"));
const Connect = lazy(() => import("../components/SmartContract/Connect"));
const FAQ = lazy(() => import("../components/SmartContract/FAQ"));
const MostAsked = lazy(() => import("../components/SmartContract/MostAsked"));
const Footer = lazy(() => import("../components/SmartContract/Footer"));

// Loader fallback
const Loading = () => (
  <div className="text-center py-10 text-gray-400 text-sm">Loading...</div>
);

const SmartContractPage = () => {
  return (
    <div className="font-outfit">
      <Suspense fallback={<Loading />}>
        <Hero />

        <div className="xl:px-0 px-6">
          <SmartContract />
          <ContractDevelopment />
        </div>

        <DeFiSmartContract />

        <div className="xl:px-0 px-6">
          <UseCases />
        </div>

        <Schedule />

        <div className="xl:px-0 px-6">
          <BlockChain />
          <SmartContractProcess />
          <Partners />
        </div>

        <Connect />

        <div className="xl:px-0 px-6">
          <FAQ />
          <MostAsked />
        </div>

        <Footer />
      </Suspense>
    </div>
  );
};

export default SmartContractPage;
