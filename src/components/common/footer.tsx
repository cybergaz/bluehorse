import { ArrowRight, Code, Mail, MessageCircle, Phone, Search, ShoppingCart, Smartphone, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-[#0071bc] to-[#005a94] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BH</span>
              </div>
              <span className="text-white font-bold text-xl">Blue Horse Tech</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Blue Horse Tech Solution delivers innovative IT solutions, catering to industries like healthcare,
              education, e-commerce, and more.
            </p>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/people/Blue-Horse-Tech-Solution/61558577169243/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0071bc] rounded-lg flex items-center justify-center transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/bluehorsetechsolution_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0071bc] rounded-lg flex items-center justify-center transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.926 2.026-1.416 3.323-1.416s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/blue-horse-tech-solution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0071bc] rounded-lg flex items-center justify-center transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@BlueHorseTechSolutionJaipur?si=v0WFh5Pi2Ibf-niu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0071bc] rounded-lg flex items-center justify-center transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-300 hover:text-[#0071bc] transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-[#0071bc] transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-[#0071bc] transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 hover:text-[#0071bc] transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-gray-300 hover:text-[#0071bc] transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/website-development-services"
                  className="text-gray-300 hover:text-[#0071bc] transition-colors flex items-center group"
                >
                  <Code className="h-4 w-4 mr-2 text-[#0071bc]" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/app-development"
                  className="text-gray-300 hover:text-[#0071bc] transition-colors flex items-center group"
                >
                  <Smartphone className="h-4 w-4 mr-2 text-[#0071bc]" />
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/top-digital-marketing-company-in-jaipur"
                  className="text-gray-300 hover:text-[#0071bc] transition-colors flex items-center group"
                >
                  <TrendingUp className="h-4 w-4 mr-2 text-[#0071bc]" />
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/search-engine-optimization"
                  className="text-gray-300 hover:text-[#0071bc] transition-colors flex items-center group"
                >
                  <Search className="h-4 w-4 mr-2 text-[#0071bc]" />
                  SEO Services
                </Link>
              </li>
              <li>
                <Link
                  href="/ecommerce-services"
                  className="text-gray-300 hover:text-[#0071bc] transition-colors flex items-center group"
                >
                  <ShoppingCart className="h-4 w-4 mr-2 text-[#0071bc]" />
                  E-commerce Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#0071bc]/20 rounded-lg flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-[#0071bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    507, Shree Govind Business Tower, Nemi Nagar, Vaishali, Jaipur, Rajasthan, 302021
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#0071bc]/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#0071bc]" />
                </div>
                <a href="tel:+917733992102" className="text-gray-300 hover:text-[#0071bc] transition-colors">
                  +91 7733992102
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#0071bc]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#0071bc]" />
                </div>
                <a
                  href="mailto:info@bluehorsetechsolution.com"
                  className="text-gray-300 hover:text-[#0071bc] transition-colors"
                >
                  info@bluehorsetechsolution.com
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-[#0071bc] to-[#005a94] hover:from-[#005a94] hover:to-[#004a7a]">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="border-t border-white/10 bg-gradient-to-r from-slate-800/50 to-gray-800/50"> */}
      {/*   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> */}
      {/*     <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"> */}
      {/*       <div> */}
      {/*         <h4 className="text-white font-semibold text-lg mb-2">Stay Updated</h4> */}
      {/*         <p className="text-gray-300">Get the latest tech insights and updates delivered to your inbox.</p> */}
      {/*       </div> */}
      {/*       <div className="flex space-x-3 w-full md:w-auto"> */}
      {/*         <input */}
      {/*           type="email" */}
      {/*           placeholder="Enter your email" */}
      {/*           className="flex-1 md:w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071bc]" */}
      {/*         /> */}
      {/*         <Button className="bg-gradient-to-r from-[#0071bc] to-[#005a94] hover:from-[#005a94] hover:to-[#004a7a] px-6"> */}
      {/*           Subscribe */}
      {/*         </Button> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </div> */}

      {/* Footer Bottom */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto py-2">
          <div className="flex items-center justify-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Blue Horse Tech Solution. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/917733992102"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
