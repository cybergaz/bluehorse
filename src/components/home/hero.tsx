"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import { ContainerTextFlip } from "../ui/text-flip"
import { Badge } from "../ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="pt-20 relative overflow-hidden bg-gradient-to-r from-[#0071bc]/10 to-slate-800/50 px-2">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animated-gradient"></div>
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center flex flex-col gap-10 w-full items-center justify-center"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-1 items-center justify-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">WEB & APP DEVELOPMENT COMPANY</Badge>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-[#0071bc] via-[#0085d1] to-[#00a8ff] bg-clip-text text-transparent">
                Blue Horse Tech
              </span>
              <span className="text-white ml-5">Solution</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ContainerTextFlip
                words={[
                  "Web Development",
                  "App Development",
                  "Cloud Migration",
                  "DevOps",
                  "FinOps",
                  "SEO & Advertisement",
                  "Digital Marketing",
                  "E-Commerce Solutions",
                ]}
                className="bg-gradient-to-r from-slate-800/50 to-slate-700/50"
                textClassName="text-teal-400"
              />
            </motion.div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We combine technology and creativity to help your business grow. From creating a strong online presence to
            building user-friendly websites and apps, we're your partners in making your ideas a reality.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0071bc] to-[#005a94] hover:from-[#005a94] hover:to-[#004a7a] text-lg px-8 py-3 group"
              asChild
            >
              <Link href="/contact" className="flex items-center justify-center text-white">
                <span className="flex items-center">
                  Grow With Us
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:text-white bg-white/5 hover:bg-white/10 text-lg px-8 py-3"
              asChild
            >
              <Link href={"/about-us"}>View Our Work</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .animated-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(0, 113, 188, 0.1),
            rgba(0, 133, 209, 0.05),
            rgba(0, 168, 255, 0.1),
            rgba(100, 116, 139, 0.1)
          );
          background-size: 400% 400%;
          animation: gradientShift 30s ease infinite;
          opacity: 0.6;
        }

        .floating-orbs {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 113, 188, 0.1), transparent);
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          top: 60%;
          right: 15%;
          animation-delay: -7s;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 60%;
          animation-delay: -14s;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          33% {
            transform: translateY(-30px) translateX(20px) scale(1.1);
          }
          66% {
            transform: translateY(20px) translateX(-15px) scale(0.9);
          }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animated-gradient,
          .orb {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
