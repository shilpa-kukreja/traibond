"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";


export default function NewsletterSection() {

  const [formData, setFormData] = useState({
    email: ""
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/subscribe`,
        formData
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setStatusMessage("Subscribed ✔");
        setFormData({ email: "" });
      } else {
        setStatusMessage("Already Subscribed ✔");
        toast.info(res.data.message);
      }

      setLoading(false);

    } catch (error) {
      toast.error(error.response?.data?.message || "Subscription failed");
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 px-10">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/offer/subsciber.jpeg"
          alt="newsletter background"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 "></div>
      </div>


      <div className="max-w-4xl mx-auto text-center">

        {/* Animated Heading */}
        <motion.div
            className="text-center mb-12"
            initial={{opacity:0, y:80}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease:"easeOut"}}
            viewport={{once:false}}>
      
                
                   <h1 className="text-5xl font-light">
                        Subscribe Our <span className="font-medium text-[#1b3163]">Newsletter</span>
                   </h1>
                   
                
            </motion.div>


        {/* Description */}
        <p className="text-gray-200 mb-8 text-sm md:text-sm max-w-xl font-medium mx-auto text-white/90">
          Subscribe to our newsletter to receive the latest updates, insights, and news directly in your inbox.
        </p>


        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl max-w-xl mx-auto border border-gray-200"
        >

          <input
            type="email"
            name="email"
            value={statusMessage || formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="flex-1 w-full bg-transparent outline-none px-4 py-3 text-gray-700 border border-gray-300 rounded-lg"
            disabled={statusMessage !== ""}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#e07409] hover:bg-[#d16907] text-white px-6 py-3 rounded-lg transition w-full sm:w-auto"
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>

        </form>

      </div>
    </section>
  );
}