"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

const SupplyChainSolutions = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[500px] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/offer/connectivity.jpg"
          alt="Supply Chain"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#1e3a8a]/70 to-transparent" />

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(251,191,36,0.2),transparent_40%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center">
        <div />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="max-w-2xl"
        >
        

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 text-white">
            Unlocking Reliable Possibilities with
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Our Logistics Connectivity
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg font-medium md:text-xl text-blue-100 mb-3 font-medium">
            Building efficient, structured, and dependable supply chains.
          </p>

          {/* Description */}
          <p className="text-white font-medium text-base md:text-lg leading-relaxed mb-4">
             Our logistics services connect your business to seamless operations through consistent and well-managed movement of goods.
          </p>

          {/* CTA Section */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>

              {/* Shine */}
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
            </motion.button>

       
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default SupplyChainSolutions;