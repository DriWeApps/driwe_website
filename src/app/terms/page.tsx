"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Main TermsPage component
export default function TermsPage() {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // === GSAP Scroll-Triggered Animations ===
    // This section handles the elegant fade-in effect for each text section.
    // We get the elements after the component mounts
    const sections = document.querySelectorAll('section h2, section p, section ul, .table-of-contents');

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%', // Start the animation when the top of the section is 85% down from the top of the viewport
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Clean up function - none needed since no animations are running continuously.
    return () => {};
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 font-inter antialiased">
      {/* Hero Section - A simple, static header */}
      <section className="relative w-full overflow-hidden bg-[#fcd129]">
        <div className="container relative mx-auto flex h-[40vh] items-center justify-center px-4 text-center md:px-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-slate-900 sm:text-6xl md:text-7xl">
              Terms of Service
            </h1>
            {/* The line below is removed to follow the "no colors" request */}
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
                  <a href="#acceptance" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    1. Acceptance of Terms
                  </a>
                  <a href="#eligibility" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    2. Eligibility
                  </a>
                  <a href="#account" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    3. Account Registration and Security
                  </a>
                  <a href="#services" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    4. Services Provided
                  </a>
                  <a href="#conduct" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    5. User Conduct and Responsibilities
                  </a>
                  <a href="#sharing" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    6. Payment and Fees
                  </a>
                  <a href="#rights" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    7. Limitation of Liability
                  </a>
                  <a href="#security" className="block text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">
                    8. Termination
                  </a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <div className="mb-8 flex items-start space-x-4">
                  <div>
                    <p className="text-lg leading-relaxed text-slate-700">
                      Welcome to Driwe! These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Driwe
                      mobile application (the &quot;App&quot;), our website, and all related services (collectively, the
                      &quot;Services&quot;). By accessing or using the Services, you agree to be bound by these Terms. If you do
                      not agree to these Terms, do not use our Services.
                    </p>
                  </div>
                </div>

                <section id="acceptance" className="mb-12">
                  <h2 className="text-3xl font-bold">1. Acceptance of Terms</h2>
                  <p className="leading-relaxed text-slate-700">
                    By creating an account, accessing, or using the Driwe Services, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms, as well as our Privacy Policy.
                  </p>
                </section>

                <section id="eligibility" className="mb-12">
                  <h2 className="text-3xl font-bold">2. Eligibility</h2>
                  <p className="leading-relaxed text-slate-700">
                    You must be at least 18 years old to create an account and use the Driwe Services. By using the
                    Services, you represent and warrant that you are at least 18 years old and capable of entering into
                    a binding agreement.
                  </p>
                </section>

                <section id="account" className="mb-12">
                  <h2 className="text-3xl font-bold">3. Account Registration and Security</h2>
                  <p className="leading-relaxed text-slate-700">
                    To use certain features of our Services, you must create an account. You agree to:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-slate-700">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and update your account information</li>
                    <li>Keep your login credentials secure and confidential</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                </section>

                <section id="services" className="mb-12">
                  <h2 className="text-3xl font-bold">4. Services Provided</h2>
                  <p className="leading-relaxed text-slate-700">
                    Driwe provides a platform that connects users with transportation and delivery services. Our
                    services include:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-slate-700">
                    <li>Ride booking and transportation services</li>
                    <li>Package delivery services</li>
                    <li>Real-time tracking and communication features</li>
                    <li>Payment processing services</li>
                  </ul>
                </section>

                <section id="conduct" className="mb-12">
                  <h2 className="text-3xl font-bold">5. User Conduct and Responsibilities</h2>
                  <p className="leading-relaxed text-slate-700">When using our Services, you agree to:</p>
                  <ul className="list-inside list-disc space-y-2 text-slate-700">
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Treat drivers and other users with respect</li>
                    <li>Provide accurate pickup and destination information</li>
                    <li>Pay all fees and charges associated with your use of the Services</li>
                    <li>Not use the Services for illegal or unauthorized purposes</li>
                  </ul>
                </section>

                <section id="sharing" className="mb-12">
                  <h2 className="text-3xl font-bold">6. Payment and Fees</h2>
                  <p className="leading-relaxed text-slate-700">
                    You agree to pay all fees and charges associated with your use of the Services. Payment will be
                    processed through your chosen payment method. We reserve the right to change our pricing structure
                    at any time with reasonable notice.
                  </p>
                </section>

                <section id="rights" className="mb-12">
                  <h2 className="text-3xl font-bold">7. Limitation of Liability</h2>
                  <p className="leading-relaxed text-slate-700">
                    To the maximum extent permitted by law, Driwe shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages arising out of or relating to your use of the Services.
                  </p>
                </section>

                <section id="security" className="mb-12">
                  <h2 className="text-3xl font-bold">8. Termination</h2>
                  <p className="leading-relaxed text-slate-700">
                    We may terminate or suspend your account and access to the Services at any time, with or without
                    notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third
                    parties.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
