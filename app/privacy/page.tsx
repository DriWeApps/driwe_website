"use client"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Changed to yellow gradient */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-black">Privacy Policy</h1>
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
                    href="#information"
                    className="block text-sm text-gray-700 border-b border-yellow-300 pb-2 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    1. Information We Collect
                  </a>
                  <a
                    href="#usage"
                    className="block text-sm text-gray-700 border-b border-yellow-300 pb-2 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    2. How We Use Your Information
                  </a>
                  <a
                    href="#sharing"
                    className="block text-sm text-gray-700 border-b border-yellow-300 pb-2 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    3. Sharing Your Information
                  </a>
                  <a
                    href="#rights"
                    className="block text-sm text-gray-700 border-b border-yellow-300 pb-2 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    4. Your Rights and Choices
                  </a>
                  <a
                    href="#usage-info"
                    className="block text-sm text-gray-700 border-b border-yellow-300 pb-2 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    5. How We Use Your Information
                  </a>
                  <a
                    href="#sharing-info"
                    className="block text-sm text-gray-700 border-b border-yellow-300 pb-2 transition-colors"
                    style={{ color: "#fcd129" }}
                    onMouseEnter={(e) => (e.target.style.color = "#fcd129")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    6. Sharing Your Information
                  </a>
                  <a
                    href="#rights-choices"
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
                      We are committed to protecting your personal information and your right to privacy. This Privacy
                      Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                      website, use our services, or otherwise interact with us.
                    </p>
                  </div>
                </div>

                <section id="information" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may collect the following types of information:
                  </p>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Personal Information:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Name, email address, phone number, & other contact details.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Usage Data:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      IP address, browser type, pages visited, time spent, and other analytics.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Cookies and Tracking:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may use cookies & similar tracking technologies to enhance user experience.
                    </p>
                  </div>
                </section>

                <section id="usage" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Provide and maintain our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Improve our services and develop new features</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section id="sharing" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">3. Sharing Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>With service providers who assist us in operating our business</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                    <li>With your consent or at your direction</li>
                  </ul>
                </section>

                <section id="rights" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">4. Your Rights and Choices</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Restriction of processing</li>
                    <li>Data portability</li>
                    <li>Objection to processing</li>
                  </ul>
                </section>

                <section id="security" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. However, no method
                    of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section id="cookies" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies and similar tracking technologies to collect and use personal information about you.
                    You can control cookies through your browser settings and other tools.
                  </p>
                </section>

                <section id="children" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect
                    personal information from children under 13.
                  </p>
                </section>

                <section id="changes" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">8. Changes to This Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the "Last Updated" date.
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
