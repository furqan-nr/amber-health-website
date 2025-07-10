import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dr. Chayim Newman",
    title: "Psychologist",
    description: "Licensed psychologist with extensive experience in the music industry.",
    image: "/chayim.png"
  },
  {
    name: "Zack Borer",
    title: "Psychotherapist, LMFT",
    description: "Licensed Marriage and Family Therapist specializing in industry professionals.",
    image: "/zack.png"
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with fade-in-up animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center lg:text-left"
        >
          HEALING FROM THE INSIDE
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* First paragraph with slide-in-left animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 lg:space-y-6"
          >
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 leading-relaxed">
              Founded in 2020 by Dr. Chayim Newman and Zack Borer as an expansion
              of their work with music industry professionals, Amber Health
              provides comprehensive, evidence-based mental health services for
              all sectors of the music industry, highlighting the human experience
              of those who work in it.
            </p>
          </motion.div>
          {/* Second paragraph with slide-in-right animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 lg:space-y-6"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              The Amber Health team consists of licensed professionals: mental
              health clinicians, certified trainers, nutritionists/dietitians and
              health experts, all who have spent extensive time within the music
              industry and understand its unique environment.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="group relative min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] overflow-hidden rounded-xl border-0 shadow-lg transition-all duration-300 ease-out transform hover:shadow-2xl">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
                {/* Orange Gradient Overlay with hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-50 group-hover:opacity-40 transition-opacity duration-300"></div>
                <CardContent className="relative h-full flex flex-col justify-end p-4 sm:p-6 lg:p-8 text-white z-10 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 transform transition-all duration-300 group-hover:scale-105"
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.6 }}
                    viewport={{ once: true }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 group-hover:text-orange-100"
                  >
                    {member.title}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.8 }}
                    viewport={{ once: true }}
                    className="text-xs sm:text-sm opacity-90 leading-relaxed transition-opacity duration-300 group-hover:opacity-100"
                  >
                    {member.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
