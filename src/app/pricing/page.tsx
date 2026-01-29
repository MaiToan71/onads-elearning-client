import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Zap, Globe, Check, Lock } from 'lucide-react'

export default function PricingPage() {
  const plans = [
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
  ]

  const features = [
    "Instant AI Ad Creation",
    "24/7 Fully-Automated Campaign Optimization",
    "AI-Powered Audience Targeting",
    "Recommendations for High-Converting Audiences",
    "Dynamic AI Ad Creation",
    "AI-Powered Market Insights",
    "AI-Powered A/B Testing",
    "AI-Optimized Ad Creatives",
    "2 free AI video generation sessions"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-pink-50/50">
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
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How it Works
              </Link>
              <Link href="/pricing" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                Price
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm">English</span>
              </button>
              <Link href="/auth/login">
                <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                  Sign in
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 rounded-full">
                  Sign up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Pricing Content */}
      <main className="container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your business. All plans include full access to our AI-powered advertising platform.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden group hover:-translate-y-2"
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <div className={`bg-gradient-to-r ${plan.color} text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg`}>
                    <Lock className="w-3.5 h-3.5" />
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
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white py-6 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                Get Started Now
              </Button>

              {/* Decorative gradient */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${plan.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`}></div>
            </div>
          ))}
        </div>

        {/* FAQ or Additional Info Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              All Plans Include
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">No Credit Card Required</h3>
                <p className="text-sm text-gray-600">Start your trial without any payment information</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Cancel Anytime</h3>
                <p className="text-sm text-gray-600">No long-term commitments or hidden fees</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                <p className="text-sm text-gray-600">Get help whenever you need it from our team</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 lg:p-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is here to help you choose the right plan for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-7 rounded-full shadow-lg"
                >
                  Start Free Trial
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
        </div>
      </main>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50">
        <span className="text-2xl group-hover:scale-110 transition-transform">💬</span>
      </button>
    </div>
  )
}
