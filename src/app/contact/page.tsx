"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Newspaper, // Press & Media
  Share2,    // Socials
  Headphones // Support
} from "lucide-react";

// The animations have been recreated using native CSS transitions and keyframes
// to ensure the component is self-contained and fully functional.

// Define a keyframe animation for a subtle fade-in from below
const fadeUp = `
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

type SocialIconProps = {
  href: string;
  label: string;
  brand: string; // added brand color
  children: React.ReactNode;
};

const SocialIcon = ({ href, label, brand, children }: SocialIconProps) => (
  <a
    href={href}
    aria-label={label}
    title={label}
    className="relative inline-flex h-10 w-10 items-center justify-center rounded-full 
               text-white shadow-sm transition-transform duration-300 ease-in-out hover:scale-110"
    target="_blank"
    rel="noreferrer"
    style={{ transformOrigin: "center", backgroundColor: brand }}
  >
    {children}
  </a>
);

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Add the keyframe animation style */}
      <style>{fadeUp}</style>
      
      {/* HERO */}
      <section className="bg-[#fcd129] py-20">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center animate-[fadeUp_0.6s_ease-in-out_forwards]">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Get in Touch</h1>
          <p className="mt-2 text-slate-700">Have questions? We’re here to help. Reach out anytime.</p>
        </div>
      </section>

      {/* CONTENT */}
      {/* The grid is now responsive, defaulting to 1 column on small screens and 2 on large */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid lg:grid-cols-2 gap-6">
        
        {/* Send us a message */}
        <div 
          className="card group relative rounded-xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02]" 
          title="Send us a message"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Send us a message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-field flex flex-col animate-[fadeUp_0.5s_ease-in-out_0.2s_forwards] opacity-0">
                <label className="text-sm text-slate-700">Name *</label>
                <input type="text" required className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-200" />
              </div>
              <div className="form-field flex flex-col animate-[fadeUp_0.5s_ease-in-out_0.28s_forwards] opacity-0">
                <label className="text-sm text-slate-700">Email *</label>
                <input type="email" required className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-200" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-field flex flex-col animate-[fadeUp_0.5s_ease-in-out_0.36s_forwards] opacity-0">
                <label className="text-sm text-slate-700">Phone</label>
                <input type="tel" className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-200" />
              </div>
              <div className="form-field flex flex-col animate-[fadeUp_0.5s_ease-in-out_0.44s_forwards] opacity-0">
                <label className="text-sm text-slate-700">Subject *</label>
                <select required className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-200">
                  <option value="">Select</option>
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Support</option>
                  <option>Media</option>
                </select>
              </div>
            </div>
            <div className="form-field flex flex-col animate-[fadeUp_0.5s_ease-in-out_0.52s_forwards] opacity-0">
              <label className="text-sm text-slate-700">Message *</label>
              <textarea rows={5} required className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-200" />
            </div>

            <button
              type="submit"
              className="bg-[#fcd129] hover:bg-[#e5bf1f] transition-colors text-slate-900 font-medium px-5 py-2 rounded-md animate-[fadeUp_0.5s_ease-in-out_0.6s_forwards] opacity-0"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Office + Map */}
        <div className="flex flex-col gap-6">
          <div 
            className="card group relative rounded-xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02]" 
            title="Visit Our Office"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Visit Our Office</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3"><MapPin className="h-5 w-5 text-amber-500" /><p>123 Innovation Drive, San Francisco, CA 94105</p></div>
              <div className="flex gap-3"><Phone className="h-5 w-5 text-amber-500" /><p>+1 (555) 123-4567</p></div>
              <div className="flex gap-3"><Mail className="h-5 w-5 text-amber-500" /><p>hello@company.com</p></div>
              <div className="flex gap-3"><Clock className="h-5 w-5 text-amber-500" /><p>Mon–Fri: 9am–6pm</p></div>
            </div>
          </div>

          {/* Map Card */}
          <div 
            className="card group relative rounded-xl border border-slate-200 bg-white overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02]" 
            title="Find Us"
          >
            <iframe
              title="Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019498313161!2d-122.401!3d37.789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d4f3c1d1%3A0x2e8b8a9e1aefa37c!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="220"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        {/* Follow Us */}
        <div 
          className="card group relative lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02]" 
          title="Social Media"
        >
          <h3 className="text-base font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3">
            {/* Brand-colored buttons with white icons */}
            <SocialIcon href="#" label="Facebook" brand="#1877F2">
              <Facebook className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="#" label="Twitter" brand="#1DA1F2">
              <Twitter className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="#" label="LinkedIn" brand="#0A66C2">
              <Linkedin className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="#" label="Instagram" brand="#E1306C">
              <Instagram className="h-5 w-5" />
            </SocialIcon>
          </div>
        </div>

        {/* Other Ways */}
        {/* The grid is now responsive, stacking on small screens and laying out in 3 columns on medium screens */}
        <div 
          className="card group relative lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02]" 
          title="More Contact Options"
        >
          <h3 className="text-base font-semibold mb-4">Other Ways to Reach Us</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 text-sm">
            <div className="flex flex-col items-start gap-2 rounded-lg border border-slate-200 p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <Newspaper className="h-5 w-5 text-amber-500" />
              <p className="font-medium">Press & Media</p>
              <p className="text-slate-600">press@company.com</p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border border-slate-200 p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <Share2 className="h-5 w-5 text-amber-500" />
              <p className="font-medium">Socials</p>
              <p className="text-slate-600">socials@company.com</p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border border-slate-200 p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <Headphones className="h-5 w-5 text-amber-500" />
              <p className="font-medium">24/7 Support</p>
              <p className="text-slate-600">support@company.com</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
