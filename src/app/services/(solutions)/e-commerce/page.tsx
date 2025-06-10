import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Smartphone,
  Search,
  TrendingUp,
  ShoppingCart,
  CheckCircle,
  CreditCard,
  Package,
  Truck,
  BarChart3,
  Shield,
  Globe,
  Users,
  Award,
  Settings,
  DollarSign,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function EcommerceServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 pt-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-red-900/10 to-[#0071bc]/10"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-500/20 to-[#0071bc]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-white border-orange-400/30">
                E-COMMERCE SOLUTIONS
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="text-white">Build Your</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-[#0071bc] bg-clip-text text-transparent">
                  Online Empire
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create powerful e-commerce experiences that convert visitors into customers. From custom online stores
                to marketplace integrations, we build solutions that drive sales and growth.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">Custom Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">Secure Payments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">Mobile Optimized</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">SEO Ready</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-8 py-4"
                >
                  Start Your Store
                  <ShoppingCart className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-400/30 text-white bg-white/10 hover:bg-orange-500/10 text-lg px-8 py-4"
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* E-commerce Stats */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/20 backdrop-blur-sm p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">E-commerce Success Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingCart className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-2">150+</h4>
                    <p className="text-orange-200">Stores Built</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-2">$5M+</h4>
                    <p className="text-red-200">Revenue Generated</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-2">300%</h4>
                    <p className="text-blue-200">Conversion Boost</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-2">99%</h4>
                    <p className="text-green-200">Client Satisfaction</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Solutions - Feature Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-white border-red-400/30">
              Complete E-commerce Solutions
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-[#0071bc] bg-clip-text text-transparent">
                Everything You Need
              </span>
              <br />
              <span className="text-white">To Sell Online</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Custom E-commerce Development - Large Card */}
            <Card className="lg:col-span-8 bg-gradient-to-br from-orange-900/40 to-orange-800/20 border-orange-500/30 backdrop-blur-sm overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Custom E-commerce Development</h3>
                      <p className="text-orange-200">Tailored solutions for your unique business needs</p>
                    </div>
                  </div>
                  <Badge className="bg-orange-500/20 text-orange-200 border-orange-400/30">Popular</Badge>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Build a unique online store that perfectly matches your brand and business requirements. From simple
                  product catalogs to complex multi-vendor marketplaces.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Custom Design & Branding",
                    "Advanced Product Management",
                    "Multi-payment Gateway Integration",
                    "Inventory Management System",
                    "Order Management & Tracking",
                    "Customer Account Management",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800">
                  Start Custom Development
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Shopify Development */}
            <Card className="lg:col-span-4 bg-gradient-to-br from-green-900/40 to-green-800/20 border-green-500/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Shopify Development</h3>
              <p className="text-green-200 text-sm mb-4">Professional Shopify stores</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li>• Custom Shopify Themes</li>
                <li>• App Integration</li>
                <li>• Store Migration</li>
                <li>• Performance Optimization</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                Explore Shopify
              </Button>
            </Card>

            {/* WooCommerce Development */}
            <Card className="lg:col-span-4 bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WooCommerce Solutions</h3>
              <p className="text-purple-200 text-sm mb-4">WordPress-powered e-commerce</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li>• Custom WooCommerce Themes</li>
                <li>• Plugin Development</li>
                <li>• Payment Gateway Setup</li>
                <li>• SEO Optimization</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                Explore WooCommerce
              </Button>
            </Card>

            {/* Marketplace Development - Large Card */}
            <Card className="lg:col-span-8 bg-gradient-to-br from-red-900/40 to-red-800/20 border-red-500/30 backdrop-blur-sm overflow-hidden">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Marketplace Development</h3>
                    <p className="text-red-200">Multi-vendor platforms and marketplaces</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Create powerful multi-vendor marketplaces where multiple sellers can list and sell their products.
                  Complete with vendor management, commission systems, and advanced analytics.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Vendor Registration & Management",
                    "Commission & Payout System",
                    "Advanced Search & Filtering",
                    "Review & Rating System",
                    "Multi-language Support",
                    "Analytics Dashboard",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                  Build Your Marketplace
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Additional Services */}
            <Card className="lg:col-span-6 bg-gradient-to-br from-[#0071bc]/40 to-blue-800/20 border-blue-500/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Payment Integration</h3>
              <p className="text-blue-200 text-sm mb-4">Secure payment processing</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li>• Multiple Payment Gateways</li>
                <li>• Secure Checkout Process</li>
                <li>• Subscription Management</li>
                <li>• Fraud Protection</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-[#0071bc] to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Setup Payments
              </Button>
            </Card>

            <Card className="lg:col-span-6 bg-gradient-to-br from-teal-900/40 to-teal-800/20 border-teal-500/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Analytics & Reporting</h3>
              <p className="text-teal-200 text-sm mb-4">Data-driven insights</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li>• Sales Analytics</li>
                <li>• Customer Behavior Tracking</li>
                <li>• Inventory Reports</li>
                <li>• Performance Metrics</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800">
                View Analytics
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* E-commerce Features */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 via-transparent to-red-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-white border-orange-400/30">
              Essential Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
              <br />
              <span className="text-white">For Online Success</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Product Management",
                description: "Advanced product catalog with variants, categories, and inventory tracking",
                color: "orange",
              },
              {
                icon: Truck,
                title: "Shipping Integration",
                description: "Real-time shipping rates and tracking from major carriers",
                color: "red",
              },
              {
                icon: Shield,
                title: "Security & SSL",
                description: "Enterprise-grade security with SSL certificates and PCI compliance",
                color: "blue",
              },
              {
                icon: Smartphone,
                title: "Mobile Responsive",
                description: "Optimized for all devices with mobile-first design approach",
                color: "green",
              },
              {
                icon: Search,
                title: "SEO Optimized",
                description: "Built-in SEO features to improve search engine rankings",
                color: "purple",
              },
              {
                icon: Settings,
                title: "Admin Dashboard",
                description: "Comprehensive admin panel for easy store management",
                color: "teal",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-${feature.color}-900/30 to-${feature.color}-800/20 border-${feature.color}-500/30 backdrop-blur-sm p-6 hover:scale-105 transition-transform`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 rounded-lg flex items-center justify-center mb-4`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-white border-red-400/30">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Client Success
              </span>
              <br />
              <span className="text-white">Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/20 backdrop-blur-sm p-8">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-6 italic">
                "Our online sales increased by 400% within 6 months of launching our new e-commerce store. The design
                is beautiful and the functionality is perfect."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AS</span>
                </div>
                <div>
                  <p className="text-white font-medium">Amit Sharma</p>
                  <p className="text-gray-400 text-sm">CEO, Fashion Hub</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/20 backdrop-blur-sm p-8">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-6 italic">
                "The marketplace platform they built for us handles thousands of vendors and millions of products
                seamlessly. Excellent work!"
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PK</span>
                </div>
                <div>
                  <p className="text-white font-medium">Priya Kapoor</p>
                  <p className="text-gray-400 text-sm">Founder, MarketPlace Pro</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/20 backdrop-blur-sm p-8">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-6 italic">
                "Their Shopify customization transformed our store. The conversion rate improved by 250% and customer
                feedback has been amazing."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VT</span>
                </div>
                <div>
                  <p className="text-white font-medium">Vikram Thakur</p>
                  <p className="text-gray-400 text-sm">Owner, Tech Gadgets</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-red-900/20 to-[#0071bc]/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-[#0071bc] bg-clip-text text-transparent">
              Ready to Launch
            </span>
            <br />
            <span className="text-white">Your Online Store?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your business with a powerful e-commerce solution. Let's build an online store that drives sales
            and grows your revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 via-red-600 to-[#0071bc] hover:from-orange-700 hover:via-red-700 hover:to-blue-700 text-lg px-12 py-4"
            >
              Start Your Store
              <ShoppingCart className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-400/30 text-white bg-white/10 hover:bg-orange-500/10 text-lg px-12 py-4"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

