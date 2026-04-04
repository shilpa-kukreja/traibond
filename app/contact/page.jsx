"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import axios from 'axios';
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState("true");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/create`, formData);
      if (!res) {
        setStatus("Message sent successfully!");
      }

      toast.success("Message send successfully");
      setLoading(false);

      setFormData({
        name: "",
        email: "",
        message: ""
      })

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">

        {/* Banner */}
        <div className="relative w-full sm:mt-18 mt-16">
          <img
            src="/offer/contactus.jpg"
            alt="Contact"

            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-bold text-black">
              Connect With <span className="text-[#2167ad]">Us</span>
            </h1>

            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
              We’re always happy to hear from you. Whether you have questions
              about our products or need support, feel free to contact us.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">

            <div className="bg-white p-8 rounded-xl shadow text-center">

              <Mail className="w-10 h-10 text-[#2167ad] mx-auto mb-3" />

              <h3 className="text-xl font-semibold mb-2">Email</h3>

              <p className="text-gray-600">

                info@tribond.in
              </p>

            </div>

            <div className="bg-white p-8 rounded-xl shadow text-center">
              <Phone className="w-10 h-10 text-[#2167ad] mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">
                (+1) +91 8799705756
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow text-center">
              <MapPin className="w-10 h-10 text-[#2167ad] mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                Unit no 996, 9th floor, Plot no-6, Block B, Vegas Mall, Sector-14, Dwarka, New Delhi -110078
              </p>
            </div>

          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-xl shadow">

              <h2 className="text-3xl font-bold mb-6">
                Get in Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border p-3 rounded-lg"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full border p-3 rounded-lg"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full border p-3 rounded-lg"
                />

                <button
                  type="submit"
                  className="w-full bg-[#2167ad] text-white py-3 rounded-lg hover:opacity-90"
                >
                  Send Message
                </button>



              </form>

            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9674900434115!2d77.0269970750072!3d28.600752085523997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dd61eb460af%3A0xe89377d97456bc5e!2sVegas%20Mall!5e0!3m2!1sen!2sin!4v1775297138586!5m2!1sen!2sin"
                className="w-full h-[550px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>

  );
}