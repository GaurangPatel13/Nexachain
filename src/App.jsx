import React, { Suspense, lazy } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Nft from "./pages/Nft";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Ai = lazy(() => import("./pages/Ai"));
const SmartContract = lazy(() => import("./pages/SmartContract"));
const Product = lazy(() => import("./pages/Product"));
const Crypto = lazy(() => import("./pages/Crypto"));
const Services = lazy(() => import("./pages/Services"));

// Optional: You can create a better loader component
const Loading = () => <div className="text-center mt-10">Loading...</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/product" element={<Product />} />
          <Route path="/smart-contract" element={<SmartContract />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/enterprise"
            element={<div>Enterprise Page Coming Soon</div>}
          />
          <Route
            path="/customers"
            element={<div>Customers Page Coming Soon</div>}
          />
          <Route path="/nft" element={<Nft />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
