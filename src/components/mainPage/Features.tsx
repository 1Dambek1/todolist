"use client"

import { CheckCircle, Clock, Cloud } from "lucide-react"
import { motion } from "motion/react"

const features = [
  {
    icon: <CheckCircle className="w-12 h-12 text-red-light" />,
    title: "Easy Task Management",
    description: "Create, organize, and complete tasks with just a few clicks.",
  },
  {
    icon: <Clock className="w-12 h-12 text-red-light" />,
    title: "Reminders & Deadlines",
    description: "Never miss a deadline with our smart reminder system.",
  },
  {
    icon: <Cloud className="w-12 h-12 text-red-light" />,
    title: "Cloud Sync",
    description: "Access your tasks from anywhere, on any device.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

