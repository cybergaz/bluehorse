"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
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
  Globe,
  Palette,
  Database,
  Layers,
  Rocket,
  Target,
  Settings,
  Zap,
  Users,
  Star,
  Download,
  Apple,
  Shield,
  Award,
} from "lucide-react"
import Link from "next/link"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
}

export default function AppDevelopmentServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 mt-10">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-[#0071bc]/10 to-teal-900/20"
          />
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#0071bc]/20 to-purple-600/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-600/20 to-[#0071bc]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-[#0071bc]/20 text-white border-purple-400/30">
                MOBILE APP DEVELOPMENT EXPERTS
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-teal-200 bg-clip-text text-transparent">
                Transform Ideas Into
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#0071bc] via-purple-500 to-teal-400 bg-clip-text text-transparent">
                Powerful Mobile Apps
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              We craft exceptional mobile experiences that engage users and drive business growth. From concept to app
              store success.
            </motion.p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-purple-500/20 backdrop-blur-sm text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">150+</h3>
              <p className="text-purple-200 text-sm">Apps Delivered</p>
            </Card>

            <Card className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border-teal-500/20 backdrop-blur-sm text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">2M+</h3>
              <p className="text-teal-200 text-sm">Downloads</p>
            </Card>

            <Card className="bg-gradient-to-br from-[#0071bc]/30 to-blue-800/20 border-blue-500/20 backdrop-blur-sm text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">4.9</h3>
              <p className="text-blue-200 text-sm">Avg Rating</p>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-emerald-500/20 backdrop-blur-sm text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">98%</h3>
              <p className="text-emerald-200 text-sm">Success Rate</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-[#0071bc] hover:from-purple-700 hover:to-blue-700 text-lg px-10 py-4"
              asChild
            >
              <Link href={"/contact"}>
                Start Your App Journey
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400/30 text-white bg-white/10 hover:bg-purple-500/10 text-lg px-10 py-4"
            >
              Explore Our Work
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Platform Services */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-gradient-to-r from-teal-500/20 to-purple-500/20 text-white border-teal-400/30">
                Platform Expertise
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-[#0071bc] bg-clip-text text-transparent">
                Multi-Platform
              </span>
              <br />
              <span className="text-white">Excellence</span>
            </motion.h2>
          </motion.div>

          {/* Large Feature Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* iOS Development */}
            <Card className="bg-gradient-to-r from-slate-800/40 via-purple-900/20 to-slate-800/40 border-purple-500/20 backdrop-blur-sm overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Apple className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">iOS Development</h3>
                      <p className="text-purple-200">Native iOS apps with Swift & Objective-C</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Create stunning iOS applications that leverage the full power of Apple's ecosystem. Our expert
                    developers build apps that feel native and perform exceptionally.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      "Swift Programming",
                      "App Store Optimization",
                      "iOS Design Guidelines",
                      "Core Data Integration",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                    Explore iOS Services
                  </Button>
                </div>
                <div className="order-1 lg:order-2 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center">
                    <Apple className="h-32 w-32 text-purple-400" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Android Development */}
            <Card className="bg-gradient-to-r from-slate-800/40 via-teal-900/20 to-slate-800/40 border-teal-500/20 backdrop-blur-sm overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-r from-teal-500/20 to-teal-600/20 rounded-3xl flex items-center justify-center">
                    <svg className="h-32 w-32 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.61 10.2718.8469 12.1793.8469 14.5439c0 .1114.0371.2228.1114.2228h22.0834c.0743 0 .1114-.1114.1114-.2228 0-2.3646-1.7631-4.2721-5.2632-5.2225" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.61 10.2718.8469 12.1793.8469 14.5439c0 .1114.0371.2228.1114.2228h22.0834c.0743 0 .1114-.1114.1114-.2228 0-2.3646-1.7631-4.2721-5.2632-5.2225" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Android Development</h3>
                      <p className="text-teal-200">Powerful Android apps with Kotlin & Java</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Build robust Android applications that reach billions of users worldwide. We create apps that follow
                    Material Design principles and perform seamlessly across devices.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {["Kotlin Programming", "Material Design", "Play Store Optimization", "Firebase Integration"].map(
                      (feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-teal-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ),
                    )}
                  </div>
                  <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800">
                    Explore Android Services
                  </Button>
                </div>
              </div>
            </Card>

            {/* Cross-Platform Development */}
            <Card className="bg-gradient-to-r from-slate-800/40 via-[#0071bc]/20 to-slate-800/40 border-blue-500/20 backdrop-blur-sm overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-2xl flex items-center justify-center">
                      <Layers className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Cross-Platform Development</h3>
                      <p className="text-blue-200">One codebase, multiple platforms</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Maximize your reach and minimize development costs with cross-platform solutions. Build once, deploy
                    everywhere with React Native and Flutter.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {["React Native", "Flutter Development", "Code Reusability", "Faster Time to Market"].map(
                      (feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ),
                    )}
                  </div>
                  <Button className="bg-gradient-to-r from-[#0071bc] to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Explore Cross-Platform
                  </Button>
                </div>
                <div className="order-1 lg:order-2 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-r from-[#0071bc]/20 to-blue-600/20 rounded-3xl flex items-center justify-center">
                    <Layers className="h-32 w-32 text-blue-400" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* App Categories */}
      <section className="py-24 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-teal-900/10"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 text-white border-emerald-400/30">
                App Categories
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Apps That
              <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Make Impact
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Large Cards */}
            <Card className="md:col-span-2 bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 backdrop-blur-sm p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">E-commerce Apps</h3>
                  <p className="text-purple-200">Complete shopping solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Build comprehensive e-commerce platforms with secure payments, inventory management, and seamless user
                experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Payment Gateway", "Product Catalog", "Order Tracking", "Push Notifications"].map((tag) => (
                  <Badge key={tag} className="bg-purple-500/20 text-purple-200 border-purple-400/30">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-teal-900/40 to-teal-800/20 border-teal-500/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Social Media</h3>
              <p className="text-teal-200 text-sm mb-4">Connect and engage users</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Real-time messaging</li>
                <li>• Media sharing</li>
                <li>• Social feeds</li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border-emerald-500/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Business Apps</h3>
              <p className="text-emerald-200 text-sm mb-4">Productivity solutions</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• CRM integration</li>
                <li>• Analytics dashboard</li>
                <li>• Team collaboration</li>
              </ul>
            </Card>

            <Card className="md:col-span-2 bg-gradient-to-br from-[#0071bc]/40 to-blue-800/20 border-blue-500/30 backdrop-blur-sm p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">On-Demand Apps</h3>
                  <p className="text-blue-200">Service booking platforms</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Create powerful on-demand service platforms with real-time tracking, booking systems, and payment
                processing.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Real-time Tracking", "Service Booking", "Payment Processing", "Rating System"].map((tag) => (
                  <Badge key={tag} className="bg-blue-500/20 text-blue-200 border-blue-400/30">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 border-orange-500/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Educational</h3>
              <p className="text-orange-200 text-sm mb-4">Learning platforms</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Course management</li>
                <li>• Progress tracking</li>
                <li>• Interactive content</li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-pink-900/40 to-pink-800/20 border-pink-500/30 backdrop-blur-sm p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Utility Apps</h3>
              <p className="text-pink-200 text-sm mb-4">Everyday tools</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Device integration</li>
                <li>• Offline functionality</li>
                <li>• Data synchronization</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-teal-500/20 text-white border-purple-400/30">
                Our Process
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                App Development
              </span>
              <br />
              <span className="text-white">Journey</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-[#0071bc] to-teal-500"></div>

              <div className="space-y-16">
                {[
                  {
                    step: "01",
                    title: "Discovery & Strategy",
                    description:
                      "We dive deep into your vision, analyze market requirements, and define the technical roadmap for your app.",
                    icon: Target,
                    color: "purple",
                    side: "left",
                  },
                  {
                    step: "02",
                    title: "Design & Prototyping",
                    description:
                      "Create stunning UI/UX designs and interactive prototypes that bring your app concept to life.",
                    icon: Palette,
                    color: "blue",
                    side: "right",
                  },
                  {
                    step: "03",
                    title: "Development & Integration",
                    description:
                      "Build your app using cutting-edge technologies with regular updates and transparent communication.",
                    icon: Code,
                    color: "teal",
                    side: "left",
                  },
                  {
                    step: "04",
                    title: "Testing & Quality Assurance",
                    description:
                      "Rigorous testing across devices, platforms, and scenarios to ensure flawless performance.",
                    icon: Shield,
                    color: "emerald",
                    side: "right",
                  },
                  {
                    step: "05",
                    title: "Launch & Growth",
                    description:
                      "Deploy to app stores and provide ongoing support, updates, and optimization for continued success.",
                    icon: Rocket,
                    color: "purple",
                    side: "left",
                  },
                ].map((process, index) => (
                  <div key={index} className={`flex items-center ${process.side === "right" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-1/2 ${process.side === "right" ? "pl-12" : "pr-12"}`}>
                      <Card
                        className={`bg-gradient-to-br from-${process.color}-900/40 to-${process.color}-800/20 border-${process.color}-500/30 backdrop-blur-sm p-8`}
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r from-${process.color}-500 to-${process.color}-600 rounded-lg flex items-center justify-center`}
                          >
                            <process.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <Badge
                              className={`bg-${process.color}-500/20 text-${process.color}-200 border-${process.color}-400/30 mb-2`}
                            >
                              Step {process.step}
                            </Badge>
                            <h3 className="text-xl font-bold text-white">{process.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-300">{process.description}</p>
                      </Card>
                    </div>

                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div
                        className={`w-6 h-6 bg-gradient-to-r from-${process.color}-500 to-${process.color}-600 rounded-full border-4 border-slate-900`}
                      ></div>
                    </div>

                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-r from-slate-800/30 to-gray-800/40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 text-white border-emerald-400/30">
                Investment Plans
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Choose Your
              <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                App Package
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Starter Package */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/30 backdrop-blur-sm p-8 relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Starter App</h3>
                <div className="text-4xl font-bold text-white mb-2">
                  $8,999
                  <span className="text-lg text-gray-300">/project</span>
                </div>
                <p className="text-gray-300">Perfect for MVPs and simple apps</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Single platform (iOS or Android)",
                  "Up to 8 screens",
                  "Basic UI/UX design",
                  "API integration",
                  "App store submission",
                  "3 months support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                Get Started
              </Button>
            </Card>

            {/* Professional Package - Featured */}
            <Card className="bg-gradient-to-br from-[#0071bc]/30 to-blue-800/20 border-blue-400/40 backdrop-blur-sm p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-[#0071bc] to-blue-600 text-white px-6 py-2">Most Popular</Badge>
              </div>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Professional App</h3>
                <div className="text-4xl font-bold text-white mb-2">
                  $18,999
                  <span className="text-lg text-gray-300">/project</span>
                </div>
                <p className="text-gray-300">Feature-rich cross-platform apps</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Cross-platform development",
                  "Up to 20 screens",
                  "Custom UI/UX design",
                  "Advanced features & integrations",
                  "Push notifications",
                  "Analytics integration",
                  "6 months support",
                  "Performance optimization",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-gradient-to-r from-[#0071bc] to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Choose Professional
              </Button>
            </Card>

            {/* Enterprise Package */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/30 backdrop-blur-sm p-8 relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise App</h3>
                <div className="text-4xl font-bold text-white mb-2">Custom</div>
                <p className="text-gray-300">Large-scale enterprise solutions</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Multi-platform deployment",
                  "Unlimited screens",
                  "Enterprise security",
                  "Custom backend development",
                  "Real-time features",
                  "Admin dashboard",
                  "12 months support",
                  "Dedicated project manager",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800">
                Contact Sales
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-[#0071bc]/20 to-teal-900/20"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-[#0071bc] to-teal-400 bg-clip-text text-transparent">
              Ready to Launch
            </span>
            <br />
            <span className="text-white">Your App Idea?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your vision into a powerful mobile app that users love. Let's build something extraordinary
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-[#0071bc] hover:from-purple-700 hover:to-blue-700 text-lg px-10 py-4"
              asChild
            >
              <Link href={"/contact"}>
                Start Your App Journey
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400/30 text-white bg-white/10 hover:bg-purple-500/10 text-lg px-10 py-4"
            >
              <Link href={"tel:+917733992102"}>
                Give Us a Call
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
