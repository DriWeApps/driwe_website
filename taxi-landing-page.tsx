import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Car,
  Clock,
  Shield,
  DollarSign,
  MapPin,
  Smartphone,
  CreditCard,
  Star,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TaxiLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Car className="h-8 w-8 text-yellow-500" />
          <span className="ml-2 text-2xl font-bold text-gray-900">QuickRide</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-yellow-500 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-yellow-500 transition-colors">
            How It Works
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-yellow-500 transition-colors">
            Contact
          </Link>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Ride,
                    <span className="text-yellow-500"> Anytime</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Book a safe, reliable taxi in seconds. Available 24/7 with professional drivers and affordable
                    rates.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Download App
                  </Button>
                  <Button variant="outline" size="lg">
                    Book Now
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-medium">4.8/5</span>
                  </div>
                  <span>•</span>
                  <span>10,000+ Happy Customers</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Taxi App Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose QuickRide?</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the best taxi service with our premium features designed for your comfort and convenience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <Card>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <Clock className="h-8 w-8 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Quick Booking</h3>
                      <p className="text-gray-600">
                        Book your ride in under 30 seconds with our intuitive app interface.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <Shield className="h-8 w-8 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Safe & Secure</h3>
                      <p className="text-gray-600">
                        All drivers are verified and vehicles are regularly inspected for your safety.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <DollarSign className="h-8 w-8 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Affordable Rates</h3>
                      <p className="text-gray-600">
                        Transparent pricing with no hidden fees. Pay what you see upfront.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width="500"
                  height="400"
                  alt="Features"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Getting your ride is as easy as 1-2-3. Follow these simple steps to book your taxi.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">1. Set Location</h3>
                  <p className="text-gray-600">Enter your pickup location and destination in the app.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
                    <Car className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">2. Choose Ride</h3>
                  <p className="text-gray-600">Select from available vehicles and confirm your booking.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
                    <CreditCard className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">3. Pay & Go</h3>
                  <p className="text-gray-600">Pay securely through the app and enjoy your comfortable ride.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500">50K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500">1000+</div>
                <div className="text-gray-600">Professional Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500">24/7</div>
                <div className="text-gray-600">Service Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500">4.8★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-yellow-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-yellow-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Download our app now and experience the future of taxi booking. Your next ride is just a tap away.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="bg-white text-yellow-500 hover:bg-gray-100">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="secondary" className="bg-white text-yellow-500 hover:bg-gray-100">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Download for Android
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter for the latest updates, promotions, and taxi booking tips.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our{" "}
                  <Link href="/privacy" className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-white"
      >
        <div className="container grid gap-6 lg:grid-cols-4">
          <div className="space-y-2">
            <div className="flex items-center">
              <Car className="h-6 w-6 text-yellow-500" />
              <span className="ml-2 text-xl font-bold">QuickRide</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your reliable taxi service partner, available 24/7 for all your transportation needs.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-1 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@quickride.com</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-1 text-sm text-gray-400">
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                About Us
              </Link>
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                Driver Portal
              </Link>
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                Help Center
              </Link>
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex space-x-2">
              <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} QuickRide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
