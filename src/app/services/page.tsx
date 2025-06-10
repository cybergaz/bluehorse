'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Zap, TrendingUp, Smartphone, ShoppingCart } from "lucide-react";

const services = [
  {
    title: "Custom Development",
    description: "Transform your ideas into reality with our cutting-edge custom development solutions. We craft scalable, robust applications that drive your business forward.",
    icon: <Code className="h-6 w-6 text-white" />,
    link: "/services/development",
    features: ["Full-stack Development", "API Integration", "Cloud Solutions", "DevOps"],
    badges: ["React", "Next.js", "Node.js", "TypeScript"]
  },
  {
    title: "Enterprise Solutions",
    description: "Elevate your business operations with our comprehensive enterprise solutions. Streamline processes, enhance productivity, and stay ahead of the competition.",
    icon: <Cloud className="h-6 w-6 text-white" />,
    link: "/services/solutions",
    features: ["Business Process Automation", "Digital Transformation", "Enterprise Integration", "Scalable Architecture"],
    badges: ["Cloud", "DevOps", "FinOps", "Security"]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/20 backdrop-blur-sm h-full">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-[#0071bc] to-[#005a94] rounded-lg">
              {service.icon}
            </div>
            <div>
              <CardTitle className="text-white text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-gray-300">Comprehensive solutions for your business</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-6">{service.description}</p>
          <div className="space-y-2 mb-6">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center text-gray-300">
                <span className="text-[#0071bc] mr-2">✓</span>
                {feature}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {service.badges.map((badge, i) => (
              <Badge key={i} variant="secondary" className="bg-white/10 text-white">
                {badge}
              </Badge>
            ))}
          </div>
          <Link 
            href={service.link}
            className="inline-block bg-gradient-to-r from-[#0071bc] to-[#005a94] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
          >
            Learn More →
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We{" "}
            <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
              Specialize
            </span>{" "}
            In
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our cutting-edge solutions can transform your business and drive unprecedented growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-[#0071bc] to-[#005a94] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0071bc] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
