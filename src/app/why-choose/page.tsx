
"use client";

import { Truck } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Car,
  Shield,
  DollarSign,
  Calendar,
  Headphones,
  Clock,
  Zap,
  Users,
  Star,
  Award,
} from "lucide-react";
import type { ElementType, ReactNode } from "react";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ----------------------- utilities ----------------------- */
function useCountUp(end: number, duration = 2000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf = 0;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(end * progress);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return val;
}

/* ----------------------- Reveal animation ----------------------- */
function Reveal({
  children,
  delay = 0,
  x = 0,
  y = 50,
  scale = 0.95,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  scale?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, x, y, scale },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: delay / 1000,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay, x, y, scale]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/* ----------------------- shared cards ----------------------- */
type FeatureCardProps = {
  icon: ElementType;
  title: string;
  description: string;
  bgColor?: string;
};

function FeatureCard({
  icon: Icon,
  title,
  description,
  bgColor = "bg-white",
}: FeatureCardProps) {
  return (
    <Reveal>
      <Card
        className={`rounded-2xl shadow-lg p-6 text-center ${bgColor}
        transition-all duration-500 ease-out
        hover:scale-[1.05] hover:shadow-2xl hover:-translate-y-2`}
      >
        <CardContent>
          <Icon className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
          <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm md:text-base text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Reveal>
  );
}

/* ----------------------- service highlights ----------------------- */
function ServiceHighlights() {
  const highlights = [
    { icon: Shield, title: "Verified Drivers", description: "All drivers undergo background checks and verification.", bgColor: "bg-yellow-50" },
    { icon: DollarSign, title: "Transparent Pricing", description: "No hidden charges. See exact fare before you book.", bgColor: "bg-yellow-50" },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock customer support for any assistance.", bgColor: "bg-yellow-50" },
    { icon: Zap, title: "Quick Booking", description: "Get a ride in minutes with our instant system.", bgColor: "bg-yellow-50" },
  ];

  return (
    <section className="relative py-20 bg-white">
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-yellow-400 transform -translate-x-1/2"></div>
      <div className="max-w-6xl mx-auto px-6">
        {highlights.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <Reveal key={item.title} delay={100 * index} x={isLeft ? -50 : 50}>
              <div className="mb-12 flex flex-col md:flex-row items-center w-full">
                {/* Left side */}
                <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-8 md:text-right" : "md:pr-8 md:invisible"}`}>
                  {isLeft && (
                    <div className={`${item.bgColor} rounded-xl shadow-lg p-6 inline-block max-w-sm transition-transform duration-500 hover:scale-[1.05] hover:shadow-2xl`}>
                      <div className="flex items-center mb-3">
                        <item.icon className="w-8 h-8 text-yellow-500 mr-3" />
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  )}
                </div>

                {/* Marker */}
                <div className="hidden md:block w-0 relative">
                  <div className={`absolute ${isLeft ? "-translate-x-[27%]" : "translate-x-[-27%]"} left-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-yellow-200`}></div>
                </div>

                {/* Right side */}
                <div className={`w-full md:w-1/2 ${!isLeft ? "md:pl-8 md:text-left" : "md:pl-8 md:invisible"}`}>
                  {!isLeft && (
                    <div className={`${item.bgColor} rounded-xl shadow-lg p-6 inline-block max-w-sm transition-transform duration-500 hover:scale-[1.05] hover:shadow-2xl`}>
                      <div className="flex items-center mb-3">
                        <item.icon className="w-8 h-8 text-yellow-500 mr-3" />
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ----------------------- stats section ----------------------- */
function StatsSection() {
  const stats = [
    { icon: Users, label: "Happy Riders", value: 50000 },
    { icon: Star, label: "Avg. Rating", value: 4.9, decimals: 1, suffix: "/5" },
    { icon: Award, label: "Years of Service", value: 5, suffix: "+" },
  ];

  // Call useCountUp for each stat outside the map callback
  const count0 = useCountUp(stats[0].value, 2200);
  const count1 = useCountUp(stats[1].value, 2200);
  const count2 = useCountUp(stats[2].value, 2200);
  const counts = [count0, count1, count2];
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 text-center">
        {stats.map((s, i) => {
          const n = counts[i];
          const display = s.decimals != null ? n.toFixed(s.decimals) : Math.round(n).toLocaleString();
          return (
            <Reveal key={s.label} delay={100 * i} y={30}>
              <div className="p-6 rounded-xl shadow bg-gray-50 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl">
                <s.icon className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
                <h3 className="text-3xl font-bold text-gray-900">{display}{s.suffix || ""}</h3>
                <p className="text-gray-600">{s.label}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ----------------------- drive with driwe ----------------------- */
function DriveWithDriWe() {
  const features = [
    { icon: DollarSign, title: "Higher Earnings", desc: "Earn up to 25% more than other platforms with our fair pricing model." },
    { icon: Calendar, title: "Flexible Schedule", desc: "Work when you want, where you want. Complete control over your schedule." },
    { icon: Headphones, title: "Driver Support", desc: "Dedicated support team to help maximize your earnings and resolve issues quickly." },
  ];

  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Left */}
        <Reveal className="order-2 md:order-1" x={-50}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Drive with <span className="text-yellow-500">DriWE</span>
          </h2>
          <p className="text-gray-600 mb-6">Join thousands of drivers earning more with flexible hours and fair compensation.</p>

          <ul className="space-y-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={100 * i}>
                <li className="flex items-start">
                  <f.icon className="w-6 h-6 text-yellow-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{f.title}</h4>
                    <p className="text-gray-600 text-sm">{f.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition-colors">
            Start Driving Today
          </button>
        </Reveal>

        {/* Right Image */}
        <Reveal delay={150} className="order-1 md:order-2" x={50}>
          <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.05]">
            <Image src="/images/car.jpg" alt="Driver smiling in car" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------- page ----------------------- */
export default function DriwePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-16 md:py-20 bg-[#fcd129] shadow p-6 text-center">
        <Reveal y={-50}>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-slate-900 py-2">
            Why Choose Us ?
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-black/90 mb-8 max-w-3xl mx-auto">
            Your Trusted Transportation Partner
          </p>
        </Reveal>
      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <FeatureCard icon={Car} title="Auto Rickshaw" description="Budget-friendly three-wheeler rides for short distances." bgColor="bg-yellow-50" />
        <FeatureCard icon={Car} title="Car Rides" description="Comfortable and safe car transportation for any occasion." bgColor="bg-yellow-50" />
        <FeatureCard icon={Truck} title="Transport" description="Reliable bike and goods transport for all your needs." bgColor="bg-yellow-50" />
        <FeatureCard icon={Shield} title="Secure & Reliable" description="Your safety is our top priority." bgColor="bg-yellow-50" />
      </section>

      {/* Sections */}
      <ServiceHighlights />
      <StatsSection />
      <DriveWithDriWe />
    </div>
  );
}
