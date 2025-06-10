"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Smartphone,
  Search,
  TrendingUp,
  ShoppingCart,
  Star,
  CheckCircle,
  Users,
  Award,
  Zap,
  Trophy,
  Clock,
  Shield,
  Mail,
  Phone,
  MessageCircle,
  Cloud,
} from "lucide-react"
import Link from "next/link"
import Hero from "@/components/home/hero"
import { NumberTicker } from "@/components/ui/number-ticker"
import Image from "next/image"
import { motion } from "framer-motion"

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

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We{" "}
              <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
                Specialize
              </span>{" "}
              In
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering results that match your goals with our comprehensive tech solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development - Featured */}
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/20 backdrop-blur-sm col-span-full lg:col-span-2 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-[#0071bc] to-[#005a94] rounded-lg">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-2xl">Web Development</CardTitle>
                      <CardDescription className="text-gray-300">Custom websites that drive results</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    From responsive websites to complex web applications, we create digital experiences that engage your
                    audience and grow your business.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/10 text-white">
                      React
                    </Badge>
                    <Badge variant="secondary" className="bg-white/10 text-white">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="bg-white/10 text-white">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="bg-white/10 text-white">
                      WordPress
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* App Development - Featured */}
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/20 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-[#005a94] to-[#0071bc] rounded-lg">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">App Development</CardTitle>
                      <CardDescription className="text-gray-300">Mobile apps that users love</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Native and cross-platform mobile applications designed for performance and user experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/10 text-white">
                      React Native
                    </Badge>
                    <Badge variant="secondary" className="bg-white/10 text-white">
                      Flutter
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cloud Migration */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Cloud className="h-6 w-6 text-[#0071bc]" />
                  <CardTitle className="text-white">Cloud Migration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Facilitating a seamless shift to the cloud, ensuring scalability and efficiency</p>
              </CardContent>
            </Card>

            {/* DevOps */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-[#0085d1]" />
                  <CardTitle className="text-white">DevOps</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Optimizing application delivery processes for faster, reliable deployments</p>
              </CardContent>
            </Card>

            {/* FinOps */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                  <CardTitle className="text-white">FinOps</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Cloud financial management solutions to optimize spending and maximize ROI</p>
              </CardContent>
            </Card>

            {/* Other Services */}
            {[
              {
                icon: <Cloud className="h-6 w-6 text-[#0071bc]" />,
                title: "SEO Optimization",
                description: "Boost your Google rankings and online visibility"
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-[#0085d1]" />,
                title: "Digital Marketing",
                description: "Strategic marketing to grow your online presence"
              },
              {
                icon: <ShoppingCart className="h-6 w-6 text-[#0071bc]" />,
                title: "Ecommerce Solutions",
                description: "Complete online stores that convert visitors to customers"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      {service.icon}
                      <CardTitle className="text-white">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/30 to-gray-800/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-white/10 text-white border-white/20">About Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Where Technology Meets
                <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
                  {" "}
                  Innovation
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Blue Horse Tech Solution began as a vision to bridge the gap between technology and business success.
                We're more than an IT company—we're your partners in digital transformation.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Results-driven approach focused on your goals",
                  "Cutting-edge technology and creative solutions",
                  "Dedicated partnership throughout your journey"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    variants={fadeInUp}
                  >
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-gradient-to-r from-[#0071bc] to-[#005a94] hover:from-[#005a94] hover:to-[#004a7a]">
                  <Link href={"tel:+917733992102"}>
                    Learn More About Us
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center p-6">
                <Users className="h-8 w-8 text-[#0071bc] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-gray-300">Happy Clients</p>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center p-6">
                <Award className="h-8 w-8 text-[#0085d1] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">100+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center p-6">
                <Star className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">5.0</h3>
                <p className="text-gray-300">Client Rating</p>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center p-6">
                <Zap className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
                <p className="text-gray-300">Support</p>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="py-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Our Achievements</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Track Record of
              <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
                {" "}
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to quality and innovation has earned us recognition and trust from clients worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { gif: "/gif/project.gif", value: 100, label: "Successful Projects", sublabel: "Delivered on time and within budget" },
              { gif: "/gif/team.gif", value: 400, label: "Happy Clients", sublabel: "Across various industries" },
              { gif: "/gif/satr.gif", value: 5, label: "Years Experience", sublabel: "In cutting-edge technologies" },
              { gif: "/gif/awards.gif", value: 20, label: "Certifications", sublabel: "Demonstrating expertise in diverse fields" }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gradient-to-r from-slate-800/20 to-slate-600/60 border-slate-600/20 border-none text-center p-8 h-full">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      src={achievement.gif}
                      width={80}
                      height={80}
                      alt={`${achievement.label} Icon`}
                      className="p-2 rounded-full"
                    />
                  </div>
                  <h3 className="text-4xl font-extrabold text-white mb-2">
                    <NumberTicker value={achievement.value} className="text-white" />+
                  </h3>
                  <p className="text-gray-300 font-medium">{achievement.label}</p>
                  <p className="text-sm text-gray-400 -mt-2">{achievement.sublabel}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="h-6 w-6 text-yellow-400" />, title: "Industry Recognition", description: "Recognized for innovative web solutions and exceptional client service" },
              { icon: <Shield className="h-6 w-6 text-green-400" />, title: "Quality Assurance", description: "100% project completion rate with rigorous testing and quality standards" },
              { icon: <Zap className="h-6 w-6 text-[#0071bc]" />, title: "Fast Delivery", description: "Average project delivery 20% faster than industry standards" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    {feature.icon}
                    <h3 className="text-white font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Brands Section */}
      <motion.section
        className="py-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-gray-800/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Our Clients</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Brands That
              <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
                {" "}
                Believe In Us
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by startups to enterprises across various industries for their digital transformation needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            {[
              "TechCorp", "InnovateLab", "DigitalFlow", "NextGen", "CloudSync", "DataVault",
              "WebForce", "AppMaster", "CodeCraft", "TechSphere", "DevHub", "SmartSolutions"
            ].map((brand, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0071bc] to-[#005a94] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm">{brand.slice(0, 2)}</span>
                    </div>
                    <p className="text-white font-medium text-sm">{brand}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Blue Horse Tech delivered an exceptional e-commerce platform that increased our online sales by 300%. Their attention to detail is remarkable.",
                author: "John Smith",
                role: "CEO, TechCorp",
                initials: "JS"
              },
              {
                quote: "The mobile app they developed for us has over 50K downloads and excellent user ratings. Professional team with great communication.",
                author: "Maria Johnson",
                role: "Founder, InnovateLab",
                initials: "MJ"
              },
              {
                quote: "Our website redesign led to a 250% increase in leads. Blue Horse Tech understands both design and business objectives perfectly.",
                author: "Robert Davis",
                role: "Marketing Director, DigitalFlow",
                initials: "RD"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/40 to-slate-700/60 border-slate-600/20 backdrop-blur-sm p-6 h-full">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">{testimonial.quote}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#0071bc] to-[#005a94] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/30 to-gray-800/40"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
                {" "}
                Digital Presence?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0071bc] to-[#005a94] hover:from-[#005a94] hover:to-[#004a7a] text-lg px-8 py-3"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white bg-white/10 hover:bg-white/10 text-lg px-8 py-3"
                >
                  <Link href={"tel:+917733992102"}>
                    Give Us a Call
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/40 to-gray-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connect With Us
              <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent"> Now</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Ready to transform your digital presence? Let's discuss your project and create something amazing
              together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={scaleIn}>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071bc]"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071bc]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071bc]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071bc]"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0071bc]">
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="app-development">App Development</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="ecommerce">Ecommerce Solutions</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071bc]"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-[#0071bc] to-[#005a94] hover:from-[#005a94] hover:to-[#004a7a] text-lg py-3">
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            <div className="space-y-8">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-300 mb-8">
                  We're here to help you succeed. Reach out to us through any of these channels, and we'll get back to
                  you within 24 hours.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="h-6 w-6 text-white" />,
                    title: "Email Us",
                    contact: "info@bluehorsetechsolution.com",
                    subtext: "We'll respond within 24 hours"
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-white" />,
                    title: "Call Us",
                    contact: "+1 (555) 123-4567",
                    subtext: "Mon-Fri, 9AM-6PM EST"
                  },
                  {
                    icon: <MessageCircle className="h-6 w-6 text-white" />,
                    title: "Live Chat",
                    contact: "Available on our website",
                    subtext: "Instant support during business hours"
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#0071bc] to-[#005a94] rounded-lg flex items-center justify-center">
                          {contact.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{contact.title}</h4>
                          <p className="text-gray-300">{contact.contact}</p>
                          <p className="text-gray-400 text-sm">{contact.subtext}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="flex space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button className="bg-gradient-to-r from-[#0071bc] to-[#005a94] hover:from-[#005a94] hover:to-[#004a7a] w-full">
                    <Link href={"tel:+917733992102"}>
                      Call Us Now
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full bg-white/10" asChild>
                    <Link href={"/about-us"}>
                      Know More About Us
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
