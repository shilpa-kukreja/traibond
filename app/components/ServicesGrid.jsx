// components/ServicesGrid.jsx
"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const ServicesGrid = ({ services, isVisible }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          variants={cardVariants}
          custom={index}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <ServiceCard {...service} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServicesGrid;