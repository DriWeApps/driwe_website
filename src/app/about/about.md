``` ts
"use client";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const journeyItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Fade-in animation for general sections
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax animation for Journey items
    journeyItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: index % 2 === 0 ? 100 : -100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const addJourneyRefs = (el: HTMLDivElement | null) => {
    if (el && !journeyItemsRef.current.includes(el)) {
      journeyItemsRef.current.push(el);
    }
  };

  return (
    <>
      <Head>
        <title>DriWe About</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-[#f9fafc] text-[#1a202c]">
        {/* About Section */}
        <section
          ref={addToRefs}
          className="bg-[#fff7e6] py-12 px-6 text-center max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">About DriWe</h2>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Revolutionizing urban mobility with safe, reliable, and sustainable
            ride-sharing solutions for the modern world.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button className="bg-[#fbbf24] text-white text-sm px-5 py-3 rounded flex items-center gap-2 hover:bg-[#d69e2e] hover:scale-105 transition-transform duration-300 shadow hover:shadow-lg font-semibold">
              <i className="fas fa-briefcase"></i>
              Join Our Team
            </button>
            <button className="border border-[#fbbf24] text-[#b7791f] text-sm px-5 py-3 rounded flex items-center gap-2 hover:bg-[#fbbf24] hover:text-white hover:scale-105 transition-transform duration-300 shadow hover:shadow-lg font-semibold">
              <i className="fas fa-envelope"></i>
              Contact Us
            </button>
          </div>
        </section>

        {/* Mission & Vision */}
        <section ref={addToRefs} className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-center text-2xl font-bold mb-3">
            Our Mission & Vision
          </h3>
          <p className="text-center text-base mb-8">
            Driving towards a better future for urban transportation
          </p>
          <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "fas fa-lightbulb",
                title: "Our Mission",
                text: "To provide safe, affordable, and reliable transportation solutions that connect communities and empower drivers while reducing urban congestion and environmental impact.",
                bg: "bg-[#fff7e6]",
              },
              {
                icon: "fas fa-rocket",
                title: "Our Vision",
                text: "To become the world's most trusted mobility platform, creating a seamless ecosystem where technology, sustainability, and human connection drive the future of transportation.",
                bg: "bg-purple-100",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`${card.bg} rounded-lg p-6 flex-1 transform transition duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="bg-[#fbbf24] w-10 h-10 rounded flex items-center justify-center mb-4">
                  <i className={`${card.icon} text-white text-base`}></i>
                </div>
                <h4 className="font-bold text-lg mb-2">{card.title}</h4>
                <p className="text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </section>


{/* Journey Section with Parallax + Multi-Line Marquee Overlay */}
<section className="relative bg-white py-20 px-6 overflow-hidden">
  {/* Google Font */}
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
    rel="stylesheet"
  />

  {/* Multiple marquee lines */}
  <div
    className="absolute inset-0 flex flex-col justify-center gap-10 pointer-events-none z-0"
    style={{ fontFamily: "'Inter', sans-serif" }}
  >
    {/* Line 1 - Left to Right */}
    <div className="whitespace-nowrap animate-marquee text-gray-300 text-[5rem] font-light tracking-widest opacity-60">
      {"Vision  Progress  Connection  Journey  Purpose  Growth  Impact  ".repeat(3)}
    </div>
    {/* Line 2 - Right to Left */}
    <div className="whitespace-nowrap animate-marquee-reverse text-gray-300 text-[5rem] font-light tracking-widest opacity-55">
      {"Vision  Progress  Connection  Journey  Purpose  Growth  Impact  ".repeat(3)}
    </div>
    {/* Line 3 - Left to Right */}
    <div className="whitespace-nowrap animate-marquee text-gray-300 text-[5rem] font-light tracking-widest opacity-50">
      {"Vision  Progress  Connection  Journey  Purpose  Growth  Impact  ".repeat(3)}
    </div>
    {/* Line 4 - Right to Left */}
    <div className="whitespace-nowrap animate-marquee-reverse text-gray-300 text-[5rem] font-light tracking-widest opacity-55">
      {"Vision  Progress  Connection  Journey  Purpose  Growth  Impact  ".repeat(3)}
    </div>
    {/* Line 5 - Left to Right */}
    <div className="whitespace-nowrap animate-marquee text-gray-300 text-[5rem] font-light tracking-widest opacity-60">
      {"Vision  Progress  Connection  Journey  Purpose  Growth  Impact  ".repeat(3)}
    </div>
  </div>

  {/* Static Centered Word */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <h1 className="text-[15rem] font-extrabold text-gray-200 opacity-20 select-none leading-none">
      JOURNEY
    </h1>
  </div>

  <h3 className="text-center text-3xl font-bold mb-3 relative z-10">
    Our Journey
  </h3>
  <p className="text-center text-base mb-12 relative z-10">
    From humble beginnings to a leading mobility solution
  </p>

  <div className="relative max-w-4xl mx-auto z-10">
    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-400 h-full"></div>
    {[
      { text: "DriWe founded with a mission to make travel accessible." },
      { text: "Expanded to multiple cities with a growing driver base." },
      { text: "Launched eco-friendly rides for sustainability." },
      { text: "Hit 5 million rides with community-focused projects." },
      { text: "Innovating AI-based route optimization and safety features." },
    ].map((item, i) => (
      <div
        key={i}
        ref={addJourneyRefs}
        className={`flex items-center mb-16 ${
          i % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="w-1/2 px-6">
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-500 hover:scale-105">
            <h4 className="text-xl font-bold mb-2">&nbsp;</h4>
            <p className="text-sm">{item.text}</p>
          </div>
        </div>
        <div className="relative w-10 h-10 bg-yellow-400 rounded-full z-20 shadow-lg flex items-center justify-center text-white font-bold"></div>
        <div className="w-1/2"></div>
      </div>
    ))}
  </div>

  {/* CSS Animations */}
  <style jsx>{`
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

        {/* Leadership Team */}
        <section ref={addToRefs} className="bg-[#f7faff] py-12 px-6">
          <h3 className="text-center text-2xl font-bold mb-3">
            Leadership Team
          </h3>
          <p className="text-center text-base mb-10">
            Meet the visionaries driving DriWe forward
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Alex Chen",
                role: "CEO & Founder",
                desc: "Former Uber executive with 10+ years in mobility tech",
                img: "https://placehold.co/80x80/cf3c3c/fff?text=Alex+Chen",
              },
              {
                name: "Sarah Johnson",
                role: "CTO",
                desc: "AI & machine learning expert from Google",
                img: "https://placehold.co/80x80/7a9cf5/fff?text=Sarah+J",
              },
              {
                name: "Michael Rodriguez",
                role: "COO",
                desc: "Operations specialist with logistics background",
                img: "https://placehold.co/80x80/9ca3af/fff?text=Michael+R",
              },
              {
                name: "Emma Davis",
                role: "CMO",
                desc: "Brand strategist from Tesla marketing team",
                img: "https://placehold.co/80x80/4a5568/fff?text=Emma+D",
              },
            ].map((person, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:-rotate-1"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="mx-auto rounded-full mb-3 w-24 h-24 object-cover"
                />
                <h5 className="font-bold text-lg mb-1">{person.name}</h5>
                <p className="text-sm text-[#d97706] font-semibold mb-1">
                  {person.role}
                </p>
                <p className="text-sm leading-relaxed">{person.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What Our Users Say */}
        <section ref={addToRefs} className="bg-[#fff7e6] py-12 px-6">
          <h3 className="text-center text-2xl font-bold mb-3">
            What Our Users Say
          </h3>
          <p className="text-center text-base mb-8">
            Real feedback from our happy riders and drivers
          </p>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya Sharma",
                text: "DriWe has made my daily commute so much easier and affordable!",
              },
              {
                name: "Rahul Verma",
                text: "I love the eco-friendly ride options and smooth booking process.",
              },
              {
                name: "Ananya Singh",
                text: "The drivers are always polite, and the service is top-notch.",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <p className="italic text-sm mb-4">"{review.text}"</p>
                <h5 className="font-bold text-lg">{review.name}</h5>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
``