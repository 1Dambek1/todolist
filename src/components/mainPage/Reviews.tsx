import { motion } from "motion/react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Designer",
    content: "TodoMaster has completely transformed how I manage my projects. It's intuitive and keeps me on track!",
  },
  {
    name: "Mike Chen",
    role: "Software Engineer",
    content: "I've tried many todo apps, but TodoMaster is by far the best. The cloud sync feature is a game-changer.",
  },
  {
    name: "Emily Davis",
    role: "Marketing Manager",
    content: "TodoMaster has boosted my team's productivity. We love how easy it is to collaborate on tasks.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">

                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

