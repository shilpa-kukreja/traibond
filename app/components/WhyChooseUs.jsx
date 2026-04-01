"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref); // removed once:true
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;

    if (isInView) {
      let start = 0;
      const duration = 1500;
      const increment = end / (duration / 16);

      timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setCount(Math.floor(start));
      }, 16);
    } else {
      // reset when leaving viewport
      setCount(0);
    }

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0059B2]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/ourexcellence/ourexcellence.jpg"
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto  px-6 sm:px-0 grid lg:grid-cols-3 gap-12 items-start">

        {/* LEFT TITLE */}
         <motion.div
            className="text-center mb-12"
            initial={{opacity:0, y:80}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease:"easeOut"}}
            viewport={{once:false}}>
      
                
                   <h1 className="text-5xl font-light sm:mt-20 mt-0  text-white"> 
                       Our Strength  <span className="font-medium text-[#e9eaec]">in Numbers</span>
                   </h1>
                   
                
            </motion.div>

        {/* RIGHT STATS */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-10">

          <div>
            <p className="text-sm tracking-widest text-white uppercase">
              PROVEN OPERATIONS
            </p>
            <h3 className="text-5xl font-bold text-white mt-2">
              <Counter end={80} suffix="%" />
            </h3>
            <p className="text-white mt-2">
              Successful project completion rate
            </p>
          </div>

          <div>
            <p className="text-sm tracking-widest text-white uppercase">
              Trusted By
            </p>
            <h3 className="text-5xl font-bold text-white mt-2">
              <Counter end={38} suffix="K+" />
            </h3>
            <p className="text-white mt-2">
              satisfied clients worldwide
            </p>
          </div>

          <div>
            <p className="text-sm tracking-widest text-white uppercase">
              Data Driven
            </p>
            <h3 className="text-5xl font-bold text-white mt-2">
              <Counter end={70} suffix="B" />
            </h3>
            <p className="text-white mt-2">
              data points processed annually
            </p>
          </div>

          <div>
            <p className="text-sm tracking-widest text-white uppercase">
              Used By
            </p>
            <h3 className="text-5xl font-bold text-white mt-2">
              <Counter end={12} suffix="M+" />
            </h3>
            <p className="text-white mt-2">
              active users across platforms
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}