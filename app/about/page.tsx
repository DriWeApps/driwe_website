import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Changed to yellow gradient */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-black">About us</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">The Power Behind Every Ride and Delivery</p>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: "#fcd129" }}></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              At DriWE, we're reimagining the way cities move. Whether you're heading across town or sending a package
              across the city, we deliver fast, safe, and affordable solutions — all from one easy-to-use app.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our platform connects you with verified drivers and transport partners, ensuring every ride and delivery
              is smooth, secure, and reliable. From daily commutes to last-minute logistics, Driwe is your go-to for
              getting things and people where they need to be. Built on the pillars of safety, convenience, and
              transparency, we're constantly evolving to meet the needs of modern life. Join the growing community that
              trusts Driwe to move with confidence anytime, anywhere. Driwe is on a mission to transform urban mobility
              by offering integrated transport solutions for both people and goods. Our app bridges the gap between
              personal travel and logistics, delivering speed, safety, and affordability in every booking.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We partner with rigorously screened drivers and transport professionals to ensure every journey and
              delivery is handled with care. From on-demand cab rides to dependable package transport, Driwe is built to
              support the rhythm of modern city life. Our focus on technology, trust, and transparency drives us to
              continually improve the way urban transport works — making it more accessible, efficient, and reliable for
              all.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black mb-4">Our Vision & Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To make everyday travel and delivery easier, smarter, and more reliable for everyone
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <div
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#fef3cd" }}
                >
                  <Target className="h-8 w-8" style={{ color: "#fcd129" }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#fcd129" }}>
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To revolutionize urban mobility by providing seamless, safe, and affordable transportation solutions
                  that connect communities and enhance daily life.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#fef3cd" }}
                >
                  <Users className="h-8 w-8" style={{ color: "#fcd129" }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#fcd129" }}>
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be the leading platform that transforms how people and goods move in cities, creating a more
                  connected and efficient urban ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#fef3cd" }}
                >
                  <Heart className="h-8 w-8" style={{ color: "#fcd129" }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#fcd129" }}>
                  Our Values
                </h3>
                <p className="text-gray-600">
                  Safety first, customer-centric approach, transparency in all dealings, and continuous innovation to
                  serve our community better.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
