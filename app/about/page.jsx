// "use client";

// import { motion } from "framer-motion";
// import { Award, Users, Sparkles, Building2, Globe, Truck } from "lucide-react";
// import Image from "next/image";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function AboutPage() {
//   return (
//     <>
//       <Navbar />

//       <main className="bg-white text-gray-700">

//         {/* HERO IMAGE (NO TEXT) */}
//         <section className="relative h-[60vh] w-full overflow-hidden">
//           <Image
//             src="/offer/Aboutus.jpg"
//             alt="Tribond Logistics"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//         </section>

//         {/* HEADING BELOW BANNER */}
//         <section className="py-16 text-center max-w-4xl mx-auto px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-4xl md:text-5xl font-bold text-gray-900"
//           >
//             About <span className="text-[#2167ad]">Tribond</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="mt-6 text-lg text-gray-600 leading-relaxed"
//           >
//             Tribond is a New Delhi-based logistics company established in 2018, specializing in international freight forwarding, customs clearance, warehousing, and domestic transportation. We deliver efficient, reliable, and well-coordinated logistics solutions designed to support modern business operations and supply chain requirements.

//           </motion.p>
//         </section>

//         {/* OUR PURPOSE SECTION */}
//         <section className="py-20 bg-[#0f1412]">
//           <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">

//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl font-bold text-white mb-6">
//                 Our Purpose
//               </h2>

//               <p className="text-white leading-relaxed mb-6">
//                 Our purpose is to simplify global and domestic logistics by delivering efficient, reliable, and well-coordinated supply chain solutions. We aim to support businesses by ensuring smooth movement of goods across international borders and within the country.

//               </p>

//               <p className="text-white leading-relaxed">
//                With a strong focus on consistency, service quality, and operational efficiency, Tribond is committed to becoming a dependable logistics partner for businesses across industries.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg"
//             >
//               <Image
//                 src="/offer/ourpurpose.jpg"
//                 alt="Our Purpose"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
//           </div>
//         </section>

//         {/* SERVICES HIGHLIGHT (REPLACES STORY FEEL) */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
//             <h2 className="text-4xl font-bold text-gray-900 mb-12">
//               What We <span className="text-[#2167ad]">Do</span>
//             </h2>

//             <div className="grid md:grid-cols-3 gap-10">

//               {[
//                 {
//                   icon: <Globe size={28} />,
//                   title: "Freight Forwarding",
//                   desc: "Efficient cargo movement across global routes with reliable and well-managed shipping solutions.",
//                 },
//                 {
//                   icon: <Building2 size={28} />,
//                   title: "Warehousing",
//                   desc: "Secure and organized storage solutions designed to support efficient inventory and distribution management.",
//                 },
//                 {
//                   icon: <Truck size={28} />,
//                   title: "Transportation",
//                   desc: "Reliable domestic transportation services ensuring timely and smooth delivery of goods.",
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 bg-white"
//                 >
//                   <div className="text-[#C8A165] mb-4 flex justify-center">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-gray-900 font-semibold mb-3">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     {item.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* VALUES SECTION */}
//         <section className="py-20 bg-[#0f1412]">
//           <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
//             <h2 className="text-3xl font-bold text-white mb-12">
//               Our Core Values
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

//               {[
//                 {
//                   icon: <Sparkles size={28} />,
//                   title: "Excellence",
//                   desc: "Delivering reliable logistics solutions with precision, consistency, and a strong focus on quality execution.",
//                 },
//                 {
//                   icon: <Users size={28} />,
//                   title: "Customer Focus",
//                   desc: "Building lasting relationships by understanding business needs and delivering dependable service every time.",
//                 },
//                 {
//                   icon: <Award size={28} />,
//                   title: "Integrity",
//                   desc: "Operating with transparency, accountability, and honesty in every aspect of our logistics operations.",
//                 },
//                 {
//                   icon: <Truck size={28} />,
//                   title: "Efficiency",
//                   desc: "Streamlining processes to ensure timely, cost-effective, and smooth movement of goods.",
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   className="bg-[#111614] p-8 rounded-2xl border border-gray-800 hover:border-[#C8A165] transition duration-300"
//                 >
//                   <div className="text-[#C8A165] mb-4 flex justify-center">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-white font-semibold mb-3">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-400">
//                     {item.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="py-24 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             Partner With Us For Seamless Logistics
//           </h2>

//           <p className="text-gray-600 mb-8">
//             Experience reliable, efficient, and well-coordinated logistics solutions tailored to support your business operations.
//           </p>

//           <button className="px-10 py-3 bg-[#C8A165] text-black font-medium rounded-full hover:bg-[#b8904f] transition duration-300">
//             Contact Us
//           </button>
//         </section>

//       </main>

//       <Footer />
//     </>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-700 overflow-hidden">

        {/* 🔥 HERO */}
        <section className="relative h-[80vh] w-full">
          <Image
            src="/offer/Aboutus.jpg"
            alt="Tribond Logistics"
            fill
            priority
            className="object-cover scale-110"
          />

          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 backdrop-blur-sm" /> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-6"
          >
            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
              Powering Global Logistics
            </h1>

            <p className="text-gray-300 mt-6 max-w-2xl text-lg md:text-xl">
              Delivering speed, precision, and reliability across international supply chains.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap justify-center">
              <button className="px-10 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 hover:scale-105 transition duration-300 shadow-lg">
                Get Started
              </button>
              <button className="px-10 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
                Contact Us
              </button>
            </div>
          </motion.div> */}
        </section>

        {/* 🔥 ABOUT INTRO */}
        <section className="py-24 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About <span className="text-[#143e69]">Tribond</span>
          </h2>

          <div className="w-20 h-1 bg-[#143e69] mx-auto mt-4 mb-6 rounded-full" />

          <p className="mt-4 text-lg text-justify text-gray-600 leading-relaxed">
            Established in 2018, Tribond Worldwide Logistics Pvt Ltd is a fast-growing, performance-driven freight forwarding company headquartered in Delhi, strategically positioned to serve global trade through India’s key logistics hub.
          </p>

          <p className="mt-4 text-lg text-justify text-gray-600">
            Under the dynamic leadership of Pradeesh P. Nair and Padmakumaran Nair, the company has built a reputation for speed, reliability, and execution excellence. With deep-rooted industry expertise and hands-on operational control, our leadership ensures that every shipment is handled with precision, accountability, and urgency.
          </p>
        </section>

        {/* 🔥 WHO WE ARE */}
        <section className="py-12 bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#143e69] mb-6">
                Who We Are
              </h2>

              <p className="text-white mb-4 text-lg">
               We are not just freight forwarders—we are logistics problem-solvers. 
              </p>

              <p className="text-white text-lg">
                At Tribond, we take complete ownership of your cargo, delivering seamless coordination from origin to destination. 
              </p>

              <p className="mt-6 font-semibold text-[#143e69] text-lg">
                Our approach is simple: commit, execute, deliver.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[420px] rounded-md overflow-hidden shadow-2xl"
            >
              <Image
                src="/offer/ourpurpose.jpg"
                alt="Who We Are"
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>

          </div>
        </section>

        {/* 🔥 SERVICES */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              What We<span className="text-[#143e69]"> Do</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              {[
                "Air Freight",
                "Sea Freight",
                "Customs Clearance & Documentation",
                "Door-to-Door & Multimodal Logistics",
                "Project Cargo & Time-Critical Shipments",
                "Warehousing & Distribution",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -12 }}
                  className="p-10 bg-white border-2 border-[#143e69] rounded-md shadow-lg hover:shadow-2xl transition duration-300 group"
                >
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-amber-600 transition">
                    {item}
                  </h3>
                  {/* <p className="text-gray-600 text-sm">
                    Reliable and efficient logistics solutions tailored for global trade.
                  </p> */}
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* 🔥 WHY CHOOSE US */}
        <section className="py-12 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Our Competitive Edge
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Rapid execution with minimum turnaround",
                "Strong global agent network across key trade lanes",
                "Competitive pricing backed by operational efficiency",
                "Real-time updates and proactive communication",
                "Expertise in handling urgent, high-value, and sensitive cargo",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-5 rounded-md border border-white/10"
                >
                  <CheckCircle className="text-amber-500" />
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔥 STATS */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

            {[
              { number: "25000+", label: "Shipments" },
              { number: "10000+", label: "Group partners" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="p-6 rounded-xl shadow-md border-2 border-[#143e69] bg-white"
              >
                <h3 className="text-4xl font-bold text-amber-600">
                  {item.number}
                </h3>
                <p className="text-gray-600 mt-2">{item.label}</p>
              </motion.div>
            ))}

          </div>
        </section>

        {/* 🔥 MISSION & VISION */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 bg-white rounded-2xl shadow-xl border"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#143e69]">Our Mission</h3>
              <p className="text-gray-600">
                To deliver high-performance logistics solutions that help our clients move faster, reduce costs, and gain a competitive edge in global markets.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 bg-white rounded-2xl shadow-xl border"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#143e69]">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as a trusted global logistics partner, known for speed, reliability, and consistent delivery of commitments.
              </p>
            </motion.div>

          </div>
        </section>

        {/* 🔥 CERTIFICATIONS & AFFILIATIONS */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900">
                Certifications & <span className="text-amber-600">Affiliations</span>
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Recognized for our compliance, credibility, and global logistics standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                "MSME Registered",
                "MTO Certified",
                "ISO Certified",
                "Federation of Freight Forwarders' Associations in India",
                "JCtrans Logistics Network",
              ].map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-xl transition duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 font-bold">
                      ✓
                    </div>
                    <p className="text-gray-700 font-medium group-hover:text-gray-900 transition">
                      {item}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* 🔥 WHY CHOOSE US */}
        <section className="py-12 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-amber-500">Tribond</span>
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              At Tribond Worldwide Logistics Pvt Ltd, we don’t just move shipments—we drive business continuity.
              Every consignment is treated as critical, ensuring on-time delivery, complete transparency,
              and zero compromise on service quality.
            </p>

            {/* Highlights */}
            <div className="mt-12 grid md:grid-cols-3 gap-8">

              {[
                "On-Time Delivery",
                "Complete Transparency",
                "High Service Quality",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-500 transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-amber-400 mb-2">
                    {item}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Delivering consistent performance with reliability and precision in every shipment.
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

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