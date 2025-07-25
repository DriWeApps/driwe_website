"use client"

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Changed to yellow gradient */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-black">Terms of services</h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: "#fcd129" }}></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="bg-yellow-100 p-6 rounded-lg sticky top-24">
                <h3 className="text-lg font-bold mb-4">Table of Content</h3>
                <nav className="space-y-2">
                  <a
                    href="#acceptance"
                    className="block text-sm text-gray-700 border-b border-yellow-300 pb-2 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    1. Acceptance of Terms
                  </a>
                  <a
                    href="#eligibility"
                    className="block text-sm text-gray-700 border-b border-yellow-300 pb-2 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    2. Eligibility
                  </a>
                  <a
                    href="#account"
                    className="block text-sm text-gray-700 border-b border-yellow-300 pb-2 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    3. Account Registration and Security
                  </a>
                  <a
                    href="#services"
                    className="block text-sm text-gray-700 border-b border-yellow-300 pb-2 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    4. Services Provided
                  </a>
                  <a
                    href="#conduct"
                    className="block text-sm text-gray-700 border-b border-yellow-300 pb-2 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    5. User Conduct and Responsibilities
                  </a>
                  <a
                    href="#sharing"
                    className="block text-sm text-gray-700 border-b border-yellow-300 pb-2 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    6. Sharing Your Information
                  </a>
                  <a
                    href="#rights"
                    className="block text-sm text-gray-700 border-b border-yellow-300 pb-2 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    7. Your Rights and Choices
                  </a>
                  <a
                    href="#security"
                    className="block text-sm text-gray-700 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    8. Data Security
                  </a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <div className="flex items-start space-x-4 mb-8">
                  <div className="text-6xl">💬</div>
                  <div>
                    <p className="text-lg leading-relaxed">
                      Welcome to Driwe! These Terms of Service ("Terms") govern your access to and use of the Driwe
                      mobile application (the "App"), our website, and all related services (collectively, the
                      "Services"). By accessing or using the Services, you agree to be bound by these Terms. If you do
                      not agree to these Terms, do not use our Services.
                    </p>
                  </div>
                </div>

                <section id="acceptance" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By creating an account, accessing, or using the Driwe Services, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms, as well as our Privacy Policy.
                  </p>
                </section>

                <section id="eligibility" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
                  <p className="text-gray-700 leading-relaxed">
                    You must be at least 18 years old to create an account and use the Driwe Services. By using the
                    Services, you represent and warrant that you are at least 18 years old and capable of entering into
                    a binding agreement.
                  </p>
                </section>

                <section id="account" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">3. Account Registration and Security</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To use certain features of our Services, you must create an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and update your account information</li>
                    <li>Keep your login credentials secure and confidential</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                </section>

                <section id="services" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">4. Services Provided</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Driwe provides a platform that connects users with transportation and delivery services. Our
                    services include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Ride booking and transportation services</li>
                    <li>Package delivery services</li>
                    <li>Real-time tracking and communication features</li>
                    <li>Payment processing services</li>
                  </ul>
                </section>

                <section id="conduct" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">5. User Conduct and Responsibilities</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">When using our Services, you agree to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Treat drivers and other users with respect</li>
                    <li>Provide accurate pickup and destination information</li>
                    <li>Pay all fees and charges associated with your use of the Services</li>
                    <li>Not use the Services for illegal or unauthorized purposes</li>
                  </ul>
                </section>

                <section id="sharing" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">6. Payment and Fees</h2>
                  <p className="text-gray-700 leading-relaxed">
                    You agree to pay all fees and charges associated with your use of the Services. Payment will be
                    processed through your chosen payment method. We reserve the right to change our pricing structure
                    at any time with reasonable notice.
                  </p>
                </section>

                <section id="rights" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To the maximum extent permitted by law, Driwe shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages arising out of or relating to your use of the Services.
                  </p>
                </section>

                <section id="security" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may terminate or suspend your account and access to the Services at any time, with or without
                    notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third
                    parties.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
