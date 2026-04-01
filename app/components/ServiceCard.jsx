// components/ServiceCard.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ServiceCard = ({
  title,
  image,
  description,
  gradientFrom,
  gradientTo,
  imageOverlay,
  borderColor,
  hoverGlow,
}) => {
  return (
    <motion.div
      className={`group relative h-full rounded-xl border-b-8 bg-gradient-to-br ${gradientFrom} ${gradientTo} backdrop-blur-sm border ${borderColor} overflow-hidden cursor-pointer`}
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.02, transition: { duration: 0.3 } },
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoverGlow}`}
        style={{
          boxShadow: "0 0 40px rgba(0,0,0,0.1)",
        }}
      />

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{ pointerEvents: "none" }}
      />

      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${imageOverlay} group-hover:opacity-75 transition-opacity duration-300`} />
        
        {/* Title Overlay for Mobile/Tablet */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 md:hidden"
          initial={{ y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative p-6 md:p-8">
        {/* Title for Desktop */}
        <motion.h3
          className="text-xl font-bold text-slate-800 mb-3 hidden md:block group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          {description}
        </p>

        {/* Decorative line that expands on hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#1b3163] to-[#2a4a7a]"
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Optional: Learn more link that appears on hover */}
      <motion.div
        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: 10 }}
        whileHover={{ x: 0 }}
      >
        <span className="text-xs font-semibold text-[#1b3163] tracking-wider uppercase flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
          Learn More
          <svg
            className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;