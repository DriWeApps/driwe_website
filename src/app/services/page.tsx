"use client";
import { Car, Plane, Clock, Package, Building2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const services = [
    {
      icon: Car,
      title: "City Rides",
      description:
        "Quick and convenient rides within the city. Perfect for daily commutes and short trips.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Plane,
      title: "Airport Transfer",
      description:
        "Reliable airport pickups and drops with flight tracking and waiting time included.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Car,
      title: "Auto Rickshaw",
      description:
        "Budget-friendly three-wheeler rides for short distances and narrow lanes.",  
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Hourly Rental",
      description:
        "Book a car for multiple hours or full day for meetings, shopping, or sightseeing.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Package,
      title: "Goods Transport",
      description:
        "Safe and secure transportation for packages, furniture, and commercial goods.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Building2,
      title: "Corporate",
      description:
        "Business solutions with dedicated account management and priority support.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content:
        "I use DriWe for my daily office commute. The drivers are punctual, and I can book my return trip while going to work. It's so convenient!",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
    {
      name: "Rajesh Kumar",
      role: "Business Traveler",
      content:
        "Airport transfer is hassle-free using DriWe. They track my flights and adjust pickup times automatically. Professional service every time.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
    {
      name: "Sarah Johnson",
      role: "Event Manager",
      content:
        "For client meetings and events, DriWe's hourly rental is perfect. Clean cars, professional drivers, and transparent billing.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
  ];

  const fleet = [
    {
      type: "Compact",
      description: "Perfect for 1-2 passengers",
      image:
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2",
    },
    {
      type: "Sedan",
      description: "Comfortable for 3-4 passengers",
      image:
        "https://d2s8i866417m9.cloudfront.net/photo/23211775/photo/thumb-4da9e27d735cca63438b015ddaa77e3d.jpg",
    },
    {
      type: "SUV",
      description: "Spacious for 5-6 passengers",
      image:
        "https://images10.gaadi.com/usedcar_image/4697349/original/processed_0c6258998285c8813b7ec46d6efcbaa2.jpg?imwidth=420",
    },
    {
      type: "Auto",
      description: "Budget-friendly for 2-3 passengers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5EgT5Ud-4sbsf-1jKeLQtAuex1hB0alNdw&s",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#fcd129] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-black/90 mb-8 max-w-3xl mx-auto">
            From quick city rides to fleet delivery services, we offer every
            transportation need covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#fcd129] hover:bg-gray-50 hover:text-orange-500 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Now
              </Button>
            <Button
              size="lg"
              variant="outline"
                className="bg-white text-[#fcd129] hover:bg-gray-50 hover:text-orange-500 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Service
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xxl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    
                      {/* <span className="text-sm font-medium text-gray-500">{service.price}</span> */}
                      <Button className="bg-[#fcd129] from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white text-sm px-4 py-2 rounded-lg transition-all duration-300">
                        Book Now
                      </Button>
                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Stories, Real Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xxl transition-all duration-300 bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    {testimonial.name.includes("Priya")
                      ? "Daily Commuter"
                      : testimonial.name.includes("Rajesh")
                      ? "Airport Transfer"
                      : "Business Events"}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-600">
                      5.0
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Fleet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleet.map((vehicle, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.type}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {vehicle.type}
                  </h3>
                  <p className="text-gray-600">{vehicle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
