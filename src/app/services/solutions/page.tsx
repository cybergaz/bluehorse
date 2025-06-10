'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Zap, TrendingUp, Shield, Users, Settings } from "lucide-react";

const solutions = [
  {
    title: "Cloud Migration",
    description: "Seamless transition to cloud infrastructure with zero downtime",
    icon: <Cloud className="h-6 w-6 text-white" />,
    features: ["AWS", "Azure", "GCP", "Hybrid Cloud"],
    benefits: ["Scalability", "Cost Optimization", "High Availability"]
  },
  {
    title: "DevOps Transformation",
    description: "Accelerate development and deployment with modern DevOps practices",
    icon: <Zap className="h-6 w-6 text-white" />,
    features: ["CI/CD", "Infrastructure as Code", "Monitoring", "Automation"],
    benefits: ["Faster Delivery", "Improved Quality", "Better Collaboration"]
  },
  {
    title: "FinOps Implementation",
    description: "Optimize cloud spending and maximize ROI",
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    features: ["Cost Management", "Resource Optimization", "Budget Control", "Reporting"],
    benefits: ["Cost Reduction", "Better Visibility", "Improved Planning"]
  },
  {
    title: "Security Solutions",
    description: "Comprehensive security measures to protect your business",
    icon: <Shield className="h-6 w-6 text-white" />,
    features: ["Threat Detection", "Access Control", "Compliance", "Monitoring"],
    benefits: ["Risk Mitigation", "Compliance", "Data Protection"]
  },
  {
    title: "Team Enablement",
    description: "Empower your teams with the right tools and processes",
    icon: <Users className="h-6 w-6 text-white" />,
    features: ["Training", "Documentation", "Best Practices", "Support"],
    benefits: ["Increased Productivity", "Knowledge Transfer", "Team Growth"]
  },
  {
    title: "Process Optimization",
    description: "Streamline operations and improve efficiency",
    icon: <Settings className="h-6 w-6 text-white" />,
    features: ["Workflow Automation", "Process Analysis", "Continuous Improvement"],
    benefits: ["Efficiency", "Cost Savings", "Better Quality"]
  }
];

const SolutionCard = ({ solution, index }: { solution: typeof solutions[0], index: number }) => {
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
              {solution.icon}
            </div>
            <div>
              <CardTitle className="text-white text-xl">{solution.title}</CardTitle>
              <CardDescription className="text-gray-300">{solution.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Key Features</h4>
              <div className="flex flex-wrap gap-2">
                {solution.features.map((feature, i) => (
                  <Badge key={i} variant="secondary" className="bg-white/10 text-white">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Benefits</h4>
              <ul className="space-y-1">
                {solution.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-[#0071bc] mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Enterprise Solutions</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise{" "}
            <span className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] bg-clip-text text-transparent">
              Solutions
            </span>{" "}
            & Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive enterprise solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} index={index} />
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
            Let's discuss how our solutions can help you achieve your business goals
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0071bc] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </div>
  );
} 