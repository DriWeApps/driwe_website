"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Download from "@/components/Download";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const journeyRefs = useRef<HTMLDivElement[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    if (el) sectionsRef.current[index] = el;
  };
  const addJourneyRefs = (el: HTMLDivElement | null) => {
    if (el && !journeyRefs.current.includes(el)) {
      journeyRefs.current.push(el);
    }
  };

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-inter">
      {/* Hero / Banner Section */}
      <section
        ref={(el) => setRef(el as HTMLDivElement | null, 0)}
        className="relative bg-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/images/independent.png"
            alt="DriWE Logo"
            width={1200}
            height={400}
            
            className="mx-auto h-auto w-full object-cover"  
            priority
          />
        </div>
      </section>
      

      {/* Feature Highlights */}
      <section className="relative bg-white py-20 px-6 overflow-hidden">
          {/* Multiple marquee lines */}
          

          {/* Static Centered Word */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="text-[15rem] font-extrabold text-gray-200 opacity-20 select-none leading-none">
              Features
            </h1>
          </div>

          <h3 className="text-center text-3xl font-bold mb-3 relative z-10">
            Our Features
          </h3>
          <p className="text-center text-base mb-12 relative z-10">
            From humble beginnings to a leading mobility solution
          </p>

          <div className="relative max-w-3xl mx-auto z-5">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-400 h-full"></div>
           {[
  { text: "City Rides\nExperience quick seamless and convenient rides anywhere within the city. Perfect for daily commutes running errands or short trips. Getting around has never been easier or more comfortable." },
  { text: "Airport Transfer\nEnjoy reliable airport pickups and drops with precise flight tracking and included waiting time. Our professional drivers ensure you reach your destination on time every time." },
  { text: "Goods Transport\nTransport your packages furniture and commercial goods safely and securely. We handle every delivery with care making sure your items reach their destination intact and on schedule." },
  { text: "Full Day Rides\nBook a car for multiple hours or an entire day for meetings shopping sightseeing or any special plans. Enjoy a flexible comfortable and stress free travel experience tailored to your needs." },
].map((item, i) => {
  const [title, ...descParts] = item.text.split("\n");
  const description = descParts.join("\n");

  return (
    <div
      key={i}
      ref={addJourneyRefs}
      className={`flex mb-16 items-center flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className="w-full md:w-1/2 px-6">
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-500 hover:scale-105 hover:-translate-y-1">
          <h4 className="text-xl font-bold mb-2">{title}</h4>
          <p className="text-sm">{description}</p>
        </div>
      </div>
      <div className="relative w-10 h-10 bg-yellow-400 rounded-full z-20 shadow-lg flex items-center justify-center text-white font-bold my-4 md:my-0"></div>
      <div className="w-full md:w-1/2"></div>
    </div>
  );
})}
          </div>

          {/* CSS Animations */}
          <style>{`
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            @keyframes marqueeReverse {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0%);
              }
            }
            .animate-marquee {
              display: inline-block;
              animation: marquee 25s linear infinite;
            }
            .animate-marquee-reverse {
              display: inline-block;
              animation: marqueeReverse 25s linear infinite;
            }
          `}</style>
        </section>
      <div>
        <Download />
      </div>
    </div>
  );
}
