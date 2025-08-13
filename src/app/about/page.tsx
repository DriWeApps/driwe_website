"use client";
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

// The GSAP and ScrollTrigger libraries are now loaded via CDN in the headContent.
// We will access them globally, so the import statements are no longer needed.

const headContent = `
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" xintegrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ96482LqYw6pA8C11+p+h8D48/x00a747z6D6B4PqDkF2M8p/5/K/32d5A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
`;

export default function AboutUs() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const journeyItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // We must ensure window and gsap exist before trying to use them.
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      // It's crucial to register GSAP plugins before using them.
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Fade-in animation for general sections
      sectionsRef.current.forEach((section) => {
        window.gsap.fromTo(
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
        window.gsap.fromTo(
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
    }
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
      <div dangerouslySetInnerHTML={{ __html: headContent }} />

      <main className="bg-[#f9fafc] text-[#1a202c]">
        {/* About Section */}
        <section
          ref={addToRefs}
          className="bg-[#fcd129] py-20 text-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">About DriWe</h1>
          <p className="text-md md:text-xl text-black mb-6 max-w-6xl mx-auto">
            DriWe Smartech Pvt. Ltd. is on a mission to redefine urban mobility through innovative, technology ride-sharing solutions. We design seamless, safe, affordable travel experiences that connect people and make transport stress-free. Our advanced platform uses smart routing, real-time tracking, and secure payments to ensure unmatched experience for riders and drivers alike.
From quick city rides to long journeys. We focus on making travel simpler, faster, and dependable.
          </p>
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
                bg: "bg-[#fcd129]/50",
              },
              {
                icon: "fas fa-rocket",
                title: "Our Vision",
                text: "To become the world's most trusted mobility platform, creating a seamless ecosystem where technology, sustainability, and human connection drive the future of transportation.",
                bg: "bg-[#fcd129]/50",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`${card.bg} rounded-lg p-6 flex-1 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="bg-[#fbbf24] w-10 h-10 rounded-full flex items-center justify-center mb-4">
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
          {/* Multiple marquee lines */}
          

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
              { text: "DriWe was founded with a clear mission to make travel more accessible, convenient, and inclusive for everyone. From day one, our focus has been on creating innovative mobility solutions that break down barriers, connect people seamlessly, and empower communities to move freely." },
              { text: "Over time, we have expanded our services to multiple areas in the city, building a strong and growing network of dedicated drivers. This growth not only reflects our commitment to meeting the diverse travel needs of different regions but also showcases the trust and support we have earned from both riders and drivers alike." },
              { text: "We launched our platform with the vision of offering low-fare rides that balance affordability with long-term sustainability. By combining cost-effective pricing with user-friendly technology, we aim to make every journey simple, comfortable, and environmentally responsible." },
              { text: "We have also introduced community-focused transparency initiatives, ensuring riders and drivers alike can trust every aspect of the journey. These projects are designed to foster open communication, fair practices, and a sense of belonging, turning every ride into more than just transportation—it becomes a shared community experience." },
              
            ].map((item, i) => (
              <div
                key={i}
                ref={addJourneyRefs}
                className={`flex mb-16 items-center flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="w-full md:w-1/2 px-6">
                  <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-500 hover:scale-105 hover:-translate-y-1">
                    <h4 className="text-xl font-bold mb-2">&nbsp;</h4>
                    <p className="text-sm">{item.text}</p>
                  </div>
                </div>
                <div className="relative w-10 h-10 bg-yellow-400 rounded-full z-20 shadow-lg flex items-center justify-center text-white font-bold my-4 md:my-0"></div>
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
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

        {/* Leadership Team */}
        <section ref={addToRefs} className="bg-[#f7faff] py-12 px-6 rounded-lg">
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
                className="bg-white rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:-rotate-1 hover:-translate-y-1"
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
        <section ref={addToRefs} className="bg-[#fcd129]/30 py-12 px-6 rounded-lg">
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
                className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300 hover:-translate-y-1"
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
