import Link from "next/link"
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
  Mail,
  Phone,
  MessageCircle,
  BarChart3,
  Target,
  Globe,
  Zap,
  Award,
  FileText,
  MousePointer,
  Activity,
  Link as LinkIcon,
} from "lucide-react"
import NextLink from "next/link"

export default function SEOServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 pt-12">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-[#0071bc]/10 to-yellow-900/10"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-green-500/10 to-[#0071bc]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#0071bc]/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-green-500/20 to-[#0071bc]/20 text-white border-green-400/30">
                SEO OPTIMIZATION EXPERTS
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="text-white">Dominate</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 via-[#0071bc] to-yellow-400 bg-clip-text text-transparent">
                  Search Rankings
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Boost your online visibility and drive organic traffic with our proven SEO strategies. Get found by
                customers who are actively searching for your services.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">Higher Rankings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">More Traffic</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">Better Conversions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-[#0071bc] rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">ROI Growth</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-[#0071bc] hover:from-green-700 hover:to-blue-700 text-lg px-8 py-4"
                >
                  Get SEO Audit
                  <Search className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-400/30 text-white bg-white/10 hover:bg-green-500/10 text-lg px-8 py-4"
                >
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* SEO Metrics Dashboard */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/20 backdrop-blur-sm p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">SEO Performance Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-2">300%</h4>
                    <p className="text-green-200">Traffic Increase</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-2">85%</h4>
                    <p className="text-blue-200">First Page Rankings</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MousePointer className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-2">250%</h4>
                    <p className="text-yellow-200">Click-Through Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-[#0071bc] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-2">95%</h4>
                    <p className="text-green-200">Client Satisfaction</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-500/20 to-green-500/20 text-white border-yellow-400/30">
              Our SEO Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                Complete SEO
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* On-Page SEO */}
            <Card className="bg-gradient-to-br from-green-900/40 to-green-800/20 border-green-500/30 backdrop-blur-sm p-8 hover:border-green-400/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <FileText className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">On-Page SEO</h3>
              <p className="text-gray-300 mb-6">
                Optimize your website's content, structure, and HTML elements for better search engine visibility.
              </p>
              <ul className="space-y-3 mb-6">
                {["Keyword Research", "Content Optimization", "Meta Tags", "Internal Linking", "Schema Markup"].map(
                  (item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ),
                )}
              </ul>
              <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                Learn More
              </Button>
            </Card>

            {/* Technical SEO */}
            <Card className="bg-gradient-to-br from-[#0071bc]/40 to-blue-800/20 border-blue-500/30 backdrop-blur-sm p-8 hover:border-blue-400/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical SEO</h3>
              <p className="text-gray-300 mb-6">
                Improve your website's technical foundation to enhance crawlability and user experience.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Site Speed Optimization",
                  "Mobile Optimization",
                  "XML Sitemaps",
                  "Robots.txt",
                  "Core Web Vitals",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-[#0071bc] to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Learn More
              </Button>
            </Card>

            {/* Off-Page SEO */}
            <Card className="bg-gradient-to-br from-yellow-900/40 to-yellow-800/20 border-yellow-500/30 backdrop-blur-sm p-8 hover:border-yellow-400/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <LinkIcon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Off-Page SEO</h3>
              <p className="text-gray-300 mb-6">
                Build authority and trust through strategic link building and online reputation management.
              </p>
              <ul className="space-y-3 mb-6">
                {["Link Building", "Guest Posting", "Local Citations", "Social Signals", "Brand Mentions"].map(
                  (item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ),
                )}
              </ul>
              <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800">
                Learn More
              </Button>
            </Card>

            {/* Local SEO */}
            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 backdrop-blur-sm p-8 hover:border-purple-400/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Local SEO</h3>
              <p className="text-gray-300 mb-6">
                Dominate local search results and attract customers in your geographic area.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Google My Business",
                  "Local Keywords",
                  "NAP Consistency",
                  "Local Reviews",
                  "Map Pack Optimization",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                Learn More
              </Button>
            </Card>

            {/* E-commerce SEO */}
            <Card className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 border-orange-500/30 backdrop-blur-sm p-8 hover:border-orange-400/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <ShoppingCart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">E-commerce SEO</h3>
              <p className="text-gray-300 mb-6">
                Optimize your online store to increase product visibility and drive sales.
              </p>
              <ul className="space-y-3 mb-6">
                {["Product Optimization", "Category Pages", "Product Schema", "User Reviews", "Shopping Feeds"].map(
                  (item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-400" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ),
                )}
              </ul>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800">
                Learn More
              </Button>
            </Card>

            {/* SEO Analytics */}
            <Card className="bg-gradient-to-br from-teal-900/40 to-teal-800/20 border-teal-500/30 backdrop-blur-sm p-8 hover:border-teal-400/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">SEO Analytics</h3>
              <p className="text-gray-300 mb-6">
                Track, measure, and report on your SEO performance with detailed analytics.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Ranking Tracking",
                  "Traffic Analysis",
                  "Conversion Tracking",
                  "Competitor Analysis",
                  "ROI Reports",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-teal-400" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-yellow-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-500/20 to-yellow-500/20 text-white border-green-400/30">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                Proven SEO
              </span>
              <br />
              <span className="text-white">Methodology</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "SEO Audit",
                description: "Comprehensive analysis of your current SEO performance and opportunities",
                icon: Search,
                color: "green",
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Custom SEO strategy based on your business goals and target audience",
                icon: Target,
                color: "blue",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute on-page, technical, and off-page optimizations",
                icon: Zap,
                color: "yellow",
              },
              {
                step: "04",
                title: "Monitor & Optimize",
                description: "Continuous monitoring and optimization for sustained growth",
                icon: Activity,
                color: "purple",
              },
            ].map((process, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-${process.color}-900/30 to-${process.color}-800/20 border-${process.color}-500/30 backdrop-blur-sm p-6 text-center relative`}
              >
                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r from-${process.color}-500 to-${process.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <process.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge
                    className={`absolute -top-2 -right-2 bg-${process.color}-500/20 text-${process.color}-200 border-${process.color}-400/30`}
                  >
                    {process.step}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                <p className="text-gray-300 text-sm">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-[#0071bc]/20 to-yellow-900/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-green-400 via-[#0071bc] to-yellow-400 bg-clip-text text-transparent">
              Ready to Rank
            </span>
            <br />
            <span className="text-white">Higher on Google?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get a free SEO audit and discover how we can help you dominate search results and drive more organic
            traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 via-[#0071bc] to-yellow-600 hover:from-green-700 hover:via-blue-700 hover:to-yellow-700 text-lg px-12 py-4"
            >
              Get Free SEO Audit
              <Search className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-400/30 text-white bg-white/10 hover:bg-green-500/10 text-lg px-12 py-4"
            >
              View SEO Packages
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
