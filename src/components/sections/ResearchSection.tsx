import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const ResearchSection = () => {
  return (
    <section id="research" className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-yellow-400 to-red-500 text-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-3xl border-0 hover:scale-105 transition-transform duration-300">
            <CardContent className="space-y-4 sm:space-y-6 lg:space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black leading-tight text-center lg:text-left"
              >
                WE'VE CONDUCTED THE MOST COMPREHENSIVE RESEARCH EVER ON THE
                MUSIC INDUSTRY'S MENTAL HEALTH, AND WE'RE JUST GETTING STARTED.
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-start"
              >
                <Button className="bg-white text-gray-900 hover:bg-gray-100 text-sm sm:text-base lg:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-full w-full sm:w-auto max-w-sm sm:max-w-none">
                  Explore Our Research
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
