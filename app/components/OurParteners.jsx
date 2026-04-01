"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const partners = [
  { id: 1, logo: "/offer/2.png" },
  { id: 2, logo: "/offer/4.png" },
  { id: 3, logo: "/offer/5.png" },
  { id: 4, logo: "/offer/8.png" },
  { id: 5, logo: "/offer/2.png" },
  { id: 6, logo: "/offer/4.png" },
];

export default function OurPartners() {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    if (!swiperRef.current || swiperInstance.current) return;

    swiperInstance.current = new Swiper(swiperRef.current, {
      modules: [Autoplay],
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      speed: 4000, // smoother slow motion

      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },

      breakpoints: {
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 6 },
        1280: { slidesPerView: 6},
      },
    });

    return () => {
      swiperInstance.current?.destroy(true, true);
      swiperInstance.current = null;
    };
  }, []);

  return (
    <section className="relative py-12 bg-gray-200 overflow-hidden">

      {/* Glow background */}
      {/* <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[200px] bg-blue-100 blur-3xl opacity-30 rounded-full" />
      </div> */}

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-3">
          Trusted by <span className="text-[#2167ad]">Industry Leaders</span>
        </h2>

        <p className="text-slate-500 text-sm md:text-base mb-12">
          Supporting businesses with reliable logistics solutions across global and regional markets.
        </p>

        {/* Slider */}
        <div ref={swiperRef} className="swiper">
          <div className="swiper-wrapper">

            {partners.map((p) => (
              <div
                key={p.id}
                className="swiper-slide flex items-center justify-center"
              >
                <div
                  className="group relative w-36 h-20 md:w-40 md:h-24 
                  flex items-center justify-center
                  bg-white/70 backdrop-blur-md
                  border border-slate-200
                  rounded-xl
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300 ease-in-out"
                >
                  <div className="relative w-24 h-12 md:w-28 md:h-20 
                    grayscale opacity-70 
                    group-hover:grayscale-0 group-hover:opacity-100 
                    transition duration-300">

                    <Image
                      src={p.logo}
                      alt="partner logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}