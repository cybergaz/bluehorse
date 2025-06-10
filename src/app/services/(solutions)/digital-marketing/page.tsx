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
  Eye,
  Users,
  Zap,
  Award,
  Megaphone,
  Share2,
  MousePointer,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function DigitalMarketingServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/10 to-[#0071bc]/10"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-[#0071bc]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0071bc]/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border-purple-400/30">
              DIGITAL MARKETING EXPERTS IN JAIPUR
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#0071bc] bg-clip-text text-transparent">
                Amplify Your
              </span>
              <br />
              <span className="text-white">Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Drive growth, engagement, and conversions with our comprehensive digital marketing strategies. From social
              media to PPC, we help your brand reach the right audience at the right time.
            </p>
          </div>

          {/* Marketing Metrics Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 backdrop-blur-sm text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">400%</h3>
              <p className="text-purple-200 text-sm">ROI Increase</p>
            </Card>

            <Card className="bg-gradient-to-br from-pink-900/40 to-pink-800/20 border-pink-500/30 backdrop-blur-sm text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">2M+</h3>
              <p className="text-pink-200 text-sm">Reach Generated</p>
            </Card>

            <Card className="bg-gradient-to-br from-[#0071bc]/40 to-blue-800/20 border-blue-500/30 backdrop-blur-sm text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MousePointer className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">350%</h3>
              <p className="text-blue-200 text-sm">Click-Through Rate</p>
            </Card>

            <Card className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 border-orange-500/30 backdrop-blur-sm text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">98%</h3>
              <p className="text-orange-200 text-sm">Client Satisfaction</p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-[#0071bc] hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-lg px-10 py-4"
              asChild
            >
              <Link href={"/contact"}>
                Start Your Campaign
                <Megaphone className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400/30 text-white bg-white/10 hover:bg-purple-500/10 text-lg px-10 py-4"
              asChild
            >
              <Link href={"/about-us"}>
                Know More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid - Asymmetric Layout */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white border-pink-400/30">
              Our Digital Marketing Services
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-[#0071bc] bg-clip-text text-transparent">
                360° Marketing
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Social Media Marketing - Large Card */}
            <Card className="lg:col-span-8 bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 backdrop-blur-sm overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Share2 className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Social Media Marketing</h3>
                      <p className="text-purple-200">Build communities and drive engagement</p>
                    </div>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30">Featured</Badge>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Create compelling social media campaigns that resonate with your audience across all major platforms.
                  From content creation to community management, we help you build a strong social presence.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Content Strategy & Creation",
                    "Community Management",
                    "Influencer Partnerships",
                    "Social Media Advertising",
                    "Analytics & Reporting",
                    "Brand Reputation Management",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                  Explore Social Media Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* PPC Advertising */}
            <Card className="lg:col-span-4 bg-gradient-to-br from-pink-900/40 to-pink-800/20 border-pink-500/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <MousePointer className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">PPC Advertising</h3>
              <p className="text-pink-200 text-sm mb-4">Instant visibility with targeted ads</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li>• Google Ads Management</li>
                <li>• Facebook & Instagram Ads</li>
                <li>• LinkedIn Advertising</li>
                <li>• Conversion Optimization</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800">
                Learn More
              </Button>
            </Card>

            {/* Content Marketing */}
            <Card className="lg:col-span-4 bg-gradient-to-br from-[#0071bc]/40 to-blue-800/20 border-blue-500/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Content Marketing</h3>
              <p className="text-blue-200 text-sm mb-4">Engage audiences with valuable content</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li>• Blog Writing & SEO</li>
                <li>• Video Content Creation</li>
                <li>• Infographic Design</li>
                <li>• Content Distribution</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-[#0071bc] to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Learn More
              </Button>
            </Card>

            {/* Email Marketing - Large Card */}
            <Card className="lg:col-span-8 bg-gradient-to-br from-orange-900/40 to-orange-800/20 border-orange-500/30 backdrop-blur-sm overflow-hidden">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Email Marketing</h3>
                    <p className="text-orange-200">Nurture leads and drive conversions</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Build lasting relationships with your audience through personalized email campaigns that convert
                  prospects into loyal customers.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Email Campaign Design",
                    "Marketing Automation",
                    "List Building & Segmentation",
                    "A/B Testing",
                    "Performance Analytics",
                    "Drip Campaigns",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800">
                  Explore Email Marketing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Additional Services */}
            <Card className="lg:col-span-6 bg-gradient-to-br from-teal-900/40 to-teal-800/20 border-teal-500/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Analytics & Reporting</h3>
              <p className="text-teal-200 text-sm mb-4">Data-driven insights for optimization</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li>• Performance Tracking</li>
                <li>• ROI Analysis</li>
                <li>• Custom Dashboards</li>
                <li>• Competitor Analysis</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800">
                Learn More
              </Button>
            </Card>

            <Card className="lg:col-span-6 bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 border-indigo-500/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Brand Strategy</h3>
              <p className="text-indigo-200 text-sm mb-4">Build a memorable brand identity</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li>• Brand Positioning</li>
                <li>• Visual Identity Design</li>
                <li>• Brand Guidelines</li>
                <li>• Market Research</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketing Process - Circular Layout */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border-purple-400/30">
              Our Marketing Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Strategic Marketing
              </span>
              <br />
              <span className="text-white">Approach</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research & Analysis",
                description: "Deep dive into your market, competitors, and target audience",
                icon: Search,
                color: "purple",
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Create a comprehensive marketing strategy aligned with your goals",
                icon: Target,
                color: "pink",
              },
              {
                step: "03",
                title: "Campaign Execution",
                description: "Launch multi-channel campaigns with precision and creativity",
                icon: Zap,
                color: "blue",
              },
              {
                step: "04",
                title: "Optimize & Scale",
                description: "Continuously optimize performance and scale successful campaigns",
                icon: TrendingUp,
                color: "orange",
              },
            ].map((process, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-${process.color}-900/30 to-${process.color}-800/20 border-${process.color}-500/30 backdrop-blur-sm p-6 text-center relative hover:scale-105 transition-transform`}
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

      {/* Results Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white border-pink-400/30">
              Proven Results
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
              <br />
              <span className="text-white">& Achievements</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Client Success Stories */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/20 backdrop-blur-sm p-8">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-6 italic">
                "Blue Horse Tech transformed our digital presence. Our social media engagement increased by 500% and
                lead generation improved dramatically."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SK</span>
                </div>
                <div>
                  <p className="text-white font-medium">Sarah Kumar</p>
                  <p className="text-gray-400 text-sm">CEO, TechStart</p>
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
                "Their PPC campaigns delivered exceptional ROI. We saw a 400% increase in qualified leads within the
                first quarter."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RG</span>
                </div>
                <div>
                  <p className="text-white font-medium">Raj Gupta</p>
                  <p className="text-gray-400 text-sm">Marketing Director, GrowthCorp</p>
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
                "Professional team with creative strategies. Our brand awareness increased significantly across all
                digital channels."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AP</span>
                </div>
                <div>
                  <p className="text-white font-medium">Anita Patel</p>
                  <p className="text-gray-400 text-sm">Founder, InnovateHub</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-[#0071bc]/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#0071bc] bg-clip-text text-transparent">
              Ready to Amplify
            </span>
            <br />
            <span className="text-white">Your Digital Reach?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's create a digital marketing strategy that drives real results for your business. Start your journey to
            digital success today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-[#0071bc] hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-lg px-12 py-4"
              asChild
            >

              <Link href={"/contact"}>
                Start Your Campaign
                <Megaphone className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400/30 text-white bg-white/10 hover:bg-purple-500/10 text-lg px-12 py-4"
              asChild
            >
              <Link href={"tel:+917733992102"}>
                Call Us Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
