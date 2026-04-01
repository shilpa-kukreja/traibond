"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";
import AwardsMarquee from "./components/AwardsMarquee";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import LogisticsServices from "./components/LogisticsServices";

import ChooseUs from "./components/ChooseUs";
import Responsbility from "./components/Responsbility";
import SupplyChainSolutionss from "./components/SupplyChainSolutionss";
import SupplyChainSolutions from "./components/SupplyChainSolutions";
import OurParteners from "./components/OurParteners";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <AboutSection/>
   <WhyChooseUs/>
   <LogisticsServices/>
   <SupplyChainSolutions/>
   <ChooseUs/>
   <Responsbility/>
   <SupplyChainSolutionss/>
   <OurParteners/>
   <AwardsMarquee/>
   <BlogSection/>
   <Newsletter/>
   <Footer/>
   </>
  );
}
