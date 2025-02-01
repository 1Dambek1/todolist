import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})


import { motion } from "motion/react"
import Hero from "../components/mainPage/Hero"
import Features from "../components/mainPage/Features"
import HowItWorks from "../components/mainPage/HowItworks"
import Testimonials from "../components/mainPage/Reviews"

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white">

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
        <Features />
        <div className="bg-gradient-to from-white to-gray-100">
          <HowItWorks />
        </div>
        <Testimonials />
      </motion.div>
    </div>
  )
}

