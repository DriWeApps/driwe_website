"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Home, Users, Settings, Phone, Shield, Contact, Menu, X } from "lucide-react"

export default function Header() {
  const [pathname, setPathname] = useState("/")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen && isMobile ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isSidebarOpen, isMobile])

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Users },
    { href: "/services", label: "Services", icon: Settings },
    { href: "/contact", label: "Contact", icon: Phone },
    { href: "/support", label: "Support", icon: Contact },
    { href: "/why-choose", label: "Why Choose Us", icon: Shield },
  ]

  const getNavLinkClasses = (href: string) => {
    const isActive = pathname === href
    return `
      flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 active:scale-95
      ${isActive
        ? "bg-yellow-100 text-black border border-yellow-200 font-bold"
        : "text-gray-700 hover:bg-gray-100 hover:text-black"
      }
    `
  }

  // --- Mobile Header ---
const renderMobileHeader = () => (
  <div className="flex items-center justify-between w-full px-4 py-2">
    {/* Menu Button (Left) */}
    <button
      onClick={() => setIsSidebarOpen(true)}
      className="p-2 transition-all duration-200 rounded-lg active:scale-95 text-black hover:bg-gray-100"
    >
      <Menu className="h-6 w-6" />
      <span className="sr-only">Open menu</span>
    </button>

    {/* Centered Logo */}
    <div className="relative w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-auto aspect-[140/60]">
  <Image
    src="/images/driwe-logo.svg"
    alt="DriWE Logo"
    fill
    className="object-contain"
    priority
  />
</div>


    {/* Placeholder for right alignment (can be empty or used for actions) */}
    <div className="w-6"></div>

    {/* Overlay */}
    {isSidebarOpen && (
      <div
        className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden"
        onClick={() => setIsSidebarOpen(false)}
      />
    )}

    {/* Sidebar */}
    <div
      className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="h-8 w-auto text-yellow-500 font-bold text-2xl">DriWE</div>
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="p-2 hover:bg-gray-100 rounded-lg active:scale-95"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close menu</span>
        </button>
      </div>

      {/* Nav */}
      <nav className="p-4 overflow-y-auto max-h-[calc(100vh-180px)]">
        <div className="space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => { setPathname(item.href); setIsSidebarOpen(false) }}
                className={getNavLinkClasses(item.href)}
              >
                <IconComponent className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium text-base">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
        <Link href="/booking">
          <button
            className="w-full text-black py-3 text-base rounded-lg shadow-md hover:bg-yellow-500 active:scale-95 transition-transform"
            style={{ backgroundColor: "#fcd129" }}
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  </div>
);


  // --- Desktop Header ---
  const renderDesktopHeader = () => (
    <header className="hidden md:flex items-center justify-between px-6 h-20 border-b bg-white sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="h-25 w-auto text-yellow-500 font-bold text-3xl">
          <Image
            src="/images/driwe-logo.svg"
            alt="DriWE Logo"
            width={120}
            height={40}
            className="h-24 w-auto"
            priority
          />
        </div>
      </Link>

      {/* Nav */}
      <nav className="flex-grow flex justify-center space-x-2 lg:space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setPathname(item.href)}
            className={`
              inline-flex items-center h-10 px-4 rounded-lg transition-colors duration-200
              ${pathname === item.href
                ? "bg-yellow-100 text-black font-bold"
                : "text-gray-600 hover:bg-gray-100 hover:text-yellow-600"
              }
            `}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Button */}
      <Link href="/booking">
        <button
          className="inline-flex h-12 items-center justify-center rounded-lg bg-[#fcd129] px-6 py-3 text-sm font-semibold text-black shadow transition-colors hover:bg-yellow-500 active:scale-95"
        >
          Book Now
        </button>
      </Link>
    </header>
  )

  return <>{isMobile ? renderMobileHeader() : renderDesktopHeader()}</>
}
