"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Eye, Heart, Award, Calendar, MapPin, Mail, Linkedin, Twitter, Github } from "lucide-react"
import Link from "next/link"

export default function AboutUs() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-400" />,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients to achieve shared success.",
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-400" />,
      title: "Quality",
      description: "We are committed to delivering high-quality solutions that exceed expectations and drive results.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-400" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service.",
    },
  ]

  const team = [
    {
      name: "Mr. Kailash Kakra",
      role: "Chief Financial Officer",
      image: "/images/team-1.webp",
      linkedin: "#",
      twitter: "#",
      email: "rajesh@bluehorsetechsolution.com",
    },
    {
      name: "Mr. Prince Kakra",
      role: "Director",
      image: "/images/team-2.webp",
      linkedin: "#",
      github: "#",
      email: "priya@bluehorsetechsolution.com",
    },
    {
      name: "Mrs. Pooja Asopa",
      role: "Chief Executive Officer ",
      image: "/images/team-3.webp",
      linkedin: "#",
      twitter: "#",
      email: "amit@bluehorsetechsolution.com",
    },
    // {
    //   name: "Sneha Gupta",
    //   role: "Lead Developer",
    //   image: "/placeholder.svg?height=300&width=300",
    //   bio: "Sneha is our technical lead with expertise in full-stack development, cloud technologies, and modern web frameworks. She ensures our solutions are scalable and robust.",
    //   linkedin: "#",
    //   github: "#",
    //   email: "sneha@bluehorsetechsolution.com",
    // },
  ]

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Blue Horse Tech Solution was established in Jaipur with a mission to provide innovative technology solutions.",
    },
    {
      year: "2019",
      title: "First Major Client",
      description:
        "Successfully delivered our first enterprise-level project, establishing our reputation in the market.",
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Expanded our team to 25+ professionals across development, design, and marketing disciplines.",
    },
    {
      year: "2021",
      title: "Digital Marketing Division",
      description:
        "Launched our comprehensive digital marketing services to help businesses grow their online presence.",
    },
    {
      year: "2022",
      title: "Cloud Solutions",
      description: "Introduced cloud operations and infrastructure management services to our portfolio.",
    },
    {
      year: "2023",
      title: "100+ Projects",
      description: "Reached the milestone of successfully completing over 100 projects for clients worldwide.",
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Integrated AI and machine learning capabilities into our development and marketing services.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-10">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Blue Horse Tech Solution
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Empowering businesses through innovative technology solutions since 2018. We are a team of passionate
            developers, designers, and digital marketing experts based in Jaipur, India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
              <Calendar className="h-4 w-4 mr-2" />
              Founded in 2018
            </Badge>
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
              <MapPin className="h-4 w-4 mr-2" />
              Based in Jaipur, India
            </Badge>
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
              <Users className="h-4 w-4 mr-2" />
              25+ Team Members
            </Badge>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-10 w-10 text-blue-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower businesses of all sizes with cutting-edge technology solutions that drive growth, enhance
                  efficiency, and create meaningful digital experiences. We strive to be the trusted technology partner
                  that helps our clients achieve their business objectives through innovation and excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-10 w-10 text-blue-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To become a leading technology solutions provider recognized globally for our innovative approach,
                  exceptional quality, and commitment to client success. We envision a future where technology
                  seamlessly integrates with business processes to create transformative outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These values guide everything we do and shape our culture, decisions, and relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience and passion for technology.
            </p>
          </div>

          <div className="w-[90%] mx-auto flex flex-wrap gap-5 justify-between">
            {team.map((member, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-colors w-90">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <div className="flex justify-center space-x-3">
                    {member.linkedin && (
                      <a href={member.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a small startup to a growing technology company, here's our story.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500/30"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact-us">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-500 text-blue-400 hover:bg-blue-600/10">
              <Link href="/website-development-services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
