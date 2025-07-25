'use client';

import { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const SHEETBEST_URL = 'https://api.sheetbest.com/sheets/0bd30dcf-f640-4d2b-8994-9a630c79a00d';

interface SurveyModalProps {
  visible?: boolean;
  onClose?: () => void;
}

export default function SurveyModal({ visible = false, onClose }: SurveyModalProps) {
  const [showModal, setShowModal] = useState(visible);
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    age: '',
  });

  
  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => setShowModal(true), 2000);
      return () => clearTimeout(timer);
    } else {
      setShowModal(true);
    }
  }, [visible]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValidMobile = /^[0-9]{10}$/.test(formData.mobileNumber);
    const isValidAge = /^[1-9][0-9]?$/.test(formData.age);

    if (!formData.name.trim()) return alert('Name is required.');
    if (!isValidMobile) return alert('Mobile Number must be exactly 10 digits.');
    if (!isValidAge) return alert('Age must be a number between 0 and 99.');

    try {
      await fetch(SHEETBEST_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
      toast.success('Thank you for your response!');
      setFormData({ name: '', mobileNumber: '', email: '', age: '' });

      setTimeout(() => {
        setShowModal(false);
        onClose?.();
      }, 2000);
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 animate-fadeIn"
      >
        <Toaster position="top-center" />
        <h2 className="text-2xl font-bold text-center  mb-4">
          Unlock Exclusive Access to <br />
          <span style={{ color: "#fcd129" }}>Dri</span>
          <span style={{ color: "#3b006a" }}>We</span>
        </h2>

        {submitted ? (
          <p className="text-green-600 text-center font-medium">
             Thank you for your response!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="mobileNumber"
              required
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength={10}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="age"
              required
              placeholder="Your Age"
              value={formData.age}
              onChange={(e) => {
                const val = e.target.value;
                if (val === '' || (/^\d{1,2}$/.test(val) && +val <= 99)) {
                  setFormData({ ...formData, age: val });
                }
              }}
              min={0}
              max={99}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address (optional)"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            
            <button
  type="submit"
  className="
    border-none w-full h-12 rounded-full flex justify-center items-center gap-3
    bg-[#fcd129] cursor-pointer transition-all duration-450 ease-in-out
    group
    shadow
    hover:bg-gradient-to-t hover:from-[#3b0060] hover:to-[#3b006a]
    hover:shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2),inset_0px_-2px_0px_0px_rgba(0,0,0,0.1),0px_0px_0px_2px_rgba(255,255,255,0.2),0px_0px_40px_0px_#9917FF]
    hover:-translate-y-0.5
    "
>
  
  <span className="font-semibold text-black text-base transition-colors group-hover:text-white">
    Submit
  </span>
</button>
          </form>
        )}
      </div>
    </div>
  );
}
