"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Code,
  Smartphone,
  Search,
  TrendingUp,
  ShoppingCart,
  CheckCircle,
  Award,
  Clock,
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
  FileCode,
  Cpu,
  Cloud,
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

export default function WebDevelopmentServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0071bc]/10 to-slate-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Badge className="mb-6 bg-white/10 text-white border-white/20">WEBSITE DEVELOPMENT SERVICES</Badge>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                variants={fadeInUp}
              >
                <span className="text-white">Custom</span>
                <br />
                <span className="bg-gradient-to-r from-[#0071bc] via-[#0085d1] to-[#00a8ff] bg-clip-text text-transparent">
                  Website Development
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                Transform your digital presence with cutting-edge websites that drive results. We create responsive,
                fast, and user-friendly websites that convert visitors into customers.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0071bc] to-[#005a94] hover:from-[#005a94] hover:to-[#004a7a] text-lg px-8 py-3"
                  asChild
                >
                  <Link href={"/contact"}>
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white bg-white/10 hover:bg-white/10 text-lg px-8 py-3"
                  asChild
                >
                  <Link href={"/services/app-development"}>
                    App Development
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-5 bg-transparent border-none">
                <motion.div
                  className="grid grid-cols-2 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { icon: Globe, stat: "200+", text: "Websites Built" },
                    { icon: Rocket, stat: "99%", text: "Uptime Guarantee" },
                    { icon: Clock, stat: "2-4", text: "Weeks Delivery" },
                    { icon: Award, stat: "100%", text: "Client Satisfaction" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/20 backdrop-blur-sm"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-[#0071bc] to-[#005a94] rounded-full flex items-center justify-center mx-auto mb-4">
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.stat}</h3>
                      <p className="text-gray-300">{item.text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/10 text-white border-white/20">What We Offer</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Web Development
              <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
                {" "}
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to launch, we provide end-to-end web development services tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Globe,
                title: "Custom Website Design",
                description: "Unique, responsive designs tailored to your brand identity",
                features: [
                  "Mobile-first responsive design",
                  "Custom UI/UX design",
                  "Brand-focused aesthetics"
                ]
              },
              {
                icon: Code,
                title: "Frontend Development",
                description: "Modern, interactive user interfaces with latest technologies",
                features: [
                  "React, Next.js, Vue.js",
                  "Progressive Web Apps",
                  "Cross-browser compatibility"
                ]
              },
              {
                icon: Database,
                title: "Backend Development",
                description: "Robust server-side solutions and database management",
                features: [
                  "Node.js, Python, PHP",
                  "API development & integration",
                  "Database optimization"
                ]
              },
              {
                icon: ShoppingCart,
                title: "E-commerce Solutions",
                description: "Complete online stores with payment integration",
                features: [
                  "Shopify, WooCommerce",
                  "Payment gateway integration",
                  "Inventory management"
                ]
              },
              {
                icon: Layers,
                title: "CMS Development",
                description: "Easy-to-manage content management systems",
                features: [
                  "WordPress, Drupal",
                  "Custom CMS solutions",
                  "User-friendly admin panels"
                ]
              },
              {
                icon: Settings,
                title: "Maintenance & Support",
                description: "Ongoing support and website maintenance services",
                features: [
                  "24/7 monitoring",
                  "Regular updates",
                  "Security patches"
                ]
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0071bc] to-[#005a94] rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/30 to-gray-800/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Technologies We Use</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge
              <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
                {" "}
                Tech Stack
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use the latest technologies and frameworks to build fast, secure, and scalable websites
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Frontend",
                icon: FileCode,
                technologies: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"]
              },
              {
                title: "Backend",
                icon: Cpu,
                technologies: ["Node.js", "Python", "PHP", "Express.js", "Django", "Laravel"]
              },
              {
                title: "Database",
                icon: Database,
                technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase"]
              },
              {
                title: "Cloud & Tools",
                icon: Cloud,
                technologies: ["AWS", "Vercel", "Docker", "Git", "Figma", "Webpack"]
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
                  <category.icon className="h-5 w-5 text-[#0071bc] mr-2" />
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-2 h-2 bg-[#0071bc] rounded-full"></div>
                      <span className="text-gray-300">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Build Your
              <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
                {" "}
                Website
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven development process ensures quality, efficiency, and client satisfaction at every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "We analyze your requirements, target audience, and business goals to create a comprehensive project plan.",
                icon: Target,
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description:
                  "Our designers create wireframes and mockups that align with your brand and user experience goals.",
                icon: Palette,
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "We build your website using best practices, followed by rigorous testing across all devices and browsers.",
                icon: Code,
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We deploy your website and provide ongoing maintenance, updates, and technical support.",
                icon: Rocket,
              },
            ].map((process, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/30 to-slate-700/50 border-slate-600/20 backdrop-blur-sm text-center p-8 relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#0071bc] to-[#005a94] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{process.step}</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-[#0071bc] to-[#005a94] rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                  <process.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-gray-800/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Pricing Plans</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
                {" "}
                Package
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to suit businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$999",
                description: "Perfect for small businesses and startups",
                features: [
                  "5-page responsive website",
                  "Mobile-optimized design",
                  "Basic SEO setup",
                  "Contact form integration",
                  "1 month free support",
                  "SSL certificate",
                ],
                popular: false,
              },
              {
                name: "Professional",
                price: "$2,499",
                description: "Ideal for growing businesses",
                features: [
                  "10-page responsive website",
                  "Custom design & branding",
                  "Advanced SEO optimization",
                  "CMS integration",
                  "E-commerce functionality",
                  "3 months free support",
                  "Analytics setup",
                  "Social media integration",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large businesses with complex needs",
                features: [
                  "Unlimited pages",
                  "Custom web application",
                  "Advanced integrations",
                  "Multi-language support",
                  "Custom admin panel",
                  "6 months free support",
                  "Performance optimization",
                  "Security hardening",
                  "Dedicated project manager",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "bg-gradient-to-br from-[#0071bc]/20 to-[#005a94]/30 border-[#0071bc]/40" : "bg-white/5 border-white/10"} backdrop-blur-sm p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[#0071bc] to-[#005a94] text-white">Most Popular</Badge>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    {plan.price !== "Custom" && <span className="text-lg text-gray-300">/project</span>}
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-[#0071bc] to-[#005a94] hover:from-[#005a94] hover:to-[#004a7a]" : "bg-white/10 hover:bg-white/20 text-white"}`}
                >
                  {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to build a website?",
                answer:
                  "Typically, a standard website takes 2-4 weeks to complete. Complex projects with custom functionality may take 6-8 weeks. We'll provide a detailed timeline during the planning phase.",
              },
              {
                question: "Do you provide website maintenance after launch?",
                answer:
                  "Yes, we offer comprehensive maintenance packages including security updates, content updates, performance monitoring, and technical support. All our packages include at least 1 month of free support.",
              },
              {
                question: "Will my website be mobile-friendly?",
                answer:
                  "All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices including smartphones, tablets, and desktops.",
              },
              {
                question: "Can you help with SEO and digital marketing?",
                answer:
                  "Yes, we provide comprehensive SEO services and digital marketing solutions. Our websites are built with SEO best practices, and we offer ongoing marketing services to help grow your online presence.",
              },
              {
                question: "What if I need changes after the website is live?",
                answer:
                  "We provide training on how to manage your website content. For technical changes, our support team is available to help. We also offer maintenance packages for ongoing updates and modifications.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm p-6">
                <h3 className="text-white font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/40 to-gray-800/50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your
            <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
              {" "}
              Dream Website?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a website that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0071bc] to-[#005a94] hover:from-[#005a94] hover:to-[#004a7a] text-lg px-8 py-3"
              asChild
            >
              <Link href={"/contact"}>
                Connect With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white bg-white/10 hover:bg-white/10 text-lg px-8 py-3"
              asChild
            >
              <Link href={"tel:+917733992102"}>
                Give Us a Call
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
