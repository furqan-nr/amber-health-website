import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Our partnership with Amber Health has been a game-changer for our organization. Their unwavering commitment to mental health initiatives has made a significant impact on our leadership, teams, and employees, and their services have enabled our people to achieve greater happiness and wellness at work and beyond. We couldn't be more grateful for their invaluable support.",
    name: "Shaun Clair",
    title: "CEO",
  },
  {
    quote:
      "Our partnership with Amber Health allows us to prioritize mental health and wellness for our Festivals' artists, crew, and staff. Together, we provide resources on-site that everyone carries with them well after they leave us. We consider them a critical extension of our own team!",
    name: "Kira Karbocus",
    title: "CFO Newport Festivals",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4"
          >
            WHAT CLIENTS SAY
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-gray-900 mb-3 sm:mb-4 lg:mb-8"
          >
            ABOUT OUR SERVICES
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 max-w-4xl mx-auto"
          >
            Amber Health is backed by groundbreaking research and real-world clinical results:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="p-4 sm:p-6 lg:p-8 bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0 space-y-3 sm:space-y-4 lg:space-y-6">
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                    viewport={{ once: true }}
                    className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg"
                  >
                    "{testimonial.quote}"
                  </motion.blockquote>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 1.0 }}
                    viewport={{ once: true }}
                    className="space-y-1"
                  >
                    <p className="font-black text-gray-900 text-sm sm:text-base lg:text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                      {testimonial.title}
                    </p>
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
