import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Zap, Globe } from 'lucide-react'
import { UserMenu } from '@/app/components/landing/UserMenu'
import { PlatformCarousel } from '@/app/components/landing/PlatformCarousel'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">OnAds</span>
            </Link>

            {/* Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-purple-600 font-medium hover:text-purple-700 transition-colors scroll-smooth">
                Home
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors scroll-smooth">
                How it Works
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors scroll-smooth">
                Price
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm">English</span>
              </button>
              <UserMenu />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6">
        <div id="home" className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-100px)] py-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-base">
                Run high-performing ads on Google, Meta, Instagram, Bing & Snapchat<br className="hidden xl:block" />
                without relying on agencies or spending extra time
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                With Subscription
              </h1>
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                All Platforms<br />
                Starting $2
              </h2>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/auth/register">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Customers Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual - Multi-Platform Ad Carousel */}
          <PlatformCarousel />
        </div>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-32 scroll-mt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Subtitle Badge */}
              <div className="inline-flex items-center gap-2 text-gray-600">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-base">
                  Run high-performing ads across Google, Meta, Instagram, Bing & Snapchat<br className="hidden xl:block" />
                  All platforms in one place with AI automation
                </p>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  AI Ad Engine
                </h2>
                <h3 className="text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                  Visual and dynamic<br />
                  creativity
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Our AI-powered ad engine creates stunning, high-converting advertisements for all major platforms automatically. 
                  Support Google Ads, Meta, Instagram, Bing, and Snapchat. No design skills required.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-600 text-sm">✓</span>
                    </div>
                    <span>Automatically generate multiple ad variations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-600 text-sm">✓</span>
                    </div>
                    <span>AI optimizes images, headlines, and CTAs for maximum engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-600 text-sm">✓</span>
                    </div>
                    <span>Dynamic creativity adapts to your audience in real-time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-600 text-sm">✓</span>
                    </div>
                    <span>Save hours of design work and testing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Visual - Ad Examples */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300/30 via-pink-400/30 to-purple-400/30 rounded-[3rem] blur-3xl"></div>
              
              <div className="relative grid grid-cols-2 gap-4">
                {/* Ad Example 1 */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="aspect-[3/4] bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center p-6">
                    <div className="text-center space-y-4">
                      <div className="text-8xl">🏡</div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">Bring Joy</h3>
                        <p className="text-sm text-gray-600">Personalized<br />Home Lifestyle</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                      Shop Now
                    </button>
                  </div>
                </div>

                {/* Ad Example 2 */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 mt-8">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
                    <div className="text-center space-y-4">
                      <div className="text-8xl">🎄</div>
                      <div className="space-y-2 text-white">
                        <h3 className="text-xl font-bold">Festive Feasting</h3>
                        <p className="text-sm opacity-90">Slow & Joyful</p>
                        <p className="text-xs opacity-75">Premium pet food for special moments</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Dots */}
              <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 space-y-3">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                <div className="w-3 h-3 rounded-full bg-purple-300"></div>
                <div className="w-3 h-3 rounded-full bg-purple-200"></div>
              </div>
            </div>
          </div>

          {/* How It Works Steps */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Simple 3-Step Process
              </h2>
              <p className="text-xl text-gray-600">
                Start running high-performing ads in minutes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Connect Your Accounts</h3>
                <p className="text-gray-600">
                  Link your Google Ads, Meta Business, Bing Ads, and Snapchat accounts in seconds. Our secure integration ensures your data is protected.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Set Your Goals</h3>
                <p className="text-gray-600">
                  Tell us about your business goals and target audience. Our AI will create the perfect strategy for you.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Launch & Optimize</h3>
                <p className="text-gray-600">
                  Our AI automatically creates, tests, and optimizes your ads 24/7 for maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect plan for your business. All plans include full access to our AI-powered advertising platform.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
            {[
              {
                name: "3 Day Trial",
                price: "2.99",
                period: "/trial",
                description: "(Includes 3 days access)",
                badge: null,
                color: "from-blue-400 to-blue-600"
              },
              {
                name: "Monthly Access",
                price: "29.9",
                originalPrice: "$159",
                period: "/one time",
                description: "(Includes 1 month access)",
                badge: { text: "Save", discount: "81%" },
                color: "from-pink-400 to-pink-600"
              },
              {
                name: "Quarterly Access",
                price: "79.9",
                period: "/one time",
                description: "(Includes 3 months access)",
                badge: { text: "Save", discount: "83%" },
                color: "from-purple-400 to-purple-600"
              },
              {
                name: "Annual Access",
                price: "288",
                period: "/one time",
                description: "(Includes 12 months access)",
                badge: { text: "Save", discount: "65%" },
                color: "from-green-400 to-green-600"
              }
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden group hover:-translate-y-2"
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-6 right-6 flex items-center gap-2">
                    <div className={`bg-gradient-to-r ${plan.color} text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg`}>
                      <Globe className="w-3.5 h-3.5" />
                      <span className="text-xs font-semibold">{plan.badge.text}</span>
                    </div>
                    <div className={`bg-gradient-to-r ${plan.color} text-white px-3 py-1.5 rounded-full shadow-lg`}>
                      <span className="text-xs font-bold">{plan.badge.discount}</span>
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      ${plan.price}
                    </span>
                    <span className="text-gray-500 text-lg">
                      {plan.period}
                    </span>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-gray-400 line-through text-lg mb-1">
                      {plan.originalPrice}
                    </div>
                  )}
                  <p className="text-gray-500 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {[
                    "Instant AI Ad Creation",
                    "24/7 Fully-Automated Campaign Optimization",
                    "AI-Powered Audience Targeting",
                    "Recommendations for High-Converting Audiences",
                    "Dynamic AI Ad Creation",
                    "AI-Powered Market Insights",
                    "AI-Powered A/B Testing",
                    "AI-Optimized Ad Creatives",
                    "2 free AI video generation sessions"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/auth/register">
                  <Button
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white py-6 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Get Started Now
                  </Button>
                </Link>

                {/* Decorative gradient */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${plan.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`}></div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">No Credit Card Required</h4>
                <p className="text-sm text-gray-600">Start your trial without any payment information</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Cancel Anytime</h4>
                <p className="text-sm text-gray-600">No long-term commitments or hidden fees</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                <p className="text-sm text-gray-600">Get help whenever you need it from our team</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 lg:p-16 text-center">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to transform your advertising?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI to drive better results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-7 rounded-full shadow-lg"
                >
                  Start Your Free Trial
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2025 Mountain Lion lab AI HK Limited. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">
                Privacy Notice
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50">
        <span className="text-2xl group-hover:scale-110 transition-transform">💬</span>
      </button>
    </div>
  )
}
