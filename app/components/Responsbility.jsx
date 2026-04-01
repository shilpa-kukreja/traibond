"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const industries = [
  {
    id: 1,
    title: "Automobile Industry",
    description:
      "Efficient logistics for vehicles and components with reliable movement across domestic and international markets.",
    icon: "🚗",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Engineering Goods",
    description:
      "Safe and structured transportation of industrial equipment with solutions designed for efficiency and compliance.",
    icon: "⚙️",
    color: "#10b981",
  },
  {
    id: 3,
    title: "Electronic Goods",
    description:
      "Secure handling and timely delivery of sensitive electronic products with careful logistics management.",
    icon: "📱",
    color: "#3b82f6",
  },
  {
    id: 4,
    title: "Tobacco Products",
    description:
      "Compliant and well-managed logistics solutions ensuring proper handling, storage, and transportation requirements.",
    icon: "🍃",
    color: "#f59e0b",
  },
  {
    id: 5,
    title: "Capital Goods",
    description:
      "Reliable movement of heavy machinery with planned logistics ensuring efficiency and cost-effective operations.",
    icon: "🏭",
    color: "#78716c",
  },
  {
    id: 6,
    title: "Retail / Fashion",
    description:
      "Timely delivery of goods across markets to support demand and ensure smooth supply chain flow.",
    icon: "👗",
    color: "#f43f5e",
  },
];

const PremiumCard = ({ item, index }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="relative group"
    >
      <div
        className="relative h-full rounded-3xl p-[1px]"
        style={{
          background: hover
            ? `linear-gradient(135deg, ${item.color}, transparent)`
            : "transparent",
        }}
      >
        <div className="relative h-full rounded-xl bg-white/80 backdrop-blur-xl border border-gray-200 p-6 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">

          {/* Spotlight Glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${item.color}20, transparent 60%)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">

            {/* Icon */}
            {/* <motion.div
              animate={{ scale: hover ? 1.2 : 1 }}
              className="text-4xl mb-4"
            >
              {item.icon}
            </motion.div> */}

            {/* Title */}
            <h3
              className="text-xl font-semibold mb-2 transition"
              style={{ color: hover ? item.color : "#111" }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed flex-1">
              {item.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6">
              <span
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{
                  background: `${item.color}15`,
                  color: item.color,
                }}
              >
                Global Freight
              </span>

              <motion.div
                animate={{ x: hover ? 6 : 0 }}
                className="text-sm text-gray-400"
              >
                →
              </motion.div>
            </div>
          </div>

          {/* Grain Texture (premium feel) */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('/noise.png')]" />
        </div>
      </div>
    </motion.div>
  );
};

export default function Responsibility() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HERO */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-[#233f70] rounded-full text-sm font-medium mb-4">
            ✦ Your Freight, Our Responsibility
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Simplifying{" "}
            <span className="text-[#233f70]">Global Freight</span>
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto mt-4">
            Delivering reliable logistics solutions with efficiency, coordination, and consistency across multiple industries.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, i) => (
            <PremiumCard key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </main>
  );
}