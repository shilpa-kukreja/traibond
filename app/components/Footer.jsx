// "use client";

// import { useState } from "react";
// import { toast } from "react-toastify";
// import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FiPlus, FiMinus } from "react-icons/fi";

// import axios from "axios";
// import Link from "next/link";
// import Image from "next/image";

// export default function Footer() {

//   const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   const [formData, setFormData] = useState({
//     email: ""
//   });

//   const [loading, setLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };


//    // Define consistent class names without line breaks
//   const getCallButtonClasses = () => 
//     "group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1b3163] shadow-[0_12px_30px_rgba(27,49,99,0.35)] transition-all duration-300 hover:scale-110";

//   const getWhatsAppButtonClasses = () => 
//     "group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110";

//   const getPingSpanClasses = () => 
//     "absolute inset-0 rounded-full animate-ping bg-opacity-30";

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/subscribe`,
//         formData
//       );

//       if (res.data.success) {
//         toast.success(res.data.message);
//         setStatusMessage("Subscribed ✔");
//         setFormData({ email: "" });
//       } else {
//         setStatusMessage("Already Subscribed ✔");
//         toast.info(res.data.message);
//       }

//       setLoading(false);

//     } catch (error) {
//       toast.error(error.response?.data?.message || "Subscription failed");
//       setLoading(false);
//     }
//   };

//   return (
//     <footer className="bg-[#0B1F3A] text-white">

//       {/* MAIN GRID */}
//       <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-[1fr_1fr_1fr_2fr] gap-10 items-start">

//         {/* LOGO */}
//         <div className="space-y-4">
//           <img src="/offer/logo2.jpg" alt="Logo" className="w-28" />
//           <p className="text-gray-300 text-sm leading-relaxed">
//             Tribond delivers reliable and efficient logistics solutions designed to simplify global and domestic supply chains. We help businesses move faster with structured, dependable, and well-coordinated operations.
//           </p>
//         </div>

//         {/* QUICK LINKS */}
//         <div>

//           <button
//             onClick={() => toggleSection("quick")}
//             className="flex items-center justify-between w-full md:flex md:flex-col md:items-start"
//           >
//             <h3 className="text-lg font-semibold mb-4">
//               Quick Links
//             </h3>

//             <span className="md:hidden">
//               {openSection === "quick" ? <FiMinus /> : <FiPlus />}
//             </span>
//           </button>

//           <ul
//             className={`space-y-2 text-gray-300 text-sm text-left
//             ${openSection === "quick" ? "block" : "hidden"} md:block`}
//           >
//             <li>
//               <Link href="/" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link href="/about" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
//                 About
//               </Link>
//             </li>

//             <li>
//               <Link href="/blogpage" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
//                 Blog
//               </Link>
//             </li>

//             <li>
//               <Link href="/contact" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
//                 Contact
//               </Link>
//             </li>
//           </ul>

//         </div>

//         {/* SERVICES */}
//         <div>

//           <button
//             onClick={() => toggleSection("services")}
//             className="flex items-center justify-between w-full md:flex md:flex-col md:items-start"
//           >
//             <h3 className="text-lg font-semibold mb-4">
//               Services
//             </h3>

//             <span className="md:hidden">
//               {openSection === "services" ? <FiMinus /> : <FiPlus />}
//             </span>
//           </button>

//           <ul
//             className={`space-y-2 text-gray-300 text-sm text-left
//             ${openSection === "services" ? "block" : "hidden"} md:block`}
//           >
//             <li>
//               <Link href="/services/ocean-freight" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
//                 Ocean Freight
//               </Link>
//             </li>
//              <li>
//               <Link href="/services/air-freight" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
//                 Air Freight
//               </Link>
//             </li> 
//             <li>
//               <Link href="/services/custom-clearing" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
//                 Custom Clearing
//               </Link>
//             </li> 
//             <li>
//               <Link href="/services/warehousing" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
//                 Warehousing
//               </Link>
//             </li>
//             <li>
//               <Link href="/services/project-cargo" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
//                 Project Cargo
//               </Link>
//             </li>


//             <li>
//               <Link href="/services/dangerous-cargo" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
//                 Dangerous Cargo 
//               </Link>
//             </li>

//             <li>
//               <Link href="/services/dangerous-cargo" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
//                 Cargo Insurance
//               </Link>
//             </li>


           
//           </ul>

//         </div>

//         {/* NEWSLETTER */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">
//             Subscribe Newsletter
//           </h3>

//           <p className="text-gray-300 text-sm mb-4">
//             Subscribe to our newsletter to get the latest updates and news.
//           </p>

//           <form
//             onSubmit={handleSubmit}
//             className="flex items-center bg-gray-200 rounded-lg p-2 shadow-md"
//           >

//             <input
//               type="email"
//               name="email"
//               value={statusMessage || formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="flex-1 bg-transparent outline-none px-1 py-2 text-gray-700"
//               disabled={statusMessage !== ""}
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#2167ad] hover:bg-[#2167ad] text-white px-1 py-2 rounded-lg transition"
//             >
//               {loading ? "Submitting..." : "Subscribe"}
//             </button>

//           </form>

//           {/* SOCIAL ICONS */}
//           <div className="flex gap-5 mt-4 text-2xl">

//             <span className="cursor-pointer text-[#1877F2] hover:scale-110 transition">
//               <FaFacebook />
//             </span>

//             <span className="cursor-pointer text-[#FF0000] hover:scale-110 transition">
//               <FaYoutube />
//             </span>

//             <span className="cursor-pointer text-[#E4405F] hover:scale-110 transition">
//               <FaInstagram />
//             </span>

//             <span className="cursor-pointer text-white hover:scale-110 transition">
//               <FaSquareXTwitter />
//             </span>

//           </div>

//         </div>

//       </div>

//       {/* COPYRIGHT */}
//       <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
//         © {new Date().getFullYear()} Tribond. All Rights Reserved.
//       </div>


//        {/* FLOATING ACTION BUTTONS */}
//       <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
//         {/* CALL BUTTON */}
//         <a
//           href="tel:+91 99999 98811"
//           aria-label="Call Us"
//           className={getCallButtonClasses()}
//         >
//           <span className={`${getPingSpanClasses()} bg-[#1b3163]`}></span>
//           <div className="relative w-5 h-5">
//             {/* Use inline SVG instead of external image */}
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
//               <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM5 6h1.5c.1 1.2.3 2.4.6 3.5L5.2 11.8c-.8-2-1.2-4.1-1.2-6.3 0-.3.2-.5.5-.5zm14 12c-2.2 0-4.3-.4-6.3-1.2l2.3-1.9c1.1.3 2.3.5 3.5.6V18c0 .3-.2.5-.5.5z"/>
//             </svg>
//           </div>
//         </a>

//         {/* WHATSAPP BUTTON */}
//         <a
//           href="https://wa.me/+91 99999 98811?text=Hello%20Insight%20Integrators,%20I%20would%20like%20to%20discuss%20compliance%20advisory."
//           aria-label="WhatsApp"
//           target="_blank"
//           rel="noopener noreferrer"
//           className={getWhatsAppButtonClasses()}
//         >
//           <span className={`${getPingSpanClasses()} bg-[#25d366]`}></span>
//           <div className="relative w-5 h-5">
//             {/* Use inline SVG instead of external image */}
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
//               <path d="M17.6 6.3C16 4.7 13.9 3.8 11.7 4c-4.4.4-7.9 4-7.9 8.5 0 1.8.5 3.6 1.5 5.2L4 20l2.5-.7c1.5.8 3.2 1.2 4.9 1.2h.1c4.7 0 8.5-3.8 8.5-8.5.1-2.1-.8-4.2-2.4-5.7zm-5.9 12.2c-1.4 0-2.8-.4-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3c-.8-1.2-1.2-2.6-1.2-4.1 0-4.1 3.4-7.5 7.5-7.5 2 0 3.9.8 5.3 2.2 1.4 1.4 2.2 3.3 2.2 5.3.1 4.1-3.3 7.5-7.5 7.5zm4.2-5.7c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.8-.7-1.3-1.5-1.5-1.9-.1-.4 0-.6.1-.8.1-.2.2-.3.3-.5.1-.1.2-.3.2-.4 0-.2-.1-.3-.2-.5-.1-.2-1-2.4-1.4-3.3-.4-.8-.8-.7-1.1-.7-.3 0-.6 0-.9.1-.3.1-.5.3-.7.5-.2.2-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.9.6.8.2 1.6.2 2.2.1.7-.1 1.4-.5 1.6-1 .2-.5.2-1 .1-1.4-.1-.4-.4-.6-.8-.8z"/>
//             </svg>
//           </div>
//         </a>
//       </div>
//     </footer>
//   );
// }


"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

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

  // Define consistent class names without line breaks
  const getCallButtonClasses = () => 
    "group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1b3163] shadow-[0_12px_30px_rgba(27,49,99,0.35)] transition-all duration-300 hover:scale-110";

  const getWhatsAppButtonClasses = () => 
    "group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110";

  const getPingSpanClasses = () => 
    "absolute inset-0 rounded-full animate-ping bg-opacity-30";

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
    <footer className="relative text-white overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        {/* Mobile Video */}
        <source
          src="/offer/Shipanimationfinal1.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
        />

        {/* Desktop Video */}
        <source
          src="/offer/Shipanimationfinal1.mp4"
          type="video/mp4"
          media="(min-width: 769px)"
        />
      </video>

      {/* OVERLAY */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div> */}

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-[1fr_1fr_1fr_2fr] gap-10 items-start">

          {/* LOGO */}
          <div className="space-y-4">
            <img src="/offer/logopngwhite.png" alt="Logo" className="w-32 h-auto object-contain" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Tribond delivers reliable and efficient logistics solutions designed to simplify global and domestic supply chains. We help businesses move faster with structured, dependable, and well-coordinated operations.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <button
              onClick={() => toggleSection("quick")}
              className="flex items-center justify-between w-full md:flex md:flex-col md:items-start"
            >
              <h3 className="text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <span className="md:hidden">
                {openSection === "quick" ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            <ul
              className={`space-y-2 text-gray-300 text-sm text-left
              ${openSection === "quick" ? "block" : "hidden"} md:block`}
            >
              <li>
                <Link href="/" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogpage" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <button
              onClick={() => toggleSection("services")}
              className="flex items-center justify-between w-full md:flex md:flex-col md:items-start"
            >
              <h3 className="text-lg font-semibold mb-4">
                Services
              </h3>
              <span className="md:hidden">
                {openSection === "services" ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            <ul
              className={`space-y-2 text-gray-300 text-sm text-left
              ${openSection === "services" ? "block" : "hidden"} md:block`}
            >
              <li>
                <Link href="/services/ocean-freight" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
                  Ocean Freight
                </Link>
              </li>
              <li>
                <Link href="/services/air-freight" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
                  Air Freight
                </Link>
              </li> 
              <li>
                <Link href="/services/custom-clearing" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
                  Custom Clearing
                </Link>
              </li> 
              <li>
                <Link href="/services/warehousing" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link href="/services/project-cargo" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
                  Project Cargo
                </Link>
              </li>
              <li>
                <Link href="/services/dangerous-cargo" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
                  Dangerous Cargo 
                </Link>
              </li>
              <li>
                <Link href="/services/cargo-insurance" className="inline-block hover:text-[#2167ad] hover:scale-105 transition-all duration-200">
                  Cargo Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe Newsletter
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter to get the latest updates and news.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-gray-200 rounded-lg p-2 shadow-md"
            >
              <input
                type="email"
                name="email"
                value={statusMessage || formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="flex-1 bg-transparent outline-none px-1 py-2 text-gray-700"
                disabled={statusMessage !== ""}
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#2167ad] hover:bg-[#2167ad] text-white px-1 py-2 rounded-lg transition"
              >
                {loading ? "Submitting..." : "Subscribe"}
              </button>
            </form>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 mt-4 text-2xl">
              <span className="cursor-pointer text-[#1877F2] hover:scale-110 transition">
                <FaFacebook />
              </span>
              <span className="cursor-pointer text-[#FF0000] hover:scale-110 transition">
                <FaYoutube />
              </span>
              <span className="cursor-pointer text-[#E4405F] hover:scale-110 transition">
                <FaInstagram />
              </span>
              <span className="cursor-pointer text-white hover:scale-110 transition">
                <FaSquareXTwitter />
              </span>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
      <div className=" border-gray-700 py-6 text-center text-white text-sm">
          © {new Date().getFullYear()} Tribond. All Rights Reserved.
        </div>

        {/* FLOATING ACTION BUTTONS */}
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
          {/* CALL BUTTON */}
          <a
            href="tel:+91 8799705756"
            aria-label="Call Us"
            className={getCallButtonClasses()}
          >
            <span className={`${getPingSpanClasses()} bg-[#1b3163]`}></span>
            <div className="relative w-5 h-5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM5 6h1.5c.1 1.2.3 2.4.6 3.5L5.2 11.8c-.8-2-1.2-4.1-1.2-6.3 0-.3.2-.5.5-.5zm14 12c-2.2 0-4.3-.4-6.3-1.2l2.3-1.9c1.1.3 2.3.5 3.5.6V18c0 .3-.2.5-.5.5z"/>
              </svg>
            </div>
          </a>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/+918799705756?text=Hello%20Tribond,%20I%20am%20interested%20in%20your%20services,%20please%20contact%20me."
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className={getWhatsAppButtonClasses()}
          >
            <span className={`${getPingSpanClasses()} bg-[#25d366]`}></span>
            <div className="relative w-5 h-5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                <path d="M17.6 6.3C16 4.7 13.9 3.8 11.7 4c-4.4.4-7.9 4-7.9 8.5 0 1.8.5 3.6 1.5 5.2L4 20l2.5-.7c1.5.8 3.2 1.2 4.9 1.2h.1c4.7 0 8.5-3.8 8.5-8.5.1-2.1-.8-4.2-2.4-5.7zm-5.9 12.2c-1.4 0-2.8-.4-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3c-.8-1.2-1.2-2.6-1.2-4.1 0-4.1 3.4-7.5 7.5-7.5 2 0 3.9.8 5.3 2.2 1.4 1.4 2.2 3.3 2.2 5.3.1 4.1-3.3 7.5-7.5 7.5zm4.2-5.7c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.8-.7-1.3-1.5-1.5-1.9-.1-.4 0-.6.1-.8.1-.2.2-.3.3-.5.1-.1.2-.3.2-.4 0-.2-.1-.3-.2-.5-.1-.2-1-2.4-1.4-3.3-.4-.8-.8-.7-1.1-.7-.3 0-.6 0-.9.1-.3.1-.5.3-.7.5-.2.2-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.9.6.8.2 1.6.2 2.2.1.7-.1 1.4-.5 1.6-1 .2-.5.2-1 .1-1.4-.1-.4-.4-.6-.8-.8z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}