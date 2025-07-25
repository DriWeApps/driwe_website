"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ fullName: "", email: "", message: "" })
    alert("Thank you for your message! We will get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section - Changed to yellow gradient */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-black px-2">
              Let's Connect
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              Our support team is ready to help you every step of the way.
            </p>
            <div className="w-20 sm:w-24 h-1 mx-auto" style={{ backgroundColor: "#fcd129" }}></div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Mobile optimized */}
      <section className="w-full py-8 sm:py-12 md:py-16">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full h-11 sm:h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-11 sm:h-12 text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type here your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[100px] sm:min-h-[120px] text-base resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 sm:py-4 text-base active:scale-95 transition-transform"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information - Mobile optimized with yellow theme */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4 sm:p-6">
                <div
                  className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#fef3cd" }}
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: "#fcd129" }} />
                </div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">Phone</h3>
                <p className="text-xs sm:text-sm text-gray-600">+91 8669888996</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4 sm:p-6">
                <div
                  className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#fef3cd" }}
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: "#fcd129" }} />
                </div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">Email</h3>
                <p className="text-xs sm:text-sm text-gray-600 break-all">hello@driwe.in</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4 sm:p-6">
                <div
                  className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#fef3cd" }}
                >
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: "#fcd129" }} />
                </div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">Hours</h3>
                <p className="text-xs sm:text-sm text-gray-600">24/7 Support</p>
                <p className="text-xs sm:text-sm text-gray-600">Always Available</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4 sm:p-6">
                <div
                  className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#fef3cd" }}
                >
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: "#fcd129" }} />
                </div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">Location</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Oneplace 8th floor 807, Salunke Vihar, Pune- 411048, Maharashtra
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
