import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Zap, Globe, ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default function HowItWorksPage() {
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
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/how-it-works" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                How it Works
              </Link>
              <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
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

      {/* How it Works Content */}
      <main className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-100px)] py-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Back Link */}
            <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>

            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-base">
                Run high-performing ads on Meta & Instagram without<br className="hidden xl:block" />
                relying on agencies or spending extra time
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                AI Ad Engine
              </h1>
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                Visual and dynamic<br />
                creativity
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Our AI-powered ad engine creates stunning, high-converting advertisements automatically. 
                No design skills required.
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
        <section className="py-20 border-t border-gray-200">
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
              <h3 className="text-2xl font-bold text-gray-900">Connect Your Account</h3>
              <p className="text-gray-600">
                Link your Meta Business account in seconds. Our secure integration ensures your data is protected.
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
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to transform your advertising?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI to drive better results
            </p>
            <Link href="/auth/register">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-7 rounded-full shadow-lg"
              >
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
        <span className="text-2xl group-hover:scale-110 transition-transform">💬</span>
      </button>
    </div>
  )
}
