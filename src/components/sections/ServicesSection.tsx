import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const serviceCards = [
  {
    title: "Artists & Teams",
    description: "Supporting individual artists and music teams with comprehensive mental health services.",
  },
  {
    title: "Global Tours",
    description: "On-site mental health support for touring artists and crew members worldwide.",
  },
  {
    title: "Festivals & Events",
    description: "Specialized mental health services for festival organizers and event staff.",
  },
  {
    title: "Music Companies",
    description: "Corporate wellness programs designed specifically for music industry businesses.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl lg:text-5xl font-black text-gray-900 mb-16"
        >
          OUR SERVICES
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="group relative h-[500px] overflow-hidden rounded-xl border-0 shadow-lg cursor-pointer transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 opacity-90"></div>
                <CardContent className="relative h-full flex flex-col justify-end p-6 text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold mb-2"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                    className="text-sm opacity-90 mb-4"
                  >
                    {card.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-sm font-semibold"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
