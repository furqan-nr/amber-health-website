import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const serviceCards = [
  {
    title: "Artists & Teams",
    description: "Supporting individual artists and music teams with comprehensive mental health services.",
    image: "/image.png"
  },
  {
    title: "Global Tours", 
    description: "On-site mental health support for touring artists and crew members worldwide.",
    image: "/image-1.png"
  },
  {
    title: "Festivals & Events",
    description: "Specialized mental health services for festival organizers and event staff.",
    image: "/image-2.png"
  },
  {
    title: "Music Companies",
    description: "Corporate wellness programs designed specifically for music industry businesses.",
    image: "/image-3.png"
  },
];

export const HeroSection = () => {
  return (
    <section id="home" className="relative py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 w-full max-w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20 w-full max-w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6 lg:space-y-8 relative z-20 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-gray-900 leading-tight"
            >
              MENTAL HEALTH & WELLNESS SOLUTIONS FOR MUSIC INDUSTRY.
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 tracking-wide"
            >
              Built and delivered by those with insider experience.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <Button className="bg-gradient-to-r from-yellow-400 to-red-500 text-white hover:opacity-90 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-full w-full sm:w-auto max-w-sm sm:max-w-none hover-scale">
                Explore Our Research
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end relative z-20"
          >
            {/* Floating circles for decoration */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-circle hero-circle-1 w-20 h-20 bg-yellow-400 rounded-full opacity-30 absolute top-0 right-0"
            ></motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="hero-circle hero-circle-2 w-16 h-16 bg-red-400 rounded-full opacity-25 absolute bottom-0 left-0"
            ></motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="hero-circle hero-circle-3 w-12 h-12 bg-orange-400 rounded-full opacity-20 absolute top-10 left-10"
            ></motion.div>
          </motion.div>
        </div>

        {/* Services Content */}
        <div className="relative z-20 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center"
          >
            OUR SERVICES
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full max-w-full">
            {serviceCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="group relative min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] xl:min-h-[450px] overflow-hidden rounded-xl border-0 shadow-lg cursor-pointer transition-transform duration-300">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${card.image})` }}
                  ></div>
                  {/* Orange Gradient Overlay with 50% opacity */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-50"></div>
                  <CardContent className="relative h-full flex flex-col justify-end p-3 sm:p-4 md:p-6 text-white z-10">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">{card.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base opacity-90 mb-2 sm:mb-3 md:mb-4 line-clamp-3">{card.description}</p>
                    <div className="flex items-center text-xs sm:text-sm font-semibold hover-float">
                      Learn more
                      <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
