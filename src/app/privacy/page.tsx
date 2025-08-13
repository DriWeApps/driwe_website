"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function PrivacyPage() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // GSAP and ScrollTrigger setup
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (!gsap || !ScrollTrigger) {
        console.error('GSAP or ScrollTrigger not found. Make sure the script tags are correctly loaded.');
        return;
    }
    gsap.registerPlugin(ScrollTrigger);

    // Initial fade-in animation for header and table of contents
    gsap.fromTo('.hero-text', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.fromTo('.table-of-contents', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.5 });

    // Scroll-triggered animations for content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
      gsap.fromTo(
        section.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Three.js setup for the animated wireframe sphere
    const mount = mountRef.current;
    if (!mount) return;

    // Set up the scene, camera, and renderer
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 font-inter antialiased">
      {/* Hero Section with 3D animation */}
      <section className="relative w-full overflow-hidden bg-[#fcd129] py-20">
        <div ref={mountRef} className="absolute inset-0 z-0"></div>
        <div className="container relative z-10 mx-auto flex h-[40vh] items-center justify-center px-4 text-center md:px-6">
          <div className="space-y-4">
            <h1 className="hero-text text-4xl font-bold tracking-tighter text-slate-900 sm:text-6xl md:text-7xl">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 w-full bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="table-of-contents sticky top-8 rounded-xl border border-slate-200 bg-slate-100 p-6 shadow-2xl">
                <h3 className="mb-4 text-lg font-bold text-slate-900">Table of Content</h3>
                <nav className="space-y-2">
                  <a href="#information" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    1. Information We Collect
                  </a>
                  <a href="#usage" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    2. How We Use Your Information
                  </a>
                  <a href="#sharing" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    3. Sharing Your Information
                  </a>
                  <a href="#rights" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    4. Your Rights and Choices
                  </a>
                  <a href="#security" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    5. Data Security
                  </a>
                  <a href="#cookies" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    6. Cookies and Tracking Technologies
                  </a>
                  <a href="#children" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    7. Children's Privacy
                  </a>
                  <a href="#changes" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    8. Changes to This Privacy Policy
                  </a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <div className="mb-8 flex items-start space-x-4 content-section">

                  <div>
                    <p className="text-lg leading-relaxed text-slate-700">
                      We are committed to protecting your personal information and your right to privacy. This Privacy
                      Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                      website, use our services, or otherwise interact with us.
                    </p>
                  </div>
                </div>

                <section id="information" className="mb-12 content-section">
                  <h2 className="text-3xl font-bold">1. Information We Collect</h2>
                  <p className="leading-relaxed text-slate-700">
                    We may collect the following types of information:
                  </p>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">Personal Information:</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Name, email address, phone number, and other contact details.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">Usage Data:</h3>
                    <p className="text-slate-700 leading-relaxed">
                      IP address, browser type, pages visited, time spent, and other analytics.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">Cookies and Tracking:</h3>
                    <p className="text-slate-700 leading-relaxed">
                      We may use cookies and similar tracking technologies to enhance user experience.
                    </p>
                  </div>
                </section>

                <section id="usage" className="mb-12 content-section">
                  <h2 className="text-3xl font-bold">2. How We Use Your Information</h2>
                  <p className="leading-relaxed text-slate-700">We use the information we collect to:</p>
                  <ul className="list-inside list-disc space-y-2 text-slate-700">
                    <li>Provide and maintain our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Improve our services and develop new features</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section id="sharing" className="mb-12 content-section">
                  <h2 className="text-3xl font-bold">3. Sharing Your Information</h2>
                  <p className="leading-relaxed text-slate-700">
                    We may share your information in the following circumstances:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-slate-700">
                    <li>With service providers who assist us in operating our business</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                    <li>With your consent or at your direction</li>
                  </ul>
                </section>

                <section id="rights" className="mb-12 content-section">
                  <h2 className="text-3xl font-bold">4. Your Rights and Choices</h2>
                  <p className="leading-relaxed text-slate-700">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-slate-700">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Restriction of processing</li>
                    <li>Data portability</li>
                    <li>Objection to processing</li>
                  </ul>
                </section>

                <section id="security" className="mb-12 content-section">
                  <h2 className="text-3xl font-bold">5. Data Security</h2>
                  <p className="leading-relaxed text-slate-700">
                    We implement appropriate technical and organizational security measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. However, no method
                    of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section id="cookies" className="mb-12 content-section">
                  <h2 className="text-3xl font-bold">6. Cookies and Tracking Technologies</h2>
                  <p className="leading-relaxed text-slate-700">
                    We use cookies and similar tracking technologies to collect and use personal information about you.
                    You can control cookies through your browser settings and other tools.
                  </p>
                </section>

                <section id="children" className="mb-12 content-section">
                  <h2 className="text-3xl font-bold">7. Children's Privacy</h2>
                  <p className="leading-relaxed text-slate-700">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect
                    personal information from children under 13.
                  </p>
                </section>

                <section id="changes" className="mb-12 content-section">
                  <h2 className="text-3xl font-bold">8. Changes to This Privacy Policy</h2>
                  <p className="leading-relaxed text-slate-700">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* External script tags for GSAP and Three.js */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    </div>
  );
}
