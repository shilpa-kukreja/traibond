"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"


const serviceCategories = [
  { name: "Ocean Freight", slug: "ocean-freight" },
  { name: "Air Freight", slug: "air-freight" },
  { name: "Custom Clearing", slug: "custom-clearing" },
  { name: "Warehousing", slug: "warehousing" },
  { name: "Project Cargo", slug: "project-cargo" },
  { name: "Dangerous Cargo", slug: "dangerous-cargo" },
  { name: "Cargo Insurance", slug: "cargo-insurance" },
]

const technologyCategories = [
  { name: "Clinical Trial Management Software", slug: "clinical-trial-management-software" },
  { name: "Electronic Data Transfer", slug: "electronic-data-transfer" },

]

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [technologiesOpen, setTechnologiesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#0a0736] shadow-lg bg-blur">
      <div className="px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/offer/logopngwhite.png"
            alt="logo"
            className="w-32 h-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav
          className="hidden lg:flex items-center gap-8
          bg-white/20 backdrop-blur-xl
          border border-white/20
          px-8 py-3 rounded-full
          text-white text-sm shadow-lg font-semibold"
        >

          <Link href="/" className="hover:text-orange-400 transition">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">

            <span className="flex items-center gap-1 cursor-pointer hover:text-orange-400 transition">
              Services
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            <div
              className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-60
              bg-white text-gray-700 rounded-xl shadow-2xl
              opacity-0 invisible scale-95
              group-hover:opacity-100 group-hover:visible group-hover:scale-100
              transition-all duration-300 overflow-hidden"
            >
              {serviceCategories.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block px-6 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  {service.name}
                </Link>
              ))}
            </div>

          </div>

        

          <Link href="/about">About</Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/contact">Contact</Link>

        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* Login Button */}
          <button
            className="hidden lg:block relative overflow-hidden px-5 py-2 rounded-full
            text-white text-sm font-semibold
            border border-white/30
            bg-gradient-to-r from-orange-500 to-amber-500
            hover:from-orange-600 hover:to-amber-600
            shadow-lg transition"
          >
          <Link href="/get-a-quote">Get a Quote</Link>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
{/* OVERLAY */}
{menuOpen && (
  <div
    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
    onClick={() => setMenuOpen(false)}
  />
)}

{/* MOBILE SLIDER MENU */}
<div
  className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] 
  bg-[#0a0736] z-50 transform transition-transform duration-300 
  lg:hidden
  ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
>

  <div className="p-6 space-y-4 text-white">

    {/* Close Button */}
    <div className="flex justify-end">
      <button onClick={() => setMenuOpen(false)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <Link href="/" className="block border-b border-white/10 pb-3">
      Home
    </Link>

    {/* Services */}
    <div className="border-b border-white/10 pb-3">
      <button
        onClick={() => setServicesOpen(!servicesOpen)}
        className="flex justify-between items-center w-full"
      >
        <span>Services</span>

        <svg
          className={`w-4 h-4 transition-transform ${
            servicesOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      {servicesOpen && (
        <div className="mt-3 pl-4 space-y-2 text-gray-300">
          {serviceCategories.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="block text-sm hover:text-white"
            >
              {service.name}
            </Link>
          ))}
        </div>
      )}
    </div>

  
    <Link href="/about" className="block border-b border-white/10 pb-3">
      About
    </Link>

    <Link href="/blogs" className="block border-b border-white/10 pb-3">
      Blog
    </Link>

    <Link href="/contact" className="block border-b border-white/10 pb-3">
      Contact
    </Link>

    <button
      className="w-full mt-4 px-5 py-3 rounded-full
      text-white text-sm font-semibold
      bg-gradient-to-r from-orange-500 to-amber-500"
    >
     <Link href="/get-a-quote">Get a Quote</Link>
    </button>

  </div>
</div>
    </header>
  )
}