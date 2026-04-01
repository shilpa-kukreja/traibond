"use client";

import { motion } from "framer-motion";
import { Award, Users, Sparkles, Building2, Globe, Truck } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-700">

        {/* HERO IMAGE (NO TEXT) */}
        <section className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src="/offer/Aboutus.jpg"
            alt="Tribond Logistics"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </section>

        {/* HEADING BELOW BANNER */}
        <section className="py-16 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            About <span className="text-[#2167ad]">Tribond</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            Tribond is a New Delhi-based logistics company established in 2018, specializing in international freight forwarding, customs clearance, warehousing, and domestic transportation. We deliver efficient, reliable, and well-coordinated logistics solutions designed to support modern business operations and supply chain requirements.

          </motion.p>
        </section>

        {/* OUR PURPOSE SECTION */}
        <section className="py-20 bg-[#0f1412]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Purpose
              </h2>

              <p className="text-white leading-relaxed mb-6">
                Our purpose is to simplify global and domestic logistics by delivering efficient, reliable, and well-coordinated supply chain solutions. We aim to support businesses by ensuring smooth movement of goods across international borders and within the country.

              </p>

              <p className="text-white leading-relaxed">
               With a strong focus on consistency, service quality, and operational efficiency, Tribond is committed to becoming a dependable logistics partner for businesses across industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/offer/ourpurpose.jpg"
                alt="Our Purpose"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* SERVICES HIGHLIGHT (REPLACES STORY FEEL) */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              What We <span className="text-[#2167ad]">Do</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              {[
                {
                  icon: <Globe size={28} />,
                  title: "Freight Forwarding",
                  desc: "Efficient cargo movement across global routes with reliable and well-managed shipping solutions.",
                },
                {
                  icon: <Building2 size={28} />,
                  title: "Warehousing",
                  desc: "Secure and organized storage solutions designed to support efficient inventory and distribution management.",
                },
                {
                  icon: <Truck size={28} />,
                  title: "Transportation",
                  desc: "Reliable domestic transportation services ensuring timely and smooth delivery of goods.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 bg-white"
                >
                  <div className="text-[#C8A165] mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="py-20 bg-[#0f1412]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-12">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

              {[
                {
                  icon: <Sparkles size={28} />,
                  title: "Excellence",
                  desc: "Delivering reliable logistics solutions with precision, consistency, and a strong focus on quality execution.",
                },
                {
                  icon: <Users size={28} />,
                  title: "Customer Focus",
                  desc: "Building lasting relationships by understanding business needs and delivering dependable service every time.",
                },
                {
                  icon: <Award size={28} />,
                  title: "Integrity",
                  desc: "Operating with transparency, accountability, and honesty in every aspect of our logistics operations.",
                },
                {
                  icon: <Truck size={28} />,
                  title: "Efficiency",
                  desc: "Streamlining processes to ensure timely, cost-effective, and smooth movement of goods.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#111614] p-8 rounded-2xl border border-gray-800 hover:border-[#C8A165] transition duration-300"
                >
                  <div className="text-[#C8A165] mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Partner With Us For Seamless Logistics
          </h2>

          <p className="text-gray-600 mb-8">
            Experience reliable, efficient, and well-coordinated logistics solutions tailored to support your business operations.
          </p>

          <button className="px-10 py-3 bg-[#C8A165] text-black font-medium rounded-full hover:bg-[#b8904f] transition duration-300">
            Contact Us
          </button>
        </section>

      </main>

      <Footer />
    </>
  );
}