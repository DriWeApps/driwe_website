"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Main DriverSignupPage component
export default function DriverSignupPage() {
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

    // Initial fade-in animation for the hero text
    gsap.fromTo('.hero-text', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });

    // GSAP animation for the form container
    gsap.fromTo(
      '.signup-form-container',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: '.signup-form-container',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // GSAP animation for the new info cards
    gsap.fromTo(
      '.info-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.info-card-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // GSAP animation for the commitment section
    gsap.fromTo(
      '.commitment-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.commitment-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Three.js setup for the animated torus knot
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
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col  font-inter antialiased">
      {/* Hero Section with 3D animation */}
      <section className="relative w-full overflow-hidden bg-[#fcd129]">
        <div ref={mountRef} className="absolute inset-0 z-0"></div>
        <div className="container relative z-10 mx-auto flex h-[45vh] items-center justify-center px-4 text-center md:px-6">
          <div className="space-y-4">
            <h1 className="hero-text text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
              Become a Driver
            </h1>
            <p className="hero-text text-lg  md:text-xl">
              Sign up today to start earning. Enjoy flexible hours and great benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Signup Form */}
      <section className="relative z-10 w-full bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="signup-form-container mx-auto max-w-2xl rounded-2xl border border-black bg-[#fcd129]/50 p-8 shadow-2xl">
            <h2 className="mb-8 text-center text-3xl font-bold ">Driver Registration</h2>
            <form className="grid gap-6">
              {/* Personal Information - Restructured as requested */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium leading-none ">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#3b006a]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium leading-none ">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#3b006a]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none ">
                    Email Address <span className="text-sm ">(Optional)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#3b006a]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium leading-none ">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel" // Changed to type="tel" for better mobile support
                    placeholder="+91 1234567890"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#3b006a]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-[#fcd129] px-6 py-3 text-sm font-medium  shadow transition-colors hover:bg-[#fbd64a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fcd129] focus-visible:ring-offset-2"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* New sections added below */}
      <section className="info-card-section w-full bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold ">Why Drive With Us?</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Flexible Hours */}
            <div className="info-card rounded-2xl border border-black  p-6 shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fcd129] text-3xl">
                ⏰
              </div>
              <h3 className="mb-2 text-xl font-semibold ">Flexible Hours</h3>
              <p>
                Work on your own schedule. Drive full-time or just a few hours a week.
              </p>
            </div>

            {/* Card 2: Great Earnings */}
            <div className="info-card rounded-2xl border border-black p-6 shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fcd129] text-3xl">
                💰
              </div>
              <h3 className="mb-2 text-xl font-semibold ">Great Earnings</h3>
              <p>
                Our competitive rates and bonuses help you maximize your income on every trip.
              </p>
            </div>
            
            {/* Card 3: Community Support */}
            <div className="info-card rounded-2xl border border-black p-6 shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fcd129] text-3xl">
                🤝
              </div>
              <h3 className="mb-2 text-xl font-semibold ">Community Support</h3>
              <p>
                Join a supportive community of drivers and receive 24/7 in-app assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="commitment-section w-full bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold ">Our Commitment to You</h2>
            <p className="text-lg leading-relaxed ">
              Your safety and success are our top priorities. We are dedicated to providing a fair, transparent, and
              secure platform for all our drivers. We believe in building a partnership that works for you.
            </p>
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
