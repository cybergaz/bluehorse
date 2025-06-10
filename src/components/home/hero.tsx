"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import { ContainerTextFlip } from "../ui/text-flip"
import { Badge } from "../ui/badge"
import { BackgroundBeams } from "../ui/bg-beams"
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
      <BackgroundBeams className="opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
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
                words={["Web Development", "App Development", "Cloud Migration", "DevOps", "FinOps", "SEO & Advertisement", "Digital Marketing", "E-Commerce Solutions"]}
                className="bg-gradient-to-r from-slate-800/50 to-slate-700/50"
                textClassName="bg-gradient-to-r from-[#0071bc] to-[#00a8ff] bg-clip-text text-transparent"
              />
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            We combine technology and creativity to help your business grow. From creating a strong online presence to
            building user-friendly websites and apps, we're your partners in making your ideas a reality.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
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
                    transition={{ duration: 1.5, repeat: Infinity }}
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
              <Link href={"/about-us"}>
                View Our Work
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
