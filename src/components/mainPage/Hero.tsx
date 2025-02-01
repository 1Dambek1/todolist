"use client"

import { useRouter } from "@tanstack/react-router"
import { motion } from "motion/react"

export default function Hero() {
  const router = useRouter()
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <h1 className="text-5xl font-bold text-gray-800">Manage Your Tasks with Ease</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          TodoMaster helps you organize your life and boost your productivity. Say goodbye to forgotten tasks and hello
          to a more organized you!
        </p>
        <button 
        onClick={() => router.navigate({to: "/auth/register"})}
        className="bg-red text-white px-6 py-3 rounded-xl
        hover:bg-red-dark 
        ">Get Started for Free</button>
      </motion.div>
    </section>
  )
}

