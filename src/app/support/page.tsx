"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import {
  Search,
  User,
  Car,
  Check,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import gsap from "gsap";
import * as THREE from "three";

export default function SupportPage() {
  const [] = useState<number | null>(null);
  const threeRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null, null]);

  // Animate cards after DOM is ready (avoids initial fade issue)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [cardRefs.current[0], cardRefs.current[1]],
        { opacity: 1, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0 }
      );

      gsap.fromTo(
        cardRefs.current.slice(2),
        { opacity: 1, y: 30 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out", stagger: 0.12, delay: 0.15 }
      );
    });

    return () => ctx.revert();
  }, []);

  // Three.js particle animation
  useLayoutEffect(() => {
    if (!threeRef.current) return;

    const container = threeRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const particleCount = 40;
    const geometry = new THREE.SphereGeometry(0.03, 8, 8);
    const material = new THREE.MeshBasicMaterial({ color: 0xffd24d });
    const particles: THREE.Mesh[] = [];

    for (let i = 0; i < particleCount; i++) {
      const p = new THREE.Mesh(geometry, material);
      p.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
        (Math.random() - 1) * 2
      );
      p.material.opacity = 0.9;
      scene.add(p);
      particles.push(p);
    }

    let rafId: number;
    function animate() {
      particles.forEach((p, idx) => {
        p.position.y -= 0.002 + (idx % 3) * 0.0008;
        p.position.x += Math.sin(Date.now() * 0.0002 + idx) * 0.0005;
        if (p.position.y < -3) p.position.y = 3;
      });
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  const faqs = [
    { q: "How do I book a ride?", a: "Open the app, enter your destination, choose your ride type, and confirm your booking." },
    { q: "What payment methods do you accept?", a: "We accept credit cards, debit cards, PayPal, and digital wallets." },
    { q: "How do I become a driver?", a: "Sign up through our driver portal, complete the background check, and upload required documents." },
    { q: "Can I cancel my ride?", a: "Yes — you can cancel through the app. Cancellation fees may apply depending on timing." },
  ];

  const solidColor = "#fcd129";

  return (
    <div className="relative min-h-screen bg-white text-gray-800">
      <div ref={threeRef} className="absolute inset-0 -z-10 pointer-events-none opacity-20" />

      {/* Hero Section */}
            <section className="bg-[#fcd129] py-20">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center animate-[fadeUp_0.6s_ease-in-out_forwards]">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">How can we help you?</h1>
          <p className="mt-2 text-slate-700">Get quick answers to common questions or contact our support team</p>
        </div>
      </section>
      
      {/* Help Category Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-[28px] font-medium mb-6">
            Choose Your Help Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              ref={(el) => { cardRefs.current[0] = el; }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div
                  className="rounded-full p-2 flex items-center justify-center"
                  style={{ background: solidColor, width: 42, height: 42 }}
                >
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-base">I'm a Rider</h3>
                  <p className="text-xs text-gray-500 mt-2">
                    Get help with booking rides, payments, and account settings
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-gray-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-yellow-500" /> Booking & cancellation
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-yellow-500" /> Payment issues
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-yellow-500" /> Account management
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              ref={(el) => { cardRefs.current[1] = el; }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div
                  className="rounded-full p-2 flex items-center justify-center"
                  style={{ background: solidColor, width: 42, height: 42 }}
                >
                  <Car className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-base">I'm a Driver</h3>
                  <p className="text-xs text-gray-500 mt-2">
                    Get help with driving, earnings, and vehicle requirements
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-gray-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-yellow-500" /> Getting started
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-yellow-500" /> Earnings & payments
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-yellow-500" /> Vehicle requirements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-[28px] font-medium mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((f, idx) => (
              <details key={idx} className="bg-white border border-gray-100 rounded-lg shadow-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700">
                  {f.q}
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-[28px] font-medium mb-6">
            Still need help?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MessageCircle, title: "Live Chat", desc: "Get instant help from our support team", btn: "Start Chat" },
              { icon: Phone, title: "Phone Support", desc: "Call us for urgent issues", btn: "Start Call" },
              { icon: Mail, title: "Email Support", desc: "Send us a detailed message", btn: "Send Email" },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i + 2] = el; }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-5 text-center">
                  <div
                    className="rounded-full px-4 py-2 inline-flex items-center justify-center"
                    style={{ background: solidColor }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h3 className="text-center font-medium mb-1">{item.title}</h3>
                <p className="text-center text-sm text-gray-500 mb-4">{item.desc}</p>

                <button
                  className="w-full py-2 rounded-md uppercase text-sm font-medium"
                  style={{ background: solidColor, color: "#fff" }}
                >
                  {item.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}
