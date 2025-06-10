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
  ShoppingCart,
  CheckCircle,
  Mail,
  Phone,
  MessageCircle,
  Cloud,
  Shield,
  Zap,
  Target,
  Settings,
  BarChart3,
  DollarSign,
  Gauge,
  Workflow,
  GitBranch,
  Monitor,
  Timer,
  TrendingDown,
} from "lucide-react"
import Link from "next/link"

export default function CloudOperationsServices() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const techRef = useRef(null)
  const benefitsRef = useRef(null)
  const processRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.3 })
  const techInView = useInView(techRef, { once: true, amount: 0.3 })
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 })
  const processInView = useInView(processRef, { once: true, amount: 0.3 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-slate-800 pt-10">

      {/* Hero Section - Split Layout */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-[#0071bc]/10 to-emerald-900/10"
          />
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#0071bc]/10 to-teal-500/10 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-[#0071bc]/5 rounded-full blur-3xl"
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Badge className="mb-6 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-white border-teal-400/30">
                  CLOUD & OPERATIONS EXCELLENCE
                </Badge>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              >
                <span className="text-white">Scale Your</span>
                <br />
                <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-[#0071bc] bg-clip-text text-transparent">
                  Cloud Journey
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Transform your infrastructure with our comprehensive cloud and operations solutions. From migration to
                optimization, we ensure your business runs efficiently in the cloud.
              </motion.p>

              {/* Key Benefits */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              >
                {[
                  { icon: CheckCircle, text: "99.9% Uptime Guarantee", color: "teal" },
                  { icon: CheckCircle, text: "Cost Optimization", color: "emerald" },
                  { icon: CheckCircle, text: "24/7 Monitoring", color: "blue" },
                  { icon: CheckCircle, text: "Enterprise Security", color: "purple" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r from-${benefit.color}-500 to-${benefit.color}-600 rounded-lg flex items-center justify-center`}>
                      <benefit.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300">{benefit.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-lg px-8 py-4"
                  asChild
                >
                  <Link href={"/contact"}>
                    Start Cloud Migration
                    <Cloud className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              ref={heroRef}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: "Cloud Migration",
                    description: "Seamless cloud transition",
                    icon: Cloud,
                    color: "teal",
                    metric: "95%",
                    metricLabel: "Success Rate"
                  },
                  {
                    title: "DevOps",
                    description: "Faster deployments",
                    icon: GitBranch,
                    color: "blue",
                    metric: "70%",
                    metricLabel: "Faster Delivery",
                    className: "mt-8"
                  },
                  {
                    title: "FinOps",
                    description: "Cost optimization",
                    icon: DollarSign,
                    color: "emerald",
                    metric: "40%",
                    metricLabel: "Cost Reduction"
                  },
                  {
                    title: "Monitoring",
                    description: "24/7 oversight",
                    icon: Monitor,
                    color: "purple",
                    metric: "99.9%",
                    metricLabel: "Uptime",
                    className: "mt-8"
                  }
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className={`bg-gradient-to-br from-${card.color}-900/40 to-${card.color}-800/20 border-${card.color}-500/30 backdrop-blur-sm p-6 transform transition-transform ${card.className || ''}`}>
                      <div className={`w-12 h-12 bg-gradient-to-r from-${card.color}-500 to-${card.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                        <card.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                      <p className={`text-${card.color}-200 text-sm mb-3`}>{card.description}</p>
                      <div className="text-2xl font-bold text-white">{card.metric}</div>
                      <p className={`text-${card.color}-300 text-xs`}>{card.metricLabel}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services - Three Column Layout */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-24 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-white border-emerald-400/30">
              Core Services
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-[#0071bc] bg-clip-text text-transparent">
                Complete Cloud
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Cloud Migration */}
            <Card className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border-teal-500/20 backdrop-blur-sm overflow-hidden group hover:border-teal-400/40 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center">
                    <Cloud className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-teal-500/20 text-teal-200 border-teal-400/30">01</Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Facilitating a seamless shift to the cloud, ensuring scalability and efficiency with minimal downtime
                  and maximum performance.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Assessment & Planning",
                    "Data Migration Strategy",
                    "Application Modernization",
                    "Security & Compliance",
                    "Performance Optimization",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 group-hover:scale-105 transition-transform">
                  Explore Migration Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* DevOps */}
            <Card className="bg-gradient-to-br from-[#0071bc]/30 to-blue-800/20 border-blue-500/30 backdrop-blur-sm overflow-hidden group hover:border-blue-400/40 transition-all duration-300 transform lg:scale-105">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-2xl flex items-center justify-center">
                    <GitBranch className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30">02</Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">DevOps</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Optimizing application delivery processes for faster, reliable deployments with continuous integration
                  and deployment pipelines.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "CI/CD Pipeline Setup",
                    "Infrastructure as Code",
                    "Automated Testing",
                    "Container Orchestration",
                    "Monitoring & Alerting",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-[#0071bc] to-blue-700 hover:from-blue-700 hover:to-blue-800 group-hover:scale-105 transition-transform">
                  Explore DevOps Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* FinOps */}
            <Card className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-emerald-500/30 backdrop-blur-sm overflow-hidden group hover:border-emerald-400/40 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30">03</Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">FinOps</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Cloud financial management solutions to optimize spending and maximize ROI through intelligent cost
                  monitoring and optimization.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Cost Monitoring & Analysis",
                    "Budget Management",
                    "Resource Optimization",
                    "Spend Forecasting",
                    "ROI Maximization",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 group-hover:scale-105 transition-transform">
                  Explore FinOps Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Technologies & Platforms - Grid Layout */}
      <motion.section
        ref={techRef}
        initial="hidden"
        animate={techInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-24 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/10 via-transparent to-emerald-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-teal-500/20 text-white border-purple-400/30">
              Technologies & Platforms
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Enterprise-Grade
              </span>
              <br />
              <span className="text-white">Cloud Stack</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cloud Providers */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
                <Cloud className="h-5 w-5 text-teal-400 mr-2" />
                Cloud Providers
              </h3>
              <div className="space-y-4">
                {["Amazon AWS", "Microsoft Azure", "Google Cloud", "IBM Cloud", "Oracle Cloud", "DigitalOcean"].map(
                  (tech) => (
                    <Card
                      key={tech}
                      className="bg-gradient-to-r from-teal-900/20 to-teal-800/10 border-teal-500/20 backdrop-blur-sm p-4 hover:bg-teal-800/20 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-gray-300">{tech}</span>
                      </div>
                    </Card>
                  ),
                )}
              </div>
            </div>

            {/* DevOps Tools */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
                <GitBranch className="h-5 w-5 text-[#0071bc] mr-2" />
                DevOps Tools
              </h3>
              <div className="space-y-4">
                {["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Terraform", "Ansible"].map((tech) => (
                  <Card
                    key={tech}
                    className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border-blue-500/20 backdrop-blur-sm p-4 hover:bg-blue-800/20 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Monitoring */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
                <Monitor className="h-5 w-5 text-emerald-400 mr-2" />
                Monitoring
              </h3>
              <div className="space-y-4">
                {["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic", "CloudWatch"].map((tech) => (
                  <Card
                    key={tech}
                    className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/10 border-emerald-500/20 backdrop-blur-sm p-4 hover:bg-emerald-800/20 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
                <Shield className="h-5 w-5 text-purple-400 mr-2" />
                Security
              </h3>
              <div className="space-y-4">
                {["HashiCorp Vault", "AWS IAM", "Azure AD", "Okta", "CyberArk", "Splunk"].map((tech) => (
                  <Card
                    key={tech}
                    className="bg-gradient-to-r from-purple-900/20 to-purple-800/10 border-purple-500/20 backdrop-blur-sm p-4 hover:bg-purple-800/20 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section - Horizontal Cards */}
      <motion.section
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-24 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-gray-800/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-teal-500/20 to-purple-500/20 text-white border-teal-400/30">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                Proven Results
              </span>
              <br />
              <span className="text-white">& Expertise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Performance Metrics */}
            <Card className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 border-slate-600/20 backdrop-blur-sm p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Gauge className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">99.9%</h3>
                  <p className="text-teal-200">Uptime Achieved</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingDown className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">40%</h3>
                  <p className="text-emerald-200">Cost Reduction</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0071bc] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Timer className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">70%</h3>
                  <p className="text-blue-200">Faster Deployments</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
                  <p className="text-purple-200">Security Compliance</p>
                </div>
              </div>
            </Card>

            {/* Key Benefits */}
            <Card className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 border-slate-600/20 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "Accelerated Innovation",
                    description: "Faster time-to-market with automated processes",
                    color: "teal",
                  },
                  {
                    icon: DollarSign,
                    title: "Cost Optimization",
                    description: "Reduce infrastructure costs by up to 40%",
                    color: "emerald",
                  },
                  {
                    icon: Shield,
                    title: "Enhanced Security",
                    description: "Enterprise-grade security and compliance",
                    color: "purple",
                  },
                  {
                    icon: BarChart3,
                    title: "Improved Performance",
                    description: "Better scalability and reliability",
                    color: "blue",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r from-${benefit.color}-500 to-${benefit.color}-600 rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <benefit.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Process Section - Workflow Layout */}
      <motion.section
        ref={processRef}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-24 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-emerald-500/20 to-[#0071bc]/20 text-white border-emerald-400/30">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-[#0071bc] bg-clip-text text-transparent">
                Streamlined
              </span>
              <br />
              <span className="text-white">Implementation</span>
            </h2>
          </div>

          {/* Process Flow */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 via-[#0071bc] to-emerald-500 transform -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Comprehensive analysis of current infrastructure and requirements",
                  icon: Target,
                  color: "teal",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Custom roadmap and migration strategy development",
                  icon: Workflow,
                  color: "blue",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Seamless execution with minimal business disruption",
                  icon: Settings,
                  color: "emerald",
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuous monitoring and performance optimization",
                  icon: BarChart3,
                  color: "purple",
                },
              ].map((process, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-br from-${process.color}-900/30 to-${process.color}-800/20 border-${process.color}-500/30 backdrop-blur-sm p-6 text-center relative z-10`}
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
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-24 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-[#0071bc]/20 to-emerald-900/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-teal-400 via-[#0071bc] to-emerald-400 bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <br />
            <span className="text-white">Your Cloud Infrastructure?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's optimize your cloud operations and accelerate your digital transformation journey with our expert
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 via-[#0071bc] to-emerald-600 hover:from-teal-700 hover:via-blue-700 hover:to-emerald-700 text-lg px-12 py-4"
              asChild
            >
              <Link href={"/contact"}>
                Start Your Cloud Journey
                <Cloud className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-teal-400/30 text-white bg-white/10 hover:bg-teal-500/10 text-lg px-12 py-4"
            >
              <Link href={"tel:+917733992102"}>
                Call Us Now
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

    </div>
  )
}
