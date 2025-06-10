"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ChevronLeft, ChevronRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Gemini 2: The Future of AI by Google",
    excerpt:
      "Explore how Google's Gemini 2 is revolutionizing artificial intelligence and what it means for businesses in 2025.",
    image: "/placeholder.svg?height=300&width=400",
    category: "AI & Technology",
    author: "bluehorsetechsolution",
    date: "November 30, 2024",
    slug: "gemini-2-future-of-ai-google",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Building Quality Backlinks in 2025",
    excerpt:
      "Learn the most effective strategies for building high-quality backlinks that boost your website's search engine rankings.",
    image: "/placeholder.svg?height=300&width=400",
    category: "SEO",
    author: "bluehorsetechsolution",
    date: "November 27, 2024",
    slug: "ultimate-guide-building-quality-backlinks-2025",
  },
  {
    id: 3,
    title: "Top 10 AI Tools in 2025 for Making Your Business Work Better",
    excerpt:
      "Discover the most powerful AI tools that can transform your business operations and increase productivity.",
    image: "/placeholder.svg?height=300&width=400",
    category: "AI & Business",
    author: "bluehorsetechsolution",
    date: "November 21, 2024",
    slug: "top-10-ai-tools-2025-business",
  },
  {
    id: 4,
    title: "Top Ecommerce Development Trends to Watch in 2025",
    excerpt:
      "Stay ahead of the curve with the latest ecommerce development trends that will shape online retail in 2025.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Ecommerce",
    author: "bluehorsetechsolution",
    date: "November 18, 2024",
    slug: "top-ecommerce-development-trends-2025",
  },
  {
    id: 5,
    title: "Website Development Strategies for 2025",
    excerpt:
      "Learn the essential website development strategies that will help you create modern, efficient, and user-friendly websites.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Development",
    author: "bluehorsetechsolution",
    date: "November 15, 2024",
    slug: "website-development-strategies-2025",
  },
  {
    id: 6,
    title: "Top Trends in Mobile App Development for 2025",
    excerpt: "Explore the cutting-edge trends in mobile app development that will define the industry in 2025.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile Development",
    author: "bluehorsetechsolution",
    date: "October 9, 2024",
    slug: "top-trends-mobile-app-development-2025",
  },
  {
    id: 7,
    title: "Cloud Security Best Practices for Modern Businesses",
    excerpt:
      "Essential cloud security practices every business should implement to protect their data and infrastructure.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Cloud Security",
    author: "bluehorsetechsolution",
    date: "October 5, 2024",
    slug: "cloud-security-best-practices-modern-businesses",
  },
  {
    id: 8,
    title: "The Rise of Progressive Web Apps in 2025",
    excerpt:
      "Understanding how Progressive Web Apps are changing the digital landscape and why your business needs one.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Development",
    author: "bluehorsetechsolution",
    date: "September 28, 2024",
    slug: "rise-progressive-web-apps-2025",
  },
  {
    id: 9,
    title: "Digital Marketing Automation: Tools and Strategies",
    excerpt:
      "Discover how marketing automation can streamline your campaigns and improve ROI with the right tools and strategies.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Digital Marketing",
    author: "bluehorsetechsolution",
    date: "September 22, 2024",
    slug: "digital-marketing-automation-tools-strategies",
  },
]

const categories = [
  "All",
  "AI & Technology",
  "SEO",
  "Web Development",
  "Mobile Development",
  "Ecommerce",
  "Digital Marketing",
  "Cloud Security",
]

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const postsPerPage = 6

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 py-16 border-b border-gray-800">
        <div className="container mx-auto px-4 text-center pt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Blog</h1>
          <p className="text-xl text-blue-300 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology, digital marketing, and
            business growth.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryChange(category)}
                className={
                  selectedCategory === category
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-gray-700 text-gray-300 bg-gray-800/10 hover:bg-gray-800"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden bg-gray-900 border-gray-800 hover:border-blue-600 transition-colors duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 bg-blue-900 text-blue-200">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-400">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-400">{post.date}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12">
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center space-x-2 border-gray-700 text-gray-300 bg-transparent hover:bg-gray-800"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => handlePageChange(page)}
                  className={
                    currentPage === page
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-gray-700 text-gray-300 bg-transparent  hover:bg-gray-800"
                  }
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center space-x-2 border-gray-700 bg-transparent  text-gray-300 hover:bg-gray-800"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights, tips, and trends delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
