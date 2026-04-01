"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ChooseUs = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const features = [
    {
      id: 1,
      title: "Expert Logistics Approach",
      description:
        "We bring practical freight forwarding expertise, delivering tailored logistics solutions designed to support your business operations and long-term growth.",
      icon: "/offer/expertise.jpg",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      id: 2,
      title: "Reliable & Consistent Delivery",
      description:
        "Consistency and reliability define our approach. We ensure timely, secure, and smooth delivery of shipments across every stage of the logistics process.",
      icon: "/offer/reliable.jpg",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: 3,
      title: "Customer First",
      description:
        "Our team is always ready to support you, ensuring a smooth, responsive, and hassle-free logistics experience at every step.",
      icon: "/offer/customer_.jpg",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Innovation",
      description:
        "We apply modern practices and structured logistics systems to improve efficiency, streamline operations, and enhance overall performance.",
      icon: "/offer/innovation.jpg",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 px-6 bg-gray-200 overflow-hidden"
    >
      {/* Background Glow */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-400/10 blur-3xl rounded-full" />
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="text-center mb-8"
        >
          <motion.div
            variants={item}
            className="inline-block px-4 py-1.5 mb-3 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full"
          >
            Why Choose Us
          </motion.div>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Experience Logistics
            <span className="block bg-gradient-to-r from-[#1b3163] to-[#2a4a7a] bg-clip-text text-transparent">
              Like Never Before
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-3 max-w-2xl mx-auto text-gray-600 text-lg"
          >
            We combine experience, innovation, and customer obsession to deliver
            world-class logistics solutions that drive your business forward.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-10"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={item}
             
              className="group relative rounded-md p-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent hover:via-blue-300 transition-all duration-500"
            >
              {/* Card */}
              <div className="relative h-full rounded-xl bg-white/70 backdrop-blur-xl border border-gray-200 p-8 shadow-md hover:shadow-xl transition-all duration-500">
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />

                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center text-2xl rounded-xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg mb-6`}
                >
                 <img src={feature.icon} alt={feature.title} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1b3163] transition">
                  {feature.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Line Animation */}
                {/* <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500" /> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseUs;