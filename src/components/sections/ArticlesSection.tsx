import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Presenting Evelyn Burke live in London UK",
    image: "/marcela.png"
  },
  {
    title: "Presenting Evelyn Burke live in London UK",
    image: "/aditya.png"
  },
  {
    title: "Presenting Evelyn Burke live in London UK",
    image: "/joshua.png"
  },
];

export const ArticlesSection = () => {
  return (
    <section id="articles" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with fade-in-up animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-8 sm:mb-12 lg:mb-16 text-center"
        >
          OUR LATEST ARTICLES
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <Card className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-500 transform cursor-pointer">
                {/* Background Image with zoom effect */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  className="h-40 sm:h-48 md:h-60 lg:h-80 bg-cover bg-center bg-no-repeat overflow-hidden"
                  style={{ backgroundImage: `url(${article.image})` }}
                ></motion.div>
                <CardContent className="p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 md:space-y-4 bg-white group-hover:bg-gray-50 transition-colors duration-300">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors duration-300"
                  >
                    {article.title}
                  </motion.h3>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-900 font-semibold hover:text-orange-600 transition-colors duration-300 text-sm sm:text-base transform"
                  >
                    Read More
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 transition-transform duration-300" />
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
