import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Smartphone,
  Search,
  ShoppingCart,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Headphones,
  Users,
  Building,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"
import Link from "next/link"

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 pt-10">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0071bc]/10 to-slate-800/50"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#0071bc]/20 to-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-[#0071bc]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">GET IN TOUCH</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white">Let's Start a</span>
              <br />
              <span className="bg-gradient-to-r from-[#0071bc] via-[#0085d1] to-[#00a8ff] bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Have questions or ready to start your next project? We're here to help you transform your ideas into
              reality. Reach out to us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email Card */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/20 backdrop-blur-sm p-8 hover:border-[#0071bc]/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0071bc] to-[#0085d1] rounded-full flex items-center justify-center mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">For general inquiries and information</p>
                <a
                  href="mailto:info@bluehorsetechsolution.com"
                  className="text-[#0071bc] hover:text-[#0085d1] transition-colors font-medium"
                >
                  info@bluehorsetechsolution.com
                </a>
              </div>
            </Card>

            {/* Phone Card */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/20 backdrop-blur-sm p-8 hover:border-[#0071bc]/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0071bc] to-[#0085d1] rounded-full flex items-center justify-center mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak directly with our team</p>
                <a
                  href="tel:+917733992102"
                  className="text-[#0071bc] hover:text-[#0085d1] transition-colors font-medium"
                >
                  +91 7733992102
                </a>
              </div>
            </Card>

            {/* Visit Card */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/20 backdrop-blur-sm p-8 hover:border-[#0071bc]/40 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0071bc] to-[#0085d1] rounded-full flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">Come by our office</p>
                <p className="text-[#0071bc] hover:text-[#0085d1] transition-colors font-medium">
                  507, Shree Govind Business Tower, Nemi Nagar, Vaishali, Jaipur, Rajasthan, 302021
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4 bg-white/10 text-white border-white/20">SEND A MESSAGE</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Get in Touch with
                  <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
                    {" "}
                    Our Team
                  </span>
                </h2>
                <p className="text-gray-300">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/20 backdrop-blur-sm p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071bc]"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071bc]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071bc]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071bc]"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071bc]"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0071bc]"
                    >
                      <option value="" className="bg-slate-800">
                        Select a service
                      </option>
                      <option value="web-development" className="bg-slate-800">
                        Web Development
                      </option>
                      <option value="app-development" className="bg-slate-800">
                        App Development
                      </option>
                      <option value="cloud-operations" className="bg-slate-800">
                        Cloud & Operations
                      </option>
                      <option value="digital-marketing" className="bg-slate-800">
                        Digital Marketing
                      </option>
                      <option value="seo" className="bg-slate-800">
                        SEO Services
                      </option>
                      <option value="ecommerce" className="bg-slate-800">
                        E-commerce Solutions
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071bc]"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#0071bc] to-[#0085d1] hover:from-[#0085d1] hover:to-[#0071bc] text-lg py-3">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="h-[300px] rounded-lg overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.9901102296257!2d75.7731!3d26.9055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5196f4851dd%3A0x6f9d3ba7c78f8523!2sBlue%20Horse%20Tech%20Solution!5e0!3m2!1sen!2sin!4v1654321234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Blue Horse Tech Solution Office Location"
                ></iframe>
              </div>

              {/* Business Hours */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/20 backdrop-blur-sm p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0071bc] to-[#0085d1] rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Business Hours</h3>
                    <p className="text-gray-300">When you can reach us</p>
                  </div>
                </div>
                <div className="space-y-2 ml-16">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday:</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday:</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday:</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </Card>

              {/* Support Options */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/20 backdrop-blur-sm p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0071bc] to-[#0085d1] rounded-lg flex items-center justify-center">
                    <Headphones className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Support Options</h3>
                    <p className="text-gray-300">We're here to help</p>
                  </div>
                </div>
                <div className="space-y-4 ml-16">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-[#0071bc]" />
                    <span className="text-gray-300">Dedicated Account Manager</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-[#0071bc]" />
                    <span className="text-gray-300">Live Chat Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#0071bc]" />
                    <span className="text-gray-300">24/7 Phone Support for Emergencies</span>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/20 backdrop-blur-sm p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0071bc] to-[#0085d1] rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Connect With Us</h3>
                    <p className="text-gray-300">Follow us on social media</p>
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <a
                    href="https://www.facebook.com/people/Blue-Horse-Tech-Solution/61558577169243/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-[#0071bc] rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Facebook className="h-6 w-6 text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/bluehorsetechsolution_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-[#0071bc] rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Instagram className="h-6 w-6 text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/blue-horse-tech-solution/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-[#0071bc] rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href="https://youtube.com/@BlueHorseTechSolutionJaipur?si=v0WFh5Pi2Ibf-niu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-[#0071bc] rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Youtube className="h-6 w-6 text-gray-300 group-hover:text-white" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/30 to-gray-800/40"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">FAQ</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
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
                question: "How quickly can you respond to my inquiry?",
                answer:
                  "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line directly.",
              },
              {
                question: "Do you offer free consultations?",
                answer:
                  "Yes, we offer a free 30-minute initial consultation to discuss your project requirements and how we can help you achieve your goals.",
              },
              {
                question: "Can I request a custom quote for my project?",
                answer:
                  "Each project is unique, and we provide customized quotes based on your specific requirements. Fill out our contact form with details about your project for a tailored estimate.",
              },
              {
                question: "Do you work with clients internationally?",
                answer:
                  "Yes, we work with clients globally. Our team is equipped to handle projects across different time zones and can schedule meetings at times convenient for you.",
              },
              {
                question: "What information should I provide for the best response?",
                answer:
                  "To help us provide the most accurate information, please include details about your project scope, timeline, budget range, and specific goals or challenges you're looking to address.",
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0071bc]/20 to-slate-800/30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your
            <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
              {" "}
              Digital Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] hover:from-[#0085d1] hover:to-[#0071bc] text-lg px-8 py-3"
            >
              Schedule a Call
              <Phone className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-3"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
