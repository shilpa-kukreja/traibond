// components/LogisticsServices.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import ServiceCard from "./ServiceCard";
import ServicesGrid from "./ServicesGrid";

const LogisticsServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
      controls.start("visible");
    }
  }, [isInView, controls]);

  const services = [
    {
      id: 1,
      title: "Ocean Freight",
      image: "/offer/oceanfrieght.jpg", // Replace with your actual image path
      description:
        "End-to-end ocean freight solutions supported by a strong global network. Reliable movement of cargo with efficient planning and cost-effective shipping options tailored to your business needs.",
      gradientFrom: "from-blue-50/80",
      gradientTo: "to-cyan-50/80",
      imageOverlay: "from-blue-900/20 to-cyan-900/20",
      borderColor: "border-blue-200/50",
      hoverGlow: "shadow-blue-500/20",
    },
    {
      id: 2,
      title: "Air Freight",
      image: "/offer/airfrieght.jpg", // Replace with your actual image path
      description:
        "Time-sensitive air freight services designed for speed and reliability. Ensuring prompt delivery with efficient coordination for urgent and high-priority shipments across destinations.",
      gradientFrom: "from-sky-50/80",
      gradientTo: "to-indigo-50/80",
      imageOverlay: "from-sky-900/20 to-indigo-900/20",
      borderColor: "border-sky-200/50",
      hoverGlow: "shadow-sky-500/20",
    },
    {
      id: 3,
      title: "Project Cargo",
      image: "/offer/projectcargo.jpg", // Replace with your actual image path
      description:
        "Specialized logistics solutions for complex and heavy cargo movements. Careful planning, route management, and expert handling for oversized and critical shipments.",
      gradientFrom: "from-amber-50/80",
      gradientTo: "to-orange-50/80",
      imageOverlay: "from-amber-900/20 to-orange-900/20",
      borderColor: "border-amber-200/50",
      hoverGlow: "shadow-amber-500/20",
    },
    {
      id: 4,
      title: "Customs Clearing",
      image: "/offer/customerclearing.jpg", // Replace with your actual image path
      description:
        "Efficient customs clearance with proper documentation and compliance support. Smooth handling of import and export processes to avoid delays and ensure seamless operations.",
      gradientFrom: "from-emerald-50/80",
      gradientTo: "to-teal-50/80",
      imageOverlay: "from-emerald-900/20 to-teal-900/20",
      borderColor: "border-emerald-200/50",
      hoverGlow: "shadow-emerald-500/20",
    },
    {
      id: 5,
      title: "Warehousing",
      image: "/offer/warehousing.jpg", // Replace with your actual image path
      description:
        "Secure and flexible warehousing solutions for storage and distribution. Efficient inventory handling designed to support smooth and organized supply chain operations.",
      gradientFrom: "from-purple-50/80",
      gradientTo: "to-fuchsia-50/80",
      imageOverlay: "from-purple-900/20 to-fuchsia-900/20",
      borderColor: "border-purple-200/50",
      hoverGlow: "shadow-purple-500/20",
    },
    {
      id: 6,
      title: "Dangerous Goods",
      image: "/offer/dangerousgoods.jpg", // Replace with your actual image path
      description:
        "Safe and compliant handling of hazardous cargo with strict safety measures. Reliable transportation ensuring proper care and adherence to all required regulations.",
      gradientFrom: "from-red-50/80",
      gradientTo: "to-rose-50/80",
      imageOverlay: "from-red-900/20 to-rose-900/20",
      borderColor: "border-red-200/50",
      hoverGlow: "shadow-red-500/20",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const decorativeLineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "6rem",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Floating animation for background orbs
  const floatingOrbVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-200"
    >
      {/* Premium Background Elements with Framer Motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatingOrbVariants}
          animate="animate"
          className="absolute -top-40 -right-40 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingOrbVariants}
          animate="animate"
          transition={{ delay: 2, duration: 10 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto"
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/5 rounded-full blur-3xl" />
        </motion.div>

        {/* Subtle diagonal lines pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diagonal-lines"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
            >
              <path
                d="M0 40 L40 0"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      {/* Subtle Grid Pattern with fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.015 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #b87333 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section - Premium & Elegant with Framer Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-8 md:mb-12"
        >
          {/* Decorative Badge with shimmer and hover effect */}
          <motion.div
            variants={badgeVariants}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-100/90 to-orange-100/90 backdrop-blur-sm border border-amber-200/60 shadow-sm mb-8 relative overflow-hidden cursor-default"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative flex h-2 w-2">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inline-flex h-full w-full rounded-full bg-[#1b3163] opacity-75"
              />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
              Global Logistics Excellence
            </span>
          </motion.div>

          {/* Main Heading with refined typography */}
          <motion.h1 variants={headerVariants} className="mb-6">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Enhanced Logistics
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#1b3163] to-[#2a4a7a] bg-clip-text text-transparent">
                to boost your business
              </span>
            </span>
          </motion.h1>

          {/* Subheading with better readability */}
          <motion.p
            variants={headerVariants}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-6 leading-relaxed font-light"
          >
            Customized logistics solutions to empower businesses for efficient
            operations
          </motion.p>

          {/* Decorative Line with gradient */}
          <motion.div
            variants={decorativeLineVariants}
            initial="hidden"
            animate={controls}
            className="flex justify-center mt-10"
          >
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#1b3163] to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        {/* Services Grid with enhanced animation */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <ServicesGrid services={services} isVisible={isVisible} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LogisticsServices;