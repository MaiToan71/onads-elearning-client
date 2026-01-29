import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Zap, Globe, ArrowLeft } from 'lucide-react'

export default function TermsPage() {
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
              <Link href="/#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
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

      {/* Terms Content */}
      <main className="container mx-auto px-6 py-20 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </Link>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: January 29, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using the OnAds platform provided by Mountain Lion lab AI HK Limited ("OnAds," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              OnAds is an AI-powered advertising platform that helps businesses create, manage, and optimize Meta (Facebook and Instagram) advertising campaigns. Our services include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>AI-generated ad creatives and copy</li>
              <li>Automated campaign optimization</li>
              <li>Audience targeting recommendations</li>
              <li>Performance analytics and reporting</li>
              <li>A/B testing capabilities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use OnAds, you must:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Create an account with accurate and complete information</li>
              <li>Be at least 18 years of age</li>
              <li>Have a valid Meta Business account</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly notify us of any unauthorized use of your account</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are responsible for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Subscription and Payment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>4.1 Pricing:</strong> Our subscription plans are clearly displayed on our pricing page. Prices are subject to change with notice.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>4.2 Payment:</strong> You agree to pay all fees associated with your chosen subscription plan. Payment is processed through secure third-party payment processors.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>4.3 Billing:</strong> Subscriptions are billed in advance on a recurring basis (monthly, quarterly, or annually) unless you select a one-time payment option.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>4.4 Cancellation:</strong> You may cancel your subscription at any time. Cancellations will take effect at the end of your current billing period.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>4.5 Refunds:</strong> Refunds are provided on a case-by-case basis at our discretion. Trial periods are non-refundable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Use the service for fraudulent or deceptive purposes</li>
              <li>Create ads for illegal products or services</li>
              <li>Attempt to access unauthorized areas of the platform</li>
              <li>Interfere with or disrupt the service</li>
              <li>Reverse engineer or copy our AI models or algorithms</li>
              <li>Resell or redistribute our services without permission</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Content and Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>6.1 Your Content:</strong> You retain ownership of all content you upload to OnAds. By using our service, you grant us a license to use, process, and display your content solely for the purpose of providing our services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>6.2 Our Content:</strong> All software, algorithms, designs, text, graphics, and other materials provided by OnAds are our proprietary property and protected by intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>6.3 AI-Generated Content:</strong> Content generated by our AI becomes your property once created, subject to our service terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Meta Platform Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must comply with all Meta advertising policies and guidelines. We are not responsible for ads rejected by Meta or account suspensions due to policy violations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Service Availability and Support</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>8.1 Uptime:</strong> We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service availability.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>8.2 Support:</strong> Customer support is available 24/7 through our platform. Response times may vary based on your subscription tier.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>8.3 Updates:</strong> We may update, modify, or discontinue features with or without notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Disclaimers and Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>9.1 No Guarantees:</strong> We do not guarantee specific advertising results, ROI, or campaign performance. Results depend on many factors outside our control.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>9.2 Service "As Is":</strong> Our service is provided "as is" without warranties of any kind, express or implied.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>9.3 Limitation of Liability:</strong> To the maximum extent permitted by law, OnAds shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify and hold harmless OnAds and its affiliates from any claims, damages, losses, or expenses arising from your use of the service, violation of these Terms, or infringement of any rights of third parties.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account at any time for violations of these Terms, fraudulent activity, or non-payment. Upon termination, your right to use the service will immediately cease.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may modify these Terms at any time. We will notify you of material changes via email or platform notification. Your continued use of the service after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are governed by the laws of Hong Kong. Any disputes shall be resolved in the courts of Hong Kong.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2"><strong>Mountain Lion lab AI HK Limited</strong></p>
              <p className="text-gray-700 mb-2">Email: support@onads.com</p>
              <p className="text-gray-700 mb-2">Address: Hong Kong</p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-6">
            By signing up, you agree to our Terms of Service and Privacy Notice.
          </p>
          <Link href="/auth/register">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-6 rounded-full"
            >
              Sign Up Now
            </Button>
          </Link>
        </div>
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
              <Link href="/terms" className="text-purple-600 font-medium text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
