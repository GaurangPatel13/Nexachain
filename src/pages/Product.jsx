import React from "react";
import Navbar from "../components/Product/Navbar";
import Hero from "../components/Product/Hero";
import Feature from "../components/Product/Feature";
import Phase from "../components/Product/Phase";
import Integrate from "../components/Product/Integrate";
import Partners from "../components/Home/Partners";
import Schedule from "../components/Product/Schedule";
import Savings from "../components/Product/Savings";
import Award from "../components/Product/Award";
import Action from "../components/Product/Action";
import FAQ from "../components/SmartContract/FAQ";
import MostAsked from "../components/SmartContract/MostAsked";
import Footer from "../components/SmartContract/Footer";

const Product = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <Hero />
      <Feature />
      <Phase />
      <Integrate />
      <div>
        <Partners />
      </div>
      <Schedule />
      <div className="bg-[#EAEAEA]">
        <Savings />
        <Award />
        <Action />
      </div>
      <div className="px-4 lg:px-0 pt-5">
      <FAQ />
      <MostAsked />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
