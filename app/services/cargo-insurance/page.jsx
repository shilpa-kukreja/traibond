"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow, EffectCards } from 'swiper/modules';

import { useInView } from 'react-intersection-observer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { useState } from "react";
import Link from "next/link";

export default function WarehousingPage() {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">

        {/* ================= HERO SECTION ================= */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          {/* Background Image with Zoom Effect */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/CargoInsurance/CargoInsurancehomebanner.jpg"
              alt="Premium Warehouse Facility"
              fill
              className="object-cover scale-105 transition-transform duration-700 group-hover:scale-100"
              priority
            />
          </div>

          {/* Gradient Overlay - More Sophisticated */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />



          {/* Content Container */}
          <div className="relative h-full flex items-center justify-center px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl">


              {/* Main Heading with Premium Typography */}
              <h1 className="text-4xl md:text-4xl lg:text-5xl  font-bold text-white mb-6 leading-[1.2] tracking-tight">
                Cargo Insurance Made
                <span className="space-x-2 text-amber-500 mt-2"> Secure</span>
              </h1>

              {/* Description with Better Readability */}
              <p className="text-gray-200 text-lg text-center md:text-xl max-w-2xl leading-relaxed mb-8">
                Reliable, protective, and risk-focused coverage solutions
                <span className="block text-amber-400 text-center font-medium mt-2">
                  tailored to safeguard your shipments end-to-end.
                </span>
              </p>




            </div>
          </div>

        </section>

        {/* ================= ABOUT SECTION - PREMIUM ================= */}
        <section className="relative py-6 md:py-10 overflow-hidden bg-gradient-to-b from-white to-gray-50/50">

          {/* Background Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left Content - Enhanced */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute h-full w-full bg-amber-400 rounded-full opacity-75" />
                    <span className="relative h-2 w-2 bg-amber-500 rounded-full" />
                  </span>
                  <span className="text-amber-700 text-sm font-semibold tracking-wide uppercase">
                    Integrated Solutions
                  </span>
                </div>

                {/* Main Heading with Accent */}
                <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight">
                  Cargo Insurance
                  <span className="block text-amber-600 mt-2 relative inline-block">
                    & Risk Protection
                    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                      <path d="M0 6 L300 6" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="text-amber-400" />
                      <path d="M0 6 L300 6" stroke="currentColor" strokeWidth="2" className="text-amber-500" />
                    </svg>
                  </span>
                </h2>

                {/* Description with Enhanced Readability */}
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our cargo insurance services are designed to protect your goods against unforeseen risks during transit. With proper coverage, risk assessment, and claim support, we ensure your shipments are financially secured across domestic and international movements.
                </p>

                {/* Feature List - Premium Details */}
                <div className="space-y-4 pt-4">
                  {[
                    { icon: "⚡", title: "Risk Coverage", desc: "Protection against loss, damage, and transit-related risks" },
                    { icon: "🔒", title: "Secure Protection", desc: "Coverage designed to safeguard goods throughout transit" },
                    { icon: "🤝", title: "Dedicated Support", desc: "Assistance with policy handling and claim processes" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-amber-200 transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-gray-500 text-sm">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>


              </motion.div>

              {/* Right Image - Premium Layout */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              >
                <div className="relative h-[450px] md:h-[500px] lg:h-[550px] w-full rounded-md overflow-hidden shadow-2xl">
                  {/* Main Image */}
                  <img
                    src="/CargoInsurance/riskprotection.jpg"
                    alt="Modern Warehouse Operations"

                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"

                  />

                  {/* Gradient Overlay for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Decorative Border Frame */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-white/20 pointer-events-none" />
                </div>



              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= FLEXIBLE FULFILLMENT MODEL - PREMIUM ================= */}
        <section className="relative py-8 md:py-12 overflow-hidden bg-gray-200">



          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

            {/* Section Header with Premium Styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >


              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.2] tracking-tight">
                Flexible Cargo Insurance
                <span className="block text-amber-600">Model</span>
              </h2>

              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Choose from our insurance solutions designed to match different cargo types and shipping requirements.
              </p>
            </motion.div>

            {/* Premium Swiper Slider */}
            <Swiper
              modules={[Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}

              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 2,
                  centeredSlides: false,
                  effect: 'slide',
                },
                1024: {
                  slidesPerView: 3,
                  centeredSlides: false,
                  effect: 'slide',
                },
              }}
              className="premium-swiper"
            >
              {/* CARD 1 */}
              <SwiperSlide>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full"
                >
                  <div className="relative bg-white rounded-md overflow-hidden  shadow-lg hover:shadow-xl  duration-500 h-full">
                    {/* Image Container with Overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/CargoInsurance/02.jpg"
                        alt="Centralised Network"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 "
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />


                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        Import Clearance
                      </h3>

                      <motion.p
                        initial={{ height: "auto" }}
                        animate={{ height: open ? "auto" : "3rem" }}
                        className={`text-gray-600 leading-relaxed mb-6 overflow-hidden ${open ? "" : "line-clamp-2"
                          }`}
                      >
                        Efficient handling of inbound shipments with proper documentation and smooth clearance processes.
                      </motion.p>

                      {/* Learn More Link */}
                      <button
                        onClick={() => setOpen(!open)}
                        className="inline-flex items-center gap-2 text-amber-600 font-semibold group/link hover:gap-3 transition-all duration-300"
                      >
                        <span>{open ? "Show Less" : "Learn More"}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${open ? "rotate-90" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Decorative Border on Hover */}
                    <div className="absolute inset-0 border-2 border-amber-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              </SwiperSlide>

              {/* CARD 2 */}
              <SwiperSlide>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full"
                >
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl duration-500 h-full">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/CargoInsurance/riskcoverage.jpg"
                        alt="Tech-Enabled Solutions"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 "
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />


                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        All-Risk Coverage
                      </h3>
                      <motion.p
                        initial={{ height: "auto" }}
                        animate={{ height: open ? "auto" : "3rem" }}
                        className={`text-gray-600 leading-relaxed mb-6 overflow-hidden ${open ? "" : "line-clamp-2"
                          }`}
                      >
                        Comprehensive protection covering a wide range of potential risks during shipment movement.
                      </motion.p>

                      <button
                        onClick={() => setOpen(!open)}
                        className="inline-flex items-center gap-2 text-amber-600 font-semibold group/link hover:gap-3 transition-all duration-300"
                      >
                        <span>{open ? "Show Less" : "Learn More"}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${open ? "rotate-90" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="absolute inset-0 border-2 border-amber-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              </SwiperSlide>

              {/* CARD 3 */}
              <SwiperSlide>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full"
                >
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl  duration-500 h-full">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/CargoInsurance/03.jpg"
                        alt="Customised Services"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 "
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />


                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        Specialized Handling
                      </h3>
                      <motion.p
                        initial={{ height: "auto" }}
                        animate={{ height: open ? "auto" : "3rem" }}
                        className={`text-gray-600 leading-relaxed mb-6 overflow-hidden ${open ? "" : "line-clamp-2"
                          }`}
                      >
                        Customized clearance solutions based on cargo type and specific regulatory requirements.
                      </motion.p>

                      <button
                        onClick={() => setOpen(!open)}
                        className="inline-flex items-center gap-2 text-amber-600 font-semibold group/link hover:gap-3 transition-all duration-300"
                      >
                        <span>{open ? "Show Less" : "Learn More"}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${open ? "rotate-90" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="absolute inset-0 border-2 border-amber-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              </SwiperSlide>


              {/* <SwiperSlide>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="group relative h-full"
        >
          <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl duration-500 h-full">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/offer/img1 (2).webp"
                alt="Tech-Enabled Solutions"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                Tech-Enabled Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">
                Smart logistics powered by automation, AI insights, and real-time tracking.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-amber-600 font-semibold group/link hover:gap-3 transition-all duration-300"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="absolute inset-0 border-2 border-amber-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </motion.div>
      </SwiperSlide> */}
            </Swiper>



          </div>

          {/* Custom CSS for Swiper Styling */}
          <style jsx>{`
    :global(.premium-swiper) {
      padding: 20px 0 60px 0;
    }
    
    :global(.premium-swiper .swiper-button-next),
    :global(.premium-swiper .swiper-button-prev) {
      background: white;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    
    :global(.premium-swiper .swiper-button-next:hover),
    :global(.premium-swiper .swiper-button-prev:hover) {
      background: #f59e0b;
      color: white;
      transform: scale(1.1);
    }
    
    :global(.premium-swiper .swiper-button-next:after),
    :global(.premium-swiper .swiper-button-prev:after) {
      font-size: 20px;
      font-weight: bold;
    }
    
    :global(.premium-swiper .swiper-pagination-bullet) {
      width: 10px;
      height: 10px;
      background: #d1d5db;
      opacity: 1;
      transition: all 0.3s ease;
    }
    
    :global(.premium-swiper .swiper-pagination-bullet-active) {
      background: #f59e0b;
      width: 28px;
      border-radius: 5px;
    }
    
    :global(.premium-swiper .swiper-pagination) {
      bottom: 0;
    }
  `}</style>
        </section>



        <section className="relative py-16 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

          {/* Background Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-amber-100/40 blur-3xl rounded-full" />
            <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-slate-200/40 blur-3xl rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            {/* HEADER */}
            <div className="max-w-3xl mb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Maximise Protection With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
                  Smart Risk Management
                </span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Our cargo insurance services help reduce financial risk, ensure security, and provide peace of mind during shipment.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT SIDE */}
              <div className="space-y-6">
                {[
                  {
                    title: "Risk Assessment",
                    desc: "Evaluation of potential risks before shipment movement",
                    icon: "📊",
                  },
                  {
                    title: "Policy Planning",
                    desc: "Structured coverage selection based on cargo value",
                    icon: "📦",
                  },
                  {
                    title: "Claim Support",
                    desc: "Guidance and assistance for smooth claim processing",
                    icon: "🛡️",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group p-[1px] rounded-xl border border-gray-200 hover:shadow-xl transition duration-300 "
                  >
                    <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100">

                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-50 text-2xl group-hover:scale-110 transition">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT SIDE */}
              <div className="relative group">

                {/* Glass Card */}
                <div className="relative rounded-md overflow-hidden border border-white/20 shadow-2xl">

                  {/* Image */}
                  <img
                    src="/CargoInsurance/01.jpg"
                    alt="Team analytics"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />



                </div>



                {/* Glow */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400/20 blur-2xl rounded-full"></div>

              </div>

            </div>
          </div>
        </section>




        <section className="relative py-8 md:py-12 overflow-hidden bg-gray-200">
          {/* Subtle background pattern for depth */}


          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >


              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Smart Features for
                <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mt-2">
                  Cargo Insurance Services
                </span>
              </h2>

              <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
                Built for protection, transparency, and reliable coverage across shipments.
              </p>
            </motion.div>

            {/* Swiper */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={28}
              slidesPerView={1}
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="premium-features-swiper"
            >
              {[
                {
                  title: "Coverage Planning",
                  desc: "Structured insurance solutions based on cargo needs",
                  stat: "45%",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                },
                {
                  title: "Policy Management",
                  desc: "Organized handling of insurance documentation and terms",
                  stat: "99.9%",
                  icon: (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </>
                  ),
                },
                {
                  title: "Claim Assistance",
                  desc: "Support for quick and smooth claim settlements",
                  stat: "100%",
                  icon: (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </>
                  ),
                },
                {
                  title: "Risk Coordination",
                  desc: "Aligned communication with customs officials for timely clearance.",
                  stat: "Real-time",
                  icon: (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </>
                  ),
                },
              ].map((item, i) => (
                <SwiperSlide key={i}>
                  <motion.div

                    transition={{ duration: 0.3, }}
                    className="group h-full"
                  >
                    <div className="relative bg-white rounded-xl p-7 h-full border border-gray-200 shadow-md hover:shadow-xl flex flex-col justify-between overflow-hidden">

                      {/* Decorative gradient top bar */}
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 opacity-90   duration-300" />

                      {/* Floating stat badge */}
                      <div className="absolute top-6 right-6 bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-amber-200/50 backdrop-blur-sm">
                        {item.stat}
                      </div>

                      {/* Icon container with premium styling */}
                      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 text-amber-600 mb-6 shadow-md group-hover:shadow-lg border border-amber-100">
                        <svg
                          className="w-7 h-7"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {item.icon}
                        </svg>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                          {item.title}
                        </h3>
                        <motion.p
                          animate={{ height: openIndex === i ? "auto" : "3rem" }}
                          className={`text-gray-600 leading-relaxed mb-6 overflow-hidden ${openIndex === i ? "" : "line-clamp-2"
                            }`}
                        >
                          {item.desc}
                        </motion.p>
                      </div>

                      {/* Bottom CTA with animated line */}
                      <div className="mt-8 pt-2 border-t border-gray-100 flex items-center justify-between">
                        <button
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                          className="inline-flex items-center gap-2 text-amber-600 font-semibold group/link hover:gap-3 transition-all duration-300"
                        >
                          <span>{openIndex === i ? "Show Less" : "Learn More"}</span>
                          <svg
                            className={`w-4 h-4 transition-transform ${openIndex === i ? "rotate-90" : ""
                              }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                        <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />

                      {/* Subtle inner shadow on hover */}
                      <div className="absolute inset-0 shadow-inner rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Swiper Styling */}
          <style jsx>{`
        :global(.premium-features-swiper) {
          padding-bottom: 20px;
        }

        :global(.swiper-pagination-bullet) {
          background: #9ca3af;
          width: 8px;
          height: 8px;
          opacity: 0.6;
          transition: all 0.2s ease;
        }

        :global(.swiper-pagination-bullet-active) {
          background: #f59e0b;
          width: 24px;
          border-radius: 8px;
          opacity: 1;
        }

        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          display: none;
        }

        @media (min-width: 1024px) {
          :global(.premium-features-swiper) {
            padding-bottom: 60px;
          }
        }
      `}</style>
        </section>

        <section className="py-12 bg-white relative overflow-hidden">

          <div className="max-w-7xl mx-auto px-6 md:px-10">
            {/* ===== TOP HEADING ===== */}
            <div className="text-center mb-20">


              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tight">
                Why Does Your Business Need
                <span className="block bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent mt-2">
                  Cargo Insurance?
                </span>
              </h2>

              <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                Ensure financial protection, risk coverage, and secure shipment movement across all logistics operations.
              </p>
            </div>

            {/* ===== FIRST ROW ===== */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-14">
              {/* LEFT CONTENT - Premium Cards */}
              <div>
                <div className="space-y-5">
                  {[
                    {
                      title: "Financial Security",
                      desc: "Protection against loss or damage during transit",
                      icon: "/offer/buss-warehouse-icon1.webp"
                    },
                    {
                      title: "Risk Coverage",
                      desc: "Safeguarding shipments from unexpected situations",
                      icon: "/offer/buss-warehouse-icon2.webp"
                    },
                    {
                      title: "Peace of Mind",
                      desc: "Confidence in secure and protected cargo movement",
                      icon: "/offer/buss-warehouse-icon3.webp"
                    },
                    {
                      title: "Flexible Protection",
                      desc: "Coverage options suited to different shipment needs",
                      icon: "/offer/buss-warehouse-icon4.webp"
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 "
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl p-2 bg-gradient-to-br from-amber-500 to-amber-600 text-white text-xl shadow-md  transition">
                        <img src={item.icon} alt={item.title} className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE - Premium Styling */}
              <div className="relative group">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl group-hover:blur-3xl transition" />
                {/* <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-amber-100/40 rounded-full blur-2xl" /> */}

                <div className="relative rounded-md overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent z-10" />
                  <img
                    src="/CargoInsurance/001.jpg"
                    alt="Advanced warehouse automation system with robotics"
                    className="w-full h-[480px] object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>
              </div>
            </div>

            {/* ===== SECOND ROW ===== */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT IMAGE - Premium Styling */}
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-indigo-100/30 rounded-full blur-2xl" />

                <div className="relative rounded-md overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent z-10" />
                  <img
                    src="/CargoInsurance/002.jpg"
                    alt="Intelligent warehouse analytics dashboard with metrics"
                    className="w-full h-[480px] object-cover transition duration-700"
                  />

                </div>
              </div>

              {/* RIGHT CONTENT - Premium Typography & CTA */}
              <div className="order-1 lg:order-2">


                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-5">
                  Smart Insights &
                  <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">  Complete Control</span>
                </h3>

                <div className="space-y-4 text-gray-500 text-lg leading-relaxed">
                  <p>
                    Gain better control over shipment risks with structured insurance coverage and reliable support.
                  </p>
                  <p>
                    Our approach ensures protection through proper policy planning, risk assessment, and consistent claim assistance.
                  </p>
                </div>

                {/* Feature List */}
                <div className="grid grid-cols-2 gap-3 mt-8 mb-8">
                  {[
                    "Risk protection",
                    " Policy support",
                    "Claim assistance",
                    "Secure coverage"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/#"
                  scroll={true}
                  className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Explore Services</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>


          </div>
        </section>


      </div>
      <Footer />
    </>
  );
}

/* ================= CARD COMPONENT ================= */
function Card({ img, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group transition"
    >
      <div className="relative h-56 w-full">
        <Image src={img} alt={title} fill className="object-cover group-hover:scale-105 transition duration-500" />
      </div>

      <div className="p-6 border-t-4 border-red-500">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
}