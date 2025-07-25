"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  Users,
  Settings,
  Phone,
  FileText,
  Shield,
} from "lucide-react";
import SurveyModal from "./SurveyModal";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSurveyModal, setShowSurveyModal] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isSidebarOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen, isMobile]);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Users },
    { href: "/services", label: "Services", icon: Settings },
    { href: "/contact", label: "Contact", icon: Phone },
    { href: "/terms", label: "Terms", icon: FileText },
    { href: "/privacy", label: "Privacy", icon: Shield },
  ];

  return (
    <>
      <header className="px-6 lg:px-10 h-16 flex items-center justify-between border-b bg-white sticky top-0 z-50 shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/driwe-logo.svg"
            alt="DriWE Logo"
            width={isMobile ? 100 : 120}
            height={isMobile ? 32 : 40}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-2 items-center ml-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition ${
                  isActive
                    ? "bg-yellow-100 text-yellow-700"
                    : "text-gray-800 hover:text-yellow-600 hover:bg-yellow-50"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {item.label}
              </Link>
            );
          })}

          <Button
            onClick={() => setShowSurveyModal(true)}
            className="ml-4 text-sm font-semibold text-white bg-[#fcd129] hover:bg-yellow-600 active:scale-95 transition-transform"
          >
            Book Now
          </Button>
        </nav>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            onClick={() => setShowSurveyModal(true)}
            className="text-sm font-semibold text-white bg-[#fcd129] hover:bg-yellow-600 active:scale-95"
          >
            Book Now
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-yellow-50 rounded-lg hover:text-yellow-600 active:scale-95"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50">
            <div className="flex items-center justify-between p-4 border-b">
              <Image
                src="/images/driwe-logo.svg"
                alt="DriWE Logo"
                width={100}
                height={32}
                className="h-8 w-auto"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg active:scale-95"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="p-4 overflow-y-auto max-h-[calc(100vh-200px)] space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all active:scale-95 ${
                      isActive
                        ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                        : "text-black hover:bg-yellow-50 hover:text-yellow-600"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium text-sm">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-yellow-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-3">Ready to ride?</p>
                <Button
                  onClick={() => setShowSurveyModal(true)}
                  className="w-full text-black bg-[#fcd129] hover:bg-yellow-500 py-3 text-sm active:scale-95 transition"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Modal outside */}
      <SurveyModal
        visible={showSurveyModal}
        onClose={() => setShowSurveyModal(false)}
      />
    </>
  );
}
