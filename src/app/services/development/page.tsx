'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, GitBranch, Shield, Zap } from "lucide-react";

const features = [
  {
    title: "Full-Stack Development",
    description: "End-to-end solutions using modern technologies and best practices",
    icon: <Code className="h-6 w-6 text-white" />,
    technologies: ["React", "Next.js", "Node.js", "TypeScript"]
  },
  {
    title: "Backend Development",
    description: "Robust and scalable server-side solutions",
    icon: <Server className="h-6 w-6 text-white" />,
    technologies: ["Node.js", "Python", "Java", "Go"]
  },
  {
    title: "Database Solutions",
    description: "Optimized data storage and management systems",
    icon: <Database className="h-6 w-6 text-white" />,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
  },
  {
    title: "DevOps & CI/CD",
    description: "Streamlined development and deployment processes",
    icon: <GitBranch className="h-6 w-6 text-white" />,
    technologies: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"]
  },
  {
    title: "Security Implementation",
    description: "Enterprise-grade security measures and best practices",
    icon: <Shield className="h-6 w-6 text-white" />,
    technologies: ["OAuth", "JWT", "SSL/TLS", "2FA"]
  },
  {
    title: "Performance Optimization",
    description: "Lightning-fast applications with optimized performance",
    icon: <Zap className="h-6 w-6 text-white" />,
    technologies: ["Caching", "CDN", "Load Balancing", "Monitoring"]
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/20 backdrop-blur-sm h-full">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-[#0071bc] to-[#005a94] rounded-lg">
              {feature.icon}
            </div>
            <div>
              <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
              <CardDescription className="text-gray-300">{feature.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {feature.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary" className="bg-white/10 text-white">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Development Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Custom{" "}
            <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
              Development
            </span>{" "}
            Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your ideas into powerful, scalable applications with our expert development team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-[#0071bc] to-[#005a94] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and create something extraordinary together
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0071bc] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </div>
  );
} 