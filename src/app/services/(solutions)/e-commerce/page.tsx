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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-800/20 to-slate-900/40"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-900/10 to-teal-900/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-slate-200 border-blue-800/30">
                E-COMMERCE SOLUTIONS
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="text-slate-100">Build Your</span>
                <br />
                <span className="bg-gradient-to-r from-blue-500/80 via-purple-500/80 to-teal-500/80 bg-clip-text text-transparent">
                  Online Empire
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create powerful e-commerce experiences that convert visitors into customers. From custom online stores
                to marketplace integrations, we build solutions that drive sales and growth.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-300" />
                  </div>
                  <span className="text-slate-300">Custom Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-purple-300" />
                  </div>
                  <span className="text-slate-300">Secure Payments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-900 to-teal-800 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-teal-300" />
                  </div>
                  <span className="text-slate-300">Mobile Optimized</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-300" />
                  </div>
                  <span className="text-slate-300">SEO Ready</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-900 to-purple-900 hover:from-blue-800 hover:to-purple-800 text-lg px-8 py-4"
                >
                  Start Your Store
                  <ShoppingCart className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-200 bg-slate-800/50 hover:bg-slate-700/50 text-lg px-8 py-4"
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* E-commerce Stats */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/30 backdrop-blur-sm p-8">
                <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center">E-commerce Success Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingCart className="h-8 w-8 text-blue-300" />
                    </div>
                    <h4 className="text-3xl font-bold text-slate-100 mb-2">150+</h4>
                    <p className="text-blue-300/80">Stores Built</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-900 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-8 w-8 text-purple-300" />
                    </div>
                    <h4 className="text-3xl font-bold text-slate-100 mb-2">$5M+</h4>
                    <p className="text-purple-300/80">Revenue Generated</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-900 to-teal-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-teal-300" />
                    </div>
                    <h4 className="text-3xl font-bold text-slate-100 mb-2">300%</h4>
                    <p className="text-teal-300/80">Conversion Boost</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-slate-300" />
                    </div>
                    <h4 className="text-3xl font-bold text-slate-100 mb-2">99%</h4>
                    <p className="text-slate-300/80">Client Satisfaction</p>
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
            <Badge className="mb-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 text-slate-200 border-purple-800/30">
              Complete E-commerce Solutions
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
              <span className="bg-gradient-to-r from-blue-500/80 via-purple-500/80 to-teal-500/80 bg-clip-text text-transparent">
                Everything You Need
              </span>
              <br />
              <span className="text-slate-100">To Sell Online</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Custom E-commerce Development - Large Card */}
            <Card className="lg:col-span-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/30 backdrop-blur-sm overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center">
                      <Code className="h-8 w-8 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-100">Custom E-commerce Development</h3>
                      <p className="text-blue-300/80">Tailored solutions for your unique business needs</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-900/30 text-blue-300 border-blue-800/30">Popular</Badge>
                </div>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
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
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700">
                  Start Custom Development
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Shopify Development */}
            <Card className="lg:col-span-4 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-900 to-green-800 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6 text-green-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Shopify Development</h3>
              <p className="text-green-300/80 text-sm mb-4">Professional Shopify stores</p>
              <ul className="space-y-2 text-sm text-slate-300 mb-4">
                <li>• Custom Shopify Themes</li>
                <li>• App Integration</li>
                <li>• Store Migration</li>
                <li>• Performance Optimization</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-green-900 to-green-800 hover:from-green-800 hover:to-green-700">
                Explore Shopify
              </Button>
            </Card>

            {/* WooCommerce Development */}
            <Card className="lg:col-span-4 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">WooCommerce Solutions</h3>
              <p className="text-purple-300/80 text-sm mb-4">WordPress-powered e-commerce</p>
              <ul className="space-y-2 text-sm text-slate-300 mb-4">
                <li>• Custom WooCommerce Themes</li>
                <li>• Plugin Development</li>
                <li>• Payment Gateway Setup</li>
                <li>• SEO Optimization</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-800 hover:to-purple-700">
                Explore WooCommerce
              </Button>
            </Card>

            {/* Marketplace Development - Large Card */}
            <Card className="lg:col-span-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/30 backdrop-blur-sm overflow-hidden">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-900 to-purple-800 rounded-2xl flex items-center justify-center">
                    <Users className="h-8 w-8 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-100">Marketplace Development</h3>
                    <p className="text-purple-300/80">Multi-vendor platforms and marketplaces</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
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
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-800 hover:to-purple-700">
                  Build Your Marketplace
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Additional Services */}
            <Card className="lg:col-span-6 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Payment Integration</h3>
              <p className="text-blue-300/80 text-sm mb-4">Secure payment processing</p>
              <ul className="space-y-2 text-sm text-slate-300 mb-4">
                <li>• Multiple Payment Gateways</li>
                <li>• Secure Checkout Process</li>
                <li>• Subscription Management</li>
                <li>• Fraud Protection</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700">
                Setup Payments
              </Button>
            </Card>

            <Card className="lg:col-span-6 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-900 to-teal-800 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-teal-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Analytics & Reporting</h3>
              <p className="text-teal-300/80 text-sm mb-4">Data-driven insights</p>
              <ul className="space-y-2 text-sm text-slate-300 mb-4">
                <li>• Sales Analytics</li>
                <li>• Customer Behavior Tracking</li>
                <li>• Inventory Reports</li>
                <li>• Performance Metrics</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-teal-900 to-teal-800 hover:from-teal-800 hover:to-teal-700">
                View Analytics
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* E-commerce Features */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-transparent to-slate-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-slate-200 border-blue-800/30">
              Essential Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              <span className="bg-gradient-to-r from-blue-500/80 to-purple-500/80 bg-clip-text text-transparent">
                Powerful Features
              </span>
              <br />
              <span className="text-slate-100">For Online Success</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Product Management",
                description: "Advanced product catalog with variants, categories, and inventory tracking",
                color: "blue",
              },
              {
                icon: Truck,
                title: "Shipping Integration",
                description: "Real-time shipping rates and tracking from major carriers",
                color: "purple",
              },
              {
                icon: Shield,
                title: "Security & SSL",
                description: "Enterprise-grade security with SSL certificates and PCI compliance",
                color: "teal",
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
                color: "blue",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/30 backdrop-blur-sm p-6 hover:scale-105 transition-transform`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r from-${feature.color}-900 to-${feature.color}-800 rounded-lg flex items-center justify-center mb-4`}
                >
                  <feature.icon className={`h-6 w-6 text-${feature.color}-300`} />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 text-slate-200 border-purple-800/30">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              <span className="bg-gradient-to-r from-purple-500/80 to-blue-500/80 bg-clip-text text-transparent">
                Client Success
              </span>
              <br />
              <span className="text-slate-100">Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/30 backdrop-blur-sm p-8">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500/50 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-300 mb-6 italic">
                "Our online sales increased by 400% within 6 months of launching our new e-commerce store. The design
                is beautiful and the functionality is perfect."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center">
                  <span className="text-blue-300 font-bold text-sm">AS</span>
                </div>
                <div>
                  <p className="text-slate-100 font-medium">Amit Sharma</p>
                  <p className="text-slate-400 text-sm">CEO, Fashion Hub</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/30 backdrop-blur-sm p-8">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500/50 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-300 mb-6 italic">
                "The marketplace platform they built for us handles thousands of vendors and millions of products
                seamlessly. Excellent work!"
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-900 to-purple-800 rounded-full flex items-center justify-center">
                  <span className="text-purple-300 font-bold text-sm">PK</span>
                </div>
                <div>
                  <p className="text-slate-100 font-medium">Priya Kapoor</p>
                  <p className="text-slate-400 text-sm">Founder, MarketPlace Pro</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/30 backdrop-blur-sm p-8">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500/50 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-300 mb-6 italic">
                "Their Shopify customization transformed our store. The conversion rate improved by 250% and customer
                feedback has been amazing."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-900 to-teal-800 rounded-full flex items-center justify-center">
                  <span className="text-teal-300 font-bold text-sm">VT</span>
                </div>
                <div>
                  <p className="text-slate-100 font-medium">Vikram Thakur</p>
                  <p className="text-slate-400 text-sm">Owner, Tech Gadgets</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-800/40 to-slate-900/40"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-8">
            <span className="bg-gradient-to-r from-blue-500/80 via-purple-500/80 to-teal-500/80 bg-clip-text text-transparent">
              Ready to Launch
            </span>
            <br />
            <span className="text-slate-100">Your Online Store?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your business with a powerful e-commerce solution. Let's build an online store that drives sales
            and grows your revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-900 via-purple-900 to-teal-900 hover:from-blue-800 hover:via-purple-800 hover:to-teal-800 text-lg px-12 py-4"
            >
              Start Your Store
              <ShoppingCart className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 text-slate-200 bg-slate-800/50 hover:bg-slate-700/50 text-lg px-12 py-4"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

