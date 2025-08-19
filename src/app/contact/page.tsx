"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Newspaper, // Press & Media
  Share2,     // Socials
  Headphones  // Support
} from "lucide-react";

// NOTE: Using a standard Facebook icon component for consistency.
const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

// Custom Threads icon component from your footer
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.01c0-3.576.85-6.43 2.495-8.481C5.845 1.225 8.598.044 12.179.02h.014c3.581.024 6.334 1.205 8.184 3.509C21.65 5.58 22.5 8.434 22.5 12.01c0 3.576-.85 6.43-2.495 8.481C18.155 22.775 15.402 23.956 11.821 23.98h-.007l.372-.004zM12.186 2.174c-2.922.02-5.049.725-6.312 2.096C4.52 5.608 3.75 7.768 3.75 12.01s.77 6.402 2.124 7.74c1.263 1.371 3.39 2.076 6.312 2.096 2.922-.02 5.049-.725 6.312-2.096 1.354-1.338 2.124-3.498 2.124-7.74s-.77-6.402-2.124-7.74c-1.263-1.371-3.39-2.076-6.312-2.096z" />
    <path d="M16.538 7.578c-.184-.247-.42-.46-.693-.625-.546-.33-1.246-.497-2.085-.497-1.56 0-2.65.678-3.238 2.015-.294.669-.442 1.445-.442 2.309 0 .1.003.199.008.297.05 1.25.34 2.26.863 3.007.523.747 1.264 1.125 2.204 1.125.94 0 1.681-.378 2.204-1.125.523-.747.813-1.757.863-3.007.005-.098.008-.197.008-.297 0-.864-.148-1.64-.442-2.309-.588-1.337-1.678-2.015-3.238-2.015-.839 0-1.539.167-2.085.497-.273.165-.509.378-.693.625z" />
  </svg>
)

// Keyframe animation for a subtle fade-in from below
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
  brand: string;
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
    rel="noopener noreferrer"
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
              <div className="flex gap-3"><MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" /><p>Oneplace 8th floor 807, Salunke Vihar, Pune- 411048, Maharashtra</p></div>
              <div className="flex gap-3"><Phone className="h-5 w-5 text-amber-500 flex-shrink-0" /><p>+91 8669888996</p></div>
              <div className="flex gap-3"><Mail className="h-5 w-5 text-amber-500 flex-shrink-0" /><p>hello@driwe.in</p></div>
              <div className="flex gap-3"><Clock className="h-5 w-5 text-amber-500 flex-shrink-0" /><p>Mon–Fri: 9am–6pm</p></div>
            </div>
          </div>

          {/* Map Card */}
          <div 
            className="card group relative rounded-xl border border-slate-200 bg-white overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02]" 
            title="Find Us"
          >
            {/* TODO: You may want to verify this Google Maps link points to the exact location. */}
            <iframe
              title="Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.032612347271!2d73.90401807521406!3d18.482092182596486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea427f62082f%3A0x1d5272a805a5a14!2sOne%20Place!5e0!3m2!1sen!2sin!4v1694514867495"
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
            <SocialIcon href="https://www.facebook.com/profile.php?id=61575003763571" label="Facebook" brand="#1877F2">
              <Facebook className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/driwe.in" label="Instagram" brand="#E1306C">
              <Instagram className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/company/driwe-app" label="LinkedIn" brand="#0A66C2">
              <Linkedin className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="https://www.threads.com/@driwe.in" label="Threads" brand="#000000">
              <ThreadsIcon className="h-5 w-5" />
            </SocialIcon>
          </div>
        </div>

        {/* Other Ways to Reach Us */}
        <div 
          className="card group relative lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02]" 
          title="More Contact Options"
        >
          <h3 className="text-base font-semibold mb-4">Other Ways to Reach Us</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 text-sm">
            <div className="flex flex-col items-start gap-2 rounded-lg border border-slate-200 p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <Newspaper className="h-5 w-5 text-amber-500" />
              <p className="font-medium">Press & Media</p>
              <p className="text-slate-600">press@driwe.in</p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border border-slate-200 p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <Share2 className="h-5 w-5 text-amber-500" />
              <p className="font-medium">Socials</p>
              <p className="text-slate-600">socials@driwe.in</p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border border-slate-200 p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <Headphones className="h-5 w-5 text-amber-500" />
              <p className="font-medium">24/7 Support</p>
              <p className="text-slate-600">support@driwe.in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
