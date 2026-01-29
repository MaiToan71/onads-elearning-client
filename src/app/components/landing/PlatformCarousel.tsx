'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Globe, MapPin, Search, Camera, Heart, MessageCircle, Share2 } from 'lucide-react'

const platformAds = [
  {
    platform: 'Meta/Facebook',
    color: 'from-blue-500 to-blue-700',
    icon: '📘',
    content: (
      <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-lg mx-auto">
        {/* Ad Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              O
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">OnAds Platform</h3>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <span>Sponsored</span>
                <span>•</span>
                <Globe className="w-3 h-3" />
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>

        {/* Ad Text */}
        <div className="mb-4">
          <p className="text-gray-900 font-medium mb-1">
            Transform your business with AI-powered advertising
          </p>
          <p className="text-gray-600 text-sm">
            Run high-performing ads on Meta & Instagram without relying on agencies.
          </p>
        </div>

        {/* Ad Images */}
        <div className="grid grid-cols-2 gap-2 mb-4 rounded-xl overflow-hidden">
          <div className="aspect-square bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg flex items-center justify-center">
            <div className="text-6xl">🚀</div>
          </div>
          <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center">
            <div className="text-6xl">📊</div>
          </div>
        </div>

        {/* Ad CTAs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="font-semibold text-sm mb-1">Get Started</div>
            <div className="text-xs text-gray-500 mb-2">Start your trial today</div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 rounded-md transition-colors">
              Sign Up Free
            </button>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="font-semibold text-sm mb-1">Learn More</div>
            <div className="text-xs text-gray-500 mb-2">See how it works</div>
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium text-sm py-2 rounded-md transition-colors">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center gap-2 mb-3 pb-3 border-b">
          <div className="flex items-center -space-x-1">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] border-2 border-white">👍</div>
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-[10px] border-2 border-white">❤️</div>
            <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center text-white text-[10px] border-2 border-white">😮</div>
          </div>
          <span className="text-sm text-gray-600">324</span>
          <div className="ml-auto flex items-center gap-4 text-sm text-gray-600">
            <span>45 Comments</span>
            <span>23 Shares</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-around">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50">
            <span className="text-xl">👍</span>
            <span className="font-medium text-sm">Like</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50">
            <span className="text-xl">💬</span>
            <span className="font-medium text-sm">Comment</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50">
            <span className="text-xl">↗️</span>
            <span className="font-medium text-sm">Share</span>
          </button>
        </div>
      </div>
    )
  },
  {
    platform: 'Google Ads',
    color: 'from-red-500 to-yellow-500',
    icon: '🔍',
    content: (
      <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-lg mx-auto">
        {/* Google Search Bar */}
        <div className="mb-6">
          <div className="flex items-center gap-3 p-4 border-2 rounded-full shadow-sm">
            <Search className="w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              value="best ai advertising platform"
              readOnly
              className="flex-1 outline-none text-gray-700 text-sm"
            />
          </div>
        </div>

        {/* Google Ad */}
        <div className="border rounded-2xl p-5 bg-gradient-to-br from-gray-50 to-white shadow-sm mb-4">
          {/* Ad Label */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-gray-900 bg-yellow-100 px-2 py-1 rounded">Ad</span>
            <span className="text-xs text-gray-500">onads.io</span>
          </div>

          {/* Ad Content */}
          <div className="mb-3">
            <h3 className="text-blue-600 text-xl font-semibold mb-2 hover:underline cursor-pointer">
              OnAds - AI-Powered Meta Advertising Platform
            </h3>
            <div className="flex items-center gap-1 text-xs text-green-700 mb-2">
              <Globe className="w-3 h-3" />
              <span>www.onads.io</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Transform Your Business With AI Advertising. Run High-Performing Ads On Meta & Instagram. Get Started With $2 Subscription Today. ✓ AI Ad Creation ✓ 24/7 Optimization ✓ No Agency Fees
            </p>
          </div>

          {/* Ad Extensions */}
          <div className="grid grid-cols-2 gap-2 pt-3 border-t">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>⚡</span>
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>🎯</span>
              <span>AI Targeting</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>📊</span>
              <span>Real-time Analytics</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>💰</span>
              <span>Start at $2</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors shadow-md">
            Get Started Free
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    )
  },
  {
    platform: 'Snapchat',
    color: 'from-yellow-400 to-yellow-500',
    icon: '👻',
    content: (
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-2xl p-6 max-w-lg mx-auto overflow-hidden">
        {/* Snapchat Top Bar */}
        <div className="flex items-center justify-between mb-6 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">👻</span>
            </div>
            <div>
              <div className="font-bold text-sm">OnAds</div>
              <div className="text-xs text-gray-400">Sponsored</div>
            </div>
          </div>
          <button className="text-white/80 hover:text-white">
            <span className="text-2xl">⋮</span>
          </button>
        </div>

        {/* Snap Story Ad */}
        <div className="relative aspect-[9/16] max-h-[500px] bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl overflow-hidden mb-4">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
            <div className="text-8xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold mb-3 drop-shadow-lg">
              Boost Your Ads
            </h3>
            <p className="text-lg mb-6 drop-shadow-md">
              AI-Powered Advertising<br />Starting at $2/month
            </p>
            <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full shadow-xl hover:scale-105 transition-transform">
              Swipe Up
            </button>
          </div>

          {/* Snap Progress Bar */}
          <div className="absolute top-4 left-4 right-4">
            <div className="h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full w-2/3"></div>
            </div>
          </div>
        </div>

        {/* Snap Actions */}
        <div className="flex items-center justify-around text-white">
          <button className="flex flex-col items-center gap-1">
            <Heart className="w-8 h-8" />
            <span className="text-xs">234</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <MessageCircle className="w-8 h-8" />
            <span className="text-xs">45</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Share2 className="w-8 h-8" />
            <span className="text-xs">Share</span>
          </button>
        </div>
      </div>
    )
  },
  {
    platform: 'Bing Ads',
    color: 'from-blue-600 to-green-500',
    icon: '🔎',
    content: (
      <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-lg mx-auto">
        {/* Bing Search Bar */}
        <div className="mb-6">
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border-2 border-blue-200">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <input 
              type="text" 
              value="ai advertising automation"
              readOnly
              className="flex-1 outline-none bg-transparent text-gray-700 text-sm font-medium"
            />
          </div>
        </div>

        {/* Bing Ad */}
        <div className="border-2 border-blue-100 rounded-2xl p-5 bg-gradient-to-br from-white to-blue-50 shadow-md mb-4">
          {/* Ad Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-green-500 px-3 py-1 rounded-full">Ad</span>
            <span className="text-xs text-gray-600 font-semibold">onads.io • Highly Rated</span>
          </div>

          {/* Ad Content */}
          <div className="mb-4">
            <h3 className="text-blue-700 text-2xl font-bold mb-2 hover:underline cursor-pointer">
              OnAds AI Advertising Platform | Start at $2
            </h3>
            <div className="flex items-center gap-2 text-sm text-green-600 mb-3 font-medium">
              <Globe className="w-4 h-4" />
              <span>onads.io/get-started</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Automate Your Meta & Instagram Ads With AI. No Agency Needed. Full Control, Maximum Results. Try Free For 3 Days. Features: AI Ad Creation, 24/7 Auto-Optimization, Smart Targeting, Real-Time Analytics.
            </p>
          </div>

          {/* Sitelinks */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-blue-100">
            <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Pricing Plans →</a>
            <a href="#" className="text-blue-600 hover:underline text-sm font-medium">How It Works →</a>
            <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Free Trial →</a>
            <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Success Stories →</a>
          </div>
        </div>

        {/* Call Extensions */}
        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg">
            Start Free Trial
          </button>
          <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-xl transition-all">
            Learn More
          </button>
        </div>
      </div>
    )
  },
  {
    platform: 'Instagram',
    color: 'from-purple-600 via-pink-500 to-orange-500',
    icon: '📷',
    content: (
      <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-lg mx-auto">
        {/* Instagram Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-full flex items-center justify-center p-0.5">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
            <div>
              <div className="font-bold text-sm text-gray-900">onads.official</div>
              <div className="text-xs text-gray-500">Sponsored</div>
            </div>
          </div>
          <button className="text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="19" r="1.5" />
            </svg>
          </button>
        </div>

        {/* Instagram Post Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="text-7xl mb-4">✨</div>
              <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">AI Advertising</h3>
              <p className="text-lg drop-shadow-md">Made Simple</p>
            </div>
          </div>
          
          {/* Instagram CTA Button Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <button className="w-full bg-white text-gray-900 font-bold py-3 rounded-lg shadow-xl hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Instagram Actions */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button className="hover:opacity-60 transition-opacity">
              <Heart className="w-7 h-7" />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <MessageCircle className="w-7 h-7" />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <Share2 className="w-7 h-7" />
            </button>
          </div>
          <button className="hover:opacity-60 transition-opacity">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        {/* Likes */}
        <div className="text-sm font-semibold text-gray-900 mb-2">
          2,847 likes
        </div>

        {/* Caption */}
        <div className="text-sm text-gray-900 mb-2">
          <span className="font-semibold">onads.official</span>{' '}
          Transform your business with AI-powered advertising 🚀 Run high-performing ads on Meta & Instagram without agencies. Start at just $2! 
          <span className="text-blue-600"> #AI #Advertising #MetaAds</span>
        </div>

        {/* View Comments */}
        <button className="text-sm text-gray-500 mb-3">
          View all 156 comments
        </button>

        {/* Add Comment */}
        <div className="flex items-center gap-3 pt-3 border-t">
          <Camera className="w-6 h-6 text-gray-400" />
          <input 
            type="text" 
            placeholder="Add a comment..."
            className="flex-1 outline-none text-sm"
          />
          <button className="text-blue-500 font-semibold text-sm">Post</button>
        </div>
      </div>
    )
  }
]

// Generate random particles
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 2 * Math.PI
    const radius = 250 + Math.random() * 50
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    const size = 2.5 + Math.random() * 3.5
    const duration = 3 + Math.random() * 4
    const delay = Math.random() * 2
    
    return { x, y, size, duration, delay }
  })
}

export const PlatformCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [particles] = useState(() => generateParticles(20))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % platformAds.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative">
        {/* Platform Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className={`bg-gradient-to-r ${platformAds[currentIndex].color} text-white px-6 py-2 rounded-full shadow-lg font-semibold text-sm flex items-center gap-2 transition-all duration-500`}>
            <span className="text-xl">{platformAds[currentIndex].icon}</span>
            <span>{platformAds[currentIndex].platform}</span>
          </div>
        </div>

        {/* Stack Carousel */}
        <div className="relative min-h-[600px] flex items-center justify-center">
          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-purple-400 to-pink-400"
                style={{
                  left: `calc(50% + ${particle.x}px)`,
                  top: `calc(50% + ${particle.y}px)`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animation: `float ${particle.duration}s ease-in-out infinite`,
                  animationDelay: `${particle.delay}s`,
                  opacity: 0.6
                }}
              />
            ))}
          </div>

          {/* Glow Ring */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
              animation: 'glowPulse 3s ease-in-out infinite'
            }}
          />

          {/* Stacked Cards */}
          <div className="relative w-full max-w-lg" style={{ perspective: '1000px' }}>
            {platformAds.map((ad, index) => {
              const position = (index - currentIndex + platformAds.length) % platformAds.length
              const isActive = position === 0
              const isNext = position === 1
              
              let zIndex = platformAds.length - position
              let transform = ''
              let opacity = 0
              let animation = ''
              
              if (isActive) {
                zIndex = 100
                transform = 'translateY(0) scale(1) rotateY(0deg)'
                opacity = 1
                animation = 'cardStackIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
              } else if (isNext) {
                zIndex = 99
                transform = 'translateY(20px) scale(0.95) rotateY(-5deg)'
                opacity = 0.6
              } else if (position === platformAds.length - 1) {
                // Exiting card
                zIndex = 101
                animation = 'cardStackOut 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                opacity = 0
              } else {
                transform = 'translateY(40px) scale(0.9)'
                opacity = 0
              }
              
              return (
                <div
                  key={`${index}-${currentIndex}`}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    zIndex,
                    opacity,
                    transform,
                    animation,
                    transition: !isActive && position !== platformAds.length - 1 ? 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
                    pointerEvents: isActive ? 'auto' : 'none',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="hover-img w-full max-w-lg">
                    {ad.content}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {platformAds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-300'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:shadow-md'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
