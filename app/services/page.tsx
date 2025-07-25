import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Clock, Shield, MapPin, CreditCard, Users, Calendar } from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Mobile optimized */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-black px-2">
              Services that move you
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              From quick cab bookings to reliable transport — we've got every route covered.
            </p>
            <div className="w-20 sm:w-24 h-1 mx-auto" style={{ backgroundColor: "#3b006a" }}></div>
          </div>
        </div>
      </section>

      {/* Main Service - Cab Booking - Mobile optimized */}
      <section className="w-full py-8 sm:py-12 md:py-16">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="grid gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="bg-yellow-500 text-white px-3 sm:px-4 py-2 rounded-lg font-bold text-lg sm:text-xl md:text-2xl self-start">
                  01
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Cab Booking Service</h2>
                  <div className="w-12 sm:w-16 h-1 bg-yellow-500 mb-4 sm:mb-6"></div>
                </div>
              </div>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Get a reliable ride anytime, anywhere. Our easy-to-use app connects you with professional drivers for
                quick, safe, and affordable trips whether it's a daily commute, airport transfer, or a night out. Just
                tap, book, and ride with confidence.
              </p>

              <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Available 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Verified professional drivers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Real-time tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Cashless payments</span>
                </div>
              </div>

              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 w-full sm:w-auto text-sm sm:text-base active:scale-95 transition-transform">
                Book Now
              </Button>
            </div>

            <div className="flex items-center justify-center order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                width="400"
                height="320"
                alt="Professional driver with smartphone in car"
                className="rounded-xl shadow-lg object-cover w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-lg h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services - Mobile optimized */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mb-3 sm:mb-4 px-2">
              More Services Coming Soon
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
              We're constantly expanding our services to meet all your transportation needs.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div
                  className="mx-auto mb-3 sm:mb-4 md:mb-6 flex h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#f3e8ff" }}
                >
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" style={{ color: "#3b006a" }} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">Ride Sharing</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm md:text-base leading-relaxed">
                  Share rides with other passengers going in the same direction. Eco-friendly and cost-effective.
                </p>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                  Coming Soon
                </span>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div
                  className="mx-auto mb-3 sm:mb-4 md:mb-6 flex h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#f3e8ff" }}
                >
                  <Car className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" style={{ color: "#3b006a" }} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">Premium Rides</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm md:text-base leading-relaxed">
                  Luxury vehicles for special occasions, business meetings, and VIP transportation needs.
                </p>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                  Coming Soon
                </span>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div
                  className="mx-auto mb-3 sm:mb-4 md:mb-6 flex h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#f3e8ff" }}
                >
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" style={{ color: "#3b006a" }} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">Scheduled Rides</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm md:text-base leading-relaxed">
                  Book your rides in advance for important appointments, flights, and regular commutes.
                </p>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                  Coming Soon
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Features - Mobile optimized */}
      <section className="w-full py-8 sm:py-12 md:py-16">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mb-3 sm:mb-4 px-2">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-3 sm:mb-4 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-yellow-500 text-white">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-bold mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">Fast Response</h3>
              <p className="text-xs md:text-sm text-gray-600">Average pickup time under 5 minutes</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 sm:mb-4 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-yellow-500 text-white">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-bold mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">Safety First</h3>
              <p className="text-xs md:text-sm text-gray-600">All drivers background checked</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 sm:mb-4 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-yellow-500 text-white">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-bold mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">Live Tracking</h3>
              <p className="text-xs md:text-sm text-gray-600">Track your ride in real-time</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 sm:mb-4 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-yellow-500 text-white">
                <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-bold mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">Easy Payment</h3>
              <p className="text-xs md:text-sm text-gray-600">Multiple payment options</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
