// components/SupplyChainSolutions.jsx
"use client";

import { useRef, useEffect , useState} from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

const SupplyChainSolutions = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const [particles, setParticles] = useState([]);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  useEffect(() => {
  const generatedParticles = [...Array(20)].map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 5,
  }));

  setParticles(generatedParticles);
}, []);

  const contentVariants = {
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
    hidden: { opacity: 0, scale: 0.9, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const floatingElementsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/offer/supplychaintechnology.jpg" // Replace with your high-quality banner image
          alt="Supply Chain Technology"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
        
        {/* Multiple Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f2a] via-[#0a0f2a]/80 to-transparent" />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2a] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" /> */}
        
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b3163]/40 via-transparent to-[#2a4a7a]/40" />
        </motion.div>
      </motion.div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {particles.map((p, i) => (
  <motion.div
    key={i}
    className="absolute w-1 h-1 bg-white/20 rounded-full"
    initial={{
      x: p.x,
      y: p.y,
      opacity: 0,
    }}
    animate={{
      y: [p.y, p.y - 100, p.y - 200],
      opacity: [0, 0.5, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: p.duration,
      repeat: Infinity,
      delay: p.delay,
      ease: "linear",
    }}
    style={{
      left: `${p.left}%`,
      top: `${p.top}%`,
    }}
  />
))}
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl"
        >
          {/* Premium Badge */}
          {/* <motion.div
            variants={badgeVariants}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
            </span>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
              Industry Leading Solutions
            </span>
            <motion.div
              className="w-px h-4 bg-white/30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.3 }}
            />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-300">
              Since 1995
            </span>
          </motion.div> */}

          {/* Main Heading */}
          <motion.div variants={contentVariants} className="space-y-4 mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              <span className="text-white drop-shadow-2xl">
                Supply Chain Technology
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                & Customized Logistics Solutions
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div
            variants={contentVariants}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-amber-200/90 mb-4">
              Competitive Advantages To The Largest Companies
            </h2>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
              Supply chain technology and customized solutions offer competitive advantages to the
              largest companies. By optimizing operations, reducing costs, improving customer
              satisfaction, and enhancing brand reputation, companies can achieve sustainable growth
              and stay ahead of the curve in today's dynamic and competitive marketplace.
            </p>
          </motion.div>

          {/* CTA Button with Stats */}
          <motion.div
            variants={contentVariants}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4"
          >
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">DISCOVER MORE</span>
              <motion.svg
                className="w-5 h-5 relative"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.button>

            {/* Trust Badge */}
            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white/20 bg-gradient-to-br from-gray-400 to-gray-500"
                  />
                ))}
              </div>
              <div className="text-white/80 text-sm">
                <span className="font-bold text-white">500+</span> companies trust us
              </div>
            </motion.div> */}
          </motion.div>

          {/* Floating Stats Cards */}
          {/* <motion.div
            variants={floatingElementsVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8"
          >
            {[
              { 
                value: "99.9%", 
                label: "Service Reliability",
                icon: "✓",
                color: "from-green-400 to-emerald-500"
              },
              { 
                value: "50+", 
                label: "Global Partners",
                icon: "🌍",
                color: "from-blue-400 to-cyan-500"
              },
              { 
                value: "24/7", 
                label: "Support Available",
                icon: "⚡",
                color: "from-amber-400 to-orange-500"
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative backdrop-blur-md bg-white/10 rounded-2xl p-5 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                <div className="relative">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                  <div className="absolute top-0 right-0 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
                    {stat.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>

     
    </section>
  );
};

export default SupplyChainSolutions;