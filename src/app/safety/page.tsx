"use client";
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE: any;
    gsap: any;
    ScrollTrigger: any;
  }
}

// We will use the global Three.js object, loaded via CDN
const headContent = `
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" xintegrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ96482LqYw6pA8C11+p+h8D48/x00a747z6D6B4PqDkF2M8p/5/K/32d5A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
`;

export default function SafetyPage() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // GSAP scroll animations
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

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
    }
  }, []);

  // Three.js background animation
  useEffect(() => {
    if (typeof window !== 'undefined' && window.THREE && canvasRef.current) {
      // Declare camera and renderer outside so they are accessible in handleResize
      const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new window.THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      camera.position.z = 5;

      // Changed particle color for the light theme



 


      const animate = () => {
        requestAnimationFrame(animate);

        // Animate particles
        ;

      };

      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', onDocumentMouseMove);
      };
    }
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const safetyGuidelines = [
    {
      id: "for-riders",
      title: "For Riders",
      items: [
        "Always verify the driver and vehicle details (photo, license plate) in the app before starting the ride.",
        "Share your trip details with family and friends using the in-app sharing feature.",
        "Use the in-app chat or call features to communicate with your driver, keeping your personal number private.",
        "Use the emergency SOS button for immediate assistance from our support team and local authorities.",
        "Provide honest feedback and ratings after every ride to help us maintain a safe community."
      ]
    },
    {
      id: "for-drivers",
      title: "For Drivers",
      items: [
        "Adhere to all local traffic laws and maintain a safe driving speed.",
        "Verify the rider's identity and destination before starting the trip.",
        "Maintain a clean and well-maintained vehicle for a comfortable ride.",
        "Respect all riders and follow our strict zero-tolerance policy against any form of misconduct.",
        "In case of emergency, use the in-app SOS button for help."
      ]
    },
    {
      id: "emergency-protocols",
      title: "Emergency Protocols",
      items: [
        "**SOS Button:** In a safety-critical situation, the in-app SOS button instantly connects you with our safety team and shares your location with emergency services.",
        "**24/7 Support:** Our dedicated support team is available around the clock to assist you with any safety concerns.",
        "**Incident Reporting:** All incidents are taken seriously and thoroughly investigated to ensure a safe environment for everyone.",
        "**Location Tracking:** All rides are GPS-tracked from start to finish, providing a detailed record for safety and security."
      ]
    }
  ];

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: headContent }} />
      <main className="relative min-h-screen bg-white text-gray-800 font-[Inter] overflow-hidden ">
        {/* Three.js Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-15"></canvas>

        <div className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto ">
          {/* Hero Section */}
          <section className="text-center bg-[#fcd129] py-20 " ref={addToRefs}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Commitment to Your Safety
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Your safety is our top priority. We're dedicated to building a secure platform for every ride.
            </p>
          </section>

          {/* Table of Contents and Main Content */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Table of Contents */}
            <aside className="w-full md:w-1/4 sticky top-12 self-start p-4 bg-gray-100 rounded-lg shadow-xl" ref={addToRefs}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
              <nav>
                <ul className="space-y-2">
                  {safetyGuidelines.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block text-gray-600 hover:text-yellow-500 transition-colors duration-200"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content Sections */}
            <div className="w-full md:w-3/4 space-y-16">
              {safetyGuidelines.map((section) => (
                <section key={section.id} id={section.id} ref={addToRefs}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-300 pb-2">
                    {section.title}
                  </h2>
                  <ul className="space-y-6">
                    {section.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
                      >
                        <p className="text-gray-600 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
function onDocumentMouseMove(this: Window, ev: MouseEvent) {
  throw new Error("Function not implemented.");
}

