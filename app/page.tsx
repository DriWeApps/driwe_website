"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, DollarSign, MapPin, Smartphone, CreditCard, Car } from "lucide-react"
import Image from "next/image"
import SurveyModal from '@/components/SurveyModal';
import Particles from "@/components/particles";
import React, { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 relative overflow-hidden">
        {/* Particles behind yellow hero section */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles />
        </div>

        <div className="flex flex-col">
          <SurveyModal />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Tap <span className="text-gray-800">|</span> Ride <span className="text-gray-800">|</span>
                  <span className="text-black"> Dri</span>
                  <span style={{ color: "#3b006a" }}>WE</span>
                </h1>
                <p className="text-lg md:text-xl text-black font-semibold">Seamless transport, anytime you need it!</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/images/driwe-hero-logo.svg"
                width="400"
                height="400"
                alt="DriWE Logo"
                className="max-w-full h-auto w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DriWE Section - Mobile optimized */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-white">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter px-2">
              Why Choose Dri<span style={{ color: "#3b006a" }}>WE</span>?
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4 sm:p-6">
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Quick Booking</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Book your ride in under 30 seconds with our intuitive app interface.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4 sm:p-6">
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Safe & Secure</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  All drivers are verified and vehicles are regularly inspected for your safety.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6">
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Affordable Rates</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Transparent pricing with no hidden fees. Pay what you see upfront.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section - Mobile optimized */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter px-2">
              How It Works
            </h2>
            <p className="max-w-[900px] mx-auto text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 px-4">
              Getting your ride is as easy as 1-2-3. Follow these simple steps to book your taxi.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4 sm:p-6">
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">1. Set Location</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Enter your pickup location and destination in the app.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4 sm:p-6">
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <Car className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">2. Choose Ride</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Select from available vehicles and confirm your booking.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6">
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">3. Pay & Go</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Pay securely through the app and enjoy your comfortable ride.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile optimized */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-yellow-500">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-white px-2">
              Ready to Get Started?
            </h2>
            <p className="max-w-[600px] mx-auto text-yellow-100 text-sm sm:text-base md:text-lg lg:text-xl px-4">
              Download our app now and experience the future of taxi booking. Your next ride is just a tap away.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-yellow-500 hover:bg-gray-100 w-full sm:w-auto py-3 sm:py-4 text-sm sm:text-base active:scale-95 transition-transform"
              >
                <Smartphone className="mr-2 h-4 w-4" />
                Download for iOS
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-yellow-500 hover:bg-gray-100 w-full sm:w-auto py-3 sm:py-4 text-sm sm:text-base active:scale-95 transition-transform"
              >
                <Smartphone className="mr-2 h-4 w-4" />
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
