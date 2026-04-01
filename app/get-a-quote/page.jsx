"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Package,
  MapPin,
  User,
  Loader2,
  ArrowRight
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    service: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    pickup: "",
    delivery: "",
    date: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    specialInstructions: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/quote`,
        formData
      );

      toast.success("Quote submitted successfully!");

      setFormData({
        service: "",
        weight: "",
        length: "",
        width: "",
        height: "",
        pickup: "",
        delivery: "",
        date: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        specialInstructions: ""
      });
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
  
    <div className="bg-gray-100 min-h-screen">

      {/* ================= HERO ================= */}
      <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
        <img
          src="/offer/shippingquote.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-white/60"></div> */}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Get Instant <span className="text-[#2167ad]">Shipping Quote</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl">
          Fast, reliable & cost-effective logistics solutions for your business worldwide
        </p>
      </div>

      {/* ================= FORM ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <form onSubmit={handleSubmit} className="space-y-10">

          {/* ================= PERSONAL INFO ================= */}
          <section className="card">
            <div className="flex items-center gap-3 mb-6">
              {/* <User className="text-orange-500" /> */}
              <h2 className="text-2xl font-semibold text-slate-800">
                Personal Information
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="field">
                <label>Full Name *</label>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
              </div>

              <div className="field">
                <label>Email Address *</label>
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
              </div>

              <div className="field">
                <label>Phone *</label>
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
              </div>

              <div className="field">
                <label>Company (Optional)</label>
                <input name="company" value={formData.company} onChange={handleChange} placeholder="Company name" />
              </div>

            </div>
          </section>

          {/* ================= SHIPMENT ================= */}
          <section className="card">
            <div className="flex items-center gap-3 mb-6">
              {/* <Package className="text-orange-500" /> */}
              <h2 className="text-2xl font-semibold text-slate-800">
                Shipment Details
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="field">
                <label>Service Type</label>
                <input name="service" value={formData.service} onChange={handleChange} placeholder="Air, Ocean..." />
              </div>

              <div className="field">
                <label>Weight (kg)</label>
                <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
              </div>

              <div className="field">
                <label>Length (cm)</label>
                <input type="number" name="length" value={formData.length} onChange={handleChange} />
              </div>

              <div className="field">
                <label>Width (cm)</label>
                <input type="number" name="width" value={formData.width} onChange={handleChange} />
              </div>

              <div className="field">
                <label>Height (cm)</label>
                <input type="number" name="height" value={formData.height} onChange={handleChange} />
              </div>

            </div>
          </section>

          {/* ================= ROUTE ================= */}
          <section className="card">
            <div className="flex items-center gap-3 mb-6">
              {/* <MapPin className="text-orange-500" /> */}
              <h2 className="text-2xl font-semibold text-slate-800">
                Route Information
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="field">
                <label>Pickup Location</label>
                <input name="pickup" value={formData.pickup} onChange={handleChange} />
              </div>

              <div className="field">
                <label>Delivery Location</label>
                <input name="delivery" value={formData.delivery} onChange={handleChange} />
              </div>

              <div className="field">
                <label>Shipping Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
              </div>

              <div className="field md:col-span-2">
                <label>Special Instructions</label>
                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  placeholder="Any additional details..."
                  className="h-28"
                />
              </div>

            </div>
          </section>

          {/* ================= SUBMIT ================= */}
          <div className="text-start">
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-4 bg-[#2167ad] hover:bg-[#2167ad] text-white rounded-xl text-lg font-semibold transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit <ArrowRight />
                </>
              )}
            </button>
          </div>

        </form>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .card {
          background: #dedee3;
          border-radius: 5px;
          padding: 32px;
          border: 1px solid #f1f5f9;
          
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field label {
          font-size: 14px;
          font-weight: 500;
          color: #6b7280;
        }

        .field input,
        .field textarea {
          width: 100%;
          padding: 14px 16px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          font-size: 15px;
          transition: all 0.25s ease;
        }

        .field input::placeholder,
        .field textarea::placeholder {
          color: #9ca3af;
        }

        .field input:focus,
        .field textarea:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.12);
          outline: none;
        }
      `}</style>
    </div>
    <Footer />
      </>
  );
}